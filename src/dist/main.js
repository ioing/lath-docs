/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./docs/components/code-highlight/Prism.js":
/*!*************************************************!*\
  !*** ./docs/components/code-highlight/Prism.js ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
/* **********************************************
     Begin prism-core.js
********************************************** */

var _self = {};

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

var Prism = (function(){

// Private helper vars
var lang = /\blang(?:uage)?-(\w+)\b/i;
var uniqueId = 0;

var _ = _self.Prism = {
	util: {
		encode: function (tokens) {
			if (tokens instanceof Token) {
				return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
			} else if (_.util.type(tokens) === 'Array') {
				return tokens.map(_.util.encode);
			} else {
				return tokens.replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
				// return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
			}
		},

		type: function (o) {
			return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
		},

		objId: function (obj) {
			if (!obj['__id']) {
				Object.defineProperty(obj, '__id', { value: ++uniqueId });
			}
			return obj['__id'];
		},

		// Deep clone a language definition (e.g. to extend it)
		clone: function (o) {
			var type = _.util.type(o);

			switch (type) {
				case 'Object':
					var clone = {};

					for (var key in o) {
						if (o.hasOwnProperty(key)) {
							clone[key] = _.util.clone(o[key]);
						}
					}

					return clone;

				case 'Array':
					// Check for existence for IE8
					return o.map && o.map(function(v) { return _.util.clone(v); });
			}

			return o;
		}
	},

	languages: {
		extend: function (id, redef) {
			var lang = _.util.clone(_.languages[id]);

			for (var key in redef) {
				lang[key] = redef[key];
			}

			return lang;
		},

		/**
		 * Insert a token before another token in a language literal
		 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
		 * we cannot just provide an object, we need anobject and a key.
		 * @param inside The key (or language id) of the parent
		 * @param before The key to insert before. If not provided, the function appends instead.
		 * @param insert Object with the key/value pairs to insert
		 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
		 */
		insertBefore: function (inside, before, insert, root) {
			root = root || _.languages;
			var grammar = root[inside];

			if (arguments.length == 2) {
				insert = arguments[1];

				for (var newToken in insert) {
					if (insert.hasOwnProperty(newToken)) {
						grammar[newToken] = insert[newToken];
					}
				}

				return grammar;
			}

			var ret = {};

			for (var token in grammar) {

				if (grammar.hasOwnProperty(token)) {

					if (token == before) {

						for (var newToken in insert) {

							if (insert.hasOwnProperty(newToken)) {
								ret[newToken] = insert[newToken];
							}
						}
					}

					ret[token] = grammar[token];
				}
			}

			// Update references in other language definitions
			_.languages.DFS(_.languages, function(key, value) {
				if (value === root[inside] && key != inside) {
					this[key] = ret;
				}
			});

			return root[inside] = ret;
		},

		// Traverse a language definition with Depth First Search
		DFS: function(o, callback, type, visited) {
			visited = visited || {};
			for (var i in o) {
				if (o.hasOwnProperty(i)) {
					callback.call(o, i, o[i], type || i);

					if (_.util.type(o[i]) === 'Object' && !visited[_.util.objId(o[i])]) {
						visited[_.util.objId(o[i])] = true;
						_.languages.DFS(o[i], callback, null, visited);
					}
					else if (_.util.type(o[i]) === 'Array' && !visited[_.util.objId(o[i])]) {
						visited[_.util.objId(o[i])] = true;
						_.languages.DFS(o[i], callback, i, visited);
					}
				}
			}
		}
	},
	plugins: {},

	highlightAll: function(root, async, callback) {
		var env = {
			callback: callback,
			selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
		};

		_.hooks.run("before-highlightall", env);

		var elements = env.elements || root.querySelectorAll(env.selector);

		for (var i=0, element; element = elements[i++];) {
			_.highlightElement(element, async === true, env.callback);
		}
	},

	highlightCode: function (element, code, language, callback) {

		var grammar = _.languages[language]

		switch (language) {
			case 'html':
			case 'xml':
				code = code.replace(/\=\"\"/g, function () {
					return ''
				})

				break
		}

		element.innerHTML = _.highlight(code, grammar, language)

		callback && callback.call(element);
	},

	highlightElement: function(element, async, callback) {
		// Find language
		var language, grammar, parent = element;

		while (parent && !lang.test(parent.className)) {
			parent = parent.parentNode;
		}

		if (parent) {
			language = (parent.className.match(lang) || [,''])[1];
			grammar = _.languages[language];
		}

		// Set language on the element, if not present
		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

		// Set language on the parent, for styling
		parent = element.parentNode;

		if (/pre/i.test(parent.nodeName)) {
			parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
		}

		var code = element.textContent;

		var env = {
			element: element,
			language: language,
			grammar: grammar,
			code: code
		};

		if (!code || !grammar) {
			_.hooks.run('complete', env);
			return;
		}

		_.hooks.run('before-highlight', env);

		// if (async && _self.Worker) {
		// 	var worker = new Worker(_.filename);

		// 	worker.onmessage = function(evt) {
		// 		env.highlightedCode = evt.data;

		// 		_.hooks.run('before-insert', env);

		// 		env.element.innerHTML = env.highlightedCode;

		// 		callback && callback.call(env.element);
		// 		_.hooks.run('after-highlight', env);
		// 		_.hooks.run('complete', env);
		// 	};

		// 	worker.postMessage(JSON.stringify({
		// 		language: env.language,
		// 		code: env.code,
		// 		immediateClose: true
		// 	}));
		// }
		// else {
			env.highlightedCode = _.highlight(env.code, env.grammar, env.language);

			_.hooks.run('before-insert', env);

			env.element.innerHTML = env.highlightedCode;

			callback && callback.call(element);

			_.hooks.run('after-highlight', env);
			_.hooks.run('complete', env);
		// }
	},

	highlight: function (text, grammar, language) {
		var tokens = _.tokenize(text, grammar);
		return Token.stringify(_.util.encode(tokens), language);
	},

	tokenize: function(text, grammar, language) {
		var Token = _.Token;

		var strarr = [text];

		var rest = grammar ? grammar.rest : null;

		if (rest) {
			for (var token in rest) {
				grammar[token] = rest[token];
			}

			delete grammar.rest;
		}

		tokenloop: for (var token in grammar) {
			if(!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			var patterns = grammar[token];
			patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				var pattern = patterns[j],
					inside = pattern.inside,
					lookbehind = !!pattern.lookbehind,
					greedy = !!pattern.greedy,
					lookbehindLength = 0,
					alias = pattern.alias;

				pattern = pattern.pattern || pattern;

				for (var i=0; i<strarr.length; i++) { // Don’t cache length as it changes during the loop

					var str = strarr[i];

					if (strarr.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						break tokenloop;
					}

					if (str instanceof Token) {
						continue;
					}

					pattern.lastIndex = 0;

					var match = pattern.exec(str),
					    delNum = 1;

					// Greedy patterns can override/remove up to two previously matched tokens
					if (!match && greedy && i != strarr.length - 1) {
						// Reconstruct the original text using the next two tokens
						var nextToken = strarr[i + 1].matchedStr || strarr[i + 1],
						    combStr = str + nextToken;

						if (i < strarr.length - 2) {
							combStr += strarr[i + 2].matchedStr || strarr[i + 2];
						}

						// Try the pattern again on the reconstructed text
						pattern.lastIndex = 0;
						match = pattern.exec(combStr);
						if (!match) {
							continue;
						}

						var from = match.index + (lookbehind ? match[1].length : 0);
						// To be a valid candidate, the new match has to start inside of str
						if (from >= str.length) {
							continue;
						}
						var to = match.index + match[0].length,
						    len = str.length + nextToken.length;

						// Number of tokens to delete and replace with the new match
						delNum = 3;

						if (to <= len) {
							if (strarr[i + 1].greedy) {
								continue;
							}
							delNum = 2;
							combStr = combStr.slice(0, len);
						}
						str = combStr;
					}

					if (!match) {
						continue;
					}

					if(lookbehind) {
						lookbehindLength = match[1].length;
					}

					var from = match.index + lookbehindLength,
					    match = match[0].slice(lookbehindLength),
					    to = from + match.length,
					    before = str.slice(0, from),
					    after = str.slice(to);

					var args = [i, delNum];

					if (before) {
						args.push(before);
					}



					var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias, match, greedy);

					args.push(wrapped);

					if (after) {
						args.push(after);
					}

					Array.prototype.splice.apply(strarr, args);
				}
			}
		}

		return strarr;
	},

	hooks: {
		all: {},

		add: function (name, callback) {
			var hooks = _.hooks.all;

			hooks[name] = hooks[name] || [];

			hooks[name].push(callback);
		},

		run: function (name, env) {
			var callbacks = _.hooks.all[name];

			if (!callbacks || !callbacks.length) {
				return;
			}

			for (var i=0, callback; callback = callbacks[i++];) {
				callback(env);
			}
		}
	}
};

var Token = _.Token = function(type, content, alias, matchedStr, greedy) {
	this.type = type;
	this.content = content;
	this.alias = alias;
	// Copy of the full string this token was created from
	this.matchedStr = matchedStr || null;
	this.greedy = !!greedy;
};

Token.stringify = function(o, language, parent) {
	if (typeof o == 'string') {
		return o;
	}

	if (_.util.type(o) === 'Array') {
		return o.map(function(element) {
			return Token.stringify(element, language, o);
		}).join('');
	}

	var env = {
		type: o.type,
		content: Token.stringify(o.content, language, parent),
		tag: 'span',
		classes: ['token', o.type],
		attributes: {},
		language: language,
		parent: parent
	};

	if (env.type == 'comment') {
		env.attributes['spellcheck'] = 'true';
	}

	if (o.alias) {
		var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
		Array.prototype.push.apply(env.classes, aliases);
	}

	_.hooks.run('wrap', env);

	var attributes = '';

	for (var name in env.attributes) {
		attributes += (attributes ? ' ' : '') + name + '="' + (env.attributes[name] || '') + '"';
	}

	return '<' + env.tag + ' class="' + env.classes.join(' ') + '" ' + attributes + '>' + env.content + '</' + env.tag + '>';

};

if (!_self.document) {
	if (!_self.addEventListener) {
		// in Node.js
		return _self.Prism;
	}
 	// In worker
	_self.addEventListener('message', function(evt) {
		var message = JSON.parse(evt.data),
		    lang = message.language,
		    code = message.code,
		    immediateClose = message.immediateClose;

		_self.postMessage(_.highlight(code, _.languages[lang], lang));
		if (immediateClose) {
			_self.close();
		}
	}, false);

	return _self.Prism;
}

//Get current script and highlight
var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();

if (script) {
	_.filename = script.src;

	// if (document.addEventListener && !script.hasAttribute('data-manual')) {
	// 	document.addEventListener('DOMContentLoaded', _.highlightAll);
	// }
}

return _self.Prism;

})();

if ( true && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof __webpack_require__.g !== 'undefined') {
	__webpack_require__.g.Prism = Prism;
}


/* **********************************************
     Begin prism-markup.js
********************************************** */

Prism.languages.markup = {
	'comment': /<!--[\w\W]*?-->/,
	'prolog': /<\?[\w\W]+?\?>/,
	'doctype': /<!DOCTYPE[\w\W]+?>/,
	'cdata': /<!\[CDATA\[[\w\W]*?]]>/i,
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/i,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'attr-value': {
				pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
				inside: {
					'punctuation sign': /[=]/,
					'punctuation quotes': /["']/,
					'punctuation': /[>]/,
				}
			},
			'punctuation': /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: {
					'namespace': /^[^\s>\/:]+:/
				}
			}

		}
	},
	'entity': /&#?[\da-z]{1,8};/i
};

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function(env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Prism.languages.xml = Prism.languages.markup;
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;


/* **********************************************
     Begin prism-css.js
********************************************** */

Prism.languages.css = {
	'comment': /\/\*[\w\W]*?\*\//,
	'atrule': {
		pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
		inside: {
			'rule': /@[\w-]+/
			// See rest below
		}
	},
	'url': /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
	'selector': /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
	'string': /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
	'property': /(\b|\B)[\w-]+(?=\s*:)/i,
	'important': /\B!important\b/i,
	'function': /[-a-z0-9]+(?=\()/i,
	'punctuation': /[(){};:]/
};

Prism.languages.css['atrule'].inside.rest = Prism.util.clone(Prism.languages.css);

if (Prism.languages.markup) {
	Prism.languages.insertBefore('markup', 'tag', {
		'style': {
			pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
			lookbehind: true,
			inside: Prism.languages.css,
			alias: 'language-css'
		}
	});

	Prism.languages.insertBefore('inside', 'attr-value', {
		'style-attr': {
			pattern: /\s*style=("|').*?\1/i,
			inside: {
				'attr-name': {
					pattern: /^\s*style/i,
					inside: Prism.languages.markup.tag.inside
				},
				'punctuation': /^\s*=\s*['"]|['"]\s*$/,
				'attr-value': {
					pattern: /.+/i,
					inside: Prism.languages.css
				}
			},
			alias: 'language-css'
		}
	}, Prism.languages.markup.tag);
}

/* **********************************************
     Begin prism-clike.js
********************************************** */

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
			lookbehind: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true
		}
	],
	'string': {
		pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
		lookbehind: true,
		inside: {
			punctuation: /(\.|\\)/
		}
	},
	'keyword': /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	'boolean': /\b(true|false)\b/,
	'function': /[a-z0-9_]+(?=\()/i,
	'number': /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
	'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
	'punctuation': /[{}[\];(),.:]/
};


/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
	'keyword': /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
	'number': /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i
});

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
		lookbehind: true,
		greedy: true
	}
});

Prism.languages.insertBefore('javascript', 'class-name', {
	'template-string': {
		pattern: /`(?:\\\\|\\?[^\\])*?`/,
		greedy: true,
		inside: {
			'interpolation': {
				pattern: /\$\{[^}]+\}/,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\$\{|\}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	}
});

if (Prism.languages.markup) {
	Prism.languages.insertBefore('markup', 'tag', {
		'script': {
			pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
			lookbehind: true,
			inside: Prism.languages.javascript,
			alias: 'language-javascript'
		}
	});
}

Prism.languages.js = Prism.languages.javascript;

/* **********************************************
     Begin prism-file-highlight.js
********************************************** */


(function () {
	if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
		return;
	}

	self.Prism.fileHighlight = function(pre) {

		var Extensions = {
			'js': 'javascript',
			'py': 'python',
			'rb': 'ruby',
			'ps1': 'powershell',
			'psm1': 'powershell',
			'sh': 'bash',
			'bat': 'batch',
			'h': 'c',
			'tex': 'latex'
		};

		var src = pre.getAttribute('data-src');

		var language, parent = pre;
		var lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i;
		while (parent && !lang.test(parent.className)) {
			parent = parent.parentNode;
		}

		if (parent) {
			language = (pre.className.match(lang) || [, ''])[1];
		}

		if (!language) {
			var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
			language = Extensions[extension] || extension;
		}

		var code = document.createElement('code');
		code.className = 'language-' + language;

		pre.textContent = '';

		code.textContent = 'Loading…';

		pre.appendChild(code);

		var xhr = new XMLHttpRequest();

		xhr.open('GET', src, true);

		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4) {

				if (xhr.status < 400 && xhr.responseText) {
					code.textContent = xhr.responseText;

					Prism.highlightElement(code);
				}
				else if (xhr.status >= 400) {
					code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
				}
				else {
					code.textContent = '✖ Error: File does not exist or is empty';
				}
			}
		};

		xhr.send(null);

	};

})();


/* **********************************************
     extend more
********************************************** */

(function(Prism) {
	var insideString = {
		variable: [
			// Arithmetic Environment
			{
				pattern: /\$?\(\([\s\S]+?\)\)/,
				inside: {
					// If there is a $ sign at the beginning highlight $(( and )) as variable
					variable: [{
							pattern: /(^\$\(\([\s\S]+)\)\)/,
							lookbehind: true
						},
						/^\$\(\(/,
					],
					number: /\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+(?:[Ee]-?\d+)?)\b/,
					// Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
					operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
					// If there is no $ sign at the beginning highlight (( and )) as punctuation
					punctuation: /\(\(?|\)\)?|,|;/
				}
			},
			// Command Substitution
			{
				pattern: /\$\([^)]+\)|`[^`]+`/,
				inside: {
					variable: /^\$\(|^`|\)$|`$/
				}
			},
			/\$(?:[a-z0-9_#\?\*!@]+|\{[^}]+\})/i
		],
	};

	Prism.languages.bash = {
		'shebang': {
			pattern: /^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/,
			alias: 'important'
		},
		'comment': {
			pattern: /(^|[^"{\\])#.*/,
			lookbehind: true
		},
		'string': [
			//Support for Here-Documents https://en.wikipedia.org/wiki/Here_document
			{
				pattern: /((?:^|[^<])<<\s*)(?:"|')?(\w+?)(?:"|')?\s*\r?\n(?:[\s\S])*?\r?\n\2/g,
				lookbehind: true,
				greedy: true,
				inside: insideString
			},
			{
				pattern: /(["'])(?:\\\\|\\?[^\\])*?\1/g,
				greedy: true,
				inside: insideString
			}
		],
		'variable': insideString.variable,
		// Originally based on http://ss64.com/bash/
		'function': {
			pattern: /(^|\s|;|\||&)(?:alias|apropos|apt-get|aptitude|aspell|awk|basename|bash|bc|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chmod|chown|chroot|chkconfig|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|cut|date|dc|dd|ddrescue|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|enable|env|ethtool|eval|exec|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gulp|gawk|getopts|git|grep|groupadd|groupdel|groupmod|groups|gzip|hash|head|help|hg|history|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|jobs|join|kill|killall|less|link|ln|locate|logname|logout|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|make|man|mkdir|mkfifo|mkisofs|mknod|more|most|mount|mtools|mtr|mv|mmv|nano|netstat|nice|nl|nohup|notify-send|npm|nslookup|open|op|passwd|paste|pathchk|ping|pkill|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|rename|renice|remsync|rev|rm|rmdir|rsync|screen|scp|sdiff|sed|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|sync|tail|tar|tee|test|time|timeout|times|touch|top|traceroute|trap|tr|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|uptime|useradd|userdel|usermod|users|uuencode|uudecode|v|vdir|vi|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yes|zip)(?=$|\s|;|\||&)/,
			lookbehind: true
		},
		'keyword': {
			pattern: /(^|\s|;|\||&)(?:let|:|\.|if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)(?=$|\s|;|\||&)/,
			lookbehind: true
		},
		'boolean': {
			pattern: /(^|\s|;|\||&)(?:true|false)(?=$|\s|;|\||&)/,
			lookbehind: true
		},
		'operator': /&&?|\|\|?|==?|!=?|<<<?|>>|<=?|>=?|=~/,
		'punctuation': /\$?\(\(?|\)\)?|\.\.|[{}[\];]/
	};

	var inside = insideString.variable[1].inside;
	inside['function'] = Prism.languages.bash['function'];
	inside.keyword = Prism.languages.bash.keyword;
	inside.boolean = Prism.languages.bash.boolean;
	inside.operator = Prism.languages.bash.operator;
	inside.punctuation = Prism.languages.bash.punctuation;
})(Prism);

(function (Prism) {
	Prism.languages.markdown = Prism.languages.extend('markup', {});
	Prism.languages.insertBefore('markdown', 'prolog', {
		'blockquote': {
			// > ...
			pattern: /^>(?:[\t ]*>)*/m,
			alias: 'punctuation'
		},
		'code': [
			{
				// Prefixed by 4 spaces or 1 tab
				pattern: /^(?: {4}|\t).+/m,
				alias: 'keyword'
			},
			{
				// `code`
				// ``code``
				pattern: /``.+?``|`[^`\n]+`/,
				alias: 'keyword'
			}
		],
		'title': [
			{
				// title 1
				// =======

				// title 2
				// -------
				pattern: /\w+.*(?:\r?\n|\r)(?:==+|--+)/,
				alias: 'important',
				inside: {
					punctuation: /==+$|--+$/
				}
			},
			{
				// # title 1
				// ###### title 6
				pattern: /(^\s*)#+.+/m,
				lookbehind: true,
				alias: 'important',
				inside: {
					punctuation: /^#+|#+$/
				}
			}
		],
		'hr': {
			// ***
			// ---
			// * * *
			// -----------
			pattern: /(^\s*)([*-])([\t ]*\2){2,}(?=\s*$)/m,
			lookbehind: true,
			alias: 'punctuation'
		},
		'list': {
			// * item
			// + item
			// - item
			// 1. item
			pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
			lookbehind: true,
			alias: 'punctuation'
		},
		'url-reference': {
			// [id]: http://example.com "Optional title"
			// [id]: http://example.com 'Optional title'
			// [id]: http://example.com (Optional title)
			// [id]: <http://example.com> "Optional title"
			pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
			inside: {
				'variable': {
					pattern: /^(!?\[)[^\]]+/,
					lookbehind: true
				},
				'string': /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
				'punctuation': /^[\[\]!:]|[<>]/
			},
			alias: 'url'
		},
		'bold': {
			// **strong**
			// __strong__

			// Allow only one line break
			pattern: /(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
			lookbehind: true,
			inside: {
				'punctuation': /^\*\*|^__|\*\*$|__$/
			}
		},
		'italic': {
			// *em*
			// _em_

			// Allow only one line break
			pattern: /(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
			lookbehind: true,
			inside: {
				'punctuation': /^[*_]|[*_]$/
			}
		},
		'url': {
			// [example](http://example.com "Optional title")
			// [example] [id]
			pattern: /!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,
			inside: {
				'variable': {
					pattern: /(!?\[)[^\]]+(?=\]$)/,
					lookbehind: true
				},
				'string': {
					pattern: /"(?:\\.|[^"\\])*"(?=\)$)/
				}
			}
		}
	});

	Prism.languages.markdown['bold'].inside['url'] = Prism.util.clone(Prism.languages.markdown['url']);
	Prism.languages.markdown['italic'].inside['url'] = Prism.util.clone(Prism.languages.markdown['url']);
	Prism.languages.markdown['bold'].inside['italic'] = Prism.util.clone(Prism.languages.markdown['italic']);
	Prism.languages.markdown['italic'].inside['bold'] = Prism.util.clone(Prism.languages.markdown['bold']);
})(Prism)

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_self.Prism);

/***/ }),

/***/ "./docs/components/app-logo/template.html":
/*!************************************************!*\
  !*** ./docs/components/app-logo/template.html ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<style>\n  @import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");\n  .g-container {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    margin-top: 10px;\n  }\n\n  .word {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    font-family: \"Montserrat\", sans-serif;\n    color: rgba(255, 255, 255, 0.7);\n    font-size: 18px;\n    font-weight: bold;\n    -webkit-font-smoothing: antialiased;\n  }\n</style>\n\n<div class=\"g-container\">\n  <div class=\"word\">Lath</div>\n</div>"

/***/ }),

/***/ "./docs/components/app-nav/template.html":
/*!***********************************************!*\
  !*** ./docs/components/app-nav/template.html ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "<style>\n  #header {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 48px;\n    z-index: 9999999;\n    box-sizing: border-box;\n    padding: 15px;\n    background: var(--background, rgba(0, 0, 0, 0.8));\n    -webkit-backdrop-filter: saturate(180%) blur(20px);\n    backdrop-filter: saturate(180%) blur(20px);\n    display: flex;\n  }\n  #logo {\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    text-align: center;\n    color: var(--mainColor, #fff);\n  }\n  h2 {\n    color: var(--mainColor, #fff);\n    margin-top: 0;\n  }\n  h4 {\n    color: var(--mainColor, #fff);\n  }\n  .menu-list {\n    padding: 80px 30px;\n    max-width: 500px;\n    margin: 0 auto;\n  }\n  .item-list {\n    padding: 0;\n  }\n  .item-list li {\n    transition: opacity .3091s cubic-bezier(0.32, 0.08, 0.24, 1) .03s,transform .3455s cubic-bezier(0.32, 0.08, 0.24, 1) .02s,-webkit-transform .3455s cubic-bezier(0.32, 0.08, 0.24, 1) .02s;\n  }\n  .item-list a {\n    color: #f5f5f7;\n    font-size: 17px;\n    line-height: 2.7;\n    font-weight: 400;\n    letter-spacing: -.022em;\n    font-family: \"SF Pro Text\",\"Myriad Set Pro\",\"SF Pro Icons\",\"Helvetica Neue\",\"Helvetica\",\"Arial\",sans-serif;\n    height: 44px;\n    opacity: .8;\n    text-decoration: none;\n    white-space: nowrap;\n    transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);\n    font-synthesis: none;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    direction: ltr;\n    text-align: left;\n    border-bottom: 0.5px solid rgba(255, 255, 255, 0.2);\n    display: block;\n    width: 100%;\n  }\n</style>\n\n<div id=\"header\">\n  <menu-icon id=\"menu-icon\"></menu-icon>\n  <div id=\"logo\"><app-logo></app-logo></div>\n</div>\n<menu-list id=\"menu-list\">\n  <div slot=\"list\">\n    <div class=\"menu-list\">\n      <h2>API</h2>\n      <h4>Application</h4>\n      <ul class=\"item-list\">\n        <li>\n          <a href=\"?id=applicationTo#doc\">to</a>\n        </li>\n        <li>\n          <a href=\"?id=applicationPushWindow#doc\">pushWindow</a>\n        </li>\n        <li>\n          <a href=\"?id=applicationActiveModule#doc\">activeModule</a>\n        </li>\n        <li>\n          <a href=\"?id=applicationPreActiveModule#doc\">preActiveModule</a>\n        </li>\n        <li>\n          <a href=\"?id=applicationExists#doc\">exists</a>\n        </li>\n        <li>\n          <a href=\"?id=applicationUpdateSafeArea#doc\">updateSafeArea</a>\n        </li>\n        <li>\n          <a href=\"?id=applicationUpdateGlobalCSSVariables#doc\">updateGlobalCSSVariables</a>\n        </li>\n        <li>\n          <a href=\"?id=applicationInstall#doc\">install</a>\n        </li>\n        <li>\n          <a href=\"?id=applicationStart#doc\">start</a>\n        </li>\n        <li>\n          <a href=\"?id=applicationEvents#doc\">events</a>\n        </li>\n      </ul>\n      <h4>Module</h4>\n      <ul class=\"item-list\">\n        <li>\n          <a href=\"?id=modulePrefetch#doc\">prefetch</a>\n        </li>\n        <li>\n          <a href=\"?id=moduleEvents#doc\">events</a>\n        </li>\n        <li>\n          <a href=\"?id=moduleSameOrigin#doc\">sameOrigin</a>\n        </li>\n        <li>\n          <a href=\"?id=moduleLevel#doc\">level</a>\n        </li>\n        <li>\n          <a href=\"?id=moduleViewType#doc\">viewType</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</menu-list>\n"

/***/ }),

/***/ "./docs/components/code-highlight/template.html":
/*!******************************************************!*\
  !*** ./docs/components/code-highlight/template.html ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<style>\n  .code-block {\n    overflow: auto;\n    filter: invert(1);\n  }\n  /* prism.css 未加在完的预览样式 */\n  :not(pre)>code[class*=\"language-\"],\n  pre[class*=\"language-\"] {\n    width: 100%;\n    min-height: 23px;\n    background: #f8f8f8;\n  }\n  code[class*=\"language-\"],\n  pre[class*=\"language-\"] {\n    color: #333;\n    background: none;\n    font-family: Consolas, \"Liberation Mono\", Menlo, Courier, monospace;\n    text-align: left;\n    word-spacing: normal;\n    word-break: normal;\n    word-wrap: normal;\n    line-height: 20px;\n    font-size: 13px;\n    font-weight: normal;\n    tab-size: 4;\n    hyphens: none;\n    max-height: 99999px;\n  }\n\n  pre[class*=\"language-\"]::selection, pre[class*=\"language-\"] ::selection,\n  code[class*=\"language-\"]::selection, code[class*=\"language-\"] ::selection {\n    background: #ddd;\n  }\n\n  /* Code blocks */\n  pre[class*=\"language-\"] {\n    display: inline-block;\n    padding: 6px 12px;\n  }\n\n  :not(pre) > code[class*=\"language-\"],\n  pre[class*=\"language-\"] {\n    background: none;\n  }\n\n  /* Inline code */\n  :not(pre) > code[class*=\"language-\"] {\n    padding: 1px;\n    border-radius: 4px;\n    white-space: normal;\n  }\n\n  .token.script.language-javascript {\n    tab-size: 4;\n  }\n  .token.tag {\n    tab-size: 0;\n  }\n\n  .token.comment,\n  .token.prolog,\n  .token.doctype,\n  .token.cdata {\n    color: slategray;\n  }\n\n  .namespace {\n    opacity: .7;\n  }\n\n  .token.property,\n  .token.operator,\n  .token.tag,\n  .token.constant,\n  .token.symbol,\n  .token.deleted {\n    color: #003399;\n  }\n\n  .token.punctuation {\n    color: #333;\n  }\n\n  .token.tag > .token.punctuation {\n    color: #003399;\n  }\n\n  .token.number,\n  .token.boolean {\n    color: #ed143d;\n  }\n\n  .token.selector,\n  .token.attr-name,\n  .token.char,\n  .token.builtin,\n  .token.inserted {\n    color: #009999;\n  }\n\n  .token.string,\n  .token.entity,\n  .token.url,\n  .language-css .token.string,\n  .style .token.string {\n    color: #ed143d;\n  }\n\n  .token.atrule,\n  .token.attr-value,\n  .token.keyword {\n    color: #ed143d;\n  }\n\n  .token.attr-value .punctuation.sign {\n    color: #009999;\n  }\n\n  .token.attr-value .punctuation.quotes {\n    color: #ed143d;\n  }\n\n  .token.function {\n    color: #003399;\n  }\n\n  .token.regex,\n  .token.important,\n  .token.variable {\n    color: #fb2a70;\n  }\n\n  .token.important,\n  .token.bold {\n    font-weight: bold;\n  }\n  .token.italic {\n    font-style: italic;\n  }\n\n  .token.entity {\n    cursor: help;\n  }\n</style>\n\n<div class=\"code-block\">\n  <pre id=\"code\" class=\"language-js\">\n  </pre>\n</div>\n"

/***/ }),

/***/ "./docs/components/menu-icon/template.html":
/*!*************************************************!*\
  !*** ./docs/components/menu-icon/template.html ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "<style>\n:host {\n  width: 15px;\n}\n\n#m {\n  margin: 0;\n  width: inherit;\n  position: relative;\n  display: inline-block;\n  -webkit-transform: rotate(0deg);\n  -moz-transform: rotate(0deg);\n  -o-transform: rotate(0deg);\n  transform: rotate(0deg);\n  -webkit-transition: 0.5s ease-in-out;\n  -moz-transition: 0.5s ease-in-out;\n  -o-transition: 0.5s ease-in-out;\n  transition: 0.5s ease-in-out;\n  cursor: var(--menu-button-cursor, default);\n  transition: all 0.2s ease-in-out;\n  -webkit-tap-highlight-color: transparent;\n  --menu-button-color: #fff;\n  opacity: 0.8;\n}\n\n/* this trick makes the height 75% of the width (4:3 ratio) */\n#m:after {\n  padding-top: 75%;\n  display: block;\n  content: \"\";\n}\n\n@media (hover: hover) {\n  :host(:hover) {\n    opacity: 0.75;\n  }\n}\n\n#m span {\n  display: block;\n  position: absolute;\n  height: 1px;\n  width: 100%;\n  background: var(--menu-button-color, #000000);\n  border-radius: 0.5px;\n  opacity: 1;\n  left: 0;\n  -webkit-transform: rotate(0deg);\n  -moz-transform: rotate(0deg);\n  -o-transform: rotate(0deg);\n  transform: rotate(0deg);\n  -webkit-transition: transform .1806s cubic-bezier(0.04, 0.04, 0.12, 0.96), -webkit-transform .1806s cubic-bezier(0.04, 0.04, 0.12, 0.96);\n  -moz-transition: transform .1806s cubic-bezier(0.04, 0.04, 0.12, 0.96);\n  -o-transition: transform .1806s cubic-bezier(0.04, 0.04, 0.12, 0.96);\n  transition: transform .1806s cubic-bezier(0.04, 0.04, 0.12, 0.96);\n\n}\n\n#m span:nth-child(1) {\n  top: 0%;\n}\n\n#m span:nth-child(2),\n#m span:nth-child(3) {\n  top: 40%;\n}\n\n#m span:nth-child(4) {\n  top: 80%;\n}\n\n:host([open]) #m span:nth-child(1) {\n  top: 40%;\n  width: 0%;\n  left: 50%;\n}\n\n:host([open]) #m span:nth-child(2) {\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  -o-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n\n:host([open]) #m span:nth-child(3) {\n  -webkit-transform: rotate(-45deg);\n  -moz-transform: rotate(-45deg);\n  -o-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\n\n:host([open]) #m span:nth-child(4) {\n  top: 40%;\n  width: 0%;\n  left: 50%;\n}\n</style>\n\n<div id='m'>\n  <span></span>\n  <span></span>\n  <span></span>\n  <span></span>\n</div>\n"

/***/ }),

/***/ "./docs/components/menu-list/template.html":
/*!*************************************************!*\
  !*** ./docs/components/menu-list/template.html ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "<style>\n:host {\n  width: 100%;\n}\n\n#wrapper {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 0;\n  width: 100vw;\n  background: rgba(0, 0, 0, 0.8);\n  z-index: 999999;\n  transition: background .36s cubic-bezier(0.32, 0.08, 0.24, 1), height .56s cubic-bezier(0.52, 0.16, 0.24, 1);\n  overflow-y: auto;\n}\n\n/* @media (prefers-color-scheme: dark) {\n  #wrapper {\n    background: rgba(0, 0, 0, 0.8);\n  }\n} */\n\n:host([open]) #wrapper {\n  background: rgba(0, 0, 0, 1);\n  height: 100vh;\n}\n</style>\n\n<div id='wrapper'>\n  <slot name='list'></slot>\n</div>\n"

/***/ }),

/***/ "./docs/doc/html.html":
/*!****************************!*\
  !*** ./docs/doc/html.html ***!
  \****************************/
/***/ ((module) => {

module.exports = "<style>\n  #header {\n    position: fixed;\n    height: 40px;\n    top: 0;\n    left: 0;\n    right: 0;\n    padding-top: calc(20px + constant(safe-area-inset-top));\n    padding-top: calc(20px + env(safe-area-inset-top));\n    background-color: rgba(0, 0, 0, .5);\n    backdrop-filter: saturate(180%) blur(20px);\n    z-index: 99;\n    opacity: 0;\n    transition: opacity .1s ease;\n  }\n  .header-inner {\n    display: flex;\n    max-width: 500px;\n    margin: 0 auto;\n    padding: 0 20px;\n  }\n  .placeholder {\n    width: 100%;\n    height: calc(50px + constant(safe-area-inset-top));\n    height: calc(50px + env(safe-area-inset-top));\n  }\n  .back-btn {\n    display: flex;\n    height: 21px;\n    cursor: pointer;\n  }\n  .back-icon {\n    width: 21px;\n    height: 21px;\n    background-image: url(\"data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0nMTJweCcgaGVpZ2h0PScyMnB4JyB2aWV3Qm94PScwIDAgMTIgMjInIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+PHRpdGxlPlBhdGg8L3RpdGxlPjxnIGlkPSdTeW1ib2xzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz48ZyBpZD0nT3ZlcnJpZGVzL05hdmlnYXRpb24tQmFyL0xlZnQvQmFjay1CdXR0b24nIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC05LjAwMDAwMCwgLTExLjAwMDAwMCknIGZpbGw9JyMwMDdBRkYnIGZpbGwtcnVsZT0nbm9uemVybyc+PGcgaWQ9J1Bpbi1MZWZ0JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg5LjAwMDAwMCwgMTEuNTAwMDAwKSc+PHBhdGggZD0nTTMuNjIxMzIwMzQsMTAuNSBMMTEuNTYwNjYwMiwyLjU2MDY2MDE3IEMxMi4xNDY0NDY2LDEuOTc0ODczNzMgMTIuMTQ2NDQ2NiwxLjAyNTEyNjI3IDExLjU2MDY2MDIsMC40MzkzMzk4MjggQzEwLjk3NDg3MzcsLTAuMTQ2NDQ2NjA5IDEwLjAyNTEyNjMsLTAuMTQ2NDQ2NjA5IDkuNDM5MzM5ODMsMC40MzkzMzk4MjggTDAuNDM5MzM5ODI4LDkuNDM5MzM5ODMgQy0wLjE0NjQ0NjYwOSwxMC4wMjUxMjYzIC0wLjE0NjQ0NjYwOSwxMC45NzQ4NzM3IDAuNDM5MzM5ODI4LDExLjU2MDY2MDIgTDkuNDM5MzM5ODMsMjAuNTYwNjYwMiBDMTAuMDI1MTI2MywyMS4xNDY0NDY2IDEwLjk3NDg3MzcsMjEuMTQ2NDQ2NiAxMS41NjA2NjAyLDIwLjU2MDY2MDIgQzEyLjE0NjQ0NjYsMTkuOTc0ODczNyAxMi4xNDY0NDY2LDE5LjAyNTEyNjMgMTEuNTYwNjYwMiwxOC40MzkzMzk4IEwzLjYyMTMyMDM0LDEwLjUgWicgaWQ9J1BhdGgnPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz4=\");\n    background-size: contain;\n    background-repeat: no-repeat;\n    cursor: pointer;\n  }\n  .back-text {\n    line-height: 23px;\n    font-size: 17px;\n    color: #007AFF;\n  }\n  .doc {\n    margin: 0 auto;\n    padding: 0 20px;\n    max-width: 500px;\n    color: var(--mainColor, #fff);\n  }\n  .doc-title {\n    font-size: 17px;\n    margin-bottom: 20px;\n    position: fixed;\n    font-weight: bold;\n    top: calc(20px + constant(safe-area-inset-top));\n    top: calc(20px + env(safe-area-inset-top));\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: 110;\n  }\n  .doc-text {\n    color: color(--mainColor .5);\n  }\n  .doc-code {\n    margin: 12px 0;\n    padding: 4px 12px;\n    border-radius: 10px;\n    background-color:rgba(255, 255, 255, 0.15);\n  }\n  p {\n    color: #999;\n    font-size: 15px;\n  }\n  small {\n    color: #555;\n  }\n  b.excl {\n    background: #ed143d;\n    border-radius: 4px;\n    padding: 0 7px;\n    color: #fff;\n    font-size: 13px;\n    font-weight: 600;\n  }\n</style>\n<div class=\"placeholder\"></div>\n<div class=\"doc\">\n  <div id=\"header\">\n    <div class=\"header-inner\">\n      <div class=\"back-btn\" onclick=\"javascript: history.back()\">\n        <div class=\"back-icon\"></div>\n        <span class=\"back-text\">列表</span>\n      </div>\n    </div>\n  </div>\n\n  <section id=\"page-content\"></section>\n\n  <template id=\"install\">\n    <div class=\"doc-title\">Install</div>\n    <p>Use npm install</p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"bash\">\n        $ npm install lath --save\n      </code-highlight>\n    </div>\n    <br />\n    <p><small>荐：使用 Typescript 进行开发</small></p>\n  </template>\n\n  <template id=\"start\">\n    <div class=\"doc-title\">Start</div>\n    <p>应用启动前须进行模块配置。</p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        import { application } from 'lath'\n        // 配置模块\n        application.setting({\n          modules: {\n            frameworks: {...},\n            home: () => {\n              return new Promise(async (resolve, reject) => {\n                import('../home').then(resolve).catch(reject)\n              })\n            }\n          }\n        })\n\n        // 启动 app\n        application.start()\n      </code-highlight>\n    </div>\n    <br />\n    <p>执行 satrt 命令以启动应用。</p>\n  </template>\n\n  <template id=\"title\">\n    <div class=\"doc-title\">Title</div>\n    <p>模块的标题，在页面切换时会体现在文档标题上。</p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: 'Home Page'\n          }\n        }\n      </code-highlight>\n    </div>\n    <br />\n    <p><small>注：frameworks 与 system 类型模块可无需定义。</small></p>\n  </template>\n\n  <template id=\"source\">\n    <div class=\"doc-title\">Source</div>\n    <p>定义模块的 HTML 源代码，可进行两种方式的定义，选其中一种即可。</p>\n    <p><small>源码模式</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: 'Home Page',\n            source: {\n              html: `\n                &lt;html lang=\"en\">\n                  &lt;head>&lt;/head>\n                  &lt;body>\n                    { anything }\n                  &lt;/body>\n                &lt;/html>\n              `\n            }\n          }\n        }\n      </code-highlight>\n    </div>\n    <p><small>链接模式</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: 'Home Page',\n            source: {\n              src: 'http://yoursite.com'\n            }\n          }\n        }\n      </code-highlight>\n    </div>\n    <p><small>注：使用链接模式时需符合同源策略，否者某些能力将无法开启，比如 Capture、Apply、Inject 等。</small></p>\n  </template>\n\n  <template id=\"index\">\n    <div class=\"doc-title\">Index</div>\n    <p><b class=\"excl\">frameworks 类型专有</b></p>\n    <p>定义应用的默认模块入口。</p>\n    <p><small>*value: string</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            index: 'home'\n          }\n        }\n      </code-highlight>\n    </div>\n    <br />\n    <p>当应用启动时将首先初始化模块名为 “home” 的模块内容。</p>\n    <p><small>注：在框架模块 (即 [rel = frameworks]) 中必须指定 index 首页模块，除非你期望由框架模块来承载首屏内容。</small></p>\n  </template>\n\n  <template id=\"rel\">\n    <div class=\"doc-title\">Rel</div>\n    <p>定义模块的类型。</p>\n    <p>模块分为三种类型，“module”、“framework”、“system”</p>\n    <p><small>*value: 'module' | 'frameworks' | 'system'</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            rel: 'module'\n          }\n        }\n      </code-highlight>\n    </div>\n    <br />\n    <p>1. “system” 类型的模块是放置在 Main Tree 下的，切不随着任何的模块路由而改变的，比如 app 中的辅助浮标、日期/信号头部栏、系统下拉通知等等。比如下面视频中的 AssistiveTouch 功能就是一个“system” 类型的模块的功能。</p>\n    <p>2. “framework” 类型则一般是具有框架模式的模块，比如淘宝首页中包含底部导航栏的部分，该导航栏是多个页面所共有的，所以它可以是一个框架层的模块，框架层的模块相对系统层的模块的区别是有着更低层的级别，比如窗口切换的时候框架层可以随之切换，而系统层则不会随之切换。</p>\n    <p>3. “module” 类型则是最常见的类型，我们可以理解为一个纯粹的页面，同时模块类型还分为自由类型和嵌入类型，后面的 [free] 配置中会讲到。</p>\n    <p><small>注：“framework” 框架类型的模块是唯一的。未定义该值时默认为 module 类型。</small></p>\n  </template>\n\n  <template id=\"free\">\n    <div class=\"doc-title\">Free</div>\n    <p>定义模块的窗口类型。</p>\n    <p><small>value: boolean</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            free: true\n          }\n        }\n      </code-highlight>\n    </div>\n    <br />\n    <p>该设置下模块以“全屏模式”运行，即不受框架模块约束，假设框架模块中带有 tab 能力时，该模块设置 free 为 true，此时模块将覆盖框架层运行，反之模块则会在框架层之内运行。</p>\n  </template>\n\n  <template id=\"level\">\n    <div class=\"doc-title\">Level</div>\n    <p>对模块的显示层级进行定义。</p>\n    <p><small>value: number</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: 'Home Page',\n            level: 1\n          }\n        }\n      </code-highlight>\n    </div>\n    <br />\n    <p>一般首页模块的层级为 0，根据页面访问层级逐渐增大。</p>\n    <p>模块层级关系还将反应在转场动画上，从小到大为正向动画，反之从大到小时是逆向动画</p>\n    <p>当历史回退到层级为 0 的模块时，会触发 singleLock 配置相关内容</p>\n    <br />\n    <p><small>注：同层级模块间的动画效果会被关闭。</small></p>\n  </template>\n\n  <template id=\"color\">\n    <div class=\"doc-title\">Color</div>\n    <p>定义模块的窗口背景色。</p>\n    <p><small>value: string</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            free: true,\n            color: '#bd243f'\n          }\n        }\n      </code-highlight>\n    </div>\n    <br />\n    <p>设置模块的默认背景色可以进行更加无缝化的过渡，当转场开始时，模块可能还处于加载状态，此时会以设定背景色来填充模块区域。</p>\n    <p><small>注：请确保背景色与模块主色一致。未设置时，默认值会根据浏览器设置的颜色模式自动填充 黑色/白色。</small></p>\n    <br />\n    <p>点击按钮查看效果 <button onclick=\"javascript: window.parent.postMessage({ action: 'to', data: { module: 'empty' }})\">Preview</button></p>\n  </template>\n\n  <template id=\"preset\">\n    <div class=\"doc-title\">Animate Effect</div>\n    <p>定义模块的窗口动画效果为预置的动画效果。</p>\n    <p><small>value: 'slide' ｜ 'slide-left' | 'slideLeft' | 'slideRight' | 'slide-right' | 'slideUp' | 'slide-up' | 'slideDown' | 'slide-down' | 'flip' | 'flipDown' | 'flip-down' | 'flip-up' | 'flipUp' | 'flipRight' | 'flip-right' | 'flipLeft' | 'flip-left' | 'zoom'</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            free: true,\n            color: '#000',\n            animation: 'slide'\n          }\n        }\n      </code-highlight>\n    </div>\n    <br />\n    <p>与‘slide’等效的动画名称： 'slide' ｜ 'slide-left' | 'slideLeft'。同理其他书写形式。</p>\n    <p><small>注：动画的默认效果为 slide。</small></p>\n  </template>\n\n  <template id=\"customEffect\">\n    <div class=\"doc-title\">Custom Effect</div>\n    <p>自定义模块的窗口动画效果。</p>\n    <p><small>value: (e: TransformAnimateEvent) => void | Promise<boolean> ｜ </boolean> [(e: TransformAnimateEvent) => void | Promise<boolean>, (e: TransformAnimateEvent) => void | Promise<boolean></small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        const getAnimate = (type: number) => {\n          return (e: TransformAnimateEvent) => {\n            let inO: number, outO: number, inV: Animate, outV: Animate\n            switch (type) {\n              case 0:\n                inO = 1\n                outO = 0\n                inV = e.in\n                outV = e.out\n                break\n              case 1:\n              default:\n                inO = 0\n                outO = 1\n                inV = outV = e.in\n            }\n            inV.duration(0).ease('ease-out-expo').to(0, 0, 0).opacity(inO).end(function () {\n              outV.duration(767).opacity(outO).end(function () {\n                e.callback(false)\n              })\n            })\n\n            setTimeout(() => {\n              e.callback(false)\n            }, 1200)\n          }\n        }\n        export default {\n          config: {\n            title: '',\n            free: true,\n            color: '#000',\n            animation: [getAnimate(0), getAnimate(1)]\n          }\n        }\n      </code-highlight>\n      <p><small>TransformAnimateEvent 为自定义动画中提供的可用对象</small></p>\n      <code-highlight type=\"js\">\n        interface TransformAnimateEvent {\n          x: number\n          y: number\n          in: Animate // 切入模块动画类\n          out: Animate // 切出模块动画类\n          view: Array&lt;HTMLElement> // 视图数组\n          width: number\n          height: number\n          viewport: Array&lt;HTMLElement> // 视窗数组\n          modules: Array&lt;Module> // 切换模块数组\n          reverse: boolean // 是否反向流动\n          direction: number // 流动方向，1前进，-1后退\n          backset: number // 流动状态，1前进，-1后退， 0替换\n          origin: string | Array&lt;number> // 触发位置\n          attach: string | Array&lt;number> // 相轴\n          touches: TransformActionOrigin | undefined // 触发 touch 事件\n          historyDirection: number // 浏览器前进后退方向\n          callback: Function // 结束回掉函数，Promise 模式下不需要用到\n        }\n        interface TransformActionOrigin {\n          x: number,\n          y: number\n        }\n      </code-highlight>\n    </div>\n    <br />\n    <p>数组中的第一个函数为正向动画，第二个函数为逆向动画。如果值为函数，则可通过参数进行动画控制，比如 direction、historyDirection 等。</p>\n  </template>\n\n  <template id=\"background\">\n    <div class=\"doc-title\">Background</div>\n    <p>定义模块是否被允许在后台运行。</p>\n    <p><small>value: boolean ｜ 'auto'</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            free: true,\n            background: true\n          }\n        }\n      </code-highlight>\n    </div>\n    <br />\n    <p>value = false：模块切换动画结束后会被立即销毁。</p>\n    <p>value = true：模块不会被销毁（仅当页面 load 成功时）；例外情况是当 timeout 超时时，在启动前会被销毁。</p>\n    <p>value = 'auto'：当设置成自动时模块会进行智能的判断是否销毁，当触发以下几种情况时则会被销毁：<br />\n      ⅰ. 页面设置了 src，且不同源时；<br />\n      ⅱ. 页面中包含了 object、embed、applet、iframe 对象时；<br />\n      ⅲ. 页面中包含了 video、audio 标签时，且开启智能媒体管理时自动暂停播放出错时；<br />\n      ⅳ. 页面中存在节点变动操作在 3 秒钟内超过 10 次时；<br />\n      ⅴ. 页面中总的节点操作在后台运行超过 1000 次时；<br />\n    </p>\n  </template>\n\n  <template id=\"timeout\">\n    <div class=\"doc-title\">Timeout</div>\n    <p>定义模块的有效时常，单位毫秒。</p>\n    <p><small>value: number</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            free: true,\n            timeout: 36000\n          }\n        }\n      </code-highlight>\n    </div>\n    <br />\n    <p>页面生命周期的倒计时，页面符合缓存条件或设置为背景运行时，页面在退出并二次进入前会检查过期情况，当检测到过期时会进行模块的更新操作。</p>\n    <p><small>注：若该值设置为 0 时，则背景运行将不会生效。</small></p>\n  </template>\n\n  <template id=\"limit\">\n    <div class=\"doc-title\">Limit</div>\n    <p><b class=\"excl\">frameworks 类型专有</b></p>\n    <p>定义应用最大可缓存在后台的模块数量。</p>\n    <p><small>value: number</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            free: true,\n            limit: 7\n          }\n        }\n      </code-highlight>\n    </div>\n    <br />\n    <p>默认为 5, 最大值为 100。其表示为应用中所允许的最多同时后台运行的页面，当超过时会根据访问前后对最先访问的模块进行销毁，如果配置了 background = true 则不受影响。</p>\n  </template>\n\n  <template id=\"resource\">\n    <div class=\"doc-title\">Resource</div>\n    <p>根据资源类型配置资源 url 数组，在预载入时会根据该配置做预载。</p>\n    <p><small>value: number</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        interface ModuleResources {\n          script?: Array&lt;string>\n          image?: Array&lt;string>\n          worker?: Array&lt;string>\n          video?: Array&lt;string>\n          audio?: Array&lt;string>\n          font?: Array&lt;string>\n          style?: Array&lt;string>\n        }\n        export default {\n          config: {\n            title: '',\n            free: true\n          },\n          resource: {\n            script: [\n              'http://xxx.com/js/index.js',\n            ],\n            image: [\n              'http://xxx.com/img/background.jpg',\n            ]\n          }\n        }\n      </code-highlight>\n    </div>\n    <br />\n    <p><small>注：html 中的 script、css 标签等非脚本异步加载的资源则无需单独配置，此处仅用于脚本执行后的依赖资源，比如 css 中的 font 字体，某场景的主题素材等。</small></p>\n  </template>\n\n  <template id=\"prerender\">\n    <div class=\"doc-title\">Prerender</div>\n    <p>当前模块中如果存在链接到其他模块，且希望能预先载入这些模块，通俗讲即当前页面中如果有 a 链接可能会跳转到某个模块时，则需要设置该属性。页面会在空闲时对页面中 source -> src 或者 source -> html 的内容进行预加载，包括文档中的 css 以及 js 等静态资源的预载。</p>\n    <p><small>value: Array&lt;string></small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            free: true,\n            prerender: ['module1', 'module2', 'module3']\n          }\n        }\n      </code-highlight>\n    </div>\n  </template>\n\n  <template id=\"components\">\n    <div class=\"doc-title\">Components</div>\n    <p>在模块中注册 Web Components。使用 Web Components 能够极大提升页面性能。</p>\n    <p><small>value: ((w: Window) => CustomElementConstructor)[]</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            free: true\n          },\n          components: [getComponents1, getComponents2, getComponents3]\n        }\n      </code-highlight>\n    </div>\n    <p><small>组件例子</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export const ScopeCodeHighlighter = (w): CustomElementConstructor => {\n          class CodeHighlighter extends w.HTMLElement {\n            constructor () {\n              super()\n              const shadowRoot = this.attachShadow({ mode: 'open' })\n              shadowRoot.appendChild(tmpl.content.cloneNode(true))\n              ...\n            }\n          }\n\n          return CodeHighlighter as unknown as CustomElementConstructor\n        }\n      </code-highlight>\n    </div>\n    <br />\n    <p>\n      <small>注：模块初始化时将进行调用获取组件函数，同时会将注册上下文 Window 传入，同时返回组件对象 CustomElementConstructor 用于在上下文中进行注册。</small>\n    </p>\n  </template>\n\n  <template id=\"mediaGuard\">\n    <div class=\"doc-title\">MediaGuard</div>\n    <p>该设置开启时，会对同源页面中的视频和音频进行智能的管理，当模块隐藏时则自动暂停正在播放的音视频，反之模块可见时则恢复暂停的音视频；同时不设置时，也可以通过窗口可见事件来自行进行管理。</p>\n    <p><small>value: Array&lt;string></small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            free: true,\n            mediaGuard: true\n          }\n        }\n      </code-highlight>\n    </div>\n  </template>\n\n  <template id=\"portals\">\n    <div class=\"doc-title\">Portals</div>\n    <p>设置为 portal 的模块， [free] 也应设置为 true，portal 页面会在转场动画结束后执行激活操作，激活后页面会完全转移到全新的浏览器上下文中。当浏览器不支持 portal 能力时会自动降级为一般沙盒模。</p>\n    <p><small>value: Array&lt;string></small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            free: true,\n            portals: true\n          }\n        }\n      </code-highlight>\n    </div>\n  </template>\n\n  <template id=\"Runaway\">\n    <div class=\"doc-title\">Runaway</div>\n    <p>极度追求首屏渲染时，可引入 &lt;run-away>这个 Web Components 组件，该组件体积小于 1kb，只需将页面内容使其包裹，即可在页面加载时优先执行页面逻辑，随后会执行组件注册逻辑并在之后的异步框架载入后执行后续的容器逻辑。</p>\n    <p><small>slot=\"module\"</small>的元素将被注册到模块容器页面中</p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        import 'lath/runaway'\n        const template = document.createElement('template')\n        template.innerHTML = &#96\n          &lt;run-away id=\"home\">\n            &lt;div slot=\"module\">\n              &lt;div>提前插入组件&lt;div>\n            &lt;/div>\n          &lt;/run-away>\n        &#96\n        document.body.appendChild(template.content)\n      </code-highlight>\n    </div>\n  </template>\n\n  <template id=\"allowHost\">\n    <div class=\"doc-title\">AllowHost</div>\n    <p><b class=\"excl\">frameworks 类型专有</b></p>\n    <p>当没有设置 [capture] 时，可通过该配置来过滤掉不需要捕获的 host 地址，反之则会自动进行捕获。该配置主要用于防止 url 参数访问的安全防护。当 frameworks 模块设置了  [capture] 时，则会忽略该配置。</p>\n    <p><small>value: Array&lt;string></small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            free: true,\n            allowHost: [\n              'aaa.com',\n              'bbb.com',\n              'ccc.com'\n            ]\n          }\n        }\n      </code-highlight>\n    </div>\n  </template>\n\n  <template id=\"sandbox\">\n    <div class=\"doc-title\">Sandbox</div>\n    <p>[sandbox?: 'allow-same-origin' | 'allow-scripts' | 'allow-forms' | 'allow-modals' | 'allow-orientation-lock' | 'allow-popups' | 'allow-pointer-lock' | 'allow-popups-to-escape-sandbox' | 'allow-presentation' | 'allow-top-navigation' | 'allow-top-navigation-by-user-activation' | 'allow-downloads-without-user-activation' | 'allow-storage-access-by-user-activation' | 'allow-top-navigation-by-user-activation' | string] **\n      设置容器的沙盒限制。</p>\n    <p><small>value: string</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            free: true,\n            sandbox: 'allow-modals'\n          }\n        }\n      </code-highlight>\n    </div>\n  </template>\n\n  <template id=\"capture\">\n    <div class=\"doc-title\">Capture</div>\n    <p>可接受一个 url path，当其他页面中存在跳转地址匹配时会被捕获，并按照该模块配置运行新窗口页面。另外也可接受一个函数，resolve 为捕获的 url 信息，当返回 true 时则表示需要捕获该链接并以新窗口打开。\n      注意：该能力需要在 [apply] 中开启了 link-in-new-window 时有效，同样的被捕捉页面需要保持同源原则。</p>\n    <p><small>value: string | ((resolve: { path: string; origin: string; host: string; search: string }, url: string) => boolean]</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            free: true,\n            capture: (resolve) => {\n              return resolve.path === '/abc/abc'\n            }\n          }\n        }\n      </code-highlight>\n    </div>\n  </template>\n\n  <template id=\"apply\">\n    <div class=\"doc-title\">Apply</div>\n    <p>在同源模块中将自动执行这些预置的应用：<br />\n      a. smart-setTimeout： 当模块不可见或动画过程中时，所有 setTimeout 会停止执行，相反当模块恢复可见时 setTimeout 也将恢复工作；<br />\n      b. smart-setInterval： 同 smart-setTimeout<br />\n      c. link-in-new-window： 当页面中有 a链接，或 open 方法打开页面时 会自动进行捕捉拦截，并将页面内容生成新模块的形式并进行加载展示；若设置 target='self' 时则会忽略此逻辑；同时可以设置 preset-effect=\"预置动画名\"，clone-as=\"新模块名\"<br />\n      d. tap-highlight：所有 a链接 在点击时会自动添加半透明蒙层高亮提示效果；<br />\n      e. ['tap-highlight', string]： 同 tap-highlight，参数为 attr 的匹配，仅匹配元素才增加高亮效果；\n    </p>\n    <p><small>value: Array&lt;'smart-setTimeout' | 'smart-setInterval' | 'link-in-new-window' | 'tap-highlight' | ['tap-highlight', string]>]</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            free: true,\n            apply: ['smart-setTimeout', 'link-in-new-window']\n          }\n        }\n      </code-highlight>\n    </div>\n  </template>\n\n  <template id=\"events\">\n    <div class=\"doc-title\">Events</div>\n    <p>定义模块事件监听</p>\n    <p><small>value: Array&lt;string></small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            free: true\n          },\n          events: {\n            transformEnd: () => {\n              // ...\n            }\n          }\n        }\n      </code-highlight>\n    </div>\n    <p>\n      [transformStart: () => void | boolean]:  模块转场动画开始， 返回值会停止转场操作<br />\n      [transformEnd: () => void]：模块动画转场结束<br />\n      [start: () =>void]：配置启动事件<br />\n      [load: () =>void]：模块加载事件<br />\n      [loadError: () =>void]：模块加载错误事件<br />\n      [preload: () =>void]：模块预载事件<br />\n      [destroy: () =>void]：模块销毁事件\n    </p>\n  </template>\n\n  <template id=\"preindex\">\n    <div class=\"doc-title\">Preindex</div>\n    <p><b class=\"excl\">frameworks 类型专有</b></p>\n    <p>当页面 url 指定到某个模块访问时，如果指定模块名不等于 index 时，则可以通过该配置设置一个前置模块名，此时访问链接时会优先访问地址页面，但是当点击浏览器返回时不会立刻退出，而是会到达这个前置模块页面。</p>\n    <p><small>value: string | ((resolve: { path: string; origin: string; host: string; search: string }, url: string) => boolean]</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            preindex: 'home'\n          }\n        }\n      </code-highlight>\n    </div>\n  </template>\n\n  <template id=\"notFind\">\n    <div class=\"doc-title\">NotFind</div>\n    <p><b class=\"excl\">frameworks 类型专有</b></p>\n    <p>404 模块，所请求的模块页面不存在时会自动路由到该模块，若未配置时则会自动跳转到名为 404 的模块。</p>\n    <p><small>value: string</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            notFind: 'fund'\n          }\n        }\n      </code-highlight>\n    </div>\n  </template>\n\n  <template id=\"singleFlow\">\n    <div class=\"doc-title\">SingleFlow</div>\n    <p><b class=\"excl\">frameworks 类型专有</b></p>\n    <p>只允许页面的历史记录往 level 较小的模块回退，当前一个历史模块的 level 层级大于等于时则进行跳过。</p>\n    <p><small>value: boolean</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            singleFlow: true\n          }\n        }\n      </code-highlight>\n    </div>\n    <p>例如：从生成订单模块的到支付模块再到我的订单模块，完成后进行回退时可选择直接回到订单生成前页面，而无需经过订单过程中的模块页面。</p>\n  </template>\n\n  <template id=\"singleLock\">\n    <div class=\"doc-title\">SingleLock</div>\n    <p><b class=\"excl\">frameworks 类型专有</b></p>\n    <p>当页面回退到程序出口（level === 0 的模块）时，进行返回操作时不会回退，而是会记录回退次数，并 trigger 给 application 事件来决定是否允许退出；需要注意的是，如果用户访问 lath 容器页时没有进行任何点击跳转操作则将直接退出应用，除非页面设置了[preindex] 配置，且配置生效时。</p>\n    <p><small>value: boolean</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            singleLock: true,\n            holdBack: (event) => {\n              // 判断是否退出\n              return true\n            }\n          }\n        }\n      </code-highlight>\n    </div>\n    <p>如上配置，从其他页面跳转进入到应用时，当点击浏览器返回按钮是并不会退出应用页面，而是会通过 [holdBack] 配置进行判断是否应该被退出，并同时返回用户点击返回按钮的次。</p>\n  </template>\n\n  <template id=\"holdBack\">\n    <div class=\"doc-title\">HoldBack</div>\n    <p><b class=\"excl\">frameworks 类型专有</b></p>\n    <p>需[singleLock]开启时有效，当用户进行返回操作，且页面即将退出时，会通过该函数（如果被阻止，backCount 为点击返回的次数）进行校验，返回 true 时为阻止应用页面退出，否则则是允许退出。</p>\n    <p><small>value: (backCount： number) => boolean]</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            singleLock: true,\n            holdBack: (event) => {\n              // 判断是否退出\n              return true\n            }\n          }\n        }\n      </code-highlight>\n    </div>\n    <p>如上配置，从其他页面跳转进入到应用时，当点击浏览器返回按钮是并不会退出应用页面，而是会通过 [holdBack] 配置进行判断是否应该被退出，并同时返回用户点击返回按钮的次。</p>\n  </template>\n\n  <template id=\"transient\">\n    <div class=\"doc-title\">Transient</div>\n    <p>标记该模块为临时模块，在切换到后台时，模块不仅会被销毁，同时模块配置数据也将一并被删除，无特殊情况下一般无需单独配置。</p>\n    <p><small>value: boolean</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            free: true,\n            transient: true\n          }\n        }\n      </code-highlight>\n    </div>\n    <p><small>注：通过新窗口打开的 url 类型模块，会被自动进行该标记。</small></p>\n  </template>\n\n  <template id=\"moduleManifestProcess\">\n    <div class=\"doc-title\">ModuleManifestProcess</div>\n    <p><b class=\"excl\">frameworks 类型专有</b></p>\n    <p>当模块载入时，模块配置会先经此函数处理再返回。</p>\n    <p><small>value: (config：ModuleManifest)=> ModuleManifest]</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            moduleManifestProcess: (manify) => {\n              ... 处理\n              return newManify\n            }\n          }\n        }\n      </code-highlight>\n    </div>\n  </template>\n\n  <template id=\"touchBorder\">\n    <div class=\"doc-title\">TouchBorder</div>\n    <p>设置时模块的边缘触摸事件会得到监听，比如双击模最块顶部执行回到顶部的操作，触摸模块的最左侧可用来执行模块的跟手动画等等。</p>\n    <p><small>value: (borders: ModuleTouchBorder, module: Module, application: Application) => void</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            touchBorder: (borders, module, application) => {\n              ... 处理模块跟手效果/或点击顶部回到顶部效果\n            }\n          }\n        }\n      </code-highlight>\n    </div>\n  </template>\n\n  <template id=\"inject\">\n    <div class=\"doc-title\">Inject</div>\n    <p>当同源模块时可在页面载入前对页面注入默认的功能和方法，比如提前注入一些 bridge 方法，通用变量，改写一些全局对象等等。</p>\n    <p><small>value: (w: Window, m: Module) => void]</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            inject: (moduleWindow, module) => {\n              ...\n            }\n          }\n        }\n      </code-highlight>\n    </div>\n  </template>\n\n  <template id=\"render\">\n    <div class=\"doc-title\">Render</div>\n    <p>除了 source 模式外还可以通过 render 方法来渲染元素到对应的节点上，可供系统模块和框架模块使用，不推荐普通模块使用该方法渲染。</p>\n    <p><small>value: (target: HTMLElement) => void]</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            render: (target) => {\n              ...\n              target.appendChild(...)\n              // or ReactDOM.render(&lt;App />, target)\n            }\n          }\n        }\n      </code-highlight>\n    </div>\n  </template>\n\n  <template id=\"safeArea\">\n    <div class=\"doc-title\">SafeArea</div>\n    <p><b class=\"excl\">frameworks 类型专有</b></p>\n    <p>设定应用的安全边距。</p>\n    <p><small>value: string | Array&lt;string></small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            safeArea: ['44px', '0px', '0px', '0px']\n          }\n        }\n      </code-highlight>\n    </div>\n    <p>值为数字时，分别按顺序表示 顶部、右侧、底部、左侧 的安全边距。</p>\n    <p>设置该值后将会在符合同域原则下的模块中注入 CSS 全局变量：--application-safe-area-top、--application-safe-area-right、--application-safe-area-bottom、--application-safe-area-left 四个对应的安全边际值。</p>\n    <p>如果需要动态的修改这个值则可以通过发送 “safeAreaChange” 事件来进行更新。</p>\n    <p><small>例如:</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        application.trigger('safeAreaChange'，['88px', '0px', '0px', '0px'])\n      </code-highlight>\n    </div>\n  </template>\n\n  <template id=\"globalCSSVariables\">\n    <div class=\"doc-title\">GlobalCSSVariables</div>\n    <p><b class=\"excl\">frameworks 类型专有</b></p>\n    <p>设定应用的全局 CSS 变量。</p>\n    <p><small>value: { [key: string]: string }</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            globalCSSVariables: {\n              '---common-background-color': '#fff',\n              '---common-button-color': 'blue',\n            }\n          }\n        }\n      </code-highlight>\n    </div>\n    <p>与 [safeArea] 类似，同样只能在同域原则下有效，与其相比具有能力覆盖的效果。</p>\n    <p>如果需要动态的修改或增加这个值则可以通过发送 “globalCSSVariablesChange” 事件来进行更新。</p>\n    <p><small>例如:</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        application.trigger('globalCSSVariablesChange'，{\n          '---common-button-color': 'red'\n        })\n      </code-highlight>\n    </div>\n  </template>\n\n  <!-- API exists -->\n  <template id=\"applicationExists\">\n    <div class=\"doc-title\">Application.exists</div>\n    <p>取得当前页面是否为首次载入的历史序列上。</p>\n    <p><small>return: boolean</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        application.start()\n        // 还包括任何可读取 application 实力的地方，比如 inject 中\n        console.log(application.exists)\n      </code-highlight>\n    </div>\n    <p>例如当你访问链接进去时，首次载入页面将会记录当前历史节点的位置，凡事发生页面活动后都可以检测当前位置是否发生变动，如果该值为 false，则表示历史已经发生变化。</p>\n    <p>该方法仅记录初次载入的节点位置，例如你在任何页面发生浏览器刷新都会导致该节点重新标记位置。</p>\n  </template>\n\n  <template id=\"applicationTo\">\n    <div class=\"doc-title\">Application.to</div>\n    <p>转场到指定模块页面</p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        declare interface TransformActionOrigin {\n          x: number,\n          y: number\n        }\n        type TransformToOptions = [\n          id: string,\n          param?: string,\n          history?: -1 | 0 | 1,\n          touches?: TouchEvent | TransformActionOrigin\n        ]\n      </code-highlight>\n    </div>\n    <p><small>Arguments: TransformToOptions</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        application.to('home', '?id=100', 1)\n      </code-highlight>\n    </div>\n    <p>history 为 -1 时不推入或替换历史，为 0 时替换当前历史，为 1 时推入新的历史。</p>\n    <p>touches 为发生点击行为的元素点击的 TouchEvent 对象，或直接定义的发生事件 x, y 坐标值的 TransformActionOrigin 对象，用做某些需要根据起始位置而发生的转场动画。</p>\n  </template>\n\n  <template id=\"applicationPushWindow\">\n    <div class=\"doc-title\">Application.pushWindow</div>\n    <p>转场到指定模块或 url 的页面</p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        type pushWindowOtions = [\n          url: string,\n          title = '',\n          preset = 'slide',\n          cloneAs?: string,\n          touches?: TouchEvent | TransformActionOrigin\n        ]\n      </code-highlight>\n    </div>\n    <p><small>Arguments: pushWindowOtions</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        application.pushWindow('home', '首页', 'zoom', 'newHome')\n      </code-highlight>\n    </div>\n    <p>同 Application.to 相似，pushWindow 的第一个参数依然可以传入一个模块名，以此来打开一个新的模块页面。</p>\n    <p>不同的是 pushWindow 还可以接受一个 url 作为新窗口的参数，就像下面这样</p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        application.pushWindow('https://yoursite.com/newHome', '首页', 'zoom')\n      </code-highlight>\n    </div>\n    <p>参数 cloneAs 表示将该模块重新命名一个新的副本，此时该新副本不会替换原有模块实例，而是作为一个新命名的模块存在。</p>\n    <p>参数 preset 则表示该模块被打开时所执行的内置动画效果。</p>\n    <p>参数 title 为新页面的 title 名称。</p>\n    <p>参数 touches 同 Application.to 部分。</p>\n    <p>url 目标页面也将会受到捕捉[capture]逻辑的影响，弱被捕捉则执行打开匹配捕捉的模块 i，否则打开 url 页面。</p>\n  </template>\n  <!-- activeModule -->\n  <template id=\"applicationActiveModule\">\n    <div class=\"doc-title\">Application.activeModule</div>\n    <p>获取当前活动模块对象 Module</p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        console.log(app.activeModule)\n      </code-highlight>\n    </div>\n    <p>例如当前页面为 home 模块，那么执行后将获得 home 模块的 Module 对象。</p>\n  </template>\n\n  <template id=\"applicationPreActiveModule\">\n    <div class=\"doc-title\">Application.preActiveModule</div>\n    <p>获取一个活动模块对象 Module</p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        console.log(app.preActiveModule)\n      </code-highlight>\n    </div>\n    <p>例如现在页面为 home 模块，然后我点击进入了 detail 模块，那么此时执行后将获得 home 模块的 Module 对象。</p>\n  </template>\n\n  <template id=\"applicationGet\">\n    <div class=\"doc-title\">Application.get</div>\n    <p>获得一个指定 id 的模块对象 Module</p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        application.get('home').then((module) => {\n          console.log(module)\n        }).catch((error) => {\n          console.error(error)\n        })\n      </code-highlight>\n    </div>\n  </template>\n\n</div>\n\n<script>\n  const header = document.getElementById('header')\n  const page = document.getElementById('page-content')\n  const show = () => {\n    const id = /id\\=(\\w+)/.exec(parent.location.search)?.[1]\n    const currentEl = document.getElementById(id)\n    if (page && currentEl) {\n      page.innerHTML = currentEl.innerHTML\n    }\n    header.style.opacity = '1'\n  }\n  window.addEventListener('message', (e) => {\n    if (e.data.type === 'module-will-show') {\n      show()\n    } else if (e.data.type === 'module-will-hidden') {\n      header.style.opacity = '0'\n    }\n  })\n  show()\n</script>\n"

/***/ }),

/***/ "./docs/empty/html.html":
/*!******************************!*\
  !*** ./docs/empty/html.html ***!
  \******************************/
/***/ ((module) => {

module.exports = "<style>\nhtml {\n  font-size: 1vmin;\n  background: radial-gradient(#bd243f, #190d23);\n}\n\n.header {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 40px;\n  padding-top: calc(20px + constant(safe-area-inset-top));\n  padding-top: calc(20px + env(safe-area-inset-top));\n}\n.header-inner {\n  display: flex;\n  max-width: 500px;\n  padding: 0 20px;\n}\n.placeholder {\n  width: 100%;\n  height: calc(50px + constant(safe-area-inset-top));\n  height: calc(50px + env(safe-area-inset-top));\n}\n.back-btn {\n  display: flex;\n  height: 21px;\n  cursor: pointer;\n}\n.back-icon {\n  width: 21px;\n  height: 21px;\n  background-image: url(\"data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0nMTJweCcgaGVpZ2h0PScyMnB4JyB2aWV3Qm94PScwIDAgMTIgMjInIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+PHRpdGxlPlBhdGg8L3RpdGxlPjxnIGlkPSdTeW1ib2xzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz48ZyBpZD0nT3ZlcnJpZGVzL05hdmlnYXRpb24tQmFyL0xlZnQvQmFjay1CdXR0b24nIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC05LjAwMDAwMCwgLTExLjAwMDAwMCknIGZpbGw9JyMwMDdBRkYnIGZpbGwtcnVsZT0nbm9uemVybyc+PGcgaWQ9J1Bpbi1MZWZ0JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg5LjAwMDAwMCwgMTEuNTAwMDAwKSc+PHBhdGggZD0nTTMuNjIxMzIwMzQsMTAuNSBMMTEuNTYwNjYwMiwyLjU2MDY2MDE3IEMxMi4xNDY0NDY2LDEuOTc0ODczNzMgMTIuMTQ2NDQ2NiwxLjAyNTEyNjI3IDExLjU2MDY2MDIsMC40MzkzMzk4MjggQzEwLjk3NDg3MzcsLTAuMTQ2NDQ2NjA5IDEwLjAyNTEyNjMsLTAuMTQ2NDQ2NjA5IDkuNDM5MzM5ODMsMC40MzkzMzk4MjggTDAuNDM5MzM5ODI4LDkuNDM5MzM5ODMgQy0wLjE0NjQ0NjYwOSwxMC4wMjUxMjYzIC0wLjE0NjQ0NjYwOSwxMC45NzQ4NzM3IDAuNDM5MzM5ODI4LDExLjU2MDY2MDIgTDkuNDM5MzM5ODMsMjAuNTYwNjYwMiBDMTAuMDI1MTI2MywyMS4xNDY0NDY2IDEwLjk3NDg3MzcsMjEuMTQ2NDQ2NiAxMS41NjA2NjAyLDIwLjU2MDY2MDIgQzEyLjE0NjQ0NjYsMTkuOTc0ODczNyAxMi4xNDY0NDY2LDE5LjAyNTEyNjMgMTEuNTYwNjYwMiwxOC40MzkzMzk4IEwzLjYyMTMyMDM0LDEwLjUgWicgaWQ9J1BhdGgnPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz4=\");\n  background-size: contain;\n  background-repeat: no-repeat;\n  cursor: pointer;\n}\n.back-text {\n  line-height: 23px;\n  font-size: 17px;\n  color: #007AFF;\n}\n\n@media (min-width: 500px) {\n  html {\n    font-size: 5px;\n  }\n}\nbody {\n  color: #190d23;\n  font-size: 12rem;\n  padding: 1rem;\n  font-family: \"Courier New\";\n  overflow: hidden;\n  margin: 0;\n  padding-top: 20vh;\n}\n\nscreen,\nscreen *,\nscreen *:before,\nscreen *:after {\n  box-sizing: border-box;\n  content: \"\";\n  display: block;\n  transform-style: preserve-3d;\n  position: relative;\n  perspective: 200rem;\n}\n\ncard {\n  margin: auto;\n  height: 96rem;\n  width: 64.5rem;\n  background: #fff;\n  border-radius: 5rem;\n  transform: translate3d(0, 0, 0) rotate3d(0, 0, 0, 0) rotate(1deg);\n  position: relative;\n  animation: rotate 3s linear;\n}\ncard *, card *:before, card *:after, card:before, card:after {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\ncard:before, card:after {\n  width: 100%;\n  height: 100%;\n  transform: translate3d(0, 0, -0.2rem) rotateY(180deg);\n  border-radius: 5rem;\n  animation: light 3s linear;\n  box-shadow: inset 0 0 1rem rgba(25, 13, 35, 0.5);\n  background-image: linear-gradient(to right bottom, rgba(25, 13, 35, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(25, 13, 35, 0.3));\n}\ncard:after {\n  transform: translate3d(0, 0, 0.2rem) rotateY(0deg);\n  animation: light 3s linear reverse;\n}\n\nback {\n  box-shadow: 0 0 0 1rem #302e9b, inset 0 0 0 1rem #302e9b, inset 0 0 0 2rem #f5e3e3;\n  border-radius: 1rem;\n  height: 93%;\n  width: 90%;\n  border: 2rem solid rgba(255, 255, 255, 0);\n  background-position: 0.9rem 0.99rem;\n  background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 0.99rem, #302e9b 0.99rem, #302e9b 1.98rem), repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 0.99rem, #302e9b 0.99rem, #302e9b 1.98rem);\n  transform: translate3d(0, 0, -0.1rem) rotateY(180deg);\n  bottom: 0;\n  right: 0;\n  margin: auto;\n}\n\nshadow {\n  margin: auto;\n  height: 100rem;\n  width: 70rem;\n  background: radial-gradient(#190d23, rgba(255, 255, 255, 0));\n  background: #190d23;\n  border-radius: 10rem;\n  position: relative;\n  animation: shadow 3s linear;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  transform: translate3d(0, 90rem, -50rem) rotateX(90deg) rotate(0deg) skewY(0) scale(1);\n  opacity: 0.2;\n  box-shadow: 0 0 2vmin #190d23, 0 0 5vmin #190d23;\n}\n\nhoverspace {\n  height: 100%;\n  width: 50rem;\n  position: absolute;\n  transform: translate3d(0, 0, 50rem);\n  top: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  cursor: grab;\n}\nhoverspace:hover ~ card {\n  animation: rotatehover 3s linear;\n}\nhoverspace:hover ~ card:before, hoverspace:hover ~ card:after {\n  animation: lighthover 3s linear;\n}\nhoverspace:hover ~ card:after {\n  animation: lighthover 3s linear reverse;\n}\nhoverspace:hover ~ shadow {\n  animation: shadowhover 3s linear;\n}\n\n@keyframes rotate {\n  100% {\n    transform: translate3d(0, 0, 0) rotate3d(1, 1, 0, -360deg) rotate(1deg);\n  }\n}\n@keyframes rotatehover {\n  100% {\n    transform: translate3d(0, 0, 0) rotate3d(1, 1, 0, -360deg) rotate(1deg);\n  }\n}\n@keyframes light {\n  0%, 100%, 50% {\n    background-color: rgba(255, 255, 255, 0);\n  }\n  25% {\n    background-color: rgba(245, 227, 227, 0.7);\n  }\n  75% {\n    background-color: #190d23;\n  }\n}\n@keyframes lighthover {\n  0%, 100%, 50% {\n    background-color: rgba(255, 255, 255, 0);\n  }\n  25% {\n    background-color: rgba(245, 227, 227, 0.7);\n  }\n  75% {\n    background-color: #190d23;\n  }\n}\n@keyframes shadow {\n  25% {\n    transform: translate3d(0, 90rem, -50rem) rotateX(90deg) rotate(90deg) skewY(-90deg);\n    opacity: 0;\n  }\n  50% {\n    transform: translate3d(0, 90rem, -50rem) rotateX(90deg) rotate(90deg) skewY(0);\n    opacity: 0.2;\n  }\n  75% {\n    transform: translate3d(0, 90rem, -50rem) rotateX(90deg) rotate(90deg) skewY(90deg);\n    opacity: 0;\n  }\n  100% {\n    transform: translate3d(0, 90rem, -50rem) rotateX(90deg) rotate(180deg) skewY(0);\n    opacity: 0.2;\n  }\n}\n@keyframes shadowhover {\n  25% {\n    transform: translate3d(0, 90rem, -50rem) rotateX(90deg) rotate(90deg) skewY(-90deg);\n    opacity: 0;\n  }\n  50% {\n    transform: translate3d(0, 90rem, -50rem) rotateX(90deg) rotate(90deg) skewY(0);\n    opacity: 0.2;\n  }\n  75% {\n    transform: translate3d(0, 90rem, -50rem) rotateX(90deg) rotate(90deg) skewY(90deg);\n    opacity: 0;\n  }\n  100% {\n    transform: translate3d(0, 90rem, -50rem) rotateX(90deg) rotate(180deg) skewY(0);\n    opacity: 0.2;\n  }\n}\nfront {\n  transform: translate3d(0, 0, 0.1rem) rotateY(0deg);\n  height: 100%;\n  width: 100%;\n}\nfront > * {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\nfront > * > *:nth-of-type(1) {\n  transform: translate3d(2rem, 13rem, 0) scaleX(0.7);\n  height: 4rem;\n  width: 4rem;\n  background: #b32b28;\n  border-radius: 50%;\n  box-shadow: 3.25rem 0 0 #b32b28;\n}\nfront > * > *:nth-of-type(1):before {\n  transform: translate3d(1.7rem, 1.7rem, 0) rotate(45deg);\n  background: #b32b28;\n  width: 4rem;\n  height: 4rem;\n}\nfront > * > *:nth-of-type(1):after {\n  content: \"K\";\n  color: #b32b28;\n  transform: translate3d(0, -12rem, 0);\n}\nfront > * > *:nth-of-type(2) {\n  border: 0.5rem solid #302e9b;\n  width: 68%;\n  height: 79.5%;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n  border-radius: 0.5rem;\n  overflow: hidden;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(6) {\n  background: #bdb725;\n  box-shadow: inset 0 0 0 0.1rem #fff, inset 0 0 0 0.6rem #302e9b;\n  width: 30rem;\n  height: 30rem;\n  transform: translate3d(7rem, -23rem, 0) rotate(37deg) skewY(20deg);\n  overflow: hidden;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(6):after {\n  background: #fff;\n  width: 40rem;\n  height: 10rem;\n  border-radius: 50%;\n  transform: translate3d(4rem, 25.5rem, 0) rotate(-50deg);\n  box-shadow: 0 0 0 1.5rem #190d23;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(6):before {\n  width: 1.5rem;\n  height: 1.5rem;\n  transform: translate3d(16.5rem, 26.5rem, 0) rotate(-1deg);\n  background: #190d23;\n  box-shadow: 0 0 0 1.5rem #bdb725, 0 0 0 2rem #190d23, 5rem -5rem 0 #190d23, 5rem -5rem 0 1.5rem #bdb725, 5rem -5rem 0 2rem #190d23, 10rem -10rem 0 #190d23, 10rem -10rem 0 1.5rem #bdb725, 10rem -10rem 0 2rem #190d23;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(8) {\n  transform: translate3d(0.5rem, 2.5rem, 0) scaleX(0.7);\n  height: 8rem;\n  width: 8rem;\n  background: #b32b28;\n  border-radius: 50%;\n  box-shadow: 6.5rem 0 0 #b32b28;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(8):before {\n  transform: translate3d(3.25rem, 3.25rem, 0) rotate(45deg);\n  background: #b32b28;\n  width: 8rem;\n  height: 8rem;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) {\n  width: 40rem;\n  height: 20rem;\n  transform: translate3d(-0.5rem, 6.5rem, 0);\n  border-radius: 50%;\n  overflow: hidden;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7):after {\n  width: 5rem;\n  height: 14rem;\n  border-radius: 3rem;\n  transform: translate3d(21.5rem, -1rem, 0) rotate(-20deg) skewY(-10deg);\n  box-shadow: 0.4rem 0.4rem 0 #302e9b, 1rem 0.8rem 0 #fff, 1.4rem 1.2rem 0 #302e9b, 2rem 1.6rem 0 #fff, 2.4rem 2rem 0 #302e9b, 3rem 2.4rem 0 #fff, 3.4rem 2.8rem 0 #302e9b, 4rem 3.2rem 0 #fff, 4.4rem 3.6rem 0 #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7):before {\n  width: 1rem;\n  height: 1rem;\n  background: #fff;\n  transform: translate3d(13.35rem, 7.85rem, 0);\n  border-radius: 50%;\n  box-shadow: 0.4rem 0 0 #302e9b, 0.4rem 0.4rem 0 0.3rem #fff, 0.1rem 0.4rem 0 0.6rem #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(1) {\n  width: 3rem;\n  height: 14rem;\n  border-radius: 2rem;\n  transform: translate3d(15rem, -4rem, 0) rotate(25deg);\n  box-shadow: 0.4rem 0.4rem 0 #302e9b, 1rem 0.8rem 0 #fff, 1.4rem 1.2rem 0 #302e9b, 2rem 1.6rem 0 #fff, 2.4rem 2rem 0 #302e9b, 3rem 2.4rem 0 #fff, 3.4rem 2.8rem 0 #302e9b, 4rem 2.3rem 0 #fff, 4.4rem 2.6rem 0 #302e9b, 5rem 2rem 0 #fff, 5.4rem 2.1rem 0 #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(1):after {\n  background: #fff;\n  width: 10.8rem;\n  height: 12rem;\n  border-radius: 5rem 0 60% 2rem/1.25rem 0 60% 5rem;\n  transform: translate3d(1.5rem, 1rem, 0) rotate(-29deg);\n  box-shadow: -0.4rem -0.3rem 0 #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(1):before {\n  width: 7rem;\n  height: 10rem;\n  border-radius: 2.5rem;\n  transform: translate3d(6.5rem, 4rem, 0) rotate(-55deg);\n  border: 0.4rem solid #fff;\n  box-shadow: 0 0 0 0.4rem #302e9b, inset 0 0 0 0.4rem #302e9b, inset 0.5rem 0 0 0.4rem #fff, inset 0.9rem 0 0 0.4rem #302e9b, inset 1.4rem 0.2rem 0 0.4rem #fff, inset 1.8rem 0.2rem 0 0.4rem #302e9b, inset 2.3rem 0.4rem 0 0.4rem #fff, inset 2.7rem 0.4rem 0 0.4rem #302e9b, inset 3.2rem 0.8rem 0 0.4rem #fff, inset 3.6rem 0.8rem 0 0.4rem #302e9b, inset -0.5rem 0 0 0.4rem #fff, inset -0.9rem 0 0 0.4rem #302e9b, inset -1.4rem 0.2rem 0 0.4rem #fff, inset -1.8rem 0.2rem 0 0.4rem #302e9b, inset -2.3rem 0.4rem 0 0.4rem #fff, inset -2.7rem 0.4rem 0 0.4rem #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(2) {\n  width: 1.5rem;\n  height: 1.5rem;\n  background: #fff;\n  transform: translate3d(25rem, 10.65rem, 0);\n  border-radius: 50%;\n  box-shadow: 0.4rem 0 0 #302e9b, 0.4rem 0.4rem 0 0.4rem #fff, 0.1rem 0.4rem 0 0.6rem #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(2):after {\n  width: 1rem;\n  height: 1rem;\n  background: #fff;\n  transform: translate3d(-1.5rem, 1.2rem, 0) rotate(-70deg);\n  border-radius: 50%;\n  box-shadow: -0.4rem 0 0 #302e9b, -0.4rem 0.4rem 0 0.4rem #fff, -0.1rem 0.4rem 0 0.6rem #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(2):before {\n  width: 0.75rem;\n  height: 0.75rem;\n  background: #fff;\n  transform: translate3d(-11.25rem, -7rem, 0) rotate(-50deg);\n  border-radius: 50%;\n  box-shadow: 0.4rem 0 0 #302e9b, 0.4rem 0.4rem 0 0.3rem #fff, 0.1rem 0.4rem 0 0.6rem #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(4) {\n  width: 3rem;\n  height: 1rem;\n  border-radius: 50%;\n  border-top: 0.4rem solid #302e9b;\n  transform: translate3d(21rem, 1rem, 0);\n  box-shadow: -5rem 0.4rem 0 #fff, -5.5rem 0 0 #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(4):after {\n  width: 0.3rem;\n  height: 2rem;\n  background: #302e9b;\n  transform: translate3d(-2.65rem, 0, 0) rotate(-15deg);\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(4):before {\n  width: 2.5rem;\n  height: 5rem;\n  border-radius: 2rem;\n  transform: translate3d(-2.5rem, 1.25rem, 0) rotate(15deg) skewY(-10deg);\n  box-shadow: -0.2rem 0.3rem 0 #302e9b;\n  background: #fff;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(5) {\n  width: 0.6rem;\n  height: 0.6rem;\n  background: #302e9b;\n  border-radius: 50%;\n  box-shadow: 0 0 0 0.5rem #fff, 0 0 0 0.8rem #302e9b;\n  transform: translate3d(21.5rem, 3rem, 0) rotate(5deg);\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(5):before {\n  width: 3.5rem;\n  height: 3rem;\n  border-radius: 50%;\n  border-top: 0.4rem solid #302e9b;\n  transform: translate3d(-1rem, -0.4rem, 0);\n  box-shadow: 0 -0.8rem 0 -0.4rem #fff;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(5):after {\n  width: 1.5rem;\n  height: 0.75rem;\n  border-radius: 50%;\n  box-shadow: -0.2rem 0.2rem 0 0 #302e9b;\n  transform: translate3d(-0.75rem, 1rem, 0) rotate(20deg);\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(6) {\n  width: 0.6rem;\n  height: 0.6rem;\n  background: #302e9b;\n  border-radius: 50%;\n  box-shadow: 0 0 0 0.5rem #fff, 0 0 0 0.8rem #302e9b;\n  transform: translate3d(16.6rem, 2.75rem, 0) rotate(5deg);\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(6):before {\n  width: 3.5rem;\n  height: 3rem;\n  border-radius: 50%;\n  border-top: 0.4rem solid #302e9b;\n  transform: translate3d(-1rem, -0.4rem, 0);\n  box-shadow: 0 -0.8rem 0 -0.4rem #fff;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(6):after {\n  width: 1rem;\n  height: 0.75rem;\n  border-radius: 50%;\n  box-shadow: 0 0.2rem 0 0 #302e9b;\n  transform: translate3d(-0.75rem, 1rem, 0) rotate(30deg);\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(3) {\n  width: 2rem;\n  height: 1.25rem;\n  background: #fff;\n  border-radius: 50%;\n  box-shadow: 0.3rem 0 0 0 #302e9b;\n  transform: translate3d(18.75rem, 6rem, 0) rotate(45deg);\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(3):before {\n  width: 4rem;\n  height: 4rem;\n  transform: translate3d(0.25rem, 0.25rem, 0);\n  box-shadow: -0.2rem -0.2rem 0 #302e9b;\n  border-radius: 1rem;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(3):after {\n  width: 1rem;\n  height: 1rem;\n  box-shadow: 0 -0.4rem 0 #302e9b;\n  transform: translate3d(3.25rem, 3.25rem, 0) rotate(-45deg);\n  border-radius: 50%;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(7) {\n  width: 0.6rem;\n  height: 0.6rem;\n  background: #302e9b;\n  border-radius: 50%;\n  box-shadow: 1rem 0 0 0 #302e9b, 0.5rem 0.3rem 0 0 #302e9b;\n  transform: translate3d(18.75rem, 8.5rem, 0);\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(7):after {\n  width: 3.2rem;\n  height: 0.5rem;\n  box-shadow: 0 -0.2rem 0 #302e9b;\n  transform: translate3d(-0.7rem, 0.4rem, 0);\n  border-radius: 50%;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(5) {\n  transform: translate3d(36rem, 5rem, 0);\n  border: 0.3rem solid #302e9b;\n  width: 2rem;\n  height: 3.85rem;\n  border-radius: 1rem;\n  background: #fff;\n  box-shadow: 0.75rem 0.3rem 0 -0.3rem #fff, 0.75rem 0.3rem 0 #302e9b, 1.75rem 0.5rem 0 -0.5rem #fff, 1.75rem 0.5rem 0 -0.2rem #302e9b, 2.65rem 0.6rem 0 -0.8rem #fff, 2.65rem 0.6rem 0 -0.4rem #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(5):before {\n  transform: translate3d(-1rem, -0.75rem, 0);\n  border: 0.5rem solid #302e9b;\n  border-bottom: none;\n  width: 1.65rem;\n  height: 4rem;\n  border-radius: 1rem 1rem 0 0;\n  background: #fff;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(5):after {\n  transform: translate3d(0, 3.5rem, 0);\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0 100% 0 0;\n  box-shadow: 0.3rem -0.3rem 0 #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(4) {\n  transform: translate3d(35.25rem, 6.5rem, 0);\n  border: 0.5rem solid #302e9b;\n  width: 4.75rem;\n  height: 5.5rem;\n  border-radius: 50%;\n  background: #fff;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(4):before {\n  transform: translate3d(4rem, -0.1rem, 0);\n  width: 2rem;\n  height: 2rem;\n  border-radius: 100%;\n  box-shadow: 0 0 0 0.5rem #302e9b, inset 0 -0.25rem 0 0.5rem #bdb725, inset 0 -0.5rem 0 1rem #302e9b;\n  background: #bdb725;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(4):after {\n  transform: translate3d(-1.5rem, -3rem, 0);\n  width: 1rem;\n  height: 7rem;\n  border-radius: 0.5rem;\n  box-shadow: 0 0 0 0.5rem #302e9b;\n  background: #bdb725;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(3) {\n  transform: translate3d(31.25rem, 6rem, 0);\n  border: 0.5rem solid #302e9b;\n  width: 3rem;\n  height: 3rem;\n  box-shadow: inset 0 0 0 0.5rem #fff, inset 0 0 0 1rem #302e9b, -3rem 0 0 0 #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(3):before {\n  transform: translate3d(4rem, 5rem, 0);\n  width: 3.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  box-shadow: 0 0 0 0.5rem #302e9b;\n  background: #bdb725;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(1) {\n  transform: translate3d(30rem, 13rem, 0);\n  height: 20rem;\n  width: 20rem;\n  background: #bdb725;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(1):before {\n  border-radius: 50%;\n  background: #fff;\n  width: 10rem;\n  height: 30rem;\n  box-shadow: -0.4rem 0.4rem 0 0 #302e9b, -12.5rem -1rem 0 0rem #fff, -12rem -1rem 0 0rem #302e9b;\n  transform: translate3d(9rem, -22rem, 0);\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(1):after {\n  background: #fff;\n  width: 30rem;\n  height: 20rem;\n  transform: translate3d(0rem, -20rem, 0);\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(1) > *:nth-of-type(1) {\n  background: #b32b28;\n  border: 0.5rem solid #302e9b;\n  transform: translate3d(5rem, 9rem, 0) rotate(-40deg) skewY(-30deg);\n  width: 10rem;\n  height: 10rem;\n  box-shadow: 0 0 0 1rem #bdb725, 0 0 0 1.5rem #302e9b;\n  z-index: -1;\n  border-radius: 50% 0;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(1) > *:nth-of-type(1):before {\n  background: #b32b28;\n  border: 0.5rem solid #302e9b;\n  transform: translate3d(-4rem, -5.5rem, 0) rotate(20deg) skewY(0deg);\n  width: 10rem;\n  height: 10rem;\n  box-shadow: 0 0 0 1rem #bdb725, 0 0 0 1.5rem #302e9b;\n  border-radius: 50% 0;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(1) > *:nth-of-type(1):after {\n  background: #302e9b;\n  transform: translate3d(11.75rem, -11.75rem, 0) rotate(15deg) skewY(0deg);\n  width: 10rem;\n  height: 10rem;\n  box-shadow: 0 0 0 0.5rem #bdb725, 0 0 0 1rem #302e9b;\n  border-radius: 50% 0;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) {\n  border: 0.5rem solid #302e9b;\n  transform: translate3d(-6.5rem, 16rem, 0);\n  width: 56rem;\n  height: 43rem;\n  border-radius: 50% 48%;\n  box-shadow: inset 0 0 0 1rem #bdb725, inset 0 0 0 4.5rem #302e9b, inset 0 0 0 5rem #bdb725, inset 0 0 0 5.5rem #302e9b;\n  background: linear-gradient(#b32b28, #b32b28 50%, #fff 50%, #fff);\n  background-size: 100% 1rem;\n  overflow: hidden;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2):before {\n  width: 2rem;\n  height: 2rem;\n  background: #bdb725;\n  transform: translate3d(45.75rem, 31.4rem, 0);\n  box-shadow: -2.5rem 2rem 0 0 #bdb725, -5.5rem 4rem 0 0 #bdb725;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2):after {\n  width: 2rem;\n  height: 2rem;\n  background: #190d23;\n  transform: translate3d(45.7rem, 31.3rem, 0) rotate(-45deg);\n  box-shadow: inset 0 0 0 0.55rem #bdb725, -3.25rem -0.25rem 0 -0.55rem #190d23, -3.25rem -0.25rem 0 0 #bdb725, -6.75rem -1rem 0 -0.55rem #190d23, -6.75rem -1rem 0 0 #bdb725;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(2) {\n  width: 50rem;\n  height: 60rem;\n  border: 5rem solid #fff;\n  border-left-width: 3rem;\n  transform: translate3d(30rem, -9rem, 0);\n  box-shadow: inset 0 0 0 0.5rem #302e9b, 0 0 0 0.5rem #302e9b;\n  border-radius: 50%;\n  overflow: hidden;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(2):before {\n  width: 40rem;\n  height: 31rem;\n  background: #b32b28;\n  box-shadow: inset 5rem 14rem 0 0 #302e9b, inset 0 14.9rem 0 0 #bdb725, inset 0 15.3rem 0 0 #302e9b;\n  transform: translate3d(0, 0, 0);\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(2):after {\n  width: 2rem;\n  background: #bdb725;\n  height: 30rem;\n  transform: translate3d(10.5rem, 0rem, 0);\n  border: solid 0.5rem #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(1) {\n  width: 24rem;\n  height: 24rem;\n  border: 1rem solid #190d23;\n  transform: translate3d(-15rem, 6rem, 0);\n  border-radius: 50%;\n  box-shadow: inset 0 0 0 1rem #bdb725, inset 0 0 0 1.5rem #190d23, inset 0 0 0 3.5rem #fff, inset 0 0 0 4rem #190d23, inset 0 0 0 4.5rem #bdb725, inset 0 0 0 5rem #190d23;\n  background: linear-gradient(#b32b28, #b32b28 50%, #fff 50%, #fff);\n  background-size: 100% 1rem;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(1):before {\n  width: 18rem;\n  height: 18rem;\n  border: 1rem dotted #b32b28;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n  border-radius: 50%;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(1):after {\n  width: 5rem;\n  height: 5rem;\n  transform: translate3d(29rem, 5rem, 0) rotate(45deg);\n  background: #b32b28;\n  box-shadow: 0 0 0 0.4rem #302e9b, 0 0 0 0.9rem #bdb725, 0 0 0 1.1rem #302e9b, 0 0 0 1.6rem #bdb725, 0 0 0 2rem #302e9b, 4rem 4rem 0 0 #b32b28, 4rem 4rem 0 0.4rem #302e9b, 4rem 4rem 0 0.9rem #bdb725, 4rem 4rem 0 1.1rem #302e9b, 4rem 4rem 0 1.6rem #bdb725, 4rem 4rem 0 2rem #302e9b, 8rem 8rem 0 0 #b32b28, 8rem 8rem 0 0.4rem #302e9b, 8rem 8rem 0 0.9rem #bdb725, 8rem 8rem 0 1.1rem #302e9b, 8rem 8rem 0 1.6rem #bdb725, 8rem 8rem 0 2rem #302e9b, -4rem -4rem 0 0 #b32b28, -4rem -4rem 0 0.4rem #302e9b, -4rem -4rem 0 0.9rem #bdb725, -4rem -4rem 0 1.1rem #302e9b, -4rem -4rem 0 1.6rem #bdb725, -4rem -4rem 0 2rem #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(1) {\n  width: 16rem;\n  height: 53rem;\n  transform: translate3d(20rem, 0rem, 0);\n  overflow: hidden;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(1):before {\n  height: 20rem;\n  width: 35rem;\n  background: #b32b28;\n  transform: translate3d(-10rem, -10rem, 0) rotate(-45deg);\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(1):after {\n  height: 5rem;\n  width: 30rem;\n  background: #fff;\n  transform: translate3d(-10rem, 10rem, 0) rotate(-45deg);\n  border: 0.5rem solid #fff;\n  box-shadow: inset 0 0 0 0.4rem #302e9b, 0 0 0 0.4rem #302e9b;\n  background: #fff;\n  background-image: radial-gradient(#b32b28 25%, #bdb725 35%, #190d23 45%, transparent 0), radial-gradient(#b32b28 25%, #bdb725 35%, #190d23 45%, transparent 0);\n  background-size: 6rem 6rem;\n  background-position: 0 0, 3rem 3rem;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(1) > *:nth-of-type(1) {\n  transform: translate3d(0rem, 18rem, 0);\n  background: #302e9b;\n  height: 5rem;\n  width: 20rem;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(1) > *:nth-of-type(1):before {\n  height: 20rem;\n  width: 35rem;\n  background: #b32b28;\n  transform: translate3d(-10rem, 15rem, 0) rotate(-45deg);\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(1) > *:nth-of-type(1):after {\n  height: 5rem;\n  width: 30rem;\n  background: #fff;\n  transform: translate3d(-10rem, 12rem, 0) rotate(-45deg);\n  border: 0.5rem solid #fff;\n  box-shadow: inset 0 0 0 0.4rem #302e9b, 0 0 0 0.4rem #302e9b;\n  background: #fff;\n  background-image: radial-gradient(#b32b28 25%, #bdb725 35%, #190d23 45%, transparent 0), radial-gradient(#b32b28 25%, #bdb725 35%, #190d23 45%, transparent 0);\n  background-size: 6rem 6rem;\n  background-position: 0 0, 3rem 3rem;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(3) {\n  width: 50rem;\n  height: 60rem;\n  border: 2rem dotted #302e9b;\n  transform: translate3d(31rem, -9rem, 0);\n  border-radius: 50%;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(9) {\n  width: 50rem;\n  height: 37rem;\n  transform: translate3d(25rem, 19rem, 0);\n  overflow: hidden;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(9):after {\n  width: 50rem;\n  height: 53rem;\n  transform: translate3d(2rem, -8rem, 0);\n  box-shadow: inset 0 0 0 0.5rem #302e9b, 0 0 0 1rem #fff;\n  border-radius: 50%;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(9):before {\n  width: 15rem;\n  background: #190d23;\n  height: 2rem;\n  transform: translate3d(8.5rem, 0, 0) skewX(-35deg);\n  box-shadow: 0 0 0 0.5rem #302e9b, 0 0 0 1rem #190d23, 0 0 0 1.5rem #bdb725;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(12) {\n  transform: translate3d(-1rem, 21.5rem, 0);\n  width: 45rem;\n  height: 32rem;\n  border-radius: 50%;\n  overflow: hidden;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(12):before {\n  width: 20rem;\n  height: 8rem;\n  background: repeating-linear-gradient(-45deg, #302e9b, #302e9b 0.2rem, rgba(255, 255, 255, 0) 0.2rem, rgba(255, 255, 255, 0) 1rem), #bdb725;\n  transform: translate3d(38rem, 19rem, 0);\n  border: 0.5rem solid #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(12):after {\n  width: 2.5rem;\n  height: 5rem;\n  transform: translate3d(33.5rem, 20.25rem, 0);\n  background: #bdb725;\n  border: 0.4rem solid #302e9b;\n  border-radius: 50%;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(13) {\n  transform: translate3d(28.5rem, 46rem, 0);\n  border: 0.4rem solid #302e9b;\n  border-top: none;\n  width: 4.25rem;\n  height: 2rem;\n  border-radius: 1.5rem 0 100% 0.75rem;\n  background: #fff;\n  box-shadow: 0.75rem -1rem 0 #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(13):before {\n  transform: translate3d(-4rem, -2rem, 0);\n  border: 0.4rem solid #302e9b;\n  border-right: none;\n  width: 5.5rem;\n  height: 1.8rem;\n  border-radius: 1rem 0 0 1rem;\n  background: #fff;\n  box-shadow: 0.7rem 1rem 0 -0.4rem #fff, 0.3rem 1.4rem 0 -0.4rem #302e9b, 0.8rem -1.3rem 0 -0.5rem #fff, 0.8rem -1.3rem 0 -0.1rem #302e9b, 1.8rem -2.3rem 0 -0.6rem #fff, 1.8rem -2.3rem 0 -0.2rem #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(13):after {\n  transform: translate3d(1rem, -4.2rem, 0);\n  width: 4rem;\n  height: 4.5rem;\n  border-radius: 0 100% 100% 0;\n  border: 0.4rem solid #302e9b;\n  border-left: none;\n  border-bottom: none;\n  background: #fff;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(10) {\n  width: 10rem;\n  height: 8rem;\n  transform: translate3d(32.5rem, 40.5rem, 0);\n  overflow: hidden;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(10):before {\n  border-radius: 50%;\n  transform: translate3d(-2.5rem, -2.5rem, 0);\n  width: 7.5rem;\n  height: 5rem;\n  border: 0.5rem solid #302e9b;\n  box-shadow: 0 0 0 1rem #bdb725;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(10):after {\n  border-radius: 50%;\n  transform: translate3d(-2.5rem, 5rem, 0);\n  width: 7.5rem;\n  height: 6rem;\n  border: 0.5rem solid #302e9b;\n  box-shadow: 0 0 0 1rem #bdb725;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(11) {\n  width: 10rem;\n  height: 4rem;\n  transform: translate3d(33.75rem, 42.2rem, 0) scaleY(0.7);\n  overflow: hidden;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(11):after {\n  width: 2.5rem;\n  height: 2.5rem;\n  transform: translate3d(0rem, 0.5rem, 0) rotate(45deg);\n  background: #302e9b;\n  border: 0.75rem solid #bdb725;\n  box-shadow: 0 0 0 0.5rem #302e9b, 0 0 0 2rem #bdb725;\n}\nfront > *:nth-of-type(2) {\n  transform: rotate(180deg);\n}\nfront > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(2) {\n  background: none;\n  border: none;\n  box-shadow: none;\n}\nfront > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(2):before {\n  transform: translate3d(45.75rem, 32.4rem, 0);\n}\nfront > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(2):after {\n  transform: translate3d(45.7rem, 32.3rem, 0) rotate(-45deg);\n}\nfront > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(1) {\n  display: none;\n}\n</style>\n\n<div class=\"header\">\n  <div class=\"header-inner\">\n    <div class=\"back-btn\" onclick=\"javascript: history.back()\">\n      <div class=\"back-icon\"></div>\n      <span class=\"back-text\">返回</span>\n    </div>\n  </div>\n</div>\n<screen>\n  <hoverspace></hoverspace>\n  <shadow></shadow>\n  <card>\n      <back></back>\n      <front>\n          <!--up-->\n          <x>\n              <x></x>\n              <x>\n                  <x> <x></x> </x>\n                  <!--body-->\n                  <x>\n                      <!--shirt-->\n                      <x> <x></x> <x></x> </x>\n                      <!--coat-->\n                      <x> <x></x> </x>\n                      <x></x>\n                  </x>\n                  <x></x> <x></x> <x></x> <x></x>\n                  <x> <x></x> <x></x> <x></x> <x></x> <x></x> <x></x> <x></x> <x></x> </x>\n                  <x></x> <x></x> <x></x> <x></x> <x></x> <x></x>\n              </x>\n          </x>\n          <!--down-->\n          <x>\n              <x></x>\n              <x>\n                  <x> <x></x> </x>\n                  <!--body-->\n                  <x>\n                      <!--shirt-->\n                      <x> <x></x> <x></x> </x>\n                      <!--coat-->\n                      <x> <x></x> </x> <x></x>\n                  </x>\n                  <x></x> <x></x> <x></x> <x></x>\n                  <x> <x></x> <x></x> <x></x> <x></x> <x></x> <x></x> <x></x> <x></x> </x>\n                  <x></x> <x></x> <x></x> <x></x> <x></x> <x></x>\n              </x>\n          </x>\n      </front>\n  </card>\n</screen>"

/***/ }),

/***/ "./docs/frameworks/html.html":
/*!***********************************!*\
  !*** ./docs/frameworks/html.html ***!
  \***********************************/
/***/ ((module) => {

module.exports = "<app-nav></app-nav>\n"

/***/ }),

/***/ "./docs/home/html.html":
/*!*****************************!*\
  !*** ./docs/home/html.html ***!
  \*****************************/
/***/ ((module) => {

module.exports = "<html>\n  <head>\n    <style>\n      html, body {\n        margin: 0;\n        background: var(--background, #000);\n      }\n      body {\n        margin: 0 8px;\n      }\n      #figure {\n        margin: 0;\n        padding-bottom: 12px;\n        overflow: hidden;\n      }\n      @import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");\n      #figure-container {\n        position: relative;\n        width: 100%;\n        margin: 60px 0;\n        font-family: \"Montserrat\", sans-serif;\n        color: var(--logoText, #fff);\n        font-size: 120px;\n        transition: transform 0.3s ease;\n      }\n\n      @media screen and (max-width: 700px) {\n        #figure-container {\n          zoom: .7;\n        }\n      }\n\n      @media screen and (max-width: 360px) {\n        #figure-container {\n          zoom: .6;\n        }\n      }\n      .subtitle {\n        position: relative;\n        margin-top: 20px;\n        width: 100%;\n        text-align: center;\n        z-index: 9;\n        color: rgba(255, 255, 255, .3);\n        font-size: 12px;\n        -webkit-font-smoothing: antialiased;\n      }\n      .placeholder {\n        height: var(--application-safe-area-top)\n      }\n      .card {\n        min-height: 100px;\n        max-width: 500px;\n        margin: auto;\n        margin-bottom: 12px;\n        border-radius: 12px;\n        border: 0.5px solid rgba(255, 255, 255, .05);\n        background: var(--cardbg, rgba(255, 255, 255, .1));\n      }\n      .card-title {\n        font-size: 28px;\n        padding: 5px 20px;\n        color: rgba(255, 255, 255, .3);\n        -webkit-font-smoothing: antialiased;\n      }\n      .card-list {\n        padding: 0;\n        margin: 0;\n      }\n      .card-list a {\n        display: block;\n        position: relative;\n        font-size: 18px;\n        padding: 15px 20px;\n        list-style: none;\n        font-weight: 400;\n        color: var(--cardTextColor, rgba(255, 255, 255, .92));\n        border-bottom: 0.5px solid rgba(255, 255, 255, .2);\n        align-content: space-between;\n        cursor: pointer;\n        text-decoration: none;\n      }\n\n      .card-list a:hover {\n        background: rgba(255, 255, 255, .1);\n      }\n\n      @media (pointer: coarse) {\n        .card-list a:hover {\n          background: none;\n        }\n      }\n      .card-list a:last-child {\n        border-bottom: 0;\n        border-bottom-left-radius: 12px;\n        border-bottom-right-radius: 12px;\n      }\n      .card-list a:after {\n        position: absolute;\n        right: 15px;\n        top: 50%;\n        content: ' ';\n        display: block;\n        width: 20px;\n        height: 20px;\n        margin-top: -10px;\n        background-image: url(\"data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyBmaWxsPScjY2NjY2NjJyB2ZXJzaW9uPScxLjEnIGlkPSflm77lsYJfMScgeD0nMHB4JyB5PScwcHgnIHZpZXdCb3g9JzAgMCA1NCA1NCcgZW5hYmxlLWJhY2tncm91bmQ9J25ldyAwIDAgNTQgNTQnIHhtbDpzcGFjZT0ncHJlc2VydmUnPjxzY3JpcHQgeG1sbnM9JycgdHlwZT0ndGV4dC9qYXZhc2NyaXB0JyBjcm9zc29yaWdpbj0nYW5vbnltb3VzJy8+PHBhdGggZD0nTTQ0LjYsMjguNWMwLTAuMSwwLjEtMC4xLDAuMS0wLjJjMC42LTEuMywwLjQtMi45LTAuNy0zLjlMMTkuMiwwLjljLTEuNC0xLjMtMy41LTEuMi00LjgsMC4xcy0xLjIsMy41LDAuMSw0LjhsMjIuMiwyMSBMMTQuNyw0OC4yYy0xLjMsMS4zLTEuNCwzLjQtMC4xLDQuOGMwLjcsMC43LDEuNSwxLDIuNCwxYzAuOCwwLDEuNy0wLjMsMi4zLTAuOWwyNC42LTIzLjdjMCwwLDAuMS0wLjEsMC4xLTAuMmMwLDAsMC4xLTAuMSwwLjEtMC4xIEM0NC4zLDI4LjksNDQuNCwyOC43LDQ0LjYsMjguNUw0NC42LDI4LjV6Jy8+PC9zdmc+\");\n      }\n      .card-list a span {\n        font-size: 13px;\n        color: rgba(255, 255, 255, .3);\n        -webkit-font-smoothing: antialiased;\n      }\n      @media screen and (max-width: 700px) {\n        .card-title {\n          font-size: 18px;\n        }\n        .card-list a {\n          font-size: 16px;\n        }\n        .card-list a:after {\n          width: 16px;\n          height: 16px;\n          margin-top: -8px;\n        }\n      }\n    </style>\n    <style>\n      body {\n        font-family: 'Lato', sans-serif;\n      }\n      h1 {\n        animation: glitch 3s steps(100) infinite;\n        color: #fff;\n        font-size: 150px;\n        text-align: center;\n        text-transform: uppercase;\n        line-height: 1;\n        margin: 0.5em 0;\n      }\n\n      @media (min-width: 480px) {\n        h1 {\n          font-size: 180px;\n        }\n      }\n\n      @keyframes glitch {\n        0% { text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5; filter: blur(0);}\n        1% { text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5; filter: blur(0);}\n        2% { text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5; filter: blur(0);}\n        3% { text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5; filter: blur(0);}\n        4% { text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5; filter: blur(0);}\n        5% { text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5; filter: blur(0);}\n        6% { text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5; filter: blur(0);}\n        7% { text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5; filter: blur(0);}\n        8% { text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5; filter: blur(0);}\n        9% { text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5; filter: blur(0);}\n        10% { text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5; filter: blur(0);}\n        11% { text-shadow: 1px 0 0 red, -1px 0 0 lime; filter: blur(0.5px);}\n        12% { text-shadow: 1px 0 0 red, -1px 0 0 lime; filter: blur(0.5px);}\n        13% { text-shadow: 1px 0 0 red, -1px 0 0 lime; filter: blur(0.5px);}\n        14% { text-shadow: 1px 0 0 red, -1px 0 0 lime; filter: blur(0);}\n        15% { text-shadow: 1px 0 0 red, -1px 0 0 lime; filter: blur(0);}\n        16% { text-shadow: -3px 0 0 red, 3px 0 0 lime; filter: blur(0);}\n        17% { text-shadow: -3px 0 0 red, 3px 0 0 lime; filter: blur(0);}\n        18% { text-shadow: -3px 0 0 red, 3px 0 0 lime; filter: blur(0);}\n        19% { text-shadow: -3px 0 0 red, 3px 0 0 lime; filter: blur(0);}\n        20% { text-shadow: -3px 0 0 red, 3px 0 0 lime; filter: blur(0);}\n        21% { text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime; filter: blur(0);}\n        22% { text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime; filter: blur(0);}\n        23% { text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime; filter: blur(0);}\n        24% { text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime; filter: blur(0);}\n        25% { text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime; filter: blur(0);}\n        26% { text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime; filter: blur(0.5px);}\n        27% { text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime; filter: blur(0.5px);}\n        28% { text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime; filter: blur(0);}\n        29% { text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime; filter: blur(0);}\n        30% { text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime; filter: blur(0);}\n        31% { text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime; filter: blur(0);}\n        32% { text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime; filter: blur(0);}\n        33% { text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime; filter: blur(0);}\n        34% { text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime; filter: blur(0);}\n        35% { text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime; filter: blur(0.5px);}\n        36% { text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime; filter: blur(0.5px);}\n        37% { text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime; filter: blur(0.5px);}\n        38% { text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime; filter: blur(0);}\n        39% { text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime; filter: blur(0);}\n        40% { text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime; filter: blur(0);}\n        41% { text-shadow: 45px 0 0 #0c33f5, -45px 0 0 lime; filter: blur(0);}\n        42% { text-shadow: 0 0 0 #0c33f5, 0 0 0 lime; filter: blur(0);}\n        43% { text-shadow: 1px 0 0 red, -1px 0 0 lime; filter: blur(0);}\n        44% { text-shadow: 1px 0 0 red, -1px 0 0 lime; filter: blur(0);}\n        45% { text-shadow: 1px 0 0 red, -1px 0 0 lime; filter: blur(0);}\n        46% { text-shadow: 1px 0 0 red, -1px 0 0 lime; filter: blur(0.5px);}\n        47% { text-shadow: -3px 0 0 red, 3px 0 0 lime; filter: blur(0.5px);}\n        48% { text-shadow: -3px 0 0 red, 3px 0 0 lime; filter: blur(0);}\n        49% { text-shadow: -3px 0 0 red, 3px 0 0 lime; filter: blur(0);}\n        50% { text-shadow: -3px 0 0 red, 3px 0 0 lime; filter: blur(0);}\n        51% { text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5; filter: blur(0);}\n        52% { text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5; filter: blur(0);}\n        53% { text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5; filter: blur(0);}\n        54% { text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5; filter: blur(0);}\n        55% { text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5; filter: blur(0.5px);}\n        56% { text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5; filter: blur(0.5px);}\n        57% { text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5; filter: blur(0.5px);}\n        58% { text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5; filter: blur(0);}\n        59% { text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5; filter: blur(0);}\n        60% { text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5; filter: blur(0);}\n        61% { text-shadow: 30px 0 0 red, -30px 0 0 lime; filter: blur(0);}\n        62% { text-shadow: 0 0 0 red, 0 0 0 lime; filter: blur(0);}\n        63% { text-shadow: 1px 0 0 red, -1px 0 0 #0c33f5; filter: blur(0);}\n        64% { text-shadow: 1px 0 0 red, -1px 0 0 #0c33f5; filter: blur(0);}\n        65% { text-shadow: 1px 0 0 red, -1px 0 0 #0c33f5; filter: blur(0);}\n        66% { text-shadow: 1px 0 0 red, -1px 0 0 #0c33f5; filter: blur(0.5px);}\n        67% { text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5; filter: blur(0.5px);}\n        68% { text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5; filter: blur(0);}\n        69% { text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5; filter: blur(0);}\n        70% { text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5; filter: blur(0);}\n        71% { text-shadow: 50px 0 0 red, -50px 0 0 #0c33f5; filter: blur(0);}\n        72% { text-shadow: 0 0 0 red, 0 0 0 #0c33f5; filter: blur(0);}\n        73% { text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5; filter: blur(0);}\n        74% { text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5; filter: blur(0);}\n        75% { text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5; filter: blur(0);}\n        76% { text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5; filter: blur(0);}\n        77% { text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5; filter: blur(0);}\n        78% { text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5; filter: blur(0);}\n        79% { text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5; filter: blur(0);}\n        80% { text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5; filter: blur(0);}\n        81% { text-shadow: 1px 0 0 red, -1px 0 0 lime; filter: blur(0);}\n        82% { text-shadow: 1px 0 0 red, -1px 0 0 lime; filter: blur(0);}\n        83% { text-shadow: 1px 0 0 red, -1px 0 0 lime; filter: blur(0.5px);}\n        84% { text-shadow: 1px 0 0 red, -1px 0 0 lime; filter: blur(0.5px);}\n        85% { text-shadow: 1px 0 0 red, -1px 0 0 lime; filter: blur(0.5px);}\n        86% { text-shadow: -3px 0 0 red, 3px 0 0 lime; filter: blur(0.5px);}\n        87% { text-shadow: -3px 0 0 red, 3px 0 0 lime; filter: blur(0.5px);}\n        88% { text-shadow: -3px 0 0 red, 3px 0 0 lime; filter: blur(0);}\n        89% { text-shadow: -3px 0 0 red, 3px 0 0 lime; filter: blur(0);}\n        90% { text-shadow: -3px 0 0 red, 3px 0 0 lime; filter: blur(0);}\n        91% { text-shadow: 60px 0 0 lime, -60px 0 0 #0c33f5; filter: blur(0);}\n        92% { text-shadow: 0 0 0 lime, 0 0 0 #0c33f5; filter: blur(0);}\n        92% { text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime; filter: blur(0);}\n        93% { text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime; filter: blur(0);}\n        94% { text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime; filter: blur(0);}\n        95% { text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime; filter: blur(0);}\n        96% { text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime; filter: blur(0);}\n        97% { text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime; filter: blur(0);}\n        98% { text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime; filter: blur(0);}\n        99% { text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime; filter: blur(0);}\n        100% { text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime; filter: blur(0);}\n      }\n\n    </style>\n    <script>\n      document.addEventListener(\"DOMContentLoaded\", () => {\n        const figure = document.getElementById(\"figure-container\");\n        window.addEventListener('scroll', (event) => {\n          figure.style.transform = `scale(${window.scrollY > 40 ? 1.3 : 1})`\n        })\n      })\n      const _to = (id) => {\n        window.parent.postMessage({ action: 'to', data: { module: id } }, '*')\n      }\n    </script>\n  </head>\n  <body>\n    <div class=\"placeholder\"></div>\n    <figure id=\"figure\">\n      <div id=\"figure-container\">\n        <h1>Lath</h1>\n      </div>\n      <div class=\"subtitle\">一个页面无缝连接容器</div>\n    </figure>\n    <div class=\"card\">\n      <div class=\"card-title\">Start</div>\n      <div class=\"card-list\">\n        <a href=\"?id=install#doc\">Install</a>\n        <a href=\"?id=start#doc\">Start</a>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-title\">Base</div>\n      <div class=\"card-list\">\n        <a href=\"?id=rel#doc\">Rel</a>\n        <a href=\"?id=title#doc\">Title</a>\n        <a href=\"?id=source#doc\">Source</a>\n        <a href=\"?id=index#doc\">Index</a>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-title\">Viewport</div>\n      <div class=\"card-list\">\n        <a href=\"?id=free#doc\">Free</a>\n        <a href=\"?id=level#doc\">Level</a>\n        <a href=\"?id=color#doc\">Color</a>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-title\">Animate Effect</div>\n      <div class=\"card-list\">\n        <a href=\"?id=preset#doc\">Slide</a>\n        <a href=\"?id=preset#doc\" preset-effect=\"slide-right\" clone-as=\"doc-right\">SlideRight</a>\n        <a href=\"?id=preset#doc\" preset-effect=\"slide-up\" clone-as=\"doc-up\">SlideUp</a>\n        <a href=\"?id=preset#doc\" preset-effect=\"slide-down\" clone-as=\"doc-down\">SlideDown</a>\n        <a href=\"?id=preset#doc\" preset-effect=\"zoom\" clone-as=\"doc-zoom\">Zoom</a>\n        <a href=\"?id=preset#doc\" preset-effect=\"flip\" clone-as=\"doc-flip\">Flip</a>\n        <a href=\"?id=preset#doc\" preset-effect=\"flip-left\" clone-as=\"doc-flip-left\">FlipLeft</a>\n        <a href=\"?id=preset#doc\" preset-effect=\"flip-right\" clone-as=\"doc-flip-right\">FlipRight</a>\n        <a href=\"?id=preset#doc\" preset-effect=\"flip-up\" clone-as=\"doc-flip-up\">FlipUp</a>\n        <a href=\"?id=preset#doc\" preset-effect=\"flip-down\" clone-as=\"doc-flip-down\">FlipDown</a>\n        <a href=\"?id=customEffect#doc\" preset-effect=\"slide\" clone-as=\"doc-flip-down\">Custom Effect</a>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-title\">Lifecycle</div>\n      <ul class=\"card-list\">\n        <a href=\"?id=background#doc\">Background</a>\n        <a href=\"?id=timeout#doc\">Timeout</a>\n        <a href=\"?id=limit#doc\">Limit</a>\n      </ul>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-title\">Performance</div>\n      <ul class=\"card-list\">\n        <a href=\"?id=resource#doc\">Resource</a>\n        <a href=\"?id=prerender#doc\">Prerender</a>\n        <a href=\"?id=components#doc\">Components</a>\n        <a href=\"?id=mediaGuard#doc\">MediaGuard</a>\n        <a href=\"?id=portals#doc\">Portals</a>\n        <a href=\"?id=Runaway#doc\">Runaway</a>\n      </ul>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-title\">Safest</div>\n      <ul class=\"card-list\">\n        <a href=\"?id=allowHost#doc\">AllowHost</a>\n        <a href=\"?id=sandbox#doc\">Sandbox</a>\n        <a href=\"?id=capture#doc\">Capture</a>\n      </ul>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-title\">Other</div>\n      <ul class=\"card-list\">\n        <a href=\"?id=apply#doc\">Apply</a>\n        <a href=\"?id=events#doc\">Events</a>\n        <a href=\"?id=preindex#doc\">Preindex</a>\n        <a href=\"?id=notFind#doc\">NotFind</a>\n        <a href=\"?id=singleFlow#doc\">SingleFlow</a>\n        <a href=\"?id=singleLock#doc\">SingleLock</a>\n        <a href=\"?id=holdBack#doc\">HoldBack</a>\n        <a href=\"?id=transient#doc\">Transient</a>\n      </ul>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-title\">Advance</div>\n      <ul class=\"card-list\">\n        <a href=\"?id=moduleManifestProcess#doc\">ModuleManifestProcess</a>\n        <a href=\"?id=touchBorder#doc\">TouchBorder</a>\n        <a href=\"?id=inject#doc\">Inject</a>\n        <a href=\"?id=render#doc\">Render</a>\n        <a href=\"?id=safeArea#doc\">SafeArea</a>\n        <a href=\"?id=globalCSSVariables#doc\">GlobalCSSVariables</a>\n      </ul>\n    </div>\n  </body>\n</html>\n"

/***/ }),

/***/ "./docs/components/app-logo/index.ts":
/*!*******************************************!*\
  !*** ./docs/components/app-logo/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppLogo": () => (/* binding */ AppLogo)
/* harmony export */ });
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.html */ "./docs/components/app-logo/template.html");
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_template_html__WEBPACK_IMPORTED_MODULE_0__);

// using a template so it only needs to be parsed once, whereas setting
// innerHTML directly in the custom element ctor means the HTML would get parsed
// for every custom element on the page
const tmpl = document.createElement('template');
tmpl.innerHTML = (_template_html__WEBPACK_IMPORTED_MODULE_0___default());
class AppLogo extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(tmpl.content.cloneNode(true));
    }
}
customElements.define('app-logo', AppLogo);


/***/ }),

/***/ "./docs/components/app-nav/index.ts":
/*!******************************************!*\
  !*** ./docs/components/app-nav/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppNav": () => (/* binding */ AppNav)
/* harmony export */ });
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.html */ "./docs/components/app-nav/template.html");
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_template_html__WEBPACK_IMPORTED_MODULE_0__);

const tmpl = document.createElement('template');
tmpl.innerHTML = `${(_template_html__WEBPACK_IMPORTED_MODULE_0___default())}`;
class AppNav extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(tmpl.content.cloneNode(true));
        /** @type {HTMLElement | null} */
        this.header = shadowRoot.getElementById('header');
        this.menuIcon = shadowRoot.getElementById('menu-icon');
        this.menuList = shadowRoot.getElementById('menu-list');
    }
    connectedCallback() {
        var _a, _b, _c;
        if (this.header !== null) {
            // this.header.addEventListener('click', this.handleMenuButtonClick)
        }
        this.upgradeProperty('hidden');
        (_a = this.menuIcon) === null || _a === void 0 ? void 0 : _a.addEventListener('opened', () => {
            var _a;
            (_a = this.menuList) === null || _a === void 0 ? void 0 : _a.setAttribute('open', '');
        });
        (_b = this.menuIcon) === null || _b === void 0 ? void 0 : _b.addEventListener('closed', () => {
            var _a;
            (_a = this.menuList) === null || _a === void 0 ? void 0 : _a.removeAttribute('open');
        });
        (_c = this.menuList) === null || _c === void 0 ? void 0 : _c.addEventListener('click', (event) => {
            const e = new CustomEvent('click', {
                detail: event
            });
            window.dispatchEvent(new CustomEvent('click', e));
            event.preventDefault();
            event.stopPropagation();
        });
    }
    upgradeProperty(prop) {
        if (this.hasOwnProperty(prop)) {
            let value = this[prop];
            delete this[prop];
            this[prop] = value;
        }
    }
    get hidden() {
        return this.hasAttribute('hidden');
    }
    set hidden(isHidden) {
        if (isHidden) {
            if (!this.hasAttribute('hidden')) {
                this.setAttribute('hidden', '');
            }
        }
        else {
            if (this.hasAttribute('hidden')) {
                this.removeAttribute('hidden');
            }
        }
    }
    static get observedAttributes() {
        return ['hidden'];
    }
    /**
     * @param {string} _name
     * @param {any} _oldValue
     * @param {any} _newValue
     * @memberof WcMenuButton
     */
    attributeChangedCallback(name, _oldValue, _newValue) {
        if (name === 'hidden') {
            if (!this.hidden) {
                this.dispatchEvent(new CustomEvent('hidden', {
                    bubbles: true
                }));
            }
            else {
                this.dispatchEvent(new CustomEvent('visible', {
                    bubbles: true
                }));
            }
        }
    }
}
customElements.define('app-nav', AppNav);


/***/ }),

/***/ "./docs/components/code-highlight/index.ts":
/*!*************************************************!*\
  !*** ./docs/components/code-highlight/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScopeCodeHighlighter": () => (/* binding */ ScopeCodeHighlighter)
/* harmony export */ });
/* harmony import */ var _Prism__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Prism */ "./docs/components/code-highlight/Prism.js");
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.html */ "./docs/components/code-highlight/template.html");
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_template_html__WEBPACK_IMPORTED_MODULE_1__);


const tmpl = document.createElement('template');
tmpl.innerHTML = `${(_template_html__WEBPACK_IMPORTED_MODULE_1___default())}`;
const ScopeCodeHighlighter = (w) => {
    class CodeHighlighter extends w.HTMLElement {
        constructor() {
            var _a, _b, _c;
            super();
            const shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.appendChild(tmpl.content.cloneNode(true));
            const ele = shadowRoot.getElementById('code');
            const lang = this.getAttribute('type');
            let codeText = (_b = (_a = this.childNodes[0]) === null || _a === void 0 ? void 0 : _a.wholeText) !== null && _b !== void 0 ? _b : '';
            const trimstr = ((_c = /^\s+/.exec(codeText)) === null || _c === void 0 ? void 0 : _c[0]) || '';
            const trimlength = trimstr.length;
            codeText = codeText.replace(/\n\s+/g, function (trims) {
                trims = '\n' + trims.substr(trimlength);
                return trims;
            });
            codeText = codeText.trim();
            if (this.offsetTop === 0) {
                setTimeout(() => {
                    _Prism__WEBPACK_IMPORTED_MODULE_0__["default"].highlightCode(ele, codeText, lang !== null && lang !== void 0 ? lang : 'js');
                }, 100);
                return;
            }
            _Prism__WEBPACK_IMPORTED_MODULE_0__["default"].highlightCode(ele, codeText, lang !== null && lang !== void 0 ? lang : 'js');
        }
        connectedCallback() {
            //
        }
        static get observedAttributes() {
            return [''];
        }
    }
    return CodeHighlighter;
};
// customElements.define('code-highlight', CodeHighlighter)


/***/ }),

/***/ "./docs/components/menu-icon/index.ts":
/*!********************************************!*\
  !*** ./docs/components/menu-icon/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuIcon": () => (/* binding */ MenuIcon)
/* harmony export */ });
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.html */ "./docs/components/menu-icon/template.html");
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_template_html__WEBPACK_IMPORTED_MODULE_0__);
(function () {
    if (
    // No Reflect, no classes, no need for shim because native custom elements
    // require ES2015 classes or Reflect.
    window.Reflect === undefined ||
        window.customElements === undefined ||
        // The webcomponentsjs custom elements polyfill doesn't require
        // ES2015-compatible construction (`super()` or `Reflect.construct`).
        window.customElements['polyfillWrapFlushCallback'])
        return;
    const BuiltInHTMLElement = HTMLElement;
    /**
     * With jscompiler's RECOMMENDED_FLAGS the function name will be optimized away.
     * However, if we declare the function as a property on an object literal, and
     * use quotes for the property name, then closure will leave that much intact,
     * which is enough for the JS VM to correctly set Function.prototype.name.
     */
    const wrapperForTheName = {
        'HTMLElement': /** @this {!Object} */ function HTMLElement() {
            return Reflect.construct(BuiltInHTMLElement, [], /** @type {!Function} */ (this.constructor));
        }
    };
    window.HTMLElement = wrapperForTheName['HTMLElement'];
    HTMLElement.prototype = BuiltInHTMLElement.prototype;
    HTMLElement.prototype.constructor = HTMLElement;
    Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
})();

// using a template so it only needs to be parsed once, whereas setting
// innerHTML directly in the custom element ctor means the HTML would get parsed
// for every custom element on the page
const tmpl = document.createElement('template');
tmpl.innerHTML = (_template_html__WEBPACK_IMPORTED_MODULE_0___default());
class MenuIcon extends HTMLElement {
    constructor() {
        super();
        this.handleMenuButtonClick = () => {
            this.open = !this.open;
        };
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(tmpl.content.cloneNode(true));
        /** @type {HTMLElement | null} */
        this._menuButton = shadowRoot.getElementById('m');
    }
    connectedCallback() {
        if (this._menuButton !== null) {
            this._menuButton.addEventListener('click', this.handleMenuButtonClick);
        }
        this.upgradeProperty('open');
    }
    // from https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
    /**
     * @param {string} prop
     *
     * @memberOf WcMenuButton
     */
    upgradeProperty(prop) {
        if (this.hasOwnProperty(prop)) {
            let value = this[prop];
            delete this[prop];
            this[prop] = value;
        }
    }
    get open() {
        return this.hasAttribute('open');
    }
    set open(isOpen) {
        if (isOpen) {
            if (!this.hasAttribute('open')) {
                this.setAttribute('open', '');
            }
        }
        else {
            if (this.hasAttribute('open')) {
                this.removeAttribute('open');
            }
        }
    }
    static get observedAttributes() {
        return ['open'];
    }
    /**
     * @param {string} _name
     * @param {any} _oldValue
     * @param {any} _newValue
     * @memberof WcMenuButton
     */
    attributeChangedCallback(_name, _oldValue, _newValue) {
        if (_name === 'open') {
            if (!this.open) {
                this.dispatchEvent(new CustomEvent('closed', {
                    bubbles: true
                }));
            }
            else {
                this.dispatchEvent(new CustomEvent('opened', {
                    bubbles: true
                }));
            }
        }
    }
}
customElements.define('menu-icon', MenuIcon);


/***/ }),

/***/ "./docs/components/menu-list/index.ts":
/*!********************************************!*\
  !*** ./docs/components/menu-list/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuList": () => (/* binding */ MenuList)
/* harmony export */ });
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.html */ "./docs/components/menu-list/template.html");
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_template_html__WEBPACK_IMPORTED_MODULE_0__);

// using a template so it only needs to be parsed once, whereas setting
// innerHTML directly in the custom element ctor means the HTML would get parsed
// for every custom element on the page
const tmpl = document.createElement('template');
tmpl.innerHTML = (_template_html__WEBPACK_IMPORTED_MODULE_0___default());
class MenuList extends HTMLElement {
    constructor() {
        super();
        this.handleMenuButtonClick = () => {
            this.open = !this.open;
        };
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(tmpl.content.cloneNode(true));
        /** @type {HTMLElement | null} */
        this._menuButton = shadowRoot.getElementById('m');
    }
    connectedCallback() {
        if (this._menuButton !== null) {
            this._menuButton.addEventListener('click', this.handleMenuButtonClick);
        }
        this.upgradeProperty('open');
    }
    // from https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
    /**
     * @param {string} prop
     *
     * @memberOf WcMenuButton
     */
    upgradeProperty(prop) {
        if (this.hasOwnProperty(prop)) {
            let value = this[prop];
            delete this[prop];
            this[prop] = value;
        }
    }
    get open() {
        return this.hasAttribute('open');
    }
    set open(isOpen) {
        if (isOpen) {
            if (!this.hasAttribute('open')) {
                this.setAttribute('open', '');
            }
        }
        else {
            if (this.hasAttribute('open')) {
                this.removeAttribute('open');
            }
        }
    }
    static get observedAttributes() {
        return ['open'];
    }
    /**
     * @param {string} _name
     * @param {any} _oldValue
     * @param {any} _newValue
     * @memberof WcMenuButton
     */
    attributeChangedCallback(name, _oldValue, _newValue) {
        if (name === 'open') {
            if (!this.open) {
                this.dispatchEvent(new CustomEvent('closed', {
                    bubbles: true
                }));
            }
            else {
                this.dispatchEvent(new CustomEvent('opened', {
                    bubbles: true
                }));
            }
        }
    }
}
customElements.define('menu-list', MenuList);


/***/ }),

/***/ "./docs/doc/minify.ts":
/*!****************************!*\
  !*** ./docs/doc/minify.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _html_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html.html */ "./docs/doc/html.html");
/* harmony import */ var _html_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_html_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_code_highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/code-highlight */ "./docs/components/code-highlight/index.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    config: {
        level: 2,
        title: '',
        free: true,
        source: {
            html: (_html_html__WEBPACK_IMPORTED_MODULE_0___default())
        },
        animation: 'slide',
        color: '#000',
        background: 'auto',
        capture: (e) => {
            var _a;
            return ((_a = e.href) !== null && _a !== void 0 ? _a : String(e)).indexOf('doc') !== -1;
        }
    },
    components: [_components_code_highlight__WEBPACK_IMPORTED_MODULE_1__.ScopeCodeHighlighter]
});


/***/ }),

/***/ "./docs/empty/minify.ts":
/*!******************************!*\
  !*** ./docs/empty/minify.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _html_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html.html */ "./docs/empty/html.html");
/* harmony import */ var _html_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_html_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_code_highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/code-highlight */ "./docs/components/code-highlight/index.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    config: {
        level: 3,
        title: '',
        free: true,
        source: {
            html: (_html_html__WEBPACK_IMPORTED_MODULE_0___default())
        },
        animation: 'slideUp',
        color: '#bd243f',
        background: 'auto',
        capture: (e) => {
            var _a;
            return ((_a = e.href) !== null && _a !== void 0 ? _a : String(e)).indexOf('empty') !== -1;
        }
    },
    components: [_components_code_highlight__WEBPACK_IMPORTED_MODULE_1__.ScopeCodeHighlighter]
});


/***/ }),

/***/ "./docs/frameworks/minify.ts":
/*!***********************************!*\
  !*** ./docs/frameworks/minify.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _html_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html.html */ "./docs/frameworks/html.html");
/* harmony import */ var _html_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_html_html__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    config: {
        index: 'home',
        title: '',
        level: 0,
        free: false,
        prerender: ['home', 'empty', 'facebook', 'doc'],
        animation: 'slide',
        background: true,
        safeArea: ['48px', '0px', '0px', '0px'],
        render: (target) => {
            target.innerHTML = (_html_html__WEBPACK_IMPORTED_MODULE_0___default());
        },
        globalCSSVariables: {
            '--background': '#000',
            '--mainColor': '#fff'
        }
        // globalCSSVariables: {
        //   '--background': '#888',
        //   '--logoBg': '#fff',
        //   '--logoText': '#000',
        //   '--mainColor': '#000',
        //   '--cardbg': '#fff',
        //   '--cardTextColor': 'rgba(0, 0, 0, .92)'
        // }
    }
});


/***/ }),

/***/ "./docs/home/minify.ts":
/*!*****************************!*\
  !*** ./docs/home/minify.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _html_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html.html */ "./docs/home/html.html");
/* harmony import */ var _html_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_html_html__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    config: {
        level: 1,
        title: '',
        free: false,
        source: {
            html: (_html_html__WEBPACK_IMPORTED_MODULE_0___default())
        },
        animation: 'slide',
        color: '#000',
        background: 'auto'
    }
});


/***/ }),

/***/ "./docs/index.ts":
/*!***********************!*\
  !*** ./docs/index.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src */ "./src/index.ts");
/* harmony import */ var _frameworks_minify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frameworks/minify */ "./docs/frameworks/minify.ts");
/* harmony import */ var _home_minify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/minify */ "./docs/home/minify.ts");
/* harmony import */ var _doc_minify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doc/minify */ "./docs/doc/minify.ts");
/* harmony import */ var _empty_minify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./empty/minify */ "./docs/empty/minify.ts");
/* harmony import */ var _components_menu_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/menu-icon */ "./docs/components/menu-icon/index.ts");
/* harmony import */ var _components_app_nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/app-nav */ "./docs/components/app-nav/index.ts");
/* harmony import */ var _components_app_logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/app-logo */ "./docs/components/app-logo/index.ts");
/* harmony import */ var _components_menu_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/menu-list */ "./docs/components/menu-list/index.ts");
// import '../src/Runaway'
// const template = document.createElement('template')
// template.innerHTML = `
//   <run-away id="home">
//     <div slot="module">
//       <div>提前插入组件<div>
//     </div>
//   </run-away>
// `
// document.body.appendChild(template.content)









// docs
const app = _src__WEBPACK_IMPORTED_MODULE_0__.application;
app.setting({
    modules: {
        home: _home_minify__WEBPACK_IMPORTED_MODULE_2__["default"],
        frameworks: _frameworks_minify__WEBPACK_IMPORTED_MODULE_1__["default"],
        doc: _doc_minify__WEBPACK_IMPORTED_MODULE_3__["default"],
        empty: _empty_minify__WEBPACK_IMPORTED_MODULE_4__["default"]
    }
});
document.documentElement.style.background = '#000';
document.body.style.background = '#000';
app.start();
window['app'] = app;


/***/ }),

/***/ "./src/Application/base.ts":
/*!*********************************!*\
  !*** ./src/Application/base.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationBase": () => (/* binding */ ApplicationBase)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _proptey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proptey */ "./src/Application/proptey.ts");
/* harmony import */ var _init_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init-css */ "./src/Application/init-css.ts");



class ApplicationBase extends _proptey__WEBPACK_IMPORTED_MODULE_0__.ApplicationProptey {
    constructor() {
        var _a, _b;
        super();
        this.overscrollHistoryNavigatioMoment = 0;
        this.properties = {
            darkTheme: (_b = (_a = window.matchMedia) === null || _a === void 0 ? void 0 : _a.call(window, '(prefers-color-scheme: dark)')) === null || _b === void 0 ? void 0 : _b.matches
        };
        this.console = {
            echo: (type, pre, mid, suf) => {
                console[type]('%c ' +
                    (pre[0] ? pre[0] + ' ' : '') +
                    '%c ' + (mid[0] ? mid[0] + ' ' : '') +
                    '%c ' + (suf[0] ? suf[0] + ' ' : ''), 'color: #ffffff; background:' + pre[1], 'color: #ffffff; background:' + mid[1], 'color: #ffffff; background:' + (suf[0] ? suf[1] : mid[1]));
            },
            log: (message, title, description) => {
                this.console.echo('log', [title, '#999'], [message, '#333'], [description, '#666']);
            },
            info: (message, title, description) => {
                this.console.echo('info', [title, '#0cf'], [message, '#06c'], [description, '#0c0']);
            },
            warn: (message, title, description) => {
                this.console.echo('warn', [title, '#f60'], [message, '#f30'], [description, '#f90']);
            },
            error: (message, title, description) => {
                this.console.echo('warn', [title, '#f06'], [message, '#903'], [description, '#993']);
            }
        };
        this.setBaseCSS();
    }
    get route() {
        const router = this.routerRegExp.exec(location.hash) || [];
        const id = router[1];
        const param = router[2];
        const search = location.search;
        return {
            id: id ? decodeURIComponent(id) : '',
            param: param ? decodeURIComponent(param) : '',
            search
        };
    }
    get exists() {
        try {
            return parseInt(sessionStorage.getItem(location.pathname + '__EXISTS') || '-1', 10) === history.length;
        }
        catch (e) {
            return false;
        }
    }
    setBaseCSS() {
        const style = document.createElement('style');
        style.innerHTML = _init_css__WEBPACK_IMPORTED_MODULE_1__.BASE_CSS;
        document.getElementsByTagName('head')[0].appendChild(style);
    }
    resolveURL(url) {
        const link = new URL(url, window.location.toString());
        const linkObject = link;
        if (link.href === undefined) {
            linkObject.href = String(link);
        }
        return linkObject;
    }
    promiseModule(promise) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            try {
                resolve(yield promise());
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    moduleSrcVerify(url) {
        const capture = this.config.capture;
        if (capture)
            return this.moduleSrcCapture(url, capture);
        const allowHosts = this.config.allowHosts;
        if (!Array.isArray(allowHosts)) {
            this.console.warn('[Module.config.allowHosts] is not defined!', 'Security risks exist: ', '');
            return true;
        }
        const link = new URL(decodeURIComponent(url), window.location.toString());
        const linkHost = link.host;
        for (const host of allowHosts) {
            if (linkHost === host)
                return true;
        }
        return false;
    }
    moduleSrcCapture(url, capture = this.config.capture) {
        const resolve = this.resolveURL(url);
        const path = resolve.origin + resolve.pathname;
        if (typeof capture === 'string') {
            if (capture === path)
                return true;
        }
        else if (typeof capture === 'function') {
            if (capture(resolve, url))
                return true;
        }
        return false;
    }
    getModuleByURL(url) {
        const modules = this.modules;
        const resolve = this.resolveURL(url);
        const path = resolve.origin + resolve.pathname;
        for (const id in modules) {
            const module = modules[id];
            const capture = module.config.capture;
            if (this.moduleSrcCapture(url, capture))
                return module;
            if (module.uri === path)
                return module;
        }
        return;
    }
    setExists() {
        return new Promise((resolve, reject) => {
            try {
                sessionStorage.setItem(location.pathname + '__EXISTS', String(history.length));
                resolve();
            }
            catch (e) {
                reject();
            }
        });
    }
}



/***/ }),

/***/ "./src/Application/index.ts":
/*!**********************************!*\
  !*** ./src/Application/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Application": () => (/* binding */ Application)
/* harmony export */ });
/* harmony import */ var _Module_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Module/index */ "./src/Module/index.ts");
/* harmony import */ var _Transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Transform */ "./src/Transform/index.ts");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./src/Application/base.ts");
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./provider */ "./src/Application/provider.ts");




class Application extends _base__WEBPACK_IMPORTED_MODULE_2__.ApplicationBase {
    constructor() {
        super();
        this.transform = new _Transform__WEBPACK_IMPORTED_MODULE_1__.Transform(this);
        this.to = this.transform.to;
        (0,_provider__WEBPACK_IMPORTED_MODULE_3__["default"])(this);
    }
    get activeModule() {
        const id = this.transform.id;
        const module = this.modules[id];
        return module;
    }
    get preActiveModule() {
        const id = this.transform.od;
        const module = this.modules[id];
        return module;
    }
    add(id, manifest) {
        var _a;
        if (this.modules[id]) {
            return this.modules[id];
        }
        const process = (_a = this.config) === null || _a === void 0 ? void 0 : _a.moduleManifestProcess;
        if (process) {
            manifest = process(manifest) || manifest;
        }
        return this.modules[id] = new _Module_index__WEBPACK_IMPORTED_MODULE_0__.Module(id, manifest, this);
    }
    del(module) {
        return new Promise((resolve, reject) => {
            delete this.modules[module.id];
            if (module.status.init) {
                module.destroy().then(resolve).catch(reject);
            }
            else {
                resolve();
            }
        });
    }
    get(id) {
        return new Promise((resolve, reject) => {
            if (typeof this.modules[id] === 'object')
                return resolve(this.modules[id]);
            const modulePromise = this.options.modules[id];
            switch (typeof modulePromise) {
                case 'function':
                    this.promiseModule(modulePromise).then((manifest) => {
                        resolve(this.add(id, manifest));
                    }).catch(reject);
                    break;
                case 'object':
                    resolve(this.add(id, modulePromise));
                    break;
                default:
                    const url = id;
                    if (!this.moduleSrcVerify(url)) {
                        reject();
                        break;
                    }
                    const module = this.createModuleByURL(url, {}, id);
                    if (module) {
                        resolve(module);
                    }
                    else {
                        reject();
                    }
                    break;
            }
        });
    }
    cloneAsNewModule(module, id, config = {}) {
        if (!id)
            return module;
        const newConfig = Object.assign({}, module.model.config, config);
        const newModule = this.add(id, Object.assign({}, module.model, { config: newConfig }));
        return newModule;
    }
    createModuleByURL(url, config, cloneAs) {
        var _a, _b, _c;
        const newModuleId = decodeURIComponent(url);
        const modules = this.modules;
        const sameModule = (_a = modules[newModuleId]) !== null && _a !== void 0 ? _a : this.getModuleByURL(url);
        if (sameModule)
            return cloneAs ? this.cloneAsNewModule(sameModule, cloneAs, config) : sameModule;
        return this.add(newModuleId, {
            config: Object.assign({
                title: '',
                rel: 'module',
                level: ((_c = (_b = this.activeModule) === null || _b === void 0 ? void 0 : _b.config.level) !== null && _c !== void 0 ? _c : 0) + 1,
                free: true,
                source: {
                    src: url
                },
                background: 'auto',
                timeout: 0,
                animation: 'inherit',
                transient: true
            }, config)
        });
    }
    pushWindow(url, title = '', preset = 'slide', cloneAs, touches) {
        const resolve = this.resolveURL(url);
        const search = resolve.search;
        if (!this.moduleSrcVerify(url)) {
            return Promise.reject('Illegal');
        }
        return new Promise((resolve, reject) => {
            var _a, _b;
            const module = this.createModuleByURL(url, {
                title,
                animation: preset
            }, cloneAs);
            if (module) {
                this.transform.to(module.id, ((_b = (_a = module.config) === null || _a === void 0 ? void 0 : _a.source) === null || _b === void 0 ? void 0 : _b.html) ? search : '', 1, touches).then(resolve).catch(reject);
            }
        });
    }
    beforehandDependencies(dependencies = [], prerender = true) {
        const allPromise = [];
        for (const dep of dependencies) {
            allPromise.push(new Promise((resolve, reject) => {
                this.get(dep).then((module) => {
                    if (prerender) {
                        module.prerender().then(resolve).catch(resolve);
                    }
                    else {
                        resolve('');
                    }
                }).catch(reject);
            }));
        }
        return new Promise((resolve, reject) => {
            Promise.all(allPromise).then(resolve).catch(reject);
        });
    }
    updateSafeArea(data) {
        this.trigger('safeAreaChange', data);
    }
    updateGlobalCSSVariables(data) {
        this.trigger('globalCSSVariablesChange', data);
    }
    install(options, version) {
        const { swPathUrl, scope = '', source = [] } = options;
        if (!swPathUrl && !source)
            return Promise.reject();
        return new Promise((resolve, reject) => {
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register(swPathUrl || this.createWorkerURL(source, version), { scope }).then((reg) => {
                    if (reg.installing) {
                        console.log('Service worker installing');
                    }
                    else if (reg.waiting) {
                        console.log('Service worker installed');
                    }
                    else if (reg.active) {
                        console.log('Service worker active');
                    }
                    resolve(reg);
                }).catch((error) => {
                    reject(error);
                });
            }
        });
    }
    createWorkerURL(source, version) {
        const script = `
      this.addEventListener('install', function(event) {
        event.waitUntil(
          caches.open('v_${version}').then(function(cache) {
            return cache.addAll(["${source.join('","')}"])
          })
        )
      })
      this.addEventListener('fetch', function(event) {
        event.respondWith(
          caches.match(event.request).then(function() {
            return fetch(event.request).then(function(response) {
              return caches.open('v_${version}').then(function(cache) {
                cache.put(event.request, response.clone())
                return response
              })
            })
          })
        )
      })
      self.addEventListener('activate', function(event) {
        event.waitUntil(
          caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
              if (['v_${version}'].indexOf(key) === -1) {
                return caches.delete(key)
              }
            }))
          })
        )
      })
    `;
        return URL.createObjectURL(new Blob([script], { type: 'text/html' }));
    }
    mountSystem() {
        if (this.options.modules['system']) {
            this.get('system').then(() => {
                this.transform.to('system', undefined, -1).then(() => {
                    this.trigger('systemDidMount');
                });
            });
        }
    }
    mountFramework() {
        this.get('frameworks').then((module) => {
            const route = this.route;
            const config = module.config;
            const index = config.index || '';
            const preindex = config.preindex;
            const id = route.id || index;
            this.config = config;
            this.transform.setup({
                singleFlow: config.singleFlow,
                singleLock: config.singleLock,
                index,
                defaultIndex: id,
                notFound: config.notFind,
                limit: Math.max(config.limit || 7, 2),
                defaultAnimation: config.animation,
                holdBack: config.holdBack
            });
            this.transform.to('frameworks', undefined, -1).then(() => {
                this.trigger('frameworksDidMount');
            });
            if (id !== index && id !== preindex) {
                if (preindex)
                    this.transform.pushState(preindex);
                if (id)
                    this.transform.to(id, undefined, this.exists ? -1 : 1);
                return;
            }
            if (id)
                this.transform.to(id, undefined, -1);
        }).catch(() => {
            this.console.error('Module frameworks must be included!', 'Serious!', '');
        });
    }
    start() {
        this.setExists();
        this.mountFramework();
        this.mountSystem();
    }
}



/***/ }),

/***/ "./src/Application/init-css.ts":
/*!*************************************!*\
  !*** ./src/Application/init-css.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_CSS": () => (/* binding */ BASE_CSS)
/* harmony export */ });
const BASE_CSS = `
* { box-sizing: border-box; margin: 0; padding: 0; text-size-adjust: 100%; tap-highlight-color: rgba(0, 0, 0, 0)  } \n
html, body { position: absolute; width: 100vw; height: 100vh; background: #fff; overflow: hidden; overscroll-behavior: none } \n
module-mask, module-view { position: absolute; width: 100%; height: 100%; overflow: hidden } \n
module-container[type=module] { display: block; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100% } \n
iframe { width: 100%; height: 100%; border: 0 } \n
`;


/***/ }),

/***/ "./src/Application/proptey.ts":
/*!************************************!*\
  !*** ./src/Application/proptey.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationProptey": () => (/* binding */ ApplicationProptey)
/* harmony export */ });
/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Event */ "./src/Event/index.ts");

class ApplicationProptey extends _Event__WEBPACK_IMPORTED_MODULE_0__.EventProvider {
    constructor() {
        super();
        this.modules = {};
        this.historyNodeLocation = history.length;
        this.routerRegExp = /([^#\/]+)(.+)?/;
        this.options = {
            modules: {}
        };
    }
    setting(options) {
        this.options = options;
    }
}



/***/ }),

/***/ "./src/Application/provider.ts":
/*!*************************************!*\
  !*** ./src/Application/provider.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((app) => {
    window.addEventListener('message', (event) => {
        const { action, data } = event.data;
        switch (action) {
            case 'to':
                app.transform.to(data.module, data.query, data.history);
                break;
            case 'back':
                history.back();
                break;
            case 'forward':
                history.forward();
                break;
        }
    });
    return;
});


/***/ }),

/***/ "./src/Event/index.ts":
/*!****************************!*\
  !*** ./src/Event/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventProvider": () => (/* binding */ EventProvider)
/* harmony export */ });
class EventProvider {
    constructor() {
        this._events = {};
    }
    on(type, fn) {
        const types = type.split(' ');
        types.forEach((typ) => {
            if (!this._events[typ]) {
                this._events[typ] = [fn];
            }
            else {
                this._events[typ].push(fn);
            }
        });
        return this;
    }
    one(type, fn) {
        const once = (...args) => {
            fn.apply(null, args);
            this.off(type, once);
        };
        const types = type.split(' ');
        types.forEach((typ) => {
            if (!this._events[typ]) {
                this._events[typ] = [once];
            }
            else {
                this._events[typ].push(once);
            }
        });
        return this;
    }
    off(type, fn) {
        const types = type.split(' ');
        types.forEach((typ) => {
            if (!this._events[typ])
                return;
            const index = this._events[typ].indexOf(fn);
            if (index > -1) {
                this._events[typ].splice(index, 1);
            }
        });
        return this;
    }
    trigger(type, ...args) {
        if (!this._events[type])
            return;
        this._events[type].forEach(fn => {
            try {
                fn.apply(null, args);
            }
            catch (e) {
                this.off(type, fn);
                this.trigger('error', `Error by event[${type}]`);
            }
        });
        return this;
    }
}



/***/ }),

/***/ "./src/Module/index.ts":
/*!*****************************!*\
  !*** ./src/Module/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Module": () => (/* binding */ Module)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/Module/view.ts");

class Module extends _view__WEBPACK_IMPORTED_MODULE_0__.ModuleView {
    constructor(id, model, application) {
        super(id, model, application);
        this.events.start.bind(this)();
    }
}



/***/ }),

/***/ "./src/Module/inject/cssVar.ts":
/*!*************************************!*\
  !*** ./src/Module/inject/cssVar.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((moduleWindow, module) => {
    const { config, application } = module;
    const globalCSSVariables = application.config.globalCSSVariables;
    const docStyle = moduleWindow.document.documentElement.style;
    const setGlobalCSSVariables = (variables) => {
        for (const key in variables) {
            docStyle.setProperty(key, variables[key]);
        }
    };
    const setCSSSafeAreaValue = (data) => {
        var _a, _b, _c, _d;
        setGlobalCSSVariables({
            '--application-safe-area-top': (_a = data[0]) !== null && _a !== void 0 ? _a : data,
            '--application-safe-area-right': (_b = data[1]) !== null && _b !== void 0 ? _b : data,
            '--application-safe-area-bottom': (_c = data[2]) !== null && _c !== void 0 ? _c : data,
            '--application-safe-area-left': (_d = data[3]) !== null && _d !== void 0 ? _d : data
        });
    };
    if (config.safeArea) {
        setCSSSafeAreaValue(config.safeArea);
    }
    else if (application.config.safeArea) {
        setCSSSafeAreaValue(application.config.safeArea);
    }
    if (globalCSSVariables) {
        setGlobalCSSVariables(globalCSSVariables);
    }
    application.on('safeAreaChange', (data) => {
        setCSSSafeAreaValue(data);
    });
    application.on('globalCSSVariablesChange', (data) => {
        setGlobalCSSVariables(data);
    });
});


/***/ }),

/***/ "./src/Module/inject/index.ts":
/*!************************************!*\
  !*** ./src/Module/inject/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _windowOpen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./windowOpen */ "./src/Module/inject/windowOpen.ts");
/* harmony import */ var _smartSetTimeout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smartSetTimeout */ "./src/Module/inject/smartSetTimeout.ts");
/* harmony import */ var _tapHighlight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tapHighlight */ "./src/Module/inject/tapHighlight.ts");
/* harmony import */ var _cssVar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cssVar */ "./src/Module/inject/cssVar.ts");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((moduleWindow, module) => {
    const { config, application } = module;
    const apply = config.apply || [];
    if (Array.isArray(apply)) {
        for (const item of apply) {
            switch (item) {
                case 'link-in-new-window':
                    (0,_windowOpen__WEBPACK_IMPORTED_MODULE_0__["default"])(moduleWindow, application);
                    break;
                case 'smart-setTimeout':
                    if (module.rel === 'module') {
                        (0,_smartSetTimeout__WEBPACK_IMPORTED_MODULE_1__.smartSetTimeout)(moduleWindow);
                    }
                    break;
                case 'smart-setInterval':
                    if (module.rel === 'module') {
                        (0,_smartSetTimeout__WEBPACK_IMPORTED_MODULE_1__.smartSetInterval)(moduleWindow);
                    }
                    break;
                case 'tap-highlight':
                    (0,_tapHighlight__WEBPACK_IMPORTED_MODULE_2__["default"])(moduleWindow);
                    break;
                default:
                    if (Array.isArray(item)) {
                        switch (item[0]) {
                            case 'tap-highlight':
                                (0,_tapHighlight__WEBPACK_IMPORTED_MODULE_2__["default"])(moduleWindow, item[1]);
                                break;
                        }
                    }
                    break;
            }
        }
    }
    if (typeof config.inject === 'function') {
        config.inject(moduleWindow, module);
    }
    if (module.components) {
        for (const mountComponent of module.components) {
            moduleWindow.customElements.define('code-highlight', mountComponent(moduleWindow));
        }
    }
    (0,_cssVar__WEBPACK_IMPORTED_MODULE_3__["default"])(moduleWindow, module);
});


/***/ }),

/***/ "./src/Module/inject/smartSetTimeout.ts":
/*!**********************************************!*\
  !*** ./src/Module/inject/smartSetTimeout.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "smartSetTimeout": () => (/* binding */ smartSetTimeout),
/* harmony export */   "smartSetInterval": () => (/* binding */ smartSetInterval)
/* harmony export */ });
const getTimerHandler = (handler, moduleWindow, stretch) => {
    return (..._args) => {
        const run = () => {
            if (typeof handler === 'function') {
                handler(..._args);
            }
            else if (typeof handler === 'string') {
                const evalHander = new moduleWindow['Function'](`return ${handler}`);
                evalHander(..._args);
            }
        };
        if (moduleWindow['moduleVisibilityState'] === 'visible') {
            run();
        }
        else if (stretch) {
            moduleWindow.addEventListener('module-visible', () => {
                run();
            });
        }
    };
};
const smartSetTimeout = (moduleWindow) => {
    const realSetTimeout = moduleWindow.setTimeout;
    moduleWindow.backgroundSetTimeout = realSetTimeout;
    moduleWindow.setTimeout = (handler, timeout, ...args) => {
        const fn = getTimerHandler(handler, moduleWindow, true);
        const intervalId = realSetTimeout(fn, timeout, ...args);
        return intervalId;
    };
};
const smartSetInterval = (moduleWindow) => {
    const realSetInterval = moduleWindow.setInterval;
    moduleWindow.backgroundSetInterval = realSetInterval;
    moduleWindow.setInterval = (handler, timeout, ...args) => {
        const fn = getTimerHandler(handler, moduleWindow);
        const intervalId = realSetInterval(fn, timeout, ...args);
        return intervalId;
    };
};


/***/ }),

/***/ "./src/Module/inject/tapHighlight.ts":
/*!*******************************************!*\
  !*** ./src/Module/inject/tapHighlight.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((moduleWindow, capture) => {
    const touchActive = {
        element: null,
        oldStyle: ''
    };
    const addHighlight = (event) => {
        const captureList = capture ? typeof capture === 'string' ? capture.split(' ') : capture : null;
        const path = event['path'] || event.composedPath() || [];
        path.splice(-3);
        const anchor = (() => {
            var _a, _b, _c, _d;
            for (const el of path) {
                if (!((_a = el.children) === null || _a === void 0 ? void 0 : _a.length))
                    continue;
                if (el.tagName === 'A')
                    return el;
                if (captureList) {
                    for (const attr of captureList) {
                        if ((_b = el.getAttribute) === null || _b === void 0 ? void 0 : _b.call(el, attr))
                            return el;
                    }
                }
            }
            return (((_d = (_c = path[0]) === null || _c === void 0 ? void 0 : _c.children) === null || _d === void 0 ? void 0 : _d.length) ? path[0] : path[1]) || event.target;
        })();
        if (!anchor)
            return;
        touchActive.element = anchor;
        touchActive.oldStyle = anchor.style.filter;
        setTimeout(() => {
            if (touchActive.element === anchor) {
                const elWidth = anchor.offsetWidth;
                const elHeight = anchor.offsetHeight;
                if (elWidth * elHeight > 90000)
                    return;
                anchor.style.filter = touchActive.oldStyle + ' brightness(.8)';
            }
            const continueCheck = () => {
                setTimeout(() => {
                    if (touchActive.element !== anchor) {
                        anchor.style.filter = touchActive.oldStyle;
                    }
                    else {
                        continueCheck();
                    }
                }, 600);
            };
            continueCheck();
        }, 60);
    };
    const cancelHighlight = () => {
        var _a, _b;
        if ((_b = (_a = touchActive.element) === null || _a === void 0 ? void 0 : _a.style) === null || _b === void 0 ? void 0 : _b.filter) {
            touchActive.element.style.filter = touchActive.oldStyle;
        }
        touchActive.element = null;
        touchActive.oldStyle = '';
    };
    const delayCancelHighlight = () => {
        setTimeout(() => {
            cancelHighlight();
        }, 600);
    };
    moduleWindow.document.addEventListener('touchstart', addHighlight);
    moduleWindow.addEventListener('touchstart', addHighlight);
    moduleWindow.addEventListener('touchmove', cancelHighlight);
    moduleWindow.addEventListener('touchcancel', cancelHighlight);
    moduleWindow.addEventListener('touchend', delayCancelHighlight);
});


/***/ }),

/***/ "./src/Module/inject/windowOpen.ts":
/*!*****************************************!*\
  !*** ./src/Module/inject/windowOpen.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((moduleWindow, application) => {
    const realOpen = moduleWindow.open;
    const blockClick = (event) => {
        var _a;
        if (event instanceof CustomEvent && event.detail instanceof Event) {
            event = event.detail;
        }
        const path = event['path'] || ((_a = event.composedPath) === null || _a === void 0 ? void 0 : _a.call(event)) || [];
        const anchor = (() => {
            for (const el of path) {
                if (el.tagName === 'A')
                    return el;
            }
        })();
        if (!anchor)
            return false;
        const href = anchor.href || String(anchor);
        if (href && anchor.target !== 'self') {
            const title = anchor.title || '';
            const preset = anchor.getAttribute('preset-effect');
            const cloneAs = anchor.getAttribute('clone-as');
            event.stopPropagation();
            event.preventDefault();
            application.pushWindow(href, title, preset, cloneAs, event).catch(() => {
                realOpen(href);
            });
        }
        return false;
    };
    moduleWindow.addEventListener('click', blockClick);
    moduleWindow.open = (url, target, features) => {
        if (typeof url !== 'string' || target || features) {
            return realOpen(url, target, features);
        }
        if (typeof url === 'string') {
            application.pushWindow(url, '').catch(() => {
                realOpen(url);
            });
        }
        return null;
    };
});


/***/ }),

/***/ "./src/Module/mount.ts":
/*!*****************************!*\
  !*** ./src/Module/mount.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModuleMount": () => (/* binding */ ModuleMount)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/Module/state.ts");

class ModuleMount extends _state__WEBPACK_IMPORTED_MODULE_0__.ModuleState {
    constructor(id, model, application) {
        super(id, model, application);
    }
    timeTick() {
        if (Date.now() - this.createTime > (this.config.timeout || 3600000)) {
            if (this.view)
                this.destroy();
        }
    }
    show() {
        var _a;
        if (this.viewType === 'portal') {
            (_a = this.view) === null || _a === void 0 ? void 0 : _a.activate();
            return;
        }
        if (this.viewType !== 'iframe')
            return;
        for (const task of this.darkTask) {
            task();
        }
        this.darkTask = [];
        this.visibility = true;
        this.trigger('visible');
        this.triggerWindow('module-visible', 'moduleVisibilityState', 'visible');
    }
    hide() {
        this.visibility = false;
        this.trigger('hidden');
        this.triggerWindow('module-hidden', 'moduleVisibilityState', 'hidden');
    }
    willShow() {
        this.trigger('willShow');
        this.triggerWindow('module-will-show', 'moduleVisibilityState', 'willVisible');
    }
    willHide() {
        this.trigger('willHidden');
        this.triggerWindow('module-will-hidden', 'moduleVisibilityState', 'willHidden');
    }
    triggerWindow(type, attributeName, attributeValue) {
        var _a;
        if (this.viewType !== 'iframe')
            return;
        const sandbox = this.view;
        const contentWindow = (_a = sandbox === null || sandbox === void 0 ? void 0 : sandbox.contentWindow) === null || _a === void 0 ? void 0 : _a.window;
        if (contentWindow) {
            contentWindow.postMessage({
                type,
                historyDirection: this.application.transform.historyDirection
            }, '*');
            if (this.sameOrigin && attributeName) {
                contentWindow[attributeName] = attributeValue;
            }
        }
    }
    mediaGuard() {
        return new Promise((resolve, reject) => {
            var _a;
            try {
                if (this.viewType !== 'iframe')
                    return resolve();
                if (this.sandbox === undefined)
                    return resolve();
                const view = this.view;
                const contentDocumentElement = (_a = view.contentDocument) === null || _a === void 0 ? void 0 : _a.documentElement;
                if (!contentDocumentElement)
                    return reject();
                if (contentDocumentElement.getElementsByTagName('video')[0]) {
                    const videos = contentDocumentElement.querySelectorAll('video');
                    for (const index in videos) {
                        const video = videos[index];
                        if (!(video === null || video === void 0 ? void 0 : video.paused)) {
                            video.pause();
                            this.darkTask.push(() => {
                                video.play();
                            });
                        }
                    }
                }
                if (contentDocumentElement.getElementsByTagName('audio')[0]) {
                    const audios = contentDocumentElement.querySelectorAll('audio');
                    for (const index in audios) {
                        const audio = audios[index];
                        if (!(audio === null || audio === void 0 ? void 0 : audio.paused)) {
                            audio.pause();
                            this.darkTask.push(() => {
                                audio.play();
                            });
                        }
                    }
                }
            }
            catch (error) {
                reject();
            }
        });
    }
    destroy() {
        return new Promise((resolve, reject) => {
            var _a, _b, _c;
            if (this.rel !== 'module')
                return reject();
            if (((_a = this.application.transform) === null || _a === void 0 ? void 0 : _a.id) === this.id)
                return reject();
            if (this.viewType === 'iframe')
                this.unload().catch(reject);
            (_b = this.elements.container.parentElement) === null || _b === void 0 ? void 0 : _b.removeChild(this.elements.container);
            this.status.prefetch = this.status.preload = this.status.prerender = false;
            this.view = null;
            this.status.init = false;
            this.darkTask = [];
            (_c = this.events) === null || _c === void 0 ? void 0 : _c.destroy.bind(this)();
            this.trigger('destroy');
            resolve();
        });
    }
    observer(change) {
        var _a;
        const target = this.sandbox ? (_a = this.sandbox.contentDocument) === null || _a === void 0 ? void 0 : _a.documentElement : this.view;
        if (!target)
            return;
        const observer = new MutationObserver((record) => {
            change(record);
        });
        observer.observe(target, {
            subtree: true,
            attributes: true,
            childList: true,
            characterData: true,
            attributeOldValue: true,
            characterDataOldValue: true
        });
        return observer;
    }
    fate() {
        return new Promise((resolve, reject) => {
            var _a;
            if (this.rel !== 'module')
                return reject();
            if (this.config.background === true)
                return reject();
            if (this.config.background === false)
                return resolve();
            if (this.viewType !== 'iframe')
                return reject();
            if (this.sandbox === undefined)
                return reject();
            if (this.sameOrigin === false)
                return resolve();
            const view = this.view;
            try {
                const contentDocumentElement = (_a = view.contentDocument) === null || _a === void 0 ? void 0 : _a.documentElement;
                if (!contentDocumentElement)
                    return reject();
                if (this.config.mediaGuard !== false) {
                    this.mediaGuard().catch(resolve);
                }
                if (contentDocumentElement.getElementsByTagName('object')[0])
                    return resolve();
                if (contentDocumentElement.getElementsByTagName('embed')[0])
                    return resolve();
                if (contentDocumentElement.getElementsByTagName('applet')[0])
                    return resolve();
                if (contentDocumentElement.getElementsByTagName('iframe')[0])
                    return resolve();
                if (contentDocumentElement) {
                    const counter = {
                        times: 0
                    };
                    const observer = this.observer(() => {
                        counter.times++;
                        if (counter.times > 1000) {
                            resolve();
                            this.mutationObserver.disconnect();
                        }
                    });
                    if (!observer)
                        return;
                    this.mutationObserver = observer;
                    setTimeout(() => {
                        if (counter.times > 10)
                            resolve();
                    }, 3000);
                }
                else {
                    reject();
                }
            }
            catch (error) {
                reject();
            }
        });
    }
    unfate() {
        var _a;
        (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
    unload() {
        return new Promise((resolve, reject) => {
            var _a, _b;
            this.unfate();
            const sandbox = this.view;
            if (!sandbox)
                return resolve();
            sandbox.style.display = 'none';
            sandbox.src = 'about:blank';
            try {
                const contentWindow = (_a = sandbox.contentWindow) === null || _a === void 0 ? void 0 : _a.window;
                const contentDocument = sandbox.contentDocument;
                contentWindow === null || contentWindow === void 0 ? void 0 : contentWindow.location.reload();
                contentDocument === null || contentDocument === void 0 ? void 0 : contentDocument.open();
                contentDocument === null || contentDocument === void 0 ? void 0 : contentDocument.write('');
                contentDocument === null || contentDocument === void 0 ? void 0 : contentDocument.close();
            }
            catch (error) {
                reject();
            }
            (_b = sandbox.parentElement) === null || _b === void 0 ? void 0 : _b.removeChild(sandbox);
            resolve();
        });
    }
}



/***/ }),

/***/ "./src/Module/prefetch.ts":
/*!********************************!*\
  !*** ./src/Module/prefetch.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModulePrefetch": () => (/* binding */ ModulePrefetch)
/* harmony export */ });
/* harmony import */ var _mount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mount */ "./src/Module/mount.ts");

class ModulePrefetch extends _mount__WEBPACK_IMPORTED_MODULE_0__.ModuleMount {
    constructor(id, model, application) {
        super(id, model, application);
    }
    prefetch() {
        return new Promise((resolve, reject) => {
            Promise.all([
                this.prefetchStatic(this.resources.script, 'script'),
                this.prefetchStatic(this.resources.image, 'image'),
                this.prefetchStatic(this.resources.worker, 'worker'),
                this.prefetchStatic(this.resources.video, 'video'),
                this.prefetchStatic(this.resources.audio, 'audio'),
                this.prefetchStatic(this.resources.font, 'font'),
                this.prefetchStatic(this.resources.style, 'style')
            ]).then(() => {
                this.status.prefetch = true;
                resolve(true);
            }).catch(reject);
        });
    }
    prefetchStatic(list = [], as = 'script') {
        return new Promise((resolve, reject) => {
            Promise.all([].concat(list).map(url => this.beforehandLink(url, 'preload', as))).then(resolve).catch(reject);
        });
    }
    beforehandLink(url, rel = 'preload', as = 'worker | video | audio | font | script | style | image | document') {
        if (!url)
            return Promise.resolve();
        return new Promise((resolve, reject) => {
            var _a;
            const link = document.createElement('link');
            link.rel = rel;
            link.href = url;
            link.as = as;
            link.onload = resolve;
            link.onerror = reject;
            if (!((_a = link.relList) === null || _a === void 0 ? void 0 : _a.supports(rel))) {
                return resolve('notSupports');
            }
            document.getElementsByTagName('head')[0].appendChild(link);
            resolve();
        });
    }
}



/***/ }),

/***/ "./src/Module/proptey.ts":
/*!*******************************!*\
  !*** ./src/Module/proptey.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModuleProptey": () => (/* binding */ ModuleProptey)
/* harmony export */ });
/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Event */ "./src/Event/index.ts");

class ModuleProptey extends _Event__WEBPACK_IMPORTED_MODULE_0__.EventProvider {
    constructor(id, model, application) {
        super();
        this.param = {};
        this.view = null;
        this.events = {
            transformStart: () => undefined,
            transformEnd: () => undefined,
            start: () => undefined,
            load: () => undefined,
            loadError: () => undefined,
            preload: () => undefined,
            destroy: () => undefined
        };
        this.darkTask = [];
        this.createTime = Date.now();
        this.transient = false;
        this.config = {
            title: '',
            rel: 'module',
            level: 0,
            source: {},
            prerender: [],
            apply: ['smart-setTimeout', 'link-in-new-window', ['tap-highlight', 'tap-highlight data-appeared']],
            free: true,
            background: 'auto'
        };
        this.components = [];
        this.resources = {
            script: [],
            image: [],
            worker: [],
            video: [],
            audio: [],
            font: [],
            style: []
        };
        this.elements = {
            container: document.body
        };
        this.id = id;
        this.param = {};
        this.model = model;
        this.application = application;
        const { config, resources, events, components } = this.setDefaultConfig(model);
        Object.assign(this.config, config);
        Object.assign(this.resources, resources);
        Object.assign(this.events, events);
        if (components) {
            this.components = components;
        }
    }
    setDefaultConfig(manifest) {
        var _a, _b, _c, _d, _e, _f, _g;
        if (((_a = manifest.config) === null || _a === void 0 ? void 0 : _a.rel) === 'frameworks') {
            if (manifest.config.free) {
                console.error('[Type "frameworks" modules do not neeed to configured with [free].');
            }
        }
        if ((_b = manifest.config) === null || _b === void 0 ? void 0 : _b.portal) {
            if (!manifest.config.free) {
                console.error('[Module.config[free & portal]] conflit! [free] must be true when [portal] sets true');
            }
        }
        if (((_d = (_c = manifest.config) === null || _c === void 0 ? void 0 : _c.level) !== null && _d !== void 0 ? _d : 0) > 10000) {
            console.error('[Module.config.level] needs to be less than 9999!');
        }
        if ((_f = (_e = manifest.config) === null || _e === void 0 ? void 0 : _e.unApply) === null || _f === void 0 ? void 0 : _f.length) {
            const unApply = manifest.config.unApply;
            this.config.apply = (_g = this.config.apply) === null || _g === void 0 ? void 0 : _g.filter((item) => !unApply.includes(item));
        }
        return manifest;
    }
}



/***/ }),

/***/ "./src/Module/state.ts":
/*!*****************************!*\
  !*** ./src/Module/state.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModuleState": () => (/* binding */ ModuleState)
/* harmony export */ });
/* harmony import */ var _proptey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proptey */ "./src/Module/proptey.ts");

class ModuleState extends _proptey__WEBPACK_IMPORTED_MODULE_0__.ModuleProptey {
    constructor(id, model, application) {
        var _a;
        super(id, model, application);
        this.viewTypeCache = null;
        this.visibility = false;
        this.status = {
            init: false,
            preload: false,
            prefetch: false,
            prerender: false
        };
        this.nowViewIndex = (_a = this.config.level) !== null && _a !== void 0 ? _a : 0;
    }
    get sameOrigin() {
        if (!this.uri) {
            if (this.config.sandbox === undefined)
                return true;
            if (this.config.sandbox.includes('allow-same-origin'))
                return true;
            return false;
        }
        const link = new URL(this.uri, window.location.toString());
        const isSameOrigin = link.host === location.host;
        return isSameOrigin;
    }
    get level() {
        var _a;
        return (_a = this.config.level) !== null && _a !== void 0 ? _a : 0;
    }
    get viewIndex() {
        var _a, _b;
        const level = (((_a = this.application.preActiveModule) === null || _a === void 0 ? void 0 : _a.nowViewIndex) || 1) + ((_b = this.config.level) !== null && _b !== void 0 ? _b : 1);
        this.nowViewIndex = level;
        const baseLevel = this.config.free ? 20000 : 10000;
        return baseLevel + level;
    }
    get rel() {
        if (this.id === 'system')
            return 'system';
        if (this.id === 'frameworks')
            return 'frameworks';
        return this.config.rel || 'module';
    }
    get uri() {
        var _a, _b;
        return ((_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.source) === null || _b === void 0 ? void 0 : _b.src) || '';
    }
    get viewType() {
        var _a;
        if (this.viewTypeCache)
            return this.viewTypeCache;
        if (this.rel !== 'module')
            return this.viewTypeCache = 'shadow';
        if (!((_a = this.config) === null || _a === void 0 ? void 0 : _a.portal) || !this.uri)
            return this.viewTypeCache = 'iframe';
        return this.viewTypeCache = ('HTMLPortalElement' in window) && this.sameOrigin ? 'portal' : 'iframe';
    }
    setActionOrigin(origin) {
        this.actionOriginMap = origin;
    }
    getActionOrigin() {
        return this.actionOriginMap;
    }
}



/***/ }),

/***/ "./src/Module/view.ts":
/*!****************************!*\
  !*** ./src/Module/view.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModuleView": () => (/* binding */ ModuleView)
/* harmony export */ });
/* harmony import */ var _prefetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prefetch */ "./src/Module/prefetch.ts");
/* harmony import */ var _Sandbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Sandbox */ "./src/Sandbox/index.ts");
/* harmony import */ var _inject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inject */ "./src/Module/inject/index.ts");



class ModuleView extends _prefetch__WEBPACK_IMPORTED_MODULE_0__.ModulePrefetch {
    constructor(id, model, application) {
        super(id, model, application);
    }
    attach(element) {
        if (!element)
            return;
        this.status.init = true;
        this.elements.container = element;
    }
    addPanMoveHolder(container) {
        var _a, _b;
        const threshold = 15;
        const topHolder = document.createElement('div');
        const rightHolder = document.createElement('div');
        const bottomHolder = document.createElement('div');
        const leftHolder = document.createElement('div');
        const mainHolder = document.createElement('div');
        const baseStyle = 'position: absolute; z-index: 3;';
        topHolder.style.cssText = `${baseStyle} top: 0; right: 0; left: 0; height: ${threshold}px;`;
        rightHolder.style.cssText = `${baseStyle} top: 0; right: 0; bottom: 0; z-index: 3; width: ${threshold}px;`;
        bottomHolder.style.cssText = `${baseStyle} right: 0; bottom: 0; left: 0; z-index: 3; height: ${threshold}px;`;
        leftHolder.style.cssText = `${baseStyle} top: 0; bottom: 0; left: 0; z-index: 3; width: ${threshold}px;`;
        mainHolder.style.cssText = `display: none; ${baseStyle} top: 0; right: 0; bottom: 0; left: 0; z-index: 4;`;
        container.appendChild(topHolder);
        container.appendChild(rightHolder);
        container.appendChild(bottomHolder);
        container.appendChild(leftHolder);
        container.appendChild(mainHolder);
        (_b = (_a = this.config).touchBorder) === null || _b === void 0 ? void 0 : _b.call(_a, {
            topHolder,
            rightHolder,
            bottomHolder,
            leftHolder,
            mainHolder
        }, this, this.application);
        this.bindOverscrollHistoryNavigatio(leftHolder);
    }
    bindOverscrollHistoryNavigatio(leftHolder) {
        var _a;
        const updateTriggerTime = () => {
            this.application.overscrollHistoryNavigatioMoment = Date.now();
        };
        const bindPlaceholder = (event) => {
            if (event.type === 'touchstart')
                leftHolder.style.paddingRight = '50px';
            if (event.type === 'touchcancel' || event.type === 'touchend')
                leftHolder.style.paddingRight = '0';
            updateTriggerTime();
            event.stopPropagation();
        };
        const leftHolderBinder = leftHolder.addEventListener;
        leftHolderBinder('touchstart', bindPlaceholder);
        leftHolderBinder('touchmove', bindPlaceholder);
        leftHolderBinder('touchcancel', bindPlaceholder);
        leftHolderBinder('touchend', bindPlaceholder);
        const contentWindow = (_a = this.sandbox) === null || _a === void 0 ? void 0 : _a.contentWindow;
        if (contentWindow) {
            const contentBinder = contentWindow.addEventListener;
            const contentUnBinder = contentWindow.removeEventListener;
            contentBinder('touchmove', (event) => {
                if (event.touches[0].clientX < 60) {
                    contentBinder('touchmove', updateTriggerTime);
                    contentBinder('touchend', updateTriggerTime);
                }
                else {
                    contentUnBinder('touchmove', updateTriggerTime);
                    contentUnBinder('touchend', updateTriggerTime);
                }
            });
        }
    }
    createSandbox(uri, config) {
        this.sandbox = new _Sandbox__WEBPACK_IMPORTED_MODULE_1__.Sandbox(uri, config);
        return this.sandbox.sandbox;
    }
    createShadowbox(render) {
        const shadowbox = document.createElement('shadow-view');
        const shadowboxInner = document.createElement('shadow-inner');
        shadowbox === null || shadowbox === void 0 ? void 0 : shadowbox.attachShadow({ mode: 'open' });
        const shadowRoot = shadowbox.shadowRoot ? shadowbox.shadowRoot : shadowbox;
        shadowRoot.appendChild(shadowboxInner);
        render(shadowboxInner);
        this.elements.container.appendChild(shadowbox);
        return shadowbox;
    }
    createPortals(uri) {
        const portal = document.createElement('portal');
        portal.src = uri;
        return portal;
    }
    createView() {
        if (this.view)
            return this.view;
        if (this.config.render) {
            return this.view = this.createShadowbox(this.config.render);
        }
        if (this.rel !== 'module')
            return;
        if (this.viewType === 'portal') {
            this.view = this.createPortals(this.uri);
        }
        else {
            this.view = this.createSandbox(this.uri, this.config.sandbox);
        }
        return this.view;
    }
    loadContent() {
        var _a, _b, _c;
        const container = this.elements.container;
        const shadowView = this.view;
        if (!shadowView)
            return;
        switch (this.viewType) {
            case 'portal':
                container.appendChild(shadowView);
                break;
            case 'iframe':
            default:
                if (!this.sandbox) {
                    if (this.rel === 'frameworks') {
                        (0,_inject__WEBPACK_IMPORTED_MODULE_2__["default"])(window, this);
                    }
                    return;
                }
                if (this.uri) {
                    this.sandbox.enter(container);
                    const contentWindow = shadowView.contentWindow;
                    if (contentWindow && this.sameOrigin) {
                        (0,_inject__WEBPACK_IMPORTED_MODULE_2__["default"])(contentWindow === null || contentWindow === void 0 ? void 0 : contentWindow.window, this);
                        contentWindow === null || contentWindow === void 0 ? void 0 : contentWindow.window.postMessage({
                            type: 'container-ready'
                        }, '*');
                    }
                }
                else {
                    this.sandbox.append((_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.source) === null || _b === void 0 ? void 0 : _b.html, container);
                    const update = this.loadContent.bind(this);
                    this.sandbox.unload = update;
                    (0,_inject__WEBPACK_IMPORTED_MODULE_2__["default"])((_c = this.sandbox.contentWindow) === null || _c === void 0 ? void 0 : _c.window, this);
                }
                break;
        }
    }
    mountPresetView() {
        var _a, _b, _c;
        const view = (_b = (_a = window === null || window === void 0 ? void 0 : window.__application_preset) === null || _a === void 0 ? void 0 : _a.moduleElements) === null || _b === void 0 ? void 0 : _b[this.id];
        if (view) {
            this.view = view;
            this.elements.container.appendChild(view);
            (_c = window === null || window === void 0 ? void 0 : window.__application_preset) === null || _c === void 0 ? true : delete _c[this.id];
        }
    }
    create(prepare = true) {
        this.unfate();
        this.timeTick();
        this.mountPresetView();
        if (this.status.prerender) {
            return Promise.resolve('prerender');
        }
        return new Promise((resolve, reject) => {
            this.createTime = Date.now();
            const shadowView = this.createView();
            if (!shadowView) {
                return resolve('null');
            }
            if (this.viewType === 'shadow') {
                if (this.rel === 'frameworks') {
                    (0,_inject__WEBPACK_IMPORTED_MODULE_2__["default"])(window, this);
                }
                return resolve('shadow');
            }
            shadowView.style.cssText = `
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        border: 0;
        transform: translate3d(0, 0, 0);
      `;
            shadowView.onload = (e) => {
                var _a;
                this.status.prerender = true;
                (_a = this.events) === null || _a === void 0 ? void 0 : _a.load.bind(this)();
                this.trigger('load');
                setTimeout(() => {
                    resolve(e);
                }, 50);
            };
            shadowView.onerror = (e) => {
                var _a;
                (_a = this.events) === null || _a === void 0 ? void 0 : _a.loadError.bind(this)();
                this.trigger('loadError');
                reject(e);
            };
            this.loadContent();
            this.addPanMoveHolder(this.elements.container);
            if (prepare === false || this.config.animation === false) {
                return resolve('instant');
            }
            setTimeout(() => {
                resolve('timeout');
            }, this.status.preload ? 800 : 200);
        });
    }
    preload() {
        return new Promise((resolve, reject) => {
            var _a, _b;
            const uri = this.uri;
            const head = document.head;
            const sandbox = new _Sandbox__WEBPACK_IMPORTED_MODULE_1__.Sandbox(uri, '');
            sandbox.onload = (e) => {
                var _a;
                this.status.preload = true;
                sandbox.exit();
                (_a = this.events) === null || _a === void 0 ? void 0 : _a.preload.bind(this)();
                this.trigger('preload');
                resolve(e);
            };
            sandbox.onerror = (e) => {
                sandbox.exit();
                reject(e);
            };
            if (uri) {
                sandbox.enter(head);
            }
            else {
                sandbox.append((_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.source) === null || _b === void 0 ? void 0 : _b.html, head);
            }
        });
    }
    prerender() {
        if (this.status.preload || this.status.prerender) {
            return Promise.resolve();
        }
        return new Promise((resolve, reject) => {
            this.preload().then(resolve).catch(reject);
            this.beforehandLink(this.uri, 'prerender', 'document');
        });
    }
}



/***/ }),

/***/ "./src/Sandbox/index.ts":
/*!******************************!*\
  !*** ./src/Sandbox/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sandbox": () => (/* binding */ Sandbox)
/* harmony export */ });
class Sandbox {
    constructor(src, setting) {
        const sandbox = this.sandbox = document.createElement('iframe');
        sandbox.src = src || 'about:blank';
        sandbox.style.display = 'none';
        if (setting !== undefined) {
            this.set(setting);
        }
        return this;
    }
    set src(src) {
        this.sandbox.src = src;
    }
    set unload(beforeunload) {
        this.contentWindow.onbeforeunload = beforeunload;
    }
    set onload(onload) {
        this.sandbox.onload = onload;
    }
    set onerror(onerror) {
        this.sandbox.onerror = onerror;
    }
    set(allow) {
        this.sandbox.setAttribute('sandbox', allow);
    }
    reset(allow) {
        this.exit();
        this.set(allow);
        return this;
    }
    open() {
        this.contentDocument.open();
        return this;
    }
    write(context = '<head><meta charset="utf-8"></head>') {
        context = '<!DOCTYPE html>' + context;
        this.contentDocument.write(context);
        return this;
    }
    close() {
        this.contentDocument.close();
        return this;
    }
    append(context, container) {
        this.enter(container);
        this.attach();
        this.open();
        this.write(context);
        this.close();
    }
    enter(container) {
        container.appendChild(this.sandbox);
    }
    attach() {
        const contentWindow = this.sandbox.contentWindow;
        const contentDocument = this.sandbox.contentDocument;
        this.contentWindow = contentWindow;
        this.contentDocument = contentDocument;
    }
    exit() {
        const parentNode = this.sandbox.parentNode;
        parentNode && parentNode.removeChild(this.sandbox);
    }
}



/***/ }),

/***/ "./src/Transform/animation/index.ts":
/*!******************************************!*\
  !*** ./src/Transform/animation/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransformAnimation": () => (/* binding */ TransformAnimation)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../history */ "./src/Transform/history.ts");


class TransformAnimation extends _history__WEBPACK_IMPORTED_MODULE_0__.TransformHistory {
    constructor(app) {
        super(app);
    }
    checkAnimationNamed() {
        return !!this.getAnimationNames();
    }
    getAnimationNames() {
        if (!this.modulu || this.modulu.rel !== 'module')
            return false;
        if (this.isOverscrollHistoryNavigatio)
            return false;
        const animationNames = this[this.history !== 1 && this.historyDirection === -1 ? 'modulu' : 'module'].config.animation;
        if (animationNames === true || animationNames === 'inherit') {
            return this.options.defaultAnimation;
        }
        return animationNames;
    }
    getAnimationGroup() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let animationFunction;
            const animationNames = this.getAnimationNames();
            if (typeof animationNames === 'string') {
                animationFunction = yield this.getAnimationByName(animationNames);
            }
            else if (typeof (animationNames === null || animationNames === void 0 ? void 0 : animationNames[0]) === 'function') {
                return animationNames;
            }
            if (typeof (animationFunction === null || animationFunction === void 0 ? void 0 : animationFunction[0]) !== 'function') {
                return false;
            }
            return animationFunction;
        });
    }
    getAnimationOneSide(backset) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const animationGroup = yield this.getAnimationGroup();
            if (backset >= 0) {
                switch (typeof animationGroup) {
                    case 'function':
                        return animationGroup;
                    case 'object':
                        return animationGroup[animationGroup.length === 2 ? backset : 0];
                    default:
                        return;
                }
            }
            return;
        });
    }
    getAnimationByName(type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            switch (type) {
                case 'flip':
                    return new Promise((resolve) => {
                        __webpack_require__.e(/*! import() */ "src_Transform_animation_preset_flip_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./preset/flip */ "./src/Transform/animation/preset/flip.ts")).then((module) => {
                            const flip = module.default;
                            resolve([flip(4), flip(4)]);
                        });
                    });
                case 'flipLeft':
                case 'flip-left':
                    return new Promise((resolve) => {
                        __webpack_require__.e(/*! import() */ "src_Transform_animation_preset_flip_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./preset/flip */ "./src/Transform/animation/preset/flip.ts")).then((module) => {
                            const flip = module.default;
                            resolve([flip(3), flip(3)]);
                        });
                    });
                case 'flipDown':
                case 'flip-down':
                    return new Promise((resolve) => {
                        __webpack_require__.e(/*! import() */ "src_Transform_animation_preset_flip_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./preset/flip */ "./src/Transform/animation/preset/flip.ts")).then((module) => {
                            const flip = module.default;
                            resolve([flip(2), flip(2)]);
                        });
                    });
                case 'flipRight':
                case 'flip-right':
                    return new Promise((resolve) => {
                        __webpack_require__.e(/*! import() */ "src_Transform_animation_preset_flip_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./preset/flip */ "./src/Transform/animation/preset/flip.ts")).then((module) => {
                            const flip = module.default;
                            resolve([flip(2), flip(2)]);
                        });
                    });
                case 'flipUp':
                case 'flip-up':
                    return new Promise((resolve) => {
                        __webpack_require__.e(/*! import() */ "src_Transform_animation_preset_flip_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./preset/flip */ "./src/Transform/animation/preset/flip.ts")).then((module) => {
                            const flip = module.default;
                            resolve([flip(0), flip(0)]);
                        });
                    });
                case 'fade':
                    return new Promise((resolve) => {
                        __webpack_require__.e(/*! import() */ "src_Transform_animation_preset_fade_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./preset/fade */ "./src/Transform/animation/preset/fade.ts")).then((module) => {
                            const fade = module.default;
                            resolve([fade(1), fade(0)]);
                        });
                    });
                case 'zoom':
                    return new Promise((resolve) => {
                        __webpack_require__.e(/*! import() */ "src_Transform_animation_preset_zoom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./preset/zoom */ "./src/Transform/animation/preset/zoom.ts")).then((module) => {
                            const zoom = module.default;
                            resolve([zoom(1), zoom(0)]);
                        });
                    });
                case 'slide':
                case 'slideLeft':
                case 'slideleft':
                case 'slide-left':
                    return new Promise((resolve) => {
                        __webpack_require__.e(/*! import() */ "src_Transform_animation_preset_slide_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./preset/slide */ "./src/Transform/animation/preset/slide.ts")).then((module) => {
                            const slide = module.default;
                            resolve([slide(1), slide(3)]);
                        });
                    });
                case 'slideRight':
                case 'slideright':
                case 'slide-right':
                    return new Promise((resolve) => {
                        __webpack_require__.e(/*! import() */ "src_Transform_animation_preset_slide_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./preset/slide */ "./src/Transform/animation/preset/slide.ts")).then((module) => {
                            const slide = module.default;
                            resolve([slide(3), slide(1)]);
                        });
                    });
                case 'slideUp':
                case 'slideup':
                case 'slide-up':
                    return new Promise((resolve) => {
                        __webpack_require__.e(/*! import() */ "src_Transform_animation_preset_slide_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./preset/slide */ "./src/Transform/animation/preset/slide.ts")).then((module) => {
                            const slide = module.default;
                            resolve([slide(2), slide(0)]);
                        });
                    });
                case 'slideDown':
                case 'slidedown':
                case 'slide-down':
                    return new Promise((resolve) => {
                        __webpack_require__.e(/*! import() */ "src_Transform_animation_preset_slide_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./preset/slide */ "./src/Transform/animation/preset/slide.ts")).then((module) => {
                            const slide = module.default;
                            resolve([slide(0), slide(2)]);
                        });
                    });
                default:
                    return Promise.resolve(undefined);
            }
        });
    }
}



/***/ }),

/***/ "./src/Transform/history.ts":
/*!**********************************!*\
  !*** ./src/Transform/history.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransformHistory": () => (/* binding */ TransformHistory)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _proptey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proptey */ "./src/Transform/proptey.ts");


class TransformHistory extends _proptey__WEBPACK_IMPORTED_MODULE_0__.TransformProptey {
    constructor(app) {
        super(app);
        this.history = 0;
        this.historyIndex = history.length;
        this.historyDirection = 0;
        this.backoutCount = 0;
        this.silentObserver = undefined;
        this.bindHistoryState();
    }
    get isOverscrollHistoryNavigatio() {
        if (this.history !== -1 || this.historyDirection !== -1)
            return false;
        if (Date.now() - this.app.overscrollHistoryNavigatioMoment > 300)
            return false;
        return true;
    }
    bindHistoryState() {
        addEventListener('popstate', (event) => {
            this.popstate(event.state);
            clearInterval(this.silentObserver);
        }, false);
    }
    obserSilent() {
        this.silentObserver = setInterval(() => {
            var _a;
            if (((_a = history.state) === null || _a === void 0 ? void 0 : _a.id) !== this.id) {
                this.popstate(history.state);
            }
        }, 100);
    }
    popstate(state) {
        const { historyIndex = 0 } = state !== null && state !== void 0 ? state : {};
        if (historyIndex === this.historyIndex) {
            this.historyDirection = 0;
        }
        else if (historyIndex > this.historyIndex) {
            this.historyDirection = 1;
        }
        else {
            this.historyDirection = -1;
        }
        this.historyIndex = historyIndex;
        this.back(state);
    }
    pushState(id = '', title = '', search = location.search, param = '') {
        id = encodeURIComponent(id);
        const length = history.length;
        history.pushState({
            id,
            title,
            time: Date.now(),
            search,
            historyIndex: length
        }, title, location.pathname + search + '#' + id + '/' + param);
        this.historyIndex = length + 1;
        this.historyDirection = 1;
        if (this.silentObserver === undefined) {
            this.obserSilent();
        }
    }
    replaceState(id = '', title = '', search = location.search, param = '') {
        id = encodeURIComponent(id);
        const length = history.length;
        history.replaceState({
            id,
            title,
            time: Date.now(),
            search,
            historyIndex: length
        }, title, location.pathname + search + '#' + id + '/' + param);
        this.historyIndex = length;
        this.historyDirection = 1;
    }
    back(state) {
        var _a, _b, _c, _d;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const options = this.options;
            const route = state || history.state || this.app.route;
            const id = decodeURIComponent(route.id) || options.index || 'frameworks';
            const search = route.search;
            const module = yield this.app.get(id);
            if (!module)
                return;
            /**
             * 如果设置了单向锁，且回退时模块层级为 0 时
             * 阻止返回，并发送事件
             */
            if (this.checkSingleLock()) {
                this.backoutCount++;
                if (((_b = (_a = this.options).holdBack) === null || _b === void 0 ? void 0 : _b.call(_a, this.backoutCount)) === true) {
                    this.pushState(id, module.config.title, search);
                    this.app.trigger('exit', {
                        backoutCount: this.backoutCount
                    });
                }
                return;
            }
            else {
                this.backoutCount = 0;
            }
            const inLevel = (_c = module.config.level) !== null && _c !== void 0 ? _c : 0;
            const outLever = (_d = this.module.config.level) !== null && _d !== void 0 ? _d : 0;
            if (options.singleFlow && module.config.level !== 0 && inLevel >= outLever) {
                return history.back();
            }
            this.app.transform.to(id, search, -1);
            this.app.trigger('back', {
                id,
                module
            });
        });
    }
    checkSingleLock() {
        return this.options.singleLock && this.module.config.level === 0 && this.historyDirection === -1 ? true : false;
    }
}



/***/ }),

/***/ "./src/Transform/index.ts":
/*!********************************!*\
  !*** ./src/Transform/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Transform": () => (/* binding */ Transform)
/* harmony export */ });
/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switch */ "./src/Transform/switch.ts");

class Transform extends _switch__WEBPACK_IMPORTED_MODULE_0__.TransformSwitch {
    constructor(app) {
        super(app);
    }
    setup(options) {
        this.options = options;
    }
}



/***/ }),

/***/ "./src/Transform/proptey.ts":
/*!**********************************!*\
  !*** ./src/Transform/proptey.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransformProptey": () => (/* binding */ TransformProptey)
/* harmony export */ });
class TransformProptey {
    constructor(app) {
        this.id = '';
        this.od = '';
        this.ids = [];
        this.param = '';
        this.relativeViewport = document.createElement('relative-windows');
        this.absoluteViewport = document.createElement('absolute-windows');
        this.fixedViewport = document.createElement('fixed-windows');
        this.target = this.relativeViewport;
        this.app = app;
        this.setupViewport();
    }
    setupViewport() {
        var _a, _b;
        this.relativeViewport.id = 'relative-viewport';
        (_a = this.relativeViewport) === null || _a === void 0 ? void 0 : _a.attachShadow({ mode: 'open' });
        this.absoluteViewport.id = 'absolute-viewport';
        (_b = this.absoluteViewport) === null || _b === void 0 ? void 0 : _b.attachShadow({ mode: 'open' });
        this.resetViewport();
        this.fixedViewport.id = 'fixed-viewport';
        this.fixedViewport.style.position = 'fixed';
        this.fixedViewport.style.zIndex = '3';
        this.fixedViewport.style.width = '100%';
        this.fixedViewport.style.height = '0';
        this.fixedViewport.style.contain = 'strict';
        this.fixedViewport.style.overflow = 'visible';
        document.body.appendChild(this.relativeViewport);
        document.body.appendChild(this.absoluteViewport);
        document.body.appendChild(this.fixedViewport);
    }
    resetViewport() {
        this.relativeViewport.style.cssText = '';
        this.relativeViewport.style.position = 'fixed';
        this.relativeViewport.style.zIndex = '1';
        this.relativeViewport.style.width = this.relativeViewport.style.height = '100%';
        this.relativeViewport.style.overflow = 'hidden';
        this.relativeViewport.style.contain = 'strict';
        this.absoluteViewport.style.cssText = '';
        this.absoluteViewport.style.position = 'fixed';
        this.absoluteViewport.style.zIndex = '2';
        this.absoluteViewport.style.width = this.absoluteViewport.style.height = '100%';
        this.absoluteViewport.style.overflow = 'visible';
        this.absoluteViewport.style.contain = 'strict';
    }
}



/***/ }),

/***/ "./src/Transform/switch.ts":
/*!*********************************!*\
  !*** ./src/Transform/switch.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransformSwitch": () => (/* binding */ TransformSwitch)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ "./src/Transform/animation/index.ts");


class TransformSwitch extends _animation__WEBPACK_IMPORTED_MODULE_0__.TransformAnimation {
    constructor(app) {
        super(app);
        this.hasAnimation = false;
        this.switchover = false;
        this.windowSet = [];
        this.promiseQueue = [];
        this.promiseParamQueue = [];
        this.delayDynamicImport();
    }
    delayDynamicImport() {
        setTimeout(() => {
            __webpack_require__.e(/*! import() */ "src_Animate_index_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../Animate */ "./src/Animate/index.ts"));
        }, 100);
    }
    createContainer(module) {
        if (module.status.init)
            return;
        const container = document.createElement('module-container');
        container.setAttribute('name', this.id);
        container.setAttribute('type', ['frameworks', 'system'].indexOf(this.id) !== -1 ? this.id : 'module');
        module.attach(container);
        this.resetContainer(module, this.switchover || !this.hasAnimation);
        this.getViewport(module).appendChild(container);
    }
    resetContainer(module, situ = false) {
        const config = module.config;
        const container = module.elements.container;
        const systemLevel = ['frameworks', 'system'].includes(module.rel);
        const isDarkModel = this.app.properties.darkTheme;
        container.style.cssText = '';
        if (!systemLevel) {
            container.style.cssText = `
        position: absolute;
        z-index: ${(Number(module.viewIndex) || 0) + 1};
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        inset: 0;
        background: ${config.color || (isDarkModel ? '#000' : '#fff')};
        transform: ${situ ? 'translate3d(0, 0, 0)' : 'translate3d(200%, 200%, 0)'};
        contain: strict;
      `;
        }
    }
    getViewport(module = this.module) {
        return module.rel === 'system' ? this.fixedViewport : module.config.free === false ? (this.relativeViewport.shadowRoot || this.relativeViewport) : (this.absoluteViewport.shadowRoot || this.absoluteViewport);
    }
    checkSwitchover(modulu = this.modulu, module = this.module) {
        return (modulu === null || modulu === void 0 ? void 0 : modulu.rel) === 'module' && module.config.free !== modulu.config.free ? true : false;
    }
    to(...args) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const promise = this.next() || this.promise(...args);
            promise.then(() => {
                this.shiftPromise();
            });
            return this.pushPromise(promise, args);
        });
    }
    prev() {
        return this.promiseQueue[0];
    }
    next() {
        const prev = this.prev();
        if (prev) {
            return new Promise((resolve, reject) => {
                prev.then(() => {
                    if (this.promiseParamQueue[0]) {
                        this.promise(...this.promiseParamQueue[0]).then(resolve).catch(reject);
                    }
                });
            });
        }
        return;
    }
    pushPromise(promise, param) {
        this.promiseParamQueue.push(param);
        this.promiseQueue.push(promise);
        return promise;
    }
    shiftPromise() {
        this.promiseParamQueue.shift();
        this.promiseQueue.shift();
    }
    limit(id) {
        var _a, _b;
        const limit = Math.max(((_a = this === null || this === void 0 ? void 0 : this.options) === null || _a === void 0 ? void 0 : _a.limit) || 3, 2);
        const index = this.windowSet.indexOf(id);
        if (this.module.rel !== 'module' || this.module.config.background === true)
            return;
        if (index !== -1)
            this.windowSet.splice(index, 1);
        this.windowSet.push(id);
        if (this.windowSet.length > limit) {
            (_b = this.app.modules[this.windowSet.splice(0, 1)[0]]) === null || _b === void 0 ? void 0 : _b.destroy();
        }
    }
    destroy(module) {
        if (module.transient && this.history === -1) {
            this.app.del(module).then(() => {
                const index = this.windowSet.indexOf(module.id);
                this.windowSet.splice(index, 1);
            });
        }
        else {
            module.fate().then(() => {
                module.destroy().then(() => {
                    const index = this.windowSet.indexOf(module.id);
                    this.windowSet.splice(index, 1);
                });
            });
        }
    }
    checkPushState() {
        return this.history !== -1 && this.module.viewType !== 'portal';
    }
    getActionPosition(touches) {
        let x = 0;
        let y = 0;
        const event = touches ? (touches['srcEvent'] || touches) : {};
        if (event.changedTouches) {
            x = event.changedTouches[0].pageX;
            y = event.changedTouches[0].pageY;
        }
        else {
            x = event.x;
            y = event.y;
        }
        return { x, y };
    }
    promise(id, param = location.search, history = 1, touches) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            if (id === this.id) {
                return Promise.resolve();
            }
            return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                const od = this.od;
                const ids = od ? [id, od] : [id];
                const module = this.app.modules[id];
                const modulu = this.app.modules[od];
                const moduli = od ? [module, modulu] : [module];
                if (!module) {
                    return this.app.get(id).then(() => {
                        this.promise(id, param, history).then(() => {
                            resolve();
                        }).catch(() => {
                            reject();
                        });
                    });
                }
                this.id = id;
                this.ids = ids;
                this.param = param;
                this.module = module;
                this.modulu = modulu;
                this.moduli = moduli;
                this.history = history;
                this.touches = this.getActionPosition(touches);
                this.hasAnimation = this.checkAnimationNamed();
                this.switchover = this.checkSwitchover();
                this.target = this.getViewport();
                this.createContainer(module);
                this.start().then(() => {
                    this.hintWillTrans(this.viewport);
                    if (this.checkPushState() === true) {
                        this.pushState(id, module.config.title, param);
                    }
                    if (this.touches) {
                        module.setActionOrigin(this.touches);
                    }
                    module.create(!!this.hasAnimation).then(() => {
                        var _a, _b;
                        document.title = (_a = module.config.title) !== null && _a !== void 0 ? _a : '';
                        this.transform().then((stillness) => {
                            this.od = id;
                            this.end(stillness);
                            this.limit(this.id);
                            resolve();
                        });
                        this.app.beforehandDependencies((_b = module.config) === null || _b === void 0 ? void 0 : _b.prerender).then(() => {
                            this.app.trigger('prerenderComplete');
                        });
                    });
                });
            }));
        });
    }
    pos() {
        var _a, _b;
        let x = ((_a = this.touches) === null || _a === void 0 ? void 0 : _a.x) || 0;
        let y = ((_b = this.touches) === null || _b === void 0 ? void 0 : _b.y) || 0;
        let attach = 'center';
        let origin = 'center';
        const width = this.relativeViewport.offsetWidth;
        const height = this.relativeViewport.offsetHeight;
        if (x && y) {
            origin = [x, y];
            if (x < width / 4) {
                x = 0;
            }
            else if (x > width * 3 / 4) {
                x = width;
            }
            if (y < height / 4) {
                y = 0;
            }
            else if (y > height * 3 / 4) {
                y = height;
            }
            attach = [x, y];
        }
        return {
            x, y, width, height, attach, origin
        };
    }
    get backsetState() {
        return this.moduli.length === 1 ? -1 : (this.module.level >= this.modulu.level ? 0 : 1);
    }
    get viewport() {
        var _a, _b;
        return this.switchover ? [
            this.module.config.free === false ? this.relativeViewport : this.absoluteViewport,
            ((_a = this.modulu) === null || _a === void 0 ? void 0 : _a.config.free) === false ? this.relativeViewport : this.absoluteViewport
        ] : [
            this.module.elements.container,
            (_b = this.modulu) === null || _b === void 0 ? void 0 : _b.elements.container
        ];
    }
    modulation(callback) {
        const viewport = this.viewport;
        const backset = this.backsetState;
        const reverse = backset === 0 ? false : true;
        const pos = this.pos();
        return new Promise((resolve, reject) => {
            __webpack_require__.e(/*! import() */ "src_Animate_index_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../Animate */ "./src/Animate/index.ts")).then((module) => {
                const { Animate } = module;
                const animateEvent = {
                    x: pos.x,
                    y: pos.y,
                    in: new Animate(viewport[0]),
                    out: new Animate(viewport[1]),
                    view: viewport,
                    width: pos.width,
                    height: pos.height,
                    viewport: [this.relativeViewport, this.absoluteViewport],
                    modules: this.moduli,
                    reverse: reverse,
                    direction: reverse ? -1 : 1,
                    backset: backset,
                    historyDirection: this.historyDirection,
                    origin: pos.origin,
                    attach: pos.attach,
                    touches: this.touches,
                    callback: callback
                };
                resolve(animateEvent);
            }).catch(() => {
                reject();
            });
        });
    }
    transform() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                if (!this.hasAnimation) {
                    this.switchViewport();
                    resolve(true);
                    return;
                }
                const backset = this.backsetState;
                const animation = yield this.getAnimationOneSide(backset);
                const end = (stillness) => resolve(stillness);
                if (!animation)
                    return end(false);
                this.modulation(end).then((options) => {
                    const prosise = animation(options);
                    if (prosise instanceof Promise)
                        prosise.then(end);
                }).catch(() => {
                    end(false);
                });
            }));
        });
    }
    hintWillTrans(viewport) {
        viewport[0].style.willChange = 'transform, opacity';
        if (viewport[1]) {
            viewport[1].style.willChange = 'transform, opacity';
        }
    }
    removeTransHint(viewport) {
        viewport[0].style.willChange = 'auto';
        if (viewport[1]) {
            viewport[1].style.willChange = 'auto';
        }
    }
    start() {
        return new Promise((resolve, reject) => {
            this.app.trigger('transformStart', this.moduli);
            const transformStart = this.module.events.transformStart;
            if (typeof transformStart === 'function') {
                if (transformStart.call(this.module) === false)
                    return reject();
            }
            if (!this.hasAnimation || this.switchover) {
                this.module.elements.container.style.transform = 'translate3d(0, 0, 0)';
            }
            this.module.willShow();
            if (this.modulu) {
                this.modulu.willHide();
            }
            resolve();
        });
    }
    end(stillness = false) {
        const transformEnd = this.module.events.transformEnd;
        this.removeTransHint(this.viewport);
        if (this.switchover) {
            this.switchViewport();
        }
        if (this.modulu) {
            if (!stillness) {
                if (this.modulu.rel === 'module') {
                    this.modulu.elements.container.style.transform = 'translate3d(200%, 200%, 0)';
                }
                this.resetContainer(this.module, true);
            }
            this.modulu.elements.container.style.transitionDuration = '0ms';
            if (this.modulu.config.background === true) {
                this.modulu.hide();
            }
            else {
                this.destroy(this.modulu);
            }
        }
        this.module.show();
        if (typeof transformEnd === 'function') {
            transformEnd.call(this.module);
        }
        this.app.trigger('transformEnd', this.moduli);
    }
    switchViewport() {
        var _a, _b;
        this.resetViewport();
        if (((_b = (_a = this.module) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.free) === false) {
            this.absoluteViewport.style.transform = 'translate3d(200%, 200%, 0)';
            this.relativeViewport.style.transform = 'translate3d(0, 0, 0)';
        }
        else {
            this.relativeViewport.style.transform = 'translate3d(200%, 200%, 0)';
            this.absoluteViewport.style.transform = 'translate3d(0, 0, 0)';
        }
    }
}



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Application": () => (/* reexport safe */ _Application__WEBPACK_IMPORTED_MODULE_0__.Application),
/* harmony export */   "application": () => (/* binding */ application)
/* harmony export */ });
/* harmony import */ var _Application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Application */ "./src/Application/index.ts");

const application = new _Application__WEBPACK_IMPORTED_MODULE_0__.Application();



/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__values": () => (/* binding */ __values),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("665a399491baedaedb7c")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "lath:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						return setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						blockingPromises = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatelath"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunklath"] = self["webpackChunklath"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./docs/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map
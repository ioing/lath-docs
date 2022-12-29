export declare class AppNav extends HTMLElement {
    header: HTMLElement | null;
    menuIcon: HTMLElement | null;
    menuList: HTMLElement | null;
    constructor();
    connectedCallback(): void;
    upgradeProperty(prop: any): void;
    get hidden(): boolean;
    set hidden(isHidden: boolean);
    static get observedAttributes(): string[];
    /**
     * @param {string} _name
     * @param {any} _oldValue
     * @param {any} _newValue
     * @memberof WcMenuButton
     */
    attributeChangedCallback(name: string, _oldValue: any, _newValue: any): void;
}

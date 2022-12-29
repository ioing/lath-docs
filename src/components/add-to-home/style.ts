export default `
  .ath-viewport * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  .ath-viewport {
    position: fixed;
    z-index: 3;
    pointer-events: none;
  
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-text-size-adjust: none;
    -moz-text-size-adjust: none;
    -ms-text-size-adjust: none;
    -o-text-size-adjust: none;
    text-size-adjust: none;
    width: 100vw;
    top: 0;
    left: 0;
    bottom: calc(10px + constant(safe-area-inset-bottom));
    bottom: calc(10px + env(safe-area-inset-bottom));
  }
  
  .ath-container {
    pointer-events: auto !important;
    position: absolute;
    z-index: 3;
    padding: 0.7em 0.6em;
    width: 18em;
  
    background: rgb(0 116 255 / 100%);
    background-size: 100% auto;
  
    box-shadow: 0 0.2em 0 #3290ff, 0 5px 30px rgb(0 0 0 / 50%);
    border-radius: 3px;
  
    font-family: sans-serif;
    font-size: 15px;
    line-height: 1.5em;
    text-align: center;

    bottom: 10px;
    right: 10px;

    color: #fff;
  }

  .ath-container.ath-ios {
    background: rgb(0 116 255 / 80%);
    border-radius: 12px;
    box-shadow: 0 5px 25px 1px rgba(0, 0, 0, .25);
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    backdrop-filter: saturate(180%) blur(20px);
  }
  
  .ath-container small {
    font-size: 0.8em;
    line-height: 1.3em;
    display: block;
    margin-top: 15px;
    color: rgba(255, 255, 255, .92);
    border-top: 1px solid rgb(0 0 0 / 20%);
    padding-top: 15px;
  }
  
  .ath-ios.ath-phone {
    bottom: 1.8em;
    left: 50%;
    margin-left: -9em;
  }
  
  .ath-ios6.ath-tablet {
    left: 5em;
    top: 1.8em;
  }
  
  .ath-ios7.ath-tablet {
    left: 0.7em;
    top: 1.8em;
  }
  
  .ath-ios8.ath-tablet,
  .ath-ios9.ath-tablet,
  .ath-ios10.ath-tablet{
    right: 0.4em;
    top: 1.8em;
  }
  
  .ath-android {
    bottom: 1.8em;
    left: 50%;
    margin-left: -9em;
  }
  
  /* close icon */
  .ath-container:before {
    content: '';
    position: relative;
    display: block;
    float: right;
    margin: -0.7em -0.6em 0 0.5em;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAMAAABmmnOVAAAAdVBMVEUAAAA5OTkzMzM7Ozs3NzdBQUFAQEA/Pz8+Pj5BQUFAQEA/Pz8+Pj5BQUFAQEA/Pz9BQUE+Pj4/Pz8/Pz8+Pj4/Pz8/Pz8/Pz8+Pj4/Pz8+Pj4/Pz8/Pz8/Pz8/Pz8/Pz8+Pj4/Pz8/Pz8/Pz8/Pz9AQEA/Pz+fdCaPAAAAJnRSTlMACQoNDjM4OTo7PEFCQ0RFS6ytsbS1tru8vcTFxu7x8vX19vf4+C5yomAAAAJESURBVHgBvdzLTsJAGEfxr4C2KBcVkQsIDsK8/yPaqIsPzVlyzrKrX/5p0kkXEz81L23otc9NpIbbWia2YVLqdnhlqFlhGWpSDHe1aopsSIpRb8gK0dC3G30b9rVmhWZIimTICsvQtx/FsuYOrWHoDjX3Gu31gzJxdki934WrAIOsAIOsAIOiAMPhPsJTgKGN0BVsYIVsYIVpYIVpYIVpYIVpYIVpYIVpYIVpYIVlAIVgEBRs8BRs8BRs8BRs8BRs8BRs8BRs8BRTNmgKNngKNngKNngKNngKNhiKGxgiOlZoBlaYBlaYBlaYBlaYBlaYBlaYBlaYBlZIBlBMfQMrVAMr2KAqBENSHFHhGEABhi5CV6gGUKgGUKgGUKgGUFwuqgEUvoEVsoEVpoEUpgEUggF+gKTKY+h1fxSlC7/Z+RrxOQ3fcEoAPPHZBlaYBlaYBlaYBlZYBlYIhvLBCstw7PgM7hkiWOEZWGEaWGEaWGEaIsakEAysmHkGVpxmvoEVqoEVpoEVpoEVpoEVpoEVpoEVkoEVgkFQsEFSsEFQsGEcoSvY4CnY4CnY4CnY4CnY4CnY4CnY4CnY4CnY4CnY4CnY4CnY4CnY4CnY4CnY4CnY4CnY4CnY4CnmbNAUT2c2WAo2eAo2eAo2eAo2eAo2eArNEPFACjZ4CjZ4CjZ4CjaIird/rBvFH6llNCvewdli1URWCIakSIZesUaDoFg36dKFWk9zCZDei3TtwmCj7pC22AwikiIZPEU29IpFNliKxa/hC9DFITjQPYhcAAAAAElFTkSuQmCC);
    background-size: 30%;
    background-repeat: no-repeat;
    background-position: 50%;
    width: 2.7em;
    height: 2.7em;
    text-align: center;
    overflow: hidden;
    color: #fff;
    z-index: 3;
    filter: brightness(0) invert(1);
  }
  
  .ath-container.ath-icon:before {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    float: none;
  }
  
  .ath-mandatory .ath-container:before {
    display: none;
  }
  
  .ath-container.ath-android:before {
    float: left;
    margin: -0.7em 0.5em 0 -0.6em;
  }
  
  .ath-container.ath-android.ath-icon:before {
    position: absolute;
    right: auto;
    left: 0;
    margin: 0;
    float: none;
  }
  
  .ath-action-icon {
    display: inline-block;
    vertical-align: middle;
    background-position: 50%;
    background-repeat: no-repeat;
    text-indent: -9999em;
    overflow: hidden;
  }
  
  .ath-ios .ath-action-icon,
  .ath-ios7 .ath-action-icon,
  .ath-ios8 .ath-action-icon,
  .ath-ios9 .ath-action-icon,
  .ath-ios10 .ath-action-icon {
    width: 1.6em;
    height: 1.6em;
    background-image: url("data:image/svg+xml,%3Csvg t='1666877007697' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='14183' width='200' height='200'%3E%3Cpath d='M543.503059 102.068706l-2.831059 530.55247a30.117647 30.117647 0 0 1-60.235294-0.301176l2.800941-528.715294-160.768 160.768a30.117647 30.117647 0 0 1-42.586353-42.586353L492.845176 8.824471a30.117647 30.117647 0 0 1 42.586353 0l212.961883 212.961882a30.117647 30.117647 0 1 1-42.586353 42.586353l-162.334118-162.334118zM708.306824 391.529412a30.117647 30.117647 0 0 1 0-60.235294H873.411765a60.235294 60.235294 0 0 1 60.235294 60.235294v572.235294a60.235294 60.235294 0 0 1-60.235294 60.235294H150.588235a60.235294 60.235294 0 0 1-60.235294-60.235294V391.529412a60.235294 60.235294 0 0 1 60.235294-60.235294h163.056941a30.117647 30.117647 0 0 1 0 60.235294H150.588235v572.235294h722.82353V391.529412h-165.104941z' fill='%23ffffff' p-id='14184'%3E%3C/path%3E%3C/svg%3E");
    margin-top: -0.3em;
    background-size: auto 80%;
  }
  
  
  .ath-android .ath-action-icon {
    width: 1.4em;
    height: 1.5em;
    background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAANlBMVEVmZmb///9mZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZW6fJrAAAAEXRSTlMAAAYHG21ub8fLz9DR8/T4+RrZ9owAAAB3SURBVHja7dNLDoAgDATQWv4gKve/rEajJOJiWLgg6WzpSyB0aHqHiNj6nL1lovb4C+hYzkSNAT7mryQFAVOeGAj4CjwEtgrWXpD/uZKtwEJApXt+Vn0flzRhgNiFZQkOXY0aADQZCOCPlsZJ46Rx0jhp3IiN2wGDHhxtldrlwQAAAABJRU5ErkJggg==);
    background-size: 100% auto;
    filter: brightness(0) invert(1);
  }
  
  .ath-container p {
    margin: 7px 10px 12px;
    padding: 0;
    position: relative;
    z-index: 3;
    text-shadow: 0 0.1em 0 rgba(0, 0, 0, .1);
    font-size: 1.1em;
  }

  .ath-container.ath-ios p {
    margin: 4px 5px 15px;
  }

  .ath-container strong {
    font-weight: normal;
    color: #fff;
  }
  
  .ath-ios.ath-phone:after {
    content: '';
    border-top: 10px solid rgb(0 116 255 / 80%);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    position: absolute;
    width: 0;
    height: 0;
    bottom: -10px;
    left: 50%;
    margin-left: -10px;
  }
  
  .ath-ios.ath-tablet:after {
    content: '';
    background: #eee;
    position: absolute;
    width: 2em;
    height: 2em;
    top: -0.9em;
    left: 50%;
    margin-left: -1em;
    -webkit-transform: scaleX(0.9) rotate(45deg);
    transform: scaleX(0.9) rotate(45deg);
    z-index: 3;
  }
  
  .ath-application-icon {
    position: relative;
    padding: 0;
    border: 0;
    margin: 20px auto 0.2em auto;
    height: 6em;
    width: 6em;
    z-index: 3;
    overflow: hidden;
  }
  
  .ath-container.ath-ios .ath-application-icon {
    border-radius: 1.4em;
    box-shadow: 0 0.2em 0.4em rgba(0,0,0,0.1),
      inset 0 0.07em 0 rgba(255,255,255,0.1);
    margin: 20px auto 0.8em auto;
  }
  
  @media only screen and (orientation: landscape) {
    .ath-container.ath-phone {
      width: 24em;
    }
  
    .ath-android.ath-phone {
      margin-left: -12em;
    }
  
    .ath-ios.ath-phone {
      margin-left: -12em;
    }
  
    .ath-ios6:after {
      left: 39%;
    }
  
    .ath-ios8.ath-phone {
      left: auto;
      bottom: auto;
      right: 0.4em;
      top: 1.8em;
    }
  
    .ath-ios8.ath-phone:after {
      bottom: auto;
      top: -0.9em;
      left: 68%;
      z-index: 3;
      box-shadow: none;
    }
  }

  @media (prefers-color-scheme: dark) {
    .ath-container {
      background: rgba(0, 0, 0, .91);
      box-shadow: 0 0.2em 0 #353535;
    }
    .ath-container.ath-ios {
      background: rgba(50, 50, 50, .85);
    }
    .ath-ios.ath-phone:after {
      border-top-color: rgba(50, 50, 50, .85);
    }
    .ath-container p {
      color: #fff;
      text-shadow: 0 0.1em 0 #333;
    }
    .ath-container.ath-icon:before {
      filter: invert(1);
    }
  }
`
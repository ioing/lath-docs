export declare class BannerSlogen extends HTMLElement {
    _menuButton: any | null;
    constructor();
    connectedCallback(): void;
    /**
     * @param {string} prop
     *
     * @memberOf WcMenuButton
     */
    upgradeProperty(prop: any): void;
    get open(): boolean;
    set open(isOpen: boolean);
    static get observedAttributes(): string[];
    /**
     * @param {string} _name
     * @param {any} _oldValue
     * @param {any} _newValue
     * @memberof WcMenuButton
     */
    attributeChangedCallback(_name: any, _oldValue: any, _newValue: any): void;
    handleMenuButtonClick: () => void;
}

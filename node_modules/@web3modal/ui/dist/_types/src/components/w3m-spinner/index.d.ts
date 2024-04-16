import { LitElement } from 'lit';
export declare class W3mSpinner extends LitElement {
    static styles: any[];
    color: 'accent' | 'fill';
    size: number;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-spinner': W3mSpinner;
    }
}

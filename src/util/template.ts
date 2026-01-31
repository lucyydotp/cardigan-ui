/**
 * An HTML template that creates a <template> element on demand.
 */
export class HtmlTemplate {
    private element?: HTMLTemplateElement

    constructor(private readonly htmlString: string) {
    }

    installTo(shadowRoot: ShadowRoot) {
        if (!this.element) {
            this.element = document.createElement("template")
            this.element.innerHTML = this.htmlString
        }

        shadowRoot.appendChild(document.importNode(this.element.content, true))
    }
}
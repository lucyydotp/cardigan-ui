import css from "../styles/shadowElements/loader.css?inline"

const sheet = new CSSStyleSheet()
sheet.replaceSync(css)

const tpl = document.createElement("template")
tpl.innerHTML = `
<div class="loader-inner">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
<div class="loader-text">
<slot/>
</div>
</div>
`

export class LoaderElement extends HTMLElement {
	constructor() {
		super()
		const shadowRoot = this.attachShadow({
			mode: "closed",
		})
		shadowRoot.adoptedStyleSheets.push(sheet)
		// attachShadowCss(shadowRoot)

		shadowRoot.appendChild(document.importNode(tpl.content, true))
	}
}

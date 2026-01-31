import {HtmlTemplate} from "../util/template.ts";
import css from "../styles/shadowElements/input.css?inline"

const template = new HtmlTemplate(`
<label for="input" id="label"></label>
<input id="input">
<span id="underline"></span>
`)

const stylesheet = new CSSStyleSheet()
stylesheet.replaceSync(css)

const allowedTypes = [
    "email",
    "number",
    "password",
    "search",
    "tel",
    "text",
    "url",
    // month/week/time? need to check browser support
]

// TODO:
//  - disabled styles and aria
export class InputElement extends HTMLElement {
    static formAssociated = true
    static observedAttributes = [
        "autocapitalize",
        "autocomplete",
        "autofocus",
        "dirname",
        "disabled",
        "label",
        "max",
        "maxlength",
        "min",
        "minlength",
        "pattern",
        "placeholder",
        "readonly",
        "required",
        "size",
        "step",
        "type",
        "value",
    ]

    private readonly internals: ElementInternals = this.attachInternals()

    private input: HTMLInputElement

    constructor() {
        super()
        const shadow = this.attachShadow({mode: "open"})
        shadow.adoptedStyleSheets.push(stylesheet)
        template.installTo(shadow)

        this.input = shadow.getElementById("input")! as HTMLInputElement

        this.input.addEventListener("input", () => this.syncValue())
        this.syncValue()
    }

    get name() {
        return this.input.name
    }

    private syncValue() {
        this.internals.setFormValue(this.input.value)
        this.internals.setValidity(
            this.input.validity,
            this.input.validationMessage,
            this.input,
        )
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        if (name === "label") {
            this.shadowRoot!.getElementById("label")!.textContent = newValue
            return
        }

        const input = this.shadowRoot!.getElementById("input")!

        if (name === "type") {
            input.setAttribute("type", allowedTypes.includes(newValue) ? newValue : "text")
        } else if (newValue == null) {
            input.removeAttribute(name)
        } else {
            input.setAttribute(name, newValue)
        }
        this.syncValue()
    }
}
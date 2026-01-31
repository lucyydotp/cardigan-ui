import "./styles/index.css"
import { LoaderElement } from "./elements/loader.ts"
import {InputElement} from "./elements/input.ts";

if (!window.customElements) {
	throw new Error("Custom elements are not supported by this browser")
}

customElements.define("cdg-loader", LoaderElement)
customElements.define("cdg-input", InputElement)

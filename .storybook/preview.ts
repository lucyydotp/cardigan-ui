import type { Preview } from "@storybook/web-components-vite"

import "../src"
import '@fontsource-variable/outfit/index.css'
import './styles.css'

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		docs: {
			codePanel: true,
		},
		layout: "centered",
	},
	tags: ["autodocs"],
}

export default preview

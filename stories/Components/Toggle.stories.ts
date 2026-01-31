import type { Meta, StoryObj } from "@storybook/web-components-vite"
import { html } from "lit-html"
import { COLOR_ARGUMENT, type Color } from "../util"

const meta = {
	render: ({ color }) => html`
		<label for="toggle">Toggle</label>
        <input id="toggle" type="checkbox" class="toggle color-${color}"/>
    `,
	argTypes: {
		color: COLOR_ARGUMENT,
	},
	args: {
		color: "red",
	},
} satisfies Meta<{ color: Color }>

export default meta

export const Normal: StoryObj = {}

import type { Meta, StoryObj } from "@storybook/web-components-vite"
import { html } from "lit-html"
import { COLOR_ARGUMENT, type Color } from "../util"

const meta = {
	render: ({ color, label }) => html`
        <cdg-loader class="color-${color}">${label}</cdg-loader>
    `,
	argTypes: {
		color: COLOR_ARGUMENT,
	},
	args: {
		color: "neutral",
		label: "Optional label text...",
	},
} satisfies Meta<{ color: Color; label: string }>

export default meta

export const Normal: StoryObj = {}

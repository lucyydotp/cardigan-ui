import type { Meta, StoryObj } from "@storybook/web-components-vite"
import { html } from "lit-html"
import { COLOR_ARGUMENT, type Color } from "../util"

const meta = {
	render: ({ color, style, textContent }) => html`
        <button class="color-${color} ${style === "normal" ? "" : style}">${textContent}</button>
    `,
	argTypes: {
		color: COLOR_ARGUMENT,
		style: {
			options: ["normal", "subtle", "outline"],
			control: { type: "select" },
		},
	},
	args: {
		textContent: "Button",
		color: "red",
	},
} satisfies Meta<{ textContent: string; color: Color; style: string }>

export default meta
type Story = StoryObj<{ textContent: string; color: Color; style: string }>

export const Normal: Story = {
	args: {
		style: "normal",
	},
}

export const Subtle: Story = {
	args: {
		style: "subtle",
	},
}

export const Outline: Story = {
	args: {
		style: "outline",
	},
}

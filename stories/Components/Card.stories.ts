import type { Meta, StoryObj } from "@storybook/web-components-vite"
import { html } from "lit-html"
import { COLOR_ARGUMENT, type Color } from "../util"

const meta = {
	render: ({ color }) => html`
        <div class="card color-${color}">
            <h3 class="card-title">Card Text</h1>

                According to all known laws of aviation, there is no way that a bee should be able to fly.<br/>
                Its wings are too small to get its fat little body off the ground.<br/>
                The bee, of course, flies anyways. Because bees don't care what humans think is impossible.<br/>
            
        </div>
    `,
	argTypes: {
		color: COLOR_ARGUMENT,
	},
	args: {
		color: "neutral",
	},
} satisfies Meta<{ color: Color }>

export default meta

export const Normal: StoryObj = {}

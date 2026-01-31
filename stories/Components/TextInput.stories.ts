import type {Meta, StoryObj} from "@storybook/web-components-vite"
import {html, type TemplateResult} from "lit-html"

type Args = {
    disabled: boolean,
    label: string,
    placeholder: string,
}

const meta = {
    title: "Components/Text Input",
    render: (args) => html`
        <cdg-input
                ?disabled="${args.disabled}"
                label="${args.label}"
                placeholder="${args.placeholder}"
        />
    `,
    args: {
        disabled: false,
        label: "Label",
        placeholder: "Placeholder",
    },
} satisfies Meta<Args>

export default meta

export const Normal: StoryObj<Args> = {
    args: {
        label: ""
    }
}

export const WithLabel: StoryObj = {
    name: "With label",
    args: {
        label: "Label"
    }
}

const createStory = (type: string) => ({
    name: type[0].toUpperCase() + type.slice(1),
    render: (args) => html`
        <form method="dialog">
            <cdg-input
                    type="${type}"
                    label="${args.label}"
                    placeholder="${args.placeholder}"
                    required
            ></cdg-input>
            <input type="submit" class="color-green" style="margin-top: 1em; float: right" value="Submit"/>
        </form>
    `
})

const withForm = (input: TemplateResult) => args => html`
    <form onsubmit="event.preventDefault();console.log(new FormData(event.target).get('value'))">
    ${input}
    <input type="submit" class="color-green" style="margin-top: 1em; float: right" value="Submit"/>
    </form>
    <div>
    </div>
`

export const NumberStory = {
    render: withForm(html`
        <cdg-input type="number" name="value" required label="Number" min=-5 max=5 placeholder="Enter a number"/>`)
}

export const Email = {
    render: withForm(html`
        <cdg-input type="email" name="value" required label="Email" placeholder="Enter an email address"/>
    `)
}

export const Password = {
    render: withForm(html`
        <cdg-input type="password" name="value" required label="Password" placeholder="Enter a password"/>
    `)
}

export const Search = withForm(html`
    <cdg-input type="search" name="value" required label="Search" placeholder="Search"/>
`)

export const Tel = withForm(html`
    <cdg-input type="tel" name="value" required label="Phone number" placeholder="Enter a phone number"/>
`)
export const Url =withForm(html`
    <cdg-input type="url" name="value" required label="URL" placeholder="Enter a URL"/>
`)
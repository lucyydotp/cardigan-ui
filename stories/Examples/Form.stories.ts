import {html} from "lit-html";

export default {
    tags: [],
    render: () => html`
        <div class="card">
            <h1 class="card-title">Sign up</h1>
            <form class="grid" onsubmit="event.preventDefault();">
                <cdg-input label="Username" name="username" type="text" required></cdg-input>
                <cdg-input class="grid-item-6" label="First name" name="firstName" required></cdg-input>
                <cdg-input class="grid-item-6" label="Last name" name="firstName" required></cdg-input>
                <cdg-input label="Email" name="email" type="email" required></cdg-input>
                
                <label class="grid-item-10" for="toggle">I agree to sacrifice my first-born child to the company</label>
                <input id="toggle" class="grid-item-2 right-aligned toggle color-green" type="checkbox" />
                
                <button class="color-green">Sign up</button>
            </form>
        </div>
    `,
}

export const Form = {}
import type { StorybookConfig } from "@storybook/web-components-vite"

const config: StorybookConfig = {
	stories: [
		"../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
		"../stories/**/*.mdx",
	],
	addons: [
		"@storybook/addon-docs",
	],
	framework: "@storybook/web-components-vite",
}
export default config

export const COLOR_ARGUMENT = {
	options: [
		"red",
		"orange",
		"yellow",
		"green",
		"turquoise",
		"blue",
		"purple",
		"neutral",
	],
	control: { type: "select" },
} as const

export type Color = (typeof COLOR_ARGUMENT)["options"][number]

import type Icons from "unplugin-icons/vite"

// @ts-expect-error not sure why only failing with lint
export const unpluginIconViteOptions: Parameters<typeof Icons>[0] = {
	scale: 0, // removes the scale
	// @ts-expect-error .
	iconCustomizer: async (_, __, props) => {
		props.width = "unset"
	},
	// note that we can't use tailwind classes
	// i mean we could, but we have to tell it to include them manually (pain)
	defaultStyle: "vertical-align: -0.125em; height: 1em; display: inline-block; width:auto;",
}
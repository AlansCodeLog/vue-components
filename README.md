### 🚧 WORK IN PROGRESS 🚧
[![Docs](https://github.com/alanscodelog/vue-components/workflows/Docs/badge.svg)](https://github.com/alanscodelog/vue-components/actions/workflows/docs.yml)
[![Build](https://github.com/alanscodelog/vue-components/actions/workflows/build.yml/badge.svg)](https://github.com/alanscodelog/vue-components/actions/workflows/build.yml)
[![Release](https://github.com/alanscodelog/vue-components/actions/workflows/release.yml/badge.svg)](https://github.com/alanscodelog/vue-components/actions/workflows/release.yml)
[![NPM Version (with latest tag)](https://img.shields.io/npm/v/%40alanscodelog%2Fvue-components/latest)](https://www.npmjs.com/package/@alanscodelog/vue-components/v/latest)
[![NPM Version (with beta tag)](https://img.shields.io/npm/v/%40alanscodelog%2Fvue-components/beta)](https://www.npmjs.com/package/@alanscodelog/vue-components/v/beta)

Custom vue component library.

# [Storybook](https://alanscodelog.github.io/vue-components/storybook)

# Usage with Nuxt

Everything can just be done from the config. Nuxt will automatically import the component types. The module also automatically registers it's tailwind config and provides the necessary colors to the tailwind theme viewer for use with `@nuxtjs/tailwindcss`, be sure to install it as a peer dependency.

You can also configure which directives the vue plugin auto-imports with the witchcraftComponents key (the lib will soon be renamed).

```ts
	modules: [
		[
			"@alanscodelog/vue-components/nuxt",
			"@nuxtjs/tailwindcss",
		],
	],
	witchcraftComponents: {
		// only register some directives globally
		directives: ["v..."]
	},
	vite: {
		vue: {
			script: {
				defineModel: true,
			},
		}
	}

```

# Usage with Vite

In `main.ts` or where vue is mounted:

```ts
// if NOT using tailwind a global style import is required to get the component styles working
// import "../node_modules/@alanscodelog/vue-components/dist/style.css"
// proper import is currently broken, vite is not properly resolving css imports 

// import plugin
import { VueComponentsPlugin } from "@alanscodelog/vue-components"

import App from "./App.vue"
import { createApp } from "vue"

// add fontawesome icons
import { library } from "@fortawesome/fontawesome-svg-core"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"


library.add(fas, far) // add needed icons, or all for dev
createApp(App)
	.use(VueComponentsPlugin) //use plugin

```
In the vite config, vue will require the experimental useModel:

```
	plugins: [
		vue({
			script: {
				defineModel: true,
			},
		}),
	],
```

## Setting up Tailwind

You should also be able to use tailwind directly instead of importing the styles.

You can use the exported config and merge it with your own if needed.

```ts

import { config } from "@alanscodelog/vue-components/tailwind/config.js"

export default  {
	...config,
	content: [
		...config.content,
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
		// be sure to add this or tailwind will not include the classes in the component library
		"./node_modules/@alanscodelog/vue-components/**/*.{vue,js,ts,jsx,tsx}",
	],
	plugins: [
		...config.plugins
	]
}



```

If you need to setup the config completely from scratch the package provides a plugin `@alanscodelog/vue-components/tailwind/plugin.js` that sets up a few utility classes\*. It also requires setting up the theming library. The options it uses are exported for easy re-use.

```ts
import { type Config } from "tailwindcss"
import { createTailwindPlugin } from "metamorphosis/tailwind"
// you can also use your own metamorphosis theme so long as the necessary colors are provided ( warning/ok/danger/accent, neutral is also used, but that is already provided by tailwind )
import { theme } from "@alanscodelog/vue-components/theme.js"
import {
	plugin as libraryPlugin,
	config as componentsConfig,
	themePluginOpts,
} from "@alanscodelog/vue-components/tailwind"

const config = {
	darkMode: "class",
	content: [/* ... */],
	plugins: [
		// integration with my theme library
		createTailwindPlugin(theme, themePluginOpts),
		libraryPlugin,
		// .... your plugins
	],
	// ... your opts
} satisfies Config

export default config

```

\* Note that it overrides the h-screen utility to use dvh units by default, with vh as a fallback.

You will need to import `@alanscodelog/vue-components/utilities.css` and `@alanscodelog/vue-components/base.css` in your css file. 

```css
@import "@alanscodelog/vue-components/base.css";
@import "@alanscodelog/vue-components/utilities.css";
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Utilities contains required utilities.

Base just contains animation keyframes and basic styles for vue animations. They are not "layered", i.e. they will get imported regardless of whether they are used since otherwise tailwind does not detect they are being used.


## Getting Globally Registered Component Types

To get global typings, in a global declaration file (e.g. global.d.ts) do:
See also [this issue](https://github.com/vuejs/language-tools/issues/1077#issuecomment-1145960878).
```ts
import { GlobalComponentTypes } from "@alanscodelog/vue-components"
declare module "@vue/runtime-core" {
	export interface GlobalComponents extends GlobalComponentTypes { }
	// also you to be able to pass extra attributes, you will need to do the following 
	export interface HTMLAttributes = Record<string, any>
	// OR alternatively you can extend/interface merge the AdditionalAttributes interface instead
	export interface AllowedComponentProps = Record<string, any>

}
```
# General Usage

# Props

To make it easier to style parts of components or override behavior, some components can accept additional prefixed attributes, for example, you can pass `wrapper-class` to the input component to style it's wrapper.

I think this is nicer in general than having to pass an object with extra attributes. The only weird part, is because of how vue changes the case of props, for attributes like `innerHTML` you will need to pass `{prefix}-inner-h-t-m-l`, but all components have proper types to help this. Similarly events look like `{prefix}-on-click`.

# Slots

Usually it is possible to do most modifications through props, but slots to replace parts of components are available.

Most slots where possible are passed all properties needed to replace them except classes so you can do something like this, to for example replace the simple input component inside the input component.

```vue
<lib-input>
	<template #input="slotProps">
		<lib-simple-input
			:class="'completely custom styles'"
			v-bind="slotProps"
		></lib-simple-input>
	</template>
</lib-input>

```

# Development

`src/main.ts` is a playground for testing things and will work with the `dev` script which will serve a vite server in dev mode.

`scr/main.lib.ts` is the actual library export which is used when vite builds in production mode.

## Props

Due to issues with vue 3 removing $listeners and the fact that we can't inherit from an existing HTML attribute types to specify props for wrapper components (most of them), we have to declare props in a convoluted way to get proper types when we consume the componenets.

Here is an example of the needed code for props to work correctly:
```vue
<script lang="ts">
// this is done in a seperate script so that it actually compiles
// and we can have interface merging, a setup script cannot interface merge

import type { BaseInteractiveProps } from "../shared/props.js"

// if using useDivideAttrs, we need to do the below for each prefix
// a helper type WrapperProps is provided to do this
type WrapperTypes =  (WrapperProps<"wrapper", HTMLAttributes, {
	// overrides
	/** Tailwind classes. */
	class:string;
}>)

// real props vue can understand, they will show up under props.*
type RealProps =
// simple types are okay
& BaseInteractiveProps
& {
	// any ignored props that we need to use in the component template 
	// will need to be re-defined so vue can see them
	// in a way vue can see them if it's one of the problem properties
	id?: InputHTMLAttributes["id"]
}


interface Props
	extends
	// we need to ignore the complex InputHTMLAttributes type
	// otherwise vue compilation fails
	// if we ignore it, all it's properties are passed as fallback attrs
	// NOT to props as normal
	// we also need to omit properties or events that the component overrides with a different type
	/** @vue-ignore */
	Partial<Omit<InputHTMLAttributes,"class" | "onSubmit"> & {
		//	overrides for the components
		// usually, for example, class can only be a string (because of tailwind)
		// this is still part of the ignored type above 
		// it will be passed as an attr
		class?:string
	}>,
	/** @vue-ignore */
	Partial<WrapperTypes>,
	RealProps
{ }
</script>

<script lang="ts" setup>
// eslint-disable-next-line no-duplicate-imports
import { baseInteractivePropsDefaults } from "../shared/props.js"

const props = withDefaults(defineProps<Props>(), {
	id: "",
	...baseInteractivePropsDefaults
})
const $ = useDivideAttrs(["wrapper"] as const)
</script>
```

For prop types that don't error, I think we can just define them normally, but then it turns into a mess, some components will have their values in props, some in $attrs, this way. This is consistent and also more in line with what we expect.

Related Links:
- https://github.com/vuejs/rfcs/discussions/397
- https://github.com/vuejs/core/issues/8522
- https://github.com/vuejs/rfcs/pull/477
- https://github.com/vuejs/language-tools/issues/1232#issuecomment-1118176103

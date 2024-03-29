<template>
<button :id="id"
	:class="!unstyle && twMerge(`
			button
			flex
			cursor-pointer
			items-center
			justify-center
			rounded
			px-1
			hover:cursor-pointer
			[&:hover_*]:cursor-pointer
			focus-outline
			disabled:shadow-none
			disabled:text-neutral-500
			disabled:cursor-default
			text-fg
			hover:text-accent-700
			dark:text-bg
			dark:hover:text-accent-500
			dark:disabled:text-neutral-500
			dark:disabled:hover:text-neutral-500
			`,
		!color && `active:text-neutral-800` /* todo for colors */,
		border && `
				transition-all
				bg-neutral-100
				shadow-sm
				shadow-neutral-950/50
				hover:shadow-md
				hover:shadow-neutral-950/30
				hover:border-neutral-300

				active:shadow-inner
				active:shadow-fg/20
				active:border-transparent
				border
				border-neutral-200
				disabled:border-neutral-200
				disabled:bg-neutral-50

				dark:hover:shadow-accent-950/30
				dark:active:shadow-fg/40
				dark:active:border-neutral-900
				dark:bg-neutral-800
				dark:border-neutral-900
				dark:disabled:border-neutral-800
				dark:disabled:bg-neutral-900
			`,
		!border && color === `primary` && `
				font-bold
				hover:text-accent-50
			`,
		!border && color === `ok` && `
				text-ok-600 hover:text-ok-500
				dark:text-ok-600 dark:hover:text-ok-500
			`,
		!border && color === `warning` && `
				text-warning-500 hover:text-warning-300
				dark:text-warning-600 dark:hover:text-warning-400
			`,
		!border && color === `danger` && `
				text-danger-500 hover:text-danger-300
				dark:text-danger-600 dark:hover:text-danger-400
			`,
		!border && color === `secondary` && `
				text-accent-700 hover:text-accent-500
				dark:text-accent-600 dark:hover:text-accent-400
			`,
		!border && color === `primary` && `
				text-accent-700 hover:text-accent-500
				dark:text-accent-600 dark:hover:text-accent-400
			`,
		border && color === `ok` && `
				text-ok-950
				hover:text-ok-800
				bg-ok-400
				border-ok-500
				hover:border-ok-600
				hover:shadow-ok-900/50

				dark:text-ok-100
				dark:hover:text-ok-200
				dark:bg-ok-700
				dark:border-ok-800
				dark:hover:border-ok-900
				dark:hover:shadow-ok-900/30
				`,
		border && color === `warning` && `
				text-warning-950
				hover:text-warning-900
				bg-warning-300
				border-warning-400
				hover:border-warning-400
				hover:shadow-warning-900/50

				dark:text-warning-100
				dark:hover:text-warning-200
				dark:bg-warning-700
				dark:border-warning-700
				dark:hover:shadow-warning-900/25
			`,
		border && color === `danger` && `
				text-danger-950
				hover:text-danger-900
				bg-danger-400
				border-danger-500
				hover:border-danger-500
				hover:shadow-red-900/50

				dark:text-danger-100
				dark:hover:text-danger-200
				dark:bg-danger-900
				dark:border-danger-950
				dark:hover:shadow-red-500/10
				`,
		border && color === `secondary` && `
				text-accent-800
				dark:text-accent-400
			`,
		border && color === `primary` && `
				text-bg
				hover:text-bg
				bg-accent-600
				border-accent-700
				hover:border-accent-800
				hover:shadow-accent-950/30

				dark:text-bg
				dark:bg-accent-600
				dark:hover:text-accent-200
				dark:border-accent-800
				dark:hover:border-accent-700
				dark:hover:shadow-accent-900/50
`,
		$attrs.class as any
	)"
	:type="$attrs.type ?? 'submit'"
	:tabindex="0"
	:disabled="disabled"
	:data-border="border"
	:data-color="color"
	:aria-disabled="disabled"
	:aria-labelledby="label ? `label-${id}` : undefined"
	v-bind="{ ...$attrs, class: undefined, ...listeners }"
>
	<label :id="`label-${id}`" class="label pointer-events-none flex flex-1 items-center justify-center">
		<slot>
			<slot name="icon">
				<fa v-if="icon"
					:icon="icon"
					class="slot before:content-vertical-holder peer flex items-center justify-center"
				/>
			</slot>
			<span v-if="!isBlank(label)" class="peer-[.icon]:pl-2">
				{{ label }}
			</span>
		</slot>
	</label>
</button>
</template>
<script setup  lang="ts">
import { isBlank, keys, pick } from "@alanscodelog/utils"
import { computed, type PropType, useAttrs } from "vue"

import { twMerge } from "../../helpers/twMerge.js"
import fa from "../fa/Fa.vue"
import { baseInteractiveProps, fallthroughEventProps, labelProp, linkableByIdProps } from "../shared/props.js"


const $attrs = useAttrs()

defineOptions({
	name: "lib-button",
})

const props = defineProps({
	...linkableByIdProps(),
	...labelProp,
	...baseInteractiveProps,
	...fallthroughEventProps,
	readonly: undefined as any,
	icon: { type: String, required: false, default: undefined },
	color: { type: [String, Boolean] as PropType<"warning" | "ok" | "danger" | "primary" | "secondary" | false>, required: false, default: false },
	unstyle: { type: Boolean, required: false, default: false },
})

const listeners = computed(() => pick(props, keys(fallthroughEventProps) as any) as any)

</script>


<template>
<div :class="twMerge(
		`file-input justify-center border-2 border-dashed border-accent-500/80`,
		compact && `rounded`,
		!compact && `flex w-full flex-col items-center gap-2 rounded-xl  p-2 `
	)"
	@input="(inputFile as any)"
>
	<div :class="twMerge(
		`relative justify-center`,
		compact && `flex gap-2`,
		!compact && `input-wrapper
				flex flex-col items-center
			`
	)"
	>
		<label
			:for="id"
			:class="twMerge(
				`pointer-events-none flex gap-1 items-center whitespace-nowrap`
			)"
		>
			<slot v-if="compact || multiple || files.length === 0" name="icon">
				<fa icon="solid arrow-up-from-bracket"/>
			</slot>
			<slot name="label">
				{{
					(compact ? 'Choose File' : 'Drag & Drop File') +
						(multiple ? 's' :'')
				}}
			</slot>
			<span v-if="compact">{{ ` (${files.length})` }}</span>
		</label>
		<label v-if="!compact" class="flex flex-col items-center text-sm">
			<slot name="formats">Accepted Formats: </slot>
			<div class="">
				{{ formats.join(", ") }}
			</div>
		</label>
		<input
			:id="id"
			class="
					absolute
					inset-0
					z-0
					cursor-pointer
					text-[0]
					opacity-0
				"
			type="file"
			:accept="formats.join(', ')"
			:multiple="multiple"
			ref="el"
			@input="(inputFile as any)"
		>
	</div>
	<div v-if="!compact && files.length > 0"
		:class="twMerge(`previews
			flex items-stretch justify-center gap-2 flex-wrap
			`,
			multiple && `
				w-full
			`)"
	>
		<div class="flex-1"/>
		<div class="preview
				z-1
				relative
				flex
				min-w-0
				max-w-[150px]
				flex-initial
				flex-wrap
				items-center
				gap-2 rounded border border-neutral-400
				shadow-sm
				shadow-neutral-800/20
			"
			v-for="entry of files"
			:key="entry.file.name"
		>
			<div class="flex flex-initial basis-full justify-start">
				<lib-button
					:border="false"
					:aria-label="`Remove file ${entry.file.name}`"
					@click="removeFile(entry)"
				>
					<fa icon="solid times"/>
				</lib-button>
			</div>

			<div class="flex flex-initial basis-full justify-center">
				<div v-if="entry.isImg"
					class="image
					bg-transparency-squares flex
					h-[80px]   flex-wrap items-center
					justify-center
				"
				>
					<img class="max-h-full w-auto" :src="getSrc(entry.file)">
				</div>
				<div v-if="!entry.isImg"
					class="no-image
					flex h-[80px]
						flex-1 basis-full flex-wrap items-center justify-center
					"
				>
					<fa icon="regular file" class="text-4xl opacity-50"/>
				</div>
			</div>
			<div class="filename min-w-0 flex-1 basis-0 truncate break-all rounded p-1 text-sm" :title="entry.file.name">{{ entry.file.name }}</div>
		</div>

		<div class="flex-1"/>
	</div>
</div>
</template>
<script lang="ts">
 
export default { name: "lib-file-input" }
</script>
<script setup  lang="ts">
/* eslint-disable @typescript-eslint/no-unused-vars */
import { computed, getCurrentInstance, onBeforeUnmount, onMounted, type PropType, reactive, type Ref, ref, watch } from "vue"

import { twMerge } from "../../helpers/twMerge.js"
import Fa from "../fa/Fa.vue"
import LibButton from "../LibButton/LibButton.vue"
import { linkableByIdProps } from "../shared/props.js"


const el = ref<null | HTMLInputElement>(null)
type Entry = { file: File, isImg: boolean }
const files = ref<(Entry)[]>([])

watch(files, () => {
	emits("input", files.value.map(entry => entry.file))
})

 
const emits = defineEmits<{
	(e: "input", val: File[]): void
}>()
/* eslint-enable @typescript-eslint/prefer-function-type */

const props = defineProps({
	...linkableByIdProps(),
	// ...baseInteractiveProps,
	// modelValue: { type: Array as PropType<Entry[]>, required: false },
	multiple: { type: Boolean, required: false, default: false },
	formats: { type: Array as PropType<string[]>, required: false, default: () => [".jpeg", ".png", ".jpg", ".stl"]},
	compact: { type: Boolean, required: false, default: false },
})

const getSrc = (file: File) => {
	const src = URL.createObjectURL(file)
	return src
}

const removeFile = (entry: Entry) => {
	const index = files.value.indexOf(entry)
	files.value.splice(index, 1)
}
const inputFile = async (e: InputEvent): Promise<void> => {
	e.preventDefault()
	const res = []
	if (el.value!.files) {
		for (const file of el.value!.files) {
			const isImg = file.type.startsWith("image")
			res.push({ file, isImg })
		}
	}
	files.value = res
}

</script>


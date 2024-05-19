import { computed, type Ref, useAttrs } from "vue"

import { keys } from "@alanscodelog/utils/keys.js"

/**
 * Allows users to more easily pass attributes to different parts of a component. Suppose a component has an input and a wrapper and you want most attributes to go to the input, but any that start with `wrapper` to go to the wrapper.
 *
 * You can do:
 *
 * ```ts
 * const extraAttrs = useDivideAttrs(["wrapper"])
 * ```
 * This will correctly remove the start of the key. So if the user passes:
 * ```vue
 * <your-component regular-attr wrapper-attr wrapperAttrs/>
 * ```
 * You will get:
 *
 * ```ts
 * extraAttrs = {
 * 	$attrs: { regular-attr: true },
 * 	wrapperAttrs: { attr: true, Attrs: true },
 * }
 *
 * Additionally attributes are properly reactive, tough this is probably a bit expensive given they weren't meant to be reactive.
 * ```
 */
export const useDivideAttrs = <T extends readonly string[]>(divisionKeys: T): Ref<Record<`${T[number]}Attrs` | "$attrs", any>> => computed(() => {
	const attrs: Record<string, any> = useAttrs()
	const res: any = { $attrs: {} }
	for (const key of divisionKeys) {
		res[`${key}Attrs`] = {}
		for (const attrKey of keys(attrs)) {
			if (attrKey.startsWith(`${key}-`)) {
				res[`${key}Attrs`][attrKey.slice(key.length + 1)] = attrs[attrKey]
			} else if (attrKey.startsWith(key)) {
				res[`${key}Attrs`][attrKey.slice(key.length)] = attrs[attrKey]
			} else {
				res.$attrs[attrKey] = attrs[attrKey]
			}
		}
	}
	return res
})

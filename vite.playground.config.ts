import vue from "@vitejs/plugin-vue"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

import postcss from "./postcss.config.js"


// https://vitejs.dev/config/
export default async ({ mode }: { mode: string }) => defineConfig({
	plugins: [
		tsconfigPaths(),
		vue({
			script: {
				defineModel: true,
			},
		}),
	],
	// base: `/${pkg.name}/demo`,
	build: {
		outDir: "playground",
		...(mode === "production" ? {
			minify: true,
		} : {
			minify: false,
			sourcemap: "inline",
		}),
	},
	server: {
		// for locally linked repos when using vite server (i.e. not needed for libraries)
		fs: {
			allow: [...(process.env.CODE_PROJECTS ?? [])!],
		},
		watch: {

			// for pnpm
			followSymlinks: true,
			// watch changes in linked repos
			ignored: ["!**/node_modules/@alanscodelog/**"],
		},
	},
	css: {
		postcss,
	},
})

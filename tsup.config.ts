import { defineConfig } from 'tsup'

// https://tsup.egoist.dev/#using-custom-configuration
export default defineConfig({
	entry: ['src/index.ts'],
	format: 'esm',
	dts: true,
	minify: true,
	sourcemap: true,
	clean: true
})

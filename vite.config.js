import { sveltekit } from '@sveltejs/kit/vite';
import UnoCSS from 'unocss/vite'
import { extractorSvelte } from '@unocss/core'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		UnoCSS({
			extractors: [extractorSvelte],
			shortcuts: [
				{ logo: 'i-logos:svelte-icon w-6em h-6em transform transition-800 hover:rotate-180' },
			],
			presets: [
				presetUno(),
				presetIcons(),
			],
		}),
		sveltekit()
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;

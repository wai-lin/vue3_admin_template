import laraPt from "@/presets/lara/index.js"
import PrimeVue from "primevue/config"
import type { App } from "vue"

import Button from "primevue/button"
import InputText from "primevue/inputtext"

const registeredComponents = {
	Button,
	InputText,
} as const

export function PrimeVuePlugin(app: App<Element>) {
	app.use(PrimeVue, {
		unstyled: true,
		pt: laraPt,
		ptOptions: {
			mergeSections: true,
			mergeProps: true,
		},
	})

	Object.keys(registeredComponents).forEach((componentName) => {
		const key = componentName as keyof typeof registeredComponents
		app.component(componentName, registeredComponents[key])
	})
}

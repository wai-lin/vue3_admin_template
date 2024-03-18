<script setup lang="ts">
import { defineComponent } from "vue"

defineComponent({ inheritAttrs: false })
defineProps({
	label: {
		type: String,
		required: true,
	},
	helpText: {
		type: String,
	},
	invalid: {
		type: Boolean,
	},
	floatLabel: {
		type: Boolean,
		default: false,
	},
})
</script>

<template>
	<div v-if="floatLabel === false" class="flex flex-col gap-2">
		<label v-bind="$attrs">{{ label }}</label>
		<slot />
		<small v-if="helpText" :class="{ 'text-red-500': invalid }">{{ helpText }}</small>
	</div>

	<div v-if="floatLabel === true">
		<FloatLabel>
			<slot />
			<label v-bind="$attrs">{{ label }}</label>
		</FloatLabel>
		<small v-if="helpText" :class="{ 'text-red-500': invalid }">{{ helpText }}</small>
	</div>
</template>

<script setup lang="ts">
import FormField from "@/components/FormField.vue"
</script>

<template>
	<main
		class="grid h-screen w-screen place-items-center bg-gradient-to-bl from-teal-200 to-purple-300"
	>
		<article class="flex w-[360px] flex-col gap-4 rounded-lg bg-white px-4 py-8">
			<h3 class="text-center text-4xl font-medium">Welcome</h3>

			<form @submit.prevent="" class="flex flex-col gap-4">
				<FormField label="Email">
					<InputText />
				</FormField>

				<FormField label="Password">
					<Password />
				</FormField>

				<Button label="Login" />
			</form>
		</article>
	</main>
</template>

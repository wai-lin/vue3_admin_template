<template>
	<div class="grid h-screen grid-cols-[300px_1fr]">
		<aside class="border-r border-gray-200"></aside>

		<div class="grid grid-rows-[4rem_calc(100vh-4rem)]">
			<header class="border-b border-gray-200"></header>

			<main class="overflow-auto bg-gray-100 px-4 pt-4">
				<RouterView />
			</main>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useGetUsersList } from "../hooks/useGetUsersList"

const { state } = useGetUsersList()
</script>

<template>
	<DataTable v-model="state">
		<template #empty> No data </template>

		<Column header="#">
			<template #body="{ index }">
				{{ index + 1 }}
			</template>
		</Column>

		<Column field="email" header="Email" />
		<Column field="name" header="Name" />
	</DataTable>
</template>

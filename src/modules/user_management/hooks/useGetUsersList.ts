import { ref } from "vue"

export function useGetUsersList() {
	const state = ref([])

	return { state }
}

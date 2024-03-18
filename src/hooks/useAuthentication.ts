import { jwtDecode } from "jwt-decode"
import { ref, watchEffect } from "vue"

interface SessionUser {}

const authTokenKey = "v3at_$"
export const authTokenStorage = {
	get: () => localStorage.getItem(authTokenKey),
	set: (token: string) => localStorage.setItem(authTokenKey, token),
	remove: () => localStorage.removeItem(authTokenKey),
}

export const authToken = ref(authTokenStorage.get())
export const authUser = ref<SessionUser | null>(null)

export function signIn() {
	authTokenStorage.set("")
}

export function verifyAuth() {}

export function signUp() {}

export function signOut() {
	authTokenStorage.remove()
	window.location.href = "/"
}

export function useAuthentication() {
	watchEffect(() => {
		const hasToken = (authToken.value?.length || 0) > 0
		if (hasToken) authUser.value = jwtDecode<SessionUser | null>(authToken.value!)
	})

	return { signIn, signUp, signOut }
}

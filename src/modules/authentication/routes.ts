import type { RouteRecordRaw } from "vue-router"

import LoginView from "./views/LoginView.vue"

export default [
	{
		path: "/",
		component: LoginView,
	},
] as RouteRecordRaw[]

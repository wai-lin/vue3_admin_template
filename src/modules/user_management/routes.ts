import type { RouteRecordRaw } from "vue-router"
import UsersListView from "./views/UsersListView.vue"

export default [
	{
		path: "users",
		component: UsersListView,
	},
] as RouteRecordRaw[]

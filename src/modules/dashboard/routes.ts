import type { RouteRecordRaw } from "vue-router"

import usersManagementRoute from "@/modules/user_management/routes"

import DashboardView from "./views/DashboardView.vue"

export default {
	path: "/d",
	component: DashboardView,
	children: [...usersManagementRoute],
} as RouteRecordRaw

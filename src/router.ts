import { createRouter, createWebHistory } from "vue-router"

import authenticationRoute from "@/modules/authentication/routes"
import dashboardRoute from "@/modules/dashboard/routes"

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [...authenticationRoute, dashboardRoute],
})

export default router

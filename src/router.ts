import dashboardRoute from "@/modules/dashboard/routes"
import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [dashboardRoute],
})

export default router

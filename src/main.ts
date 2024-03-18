import "@fortawesome/fontawesome-free/css/all.min.css"
import "./assets/global.css"

import "./env.ts"

import { createApp } from "vue"
import App from "./App.vue"

import { PrimeVuePlugin } from "./plugins/PrimeVue"
import router from "./router"

const app = createApp(App)

PrimeVuePlugin(app)
app.use(router)

app.mount("#app")

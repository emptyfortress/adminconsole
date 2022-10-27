import { createApp } from 'vue'
import { Quasar, Notify } from 'quasar'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/mdi-v6/mdi-v6.css'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import '@/assets/styles/style.scss'
import 'virtual:svg-icons-register'
import { router } from '@/router/router'
import { createPinia } from 'pinia'
import App from '@/App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(Quasar, {
	plugins: {
		Notify,
	}, // import Quasar plugins and add here
	config: {
		notify: {
			// type: 'warning',
			position: 'bottom-right',
			timeout: 3000,
			icon: 'mdi-alert',
			color: 'primary',
			classes: 'notifications',
		},
	},
})

app.use(router)
app.use(pinia)
app.mount('#app')

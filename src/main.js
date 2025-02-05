import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

const app = createApp(App)

// Add error handling
app.config.errorHandler = (err) => {
  console.error('Vue Error:', err)
}

// Add some debug logging
router.beforeEach((to, from) => {
  console.log('Navigation:', { from: from.path, to: to.path })
  return true
})

app.use(router)
app.mount('#app')

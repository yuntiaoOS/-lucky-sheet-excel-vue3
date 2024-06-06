import { createApp } from 'vue'
import App from './App.vue'
import './components/manner-report.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'
const app = createApp(App);
app.use(ElementPlus);
//挂载app
app.mount('#app');
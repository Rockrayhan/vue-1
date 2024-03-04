import './assets/main.css'

import FoodItem from './components/FoodItem.vue' 
import Header from './components/Header.vue' 
import Footer from './components/Footer.vue' 
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)   //main app
app.component('food-item', FoodItem) //component 
app.component('header-item', Header) 
app.component('footer-item', Footer) 
app.mount('#app')


import { createRouter, createWebHistory } from 'vue-router'
import './assets/main.css'
import FoodItem from './components/FoodItem.vue' 
import Header from './components/Header.vue' 
import Footer from './components/Footer.vue' 
import { createApp } from 'vue'
import App from './App.vue'
import Birds from './components/tabsComponent/Birds.vue'
import Flowers from './components/tabsComponent/Flowers.vue'
import About from './pages/About.vue';
import Contact from './pages/Contact.vue';
import Home from './pages/Home.vue';
import Item from './components/Item.vue';
import Tabs from './components/Tabs.vue';






const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/about', component:About },
        { path: '/contact', component:Contact },
        { path: '/home', component:Home },
    ]
});



const app = createApp(App)   //main app
app.use(router);
app.component('header-item', Header) 
app.component('food-item', FoodItem) //component 
app.component('item-view', Item) //component 
app.component('tabs-view', Tabs) //component 
app.component('birds-compo', Birds) //component 
app.component('flowers-compo', Flowers) //component 
app.component('footer-item', Footer) 
app.mount('#app')

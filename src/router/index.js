import { createRouter, createWebHistory} from "vue-router";
import HomeView from '@/views/Homeview.vue'
import Market from '@/components/Market.vue'
import About from "@/components/About.vue";
import Features from "@/components/Features.vue";

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),   
    routes:[
        {path: '/' , component: HomeView},
        {name: 'market', path: '/market', component:Market},
        {name: 'about', path: '/about', component:About},
        {name: 'features', path: '/features', component: Features}

    ],
})
export default router
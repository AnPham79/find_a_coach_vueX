import { createRouter, createWebHistory } from 'vue-router';
import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachList from './pages/coaches/CoachList.vue';
import CoachRegister from './pages/coaches/CoachRegister.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RegisterReceived from './pages/requests/RegisterReceived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history : createWebHistory,
    router : [
        { path : '/', redirect : '/coaches' },
        { path : '/coaches', component : CoachList },
        { 
            path: 'coaches/:id', 
            component: CoachDetail, 
            children : [
                { path: 'contact', component : ContactCoach }
            ] 
        },
        { path : '/register', component : CoachRegister },
        { path : '/requests', component : RegisterReceived },
        { path : '/:notFound(.*)', component : NotFound },
    ]
})

export default router;
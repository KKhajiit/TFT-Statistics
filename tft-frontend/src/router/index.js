import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main.vue';
import Temp from '@/components/Temp.vue';
import User from '@/components/User/Index.vue';
import Builder from '@/components/BatchTool/Index.vue';
Vue.use(Router);

const index = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Main,
        },
        {
            path: '/temp',
            component: Temp
        },
        {
            path: '/user',
            component: User
        },
        {
            path: '/builder',
            component: Builder
        },
    ]
});

export default index;
import {createRouter,createWebHashHistory} from 'vue-router';

const routes = [
    {
        path:'/',
        component:()=>import('../layout/userLayout.vue'),
        children:[
            {
                path:'/',
                redirect:'/user/login'
            },
            {
                path:'/user/login',
                component:()=>import('../pages/user/login.vue')
            }
        ],
    },
    {
        path:'/customerLayout',
        component:()=>import('../layout/customerLayout.vue'),
        children:[
            {
                path:'/customerLayout',
                redirect:'/customerLayout/home',
            },
            {
                path:'/customerLayout/home',
                name:'项目总览',
                component:()=>import('../pages/home/index.vue'),
            },
            {
                path:'/customerLayout/digital',
                name:'数字工地',
                component:()=>import('../pages/digital/index.vue'),
            }
        ],
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes,
})

router.beforeEach((to,from,next)=>{
    if(to.fullPath !== '/user/login' && sessionStorage.login !== 'true') {
        // router.push('/user/login');
        next({path:'/'})
    }else {
        next()
    }
    console.log(to,from)
})

export default router
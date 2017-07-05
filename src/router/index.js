import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
           redirect: '/login'
        },
        {path:'/usermanag',
        component:resolve=>require(["../components/common/home.vue"],resolve),
         children:[
             {
                 path:"/usermanag",
                 component:resolve=>require(["../components/page/usermanag.vue"],resolve)
             },
             {
                 path:"/BaseForm",
                 component:resolve=>require(["../components/page/BaseForm.vue"],resolve)

             },
              {
                 path:"/BaseTable",
                 component:resolve=>require(["../components/page/BaseTable.vue"],resolve)

             }
         ]
        },
         {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
]
})

import VueRouter from "vue-router";
import Vue from "vue";


import class_main from '../components/class_main.vue'
import class_must from '../components/class_must.vue'
import class_xcore from '../components/class_xcore.vue'
import class_ncore from '../components/class_ncore.vue'
import class_eng from '../components/class_eng.vue'
import class_art from '../components/class_art.vue'
import class_pe from '../components/class_pe.vue'
import u_login from '../components/u_login.vue'
import u_reg from '../components/u_reg.vue'
import o_happy from '../components/o_happy.vue'
import o_talk from '../components/o_talk.vue'
Vue.use(VueRouter)


// 创建一个路由对象

const router = new VueRouter({
    //指定hash属性与组件的对应关系
    routes:[
        {path: '/', redirect: 'class_main'},
        {path: '/class_main', component: class_main},
        {path: '/class_must', component: class_must},
        {path: '/class_xcore', component: class_xcore},
        {path: '/class_ncore', component: class_ncore},
        {path: '/class_eng', component: class_eng},
        {path: '/class_art', component: class_art},
        {path: '/class_pe', component: class_pe},
        {path: '/u_login', component: u_login},
        {path: '/u_reg', component: u_reg},
        {path: '/o_happy', component: o_happy},
        {path: '/o_talk', component: o_talk},
    ]
    
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
import i18n from '@/core/i18n'
import Login from '@/views/pages/external/login/Login'
import Register from '@/views/pages/external/register/Register'
import ForgetPassword from '@/views/pages/external/password/ForgetPassword'
import UpdatePassword from '@/views/pages/external/password/UpdatePassword'
import Success from '@/views/pages/commons/Success'
import Error from '@/views/pages/commons/Error'
import Page404 from '@/views/pages/commons/Page404'
import Logout from '@/views/pages/commons/Logout'

import Home from '@/views/pages/internal/home/Home'

import Lang from './Lang'
import guards from './guards'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/:lang',
            component: Lang,
            beforeEnter(to, from, next) {
                const lang = to.params.lang

                if (!['pt', 'en'].includes(lang)) {
                    return next({path: 'pt', params: to.params, query: to.query})
                }

                if (i18n.locale !== lang) {
                    i18n.locale = lang
                }
                return next()
            },
            children: [
                {
                    path: '/',
                    redirect: '/:lang/home'
                },
                {
                    path: 'home',
                    name: 'home',
                    component: Home,
                    meta: {
                        menu: {
                            title: 'Projetos',
                            icon: 'folder_open'
                        },
                        page: {
                            title: 'Projetos',
                            subtitle: 'Lista geral dos projetos disponíveis'
                        },
                        requiresAuth: true
                    }
                },
                {
                    path: 'login',
                    name: 'login',
                    component: Login
                },
                {
                    path: 'register',
                    name: 'register',
                    component: Register
                },
                {
                    path: 'forget-password',
                    name: 'forgetPassword',
                    component: ForgetPassword
                },
                {
                    path: 'update-password',
                    name: 'updatePassword',
                    component: UpdatePassword
                },
                {
                    path: 'success/:action',
                    name: 'success',
                    component: Success
                },
                {
                    path: 'error/:action',
                    name: 'error',
                    component: Error
                },
                {
                    path: 'logout',
                    name: 'logout',
                    component: Logout
                },
                {
                    path: '*',
                    component: Page404
                }
            ]
        },
        {
            path: '*',
            redirect() {
                return 'pt/home'
            }
        }
    ]
})

router.beforeEach((to, from, next) => guards.conditions(to, from, next))

export default router


import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { setupPageGuard } from './permission'
import { ChatLayout } from '@/views/chat/layout'
import { PagesLogin } from '@/views/pages/index'

const routes = [
  {
    path: '/',
    name: 'Root',
    component: PagesLogin,
    meta: {
      hideSidebar: true,
    },
    redirect: '/pages',
    children: [
      {
        path: '/pages',
        name: 'Pages',
        component: () => import('@/views/pages/index.vue'),
      },
    ],
  },
  {
    path: '/',
    component: ChatLayout,
    redirect: '/chat',
    children: [
      {
        path: '/chat/:uuid?',
        name: 'Chat',
        component: () => import('@/views/chat/index.vue'),
      },
    ],
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('@/views/user/index.vue'),
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('@/views/message/index.vue'),
  },
  {
    path: '/registerPage',
    name: 'RegisterPage',
    meta: {
      hideSidebar: true,
    },
    component: () => import('@/views/registerPage/index.vue'),
  },
  {
    path: '/forgotPage',
    name: 'ForgotPage',
    meta: {
      hideSidebar: true,
    },
    component: () => import('@/views/forgotPage/index.vue'),
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/exception/404/index.vue'),
  },

  {
    path: '/500',
    name: '500',
    component: () => import('@/views/exception/500/index.vue'),
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    redirect: '/404',
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

setupPageGuard(router)

export async function setupRouter(app: App) {
  app.use(router)
  await router.isReady()
}

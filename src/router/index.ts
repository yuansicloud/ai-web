import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import { setupPageGuard } from './permission'
import { ChatLayout } from '@/views/chat/layout'
import { LogonPage } from '@/views/logon/index'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    component: LogonPage,
    redirect: '/logon',
    meta: { showInSidebar: false },
    children: [
      {
        path: '/logon',
        name: 'Logon',
        component: () => import('@/views/logon/index.vue'),
      },
      {
        path: '/registerPage',
        name: 'RegisterPage',
        component: () => import('@/views/registerPage/index.vue'),
      },
    ],
  },
  {
    path: '/registerPage',
    name: 'RegisterPage',
    component: () => import('@/views/registerPage/index.vue'),
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
    path: '/',
    component: ChatLayout,
    redirect: '/chat',
    children: [
      {
        path: '/chat/:uuid?',
        name: 'Chat',
        component: () => import('@/views/chat/index.vue'),
      },
      {
        path: '/setting',
        name: 'Setting',
        component: () => import('@/views/setting/index.vue'),
      },
      {
        path: '/message',
        name: 'Message',
        component: () => import('@/views/message/index.vue'),
      },
      {
        path: '/roleRepository',
        name: 'RoleRepository',
        component: () => import('@/views/roleRepository/index.vue'),
      },
    ],
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

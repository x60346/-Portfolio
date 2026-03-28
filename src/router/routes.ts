import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',

    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', name: 'home', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/project',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'project', component: () => import('pages/ProjectPage.vue') },
      { path: '/project/:id', component: () => import('pages/ProjectInfo.vue') },
    ],
  },
  {
    path: '/timeline',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', name: 'timeline', component: () => import('pages/TimelinePage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;

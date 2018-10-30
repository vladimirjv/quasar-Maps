/* jshint esversion:6 */
const routes = [
  {
    path: '/',
    component: () => import('layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue')
      },
      {
        path: 'mapa',
        component: () => import('pages/Mapa.vue')
      },
      {
        path: 'ruta',
        component: () => import('pages/Ruta.vue')
      },
    ]
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  });
}

export default routes;

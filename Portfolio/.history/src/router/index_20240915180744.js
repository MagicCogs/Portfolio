import { createRouter, createWebHistory } from 'vue-router';
import AccueilView from '../views/AccueilView.vue';
import CréationsView from '../views/CréationsView.vue';

// Importation de la vue pour la page 404
import ErreurView from '../views/ErreurView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: AccueilView
    },
    {
      path: '/créations',
      name: 'créations',
      // Lazy-loading pour la vue des créations
      component: CréationsView
    },
    {
      path: '/contact',
      name: 'contact',
      // Lazy-loading pour la vue de contact
      component: () => import('../views/ContactView.vue')
    },
    // Route catch-all pour les URL non définies
    {
      path: '/:pathMatch(.*)*',
      name: 'erreur404',
      component: ErreurView
    }
  ]
});

export default router;
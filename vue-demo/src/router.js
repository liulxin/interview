import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('./components/Slider.vue')
    },
    {
      path: '/baseuse',
      component: () => import('./components/Slider.vue'),
      children: [
        {
          path: 'tpl',
          component: () => import('./components/BaseUse/TplDemo.vue')
        },
        {
          path: 'computed',
          component: () => import('./components/BaseUse/ComputedDemo.vue')
        },
        {
          path: 'watch',
          component: () => import('./components/BaseUse/WatchDemo.vue')
        },
        {
          path: 'style',
          component: () => import('./components/BaseUse/StyleDemo.vue')
        },
        {
          path: 'condition',
          component: () => import('./components/BaseUse/ConditionDemo.vue')
        }
      ]
    }
  ]
})

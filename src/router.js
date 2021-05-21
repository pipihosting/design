import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    alias: "/typography",
    name: "typography",
    component: () => import("./vueComponents/typography.vue"),
  },
  {
    path: "/buttons",
    name: "buttons",
    component: () => import("./vueComponents/buttons.vue"),
  },
  {
    path: "/alert",
    name: "alert",
    component: () => import("./vueComponents/alert.vue"),
  },
  {
    path: "/table",
    name: "table",
    component: () => import("./vueComponents/table.vue"),
  },
  {
    path: "/layout",
    name: "layout",
    component: () => import("./vueComponents/layout.vue"),
  },
  {
    path: "/forms",
    name: "forms",
    component: () => import("./vueComponents/forms.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
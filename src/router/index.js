import Vue from "vue";
import VueRouter from "vue-router";
import DefaultViews from "../views/DefaultViews.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "DefaultViews",
    component: DefaultViews,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

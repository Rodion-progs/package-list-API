import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// Pages
import Home from "@/pages/Home";
import NotFound from "@/pages/404";
// Layouts
import DefaultLayout from "@/layouts/Default";

Vue.component("default-layout", DefaultLayout);
// Routing
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        layout: "default-layout",
      },
    },
    {
      path: "*",
      name: "notFound",
      component: NotFound,
      meta: {
        layout: "default-layout",
      },
    },
  ],
});

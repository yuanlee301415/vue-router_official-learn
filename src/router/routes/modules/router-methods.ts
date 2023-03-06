import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const ROUTER_METHODS_ROUTE: AppRouteRecordRaw = {
  path: "/router-methods",
  name: "RouterMethods",
  redirect: "/router-methods",
  component: LAYOUT,
  meta: {
    title: "router-方法",
    hiddenChildrenInMenu: true,
  },
  children: [
    {
      path: "",
      name: "RouterMethodsPage",
      component: () => import("@/views/router-methods.vue"),
      meta: {},
    },
  ],
};

export default ROUTER_METHODS_ROUTE;

import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const DYNAMIC_ROUTING_ROUTE: AppRouteRecordRaw = {
  path: "/dynamic-routing",
  name: "DynamicRouting",
  redirect: "/dynamic-routing",
  component: LAYOUT,
  meta: {
    title: "动态路由",
    hiddenChildrenInMenu: true,
  },
  children: [
    {
      path: "",
      name: "DynamicRoutingPage",
      component: () => import("@/views/dynamic-routing.vue"),
      meta: {},
    },
  ],
};

export default DYNAMIC_ROUTING_ROUTE;

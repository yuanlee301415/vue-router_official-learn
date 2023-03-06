import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const ROUTER_LINK_ROUTE: AppRouteRecordRaw = {
  path: "/router-link",
  name: "RouterLink",
  redirect: "/router-link/v-slot",
  component: LAYOUT,
  meta: {
    title: "router-link",
    hiddenChildrenInMenu: false,
  },
  children: [
    {
      path: "props",
      name: "PropsPage",
      component: () => import("@/views/router-link/props.vue"),
      meta: {
        title: "props",
      },
    },
  ],
};

export default ROUTER_LINK_ROUTE;

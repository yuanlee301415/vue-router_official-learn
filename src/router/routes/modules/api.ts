import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const API_ROUTE: AppRouteRecordRaw = {
  path: "/api",
  name: "Api",
  redirect: "/api/router-link-props",
  component: LAYOUT,
  meta: {
    title: "API",
    hiddenChildrenInMenu: false,
  },
  children: [
    {
      path: "router-link-props",
      name: "RouterLinkPropsPage",
      component: () => import("@/views/api/router-link-props.vue"),
      meta: {
        title: "<route-link> Props",
      },
    },
  ],
};

export default API_ROUTE;

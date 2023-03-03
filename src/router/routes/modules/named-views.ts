import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const NAMED_VIEWS_ROUTE: AppRouteRecordRaw = {
  path: "/named-views",
  name: "NamedViews",
  redirect: "/named-views",
  component: LAYOUT,
  meta: {
    title: "命名视图",
    hiddenChildrenInMenu: true,
  },
  children: [
    {
      path: "",
      name: "NamedViewsPage",
      component: () => import("@/views/named-views/index.vue"),
      children: [
        {
          path: "",
          name: "Named",
          components: {
            default: () => import("@/views/named-views/default.vue"),
            first: () => import("@/views/named-views/first.vue"),
            second: () => import("@/views/named-views/second.vue"),
          },
          meta: {},
        },
      ],
      meta: {},
    },
  ],
};

export default NAMED_VIEWS_ROUTE;

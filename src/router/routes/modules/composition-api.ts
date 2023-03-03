import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const COMPOSITION_API_ROUTE: AppRouteRecordRaw = {
  path: "/composition-api",
  name: "CompositionApi",
  redirect: "/composition-api",
  component: LAYOUT,
  meta: {
    title: "组合式-API",
    hiddenChildrenInMenu: true,
  },
  children: [
    {
      path: "",
      name: "CompositionApiPage",
      component: () => import("@/views/composition-api.vue"),
      meta: {},
    },
  ],
};

export default COMPOSITION_API_ROUTE;

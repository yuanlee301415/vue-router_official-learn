import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const ROUTER__PROPS__ROUTE: AppRouteRecordRaw = {
  path: "/router-props",
  name: "Router",
  redirect: "/router-props",
  component: LAYOUT,
  meta: {
    title: "router-属性",
    hiddenChildrenInMenu: true,
  },
  children: [
    {
      path: "",
      name: "RouterPropsPage",
      component: () => import("@/views/router-props.vue"),
      meta: {},
    },
  ],
};

export default ROUTER__PROPS__ROUTE;

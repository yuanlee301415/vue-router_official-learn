import type { AppRouteRecordRaw } from "@/router/types";

import { EXCEPTION_404, LAYOUT, PAGE_NOT_FOUND_NAME } from "@/router/constant";
import ABOUT_ROUTE from "@/router/routes/modules/about";
import TEST_ROUTE from "@/router/routes/modules/test";
import NAMED_VIEWS_ROUTE from "@/router/routes/modules/named-views";
import COMPOSITION_API_ROUTE from "@/router/routes/modules/composition-api";
import LAZY_LOADING_ROUTE from "@/router/routes/modules/lazy-loading";
import DYNAMIC_ROUTING_ROUTE from "@/router/routes/modules/dynamic-routing";
import ROUTER_LINK_ROUTE from "@/router/routes/modules/router-link";
import START_LOCATION_ROUTE from "@/router/routes/modules/start_location";
import ROUTER__PROPS__ROUTE from "@/router/routes/modules/router-props";
import ROUTER_METHODS_ROUTE from "@/router/routes/modules/router-methods";
// import NESTED_ROUTE from "@/router/routes/modules/nested";

export const ROOT_ROUTE: AppRouteRecordRaw = {
  path: "/",
  name: "Root",
  redirect: "/home",
  meta: {
    title: "Root",
    hiddenMenu: true,
  },
};

export const HOME_ROUTE: AppRouteRecordRaw = {
  path: "/home",
  name: "Home",
  redirect: "/home",
  component: LAYOUT,
  meta: {
    title: "首页",
    hiddenChildrenInMenu: true,
  },
  children: [
    {
      path: "",
      name: "HomePage",
      component: () => import("@/views/Home.vue"),
      meta: {},
    },
  ],
};

export const PAGE_NOT_FOUND_ROUTE: AppRouteRecordRaw = {
  path: "/:path(.*)*",
  name: PAGE_NOT_FOUND_NAME,
  component: LAYOUT,
  meta: {
    title: PAGE_NOT_FOUND_NAME,
    hiddenMenu: true,
    hiddenChildrenInMenu: true,
  },
  children: [
    {
      path: "",
      name: PAGE_NOT_FOUND_NAME,
      component: EXCEPTION_404,
      meta: {},
    },
  ],
};

export const basicRoutes = [
  ROOT_ROUTE,
  HOME_ROUTE,
  ABOUT_ROUTE,
  TEST_ROUTE,
  NAMED_VIEWS_ROUTE,
  COMPOSITION_API_ROUTE,
  LAZY_LOADING_ROUTE,
  DYNAMIC_ROUTING_ROUTE,
  ROUTER_LINK_ROUTE,
  START_LOCATION_ROUTE,
  ROUTER__PROPS__ROUTE,
  ROUTER_METHODS_ROUTE,
  // NESTED_ROUTE,
  PAGE_NOT_FOUND_ROUTE,
];

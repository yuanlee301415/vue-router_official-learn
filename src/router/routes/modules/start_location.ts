import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const START_LOCATION_ROUTE: AppRouteRecordRaw = {
  path: "/start_location",
  name: "Start_location",
  redirect: "/start_location",
  component: LAYOUT,
  meta: {
    title: "START_LOCATION",
    hiddenChildrenInMenu: true,
  },
  children: [
    {
      path: "",
      name: "Start_locationPage",
      component: () => import("@/views/start_location.vue"),
      meta: {},
    },
  ],
};

export default START_LOCATION_ROUTE;

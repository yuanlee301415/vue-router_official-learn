import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const LAZY_LOADING_ROUTE: AppRouteRecordRaw = {
  path: "/lazy-loading",
  name: "LazyLoading",
  redirect: "/lazy-loading/a",
  component: LAYOUT,
  meta: {
    title: "路由懒加载",
  },
  children: [
    {
      path: "a",
      name: "LazyLoadingPageA",
      component: () => import("@/views/lazy-loading/a.vue"),
      meta: {
        title: "PageA",
      },
    },
    {
      path: "b",
      name: "LazyLoadingPageB",
      component: () => import("@/views/lazy-loading/b.vue"),
      meta: {
        title: "PageB",
      },
    },
    {
      path: "c",
      name: "LazyLoadingPageC",
      component: () => import("@/views/lazy-loading/c.vue"),
      meta: {
        title: "PageC",
      },
    },
  ],
};

export default LAZY_LOADING_ROUTE;

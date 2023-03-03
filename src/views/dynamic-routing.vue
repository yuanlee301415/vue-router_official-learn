<template>
  <h2>添加路由</h2>
  <button @click="add">Add '/news'</button>

  <p><router-link to="/news">/news</router-link></p>

  <h2>删除路由</h2>
  <button @click="remove">Remove: '/news'</button>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();

/**
 * 添加路由
 */
function add() {
  router.addRoute({
    path: "/news",
    name: "News",
    component: () => import("@/views/test/A.vue"),
  });
  console.log("router.currentRoute:", router.currentRoute.value);
}

/**
 * 删除路由
 */
function remove() {
  router.removeRoute("News");
  router.push({ name: "News" });
}
</script>

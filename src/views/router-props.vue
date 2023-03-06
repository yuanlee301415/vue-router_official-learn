<template>
  <h2>currentRoute</h2>
  <h6>当前路由地址。只读的。</h6>
  <pre>{{ currentRoute }}</pre>

  <h2>options</h2>
  <h6>创建 Router 时，传递的原始配置对象。只读的。</h6>
  <pre>{{ options }}</pre>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const { currentRoute, options } = useRouter();
console.log("currentRoute:", currentRoute);
console.log("options:", options);
</script>

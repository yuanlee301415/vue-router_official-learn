<template>
  <h2>
    `router-link` 通过一个作用域插槽暴露底层的定制能力。这是一个更高阶的
    API，主要面向库作者，但也可以为开发者提供便利
  </h2>

  <h6>示例：将激活的 class 应用在外层元素</h6>
  <router-link
    to="/home"
    custom
    v-slot="{ href, route, navigate, isActive, isExactActive }"
  >
    <li
      :class="[
        isActive && 'router-link-active',
        isExactActive && 'router-link-exact-active',
      ]"
    >
      <a :href="href" @click="navigate">{{ route.fullPath }}</a>
    </li>
  </router-link>
</template>

<script lang="ts" setup></script>

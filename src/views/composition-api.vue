<template>
  <h2>在 setup 中访问路由和当前路由</h2>
  <pre>query.id: {{ $route.query.id }}</pre>

  <h2>导航守卫</h2>
  <ul>
    <li v-for="id of [1, 2, 3]" :key="id">
      <router-link :to="{ name: 'CompositionApi', query: { id } }"
        >id: {{ id }}</router-link
      >
    </li>
  </ul>
  user:
  <pre>{{ user }}</pre>

  <h2>useRoute()</h2>
  <h6>
    route
    对象是一个响应式对象，所以它的任何属性都可以被监听，但你应该避免监听整个
    route 对象。在大多数情况下，你应该直接监听你期望改变的参数。
  </h6>

  <h2>userRouter()</h2>
  <h6>返回 router 实例。相当于在模板中使用 $router。必须在 setup() 中调用</h6>

  <h2>useLink()</h2>
  <h6>
    <pre>
useLink 组合函数公开了 router-link 组件在导航时其内部所产生的行为与信息。这些行为和信息与通过 router-link 作用域插槽 (v-slot) 所接收的属性完全相同。

useLink 函数所接收的参数与 router-link 所接收的 props 完全一致。

就是说可以通过 useLink 函数获取 router-link 跳转时产生的行为与信息，但并不会真实发生跳转行为。

我们可以将 useLink 的功能看作是对 router-link 的一次预解析。通过预解析，我们可以对 router-link 再封装，以更丰富的方式来应对我们需求中不同形式的链接的跳转，例如内部链接、外部链接(第三方链接)、是否新窗口打开等。
</pre
    >
  </h6>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import {
  useRoute,
  useRouter,
  onBeforeRouteUpdate,
  onBeforeRouteLeave,
  RouterLink,
  useLink,
} from "vue-router";

/**
 * 导航守卫
 */
type User = {
  id: string;
  name: string;
  age: number;
};
const user = ref<User>();

onBeforeRouteUpdate(async (to) => {
  const id = to.query.id;
  console.log("to.id:", id);
  if (!id) return;

  const users: User[] = await (await fetch("/mockData/users.json")).json();
  console.log("users:", users);
  user.value = users.find((_) => _.id === id);
});

onBeforeRouteLeave(() => {
  return window.confirm("确定要离开？");
});

/**
 * useRoute()
 */
const route = useRoute();
console.log("useRoute():", route);
watch(
  () => route.query.id,
  (id) => {
    console.log("query.id:", id);
  }
);

/**
 * useRouter()
 */
const router = useRouter();
console.log("useRouter():", router);

/**
 * useLink
 */
const link = useLink({ to: "/xx" });
console.log("useLink():", link);
</script>

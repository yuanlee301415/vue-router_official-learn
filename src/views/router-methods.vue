<template>
  <h2>back()</h2>
  <h6>
    如果可能的话，通过调用 history.back() 回溯历史。相当于 router.go(-1)。
  </h6>
  <button @click="back">back()</button>
  <button @click="handleGo(-1)">go(-1)</button>

  <h2>getRoutes()</h2>
  <h6>获取所有 路由记录的完整列表。</h6>

  <h2>forward()</h2>
  <h6>
    如果可能的话，通过调用 history.forward() 在历史中前进。相当于 router.go(1)。
  </h6>
  <button @click="handleForward">forward()</button>

  <h2>go()</h2>
  <button @click="handleGo(-1)">go(-1)</button>
  <button @click="handleGo(1)">go(1)</button>

  <h2>hasRoute()</h2>
  <h6>确认是否存在指定名称的路由。</h6>
  <button @click="handleHasRoute('PageNotFound')">hasRoute('404')</button>

  <h2>isReady()</h2>
  <h6>
    当路由器完成初始化导航时，返回一个
    Promise，这意味着它已经解析了所有与初始路由相关的异步输入钩子和异步组件。如果初始导航已经发生了，那么
    promise
    就会立即解析。这在服务器端渲染中很有用，可以确保服务器和客户端的输出一致。需要注意的是，在服务器端，你需要手动推送初始位置，而在客户端，路由器会自动从
    URL 中获取初始位置。
  </h6>

  <h2>onError()</h2>
  <h6>
    添加一个错误处理程序，在导航期间每次发生未捕获的错误时都会调用该处理程序。这包括同步和异步抛出的错误、在任何导航守卫中返回或传递给
    next 的错误，以及在试图解析渲染路由所需的异步组件时发生的错误。
  </h6>
  <button @click="$router.push({ name: 'xxx' })">手动触发错误</button>

  <h2>removeRoute()</h2>
  <h6>通过名称删除现有路由。</h6>
  <button @click="removeRoute('Home')">删除：首页 路由</button>

  <h2>resolve()</h2>
  <h6>返回路由地址的标准化版本。还包括一个包含任何现有 base 的 href 属性。</h6>

  <h2>RouteLocationRaw</h2>
  <h6>
    用户级的路由地址，可以传递给 router.push()，redirect，并在导航守卫中返回。
  </h6>
  <button @click="pushHash">push hash</button>
  <button @click="pushQuery">push query</button>
  <button @click="pushParams">push params</button>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();

/**
 * back()
 */
function back() {
  router.back();
}

/**
 * getRoutes
 */
const routes = router.getRoutes();
console.log("routes:", routes);

/**
 * go()
 */
function handleGo(delta: number): void {
  router.go(delta);
}

/**
 * forward()
 */
function handleForward(): void {
  router.forward();
}

/**
 * handleHasRoute()
 */
function handleHasRoute(routeName: string | symbol): boolean {
  const has = router.hasRoute(routeName);
  console.log('handleHasRoute("PageNotFound"):', has);
  return has;
}

/**
 * isReady()
 */
const isReady = router.isReady();
console.log("isReady:", isReady);

/**
 * removeRoute()
 */
function removeRoute(routeName: string | symbol): void {
  router.removeRoute(routeName);
}

/**
 * resolve()
 */
const resolved = router.resolve("/404");
console.log("resolved:", resolved);

/**
 * RouteLocationRaw
 */
function pushHash() {
  router.push({ hash: "#news" });
}

function pushQuery() {
  router.push({ query: { page: 2, size: 20 } });
}

function pushParams() {
  router.push({ params: { userName: "Tom" } });
}
</script>

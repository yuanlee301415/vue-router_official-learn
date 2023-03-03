<template>
  <h2>命名视图</h2>
  <div>
    <router-view name="second"></router-view>
    <RouterView name="first"></RouterView>
    <RouterView></RouterView>
  </div>
</template>

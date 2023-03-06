<template>
  <h2>custom</h2>
  <router-link to="/home" custom v-slot="{ href }">
    <p>Custom1: <a :href="href">Home</a></p>
  </router-link>

  <router-link to="/home" v-slot="{ route }">
    <b>Custom2: {{ route.fullPath }}</b>
  </router-link>
</template>

<template>
  <h2>START_LOCATION</h2>
  <pre
    >{{ START_LOCATION }}
  </pre>
</template>

<script lang="ts" setup>
import { START_LOCATION } from "vue-router";
console.log("START_LOCATION:", START_LOCATION);
</script>

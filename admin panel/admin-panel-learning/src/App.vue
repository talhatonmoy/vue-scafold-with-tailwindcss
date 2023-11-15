<script setup>
import Layout from './components/Layout.vue';
</script>

<template>
  
  <Layout>
    <router-view :key="$route.fullPath" />
  </Layout>

</template>

<style scoped></style>
<script setup>

import { CounterStore } from '../../src/store/storeVue'

defineProps({
  msg: String,
})

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <!-- Using The Counter Store -->
    <button type="button" @click="CounterStore.increment()">count is {{ CounterStore.count }}</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

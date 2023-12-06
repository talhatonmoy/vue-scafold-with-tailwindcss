<script setup>
import { ref, reactive, shallowRef } from 'vue'
import ComponentA from './components/ComponentA.vue';
import ComponentB from './components/ComponentB.vue';

const activeComponent = shallowRef(ComponentA)

function switchComponentA() {
  activeComponent.value = ComponentA
}


function switchComponentB() {
  activeComponent.value = ComponentB
}
</script>

<template>
  <div class="container w-1/3 mx-auto mt-10 bg-gray-100 p-5 rounded-sm">
    <component :is='activeComponent'></component>
  </div>

  <div class="container w-1/3 mx-auto mt-1 p-5 rounded-sm space-x-2">
    <button @click="switchComponentA" class="py-1.5 px-2 text-white bg-blue-500">Switch To Component A</button>
    <button @click="switchComponentB" class="py-1.5 px-2 text-white bg-blue-500">Switch To Component b</button>
  </div>
</template>

<style scoped></style>
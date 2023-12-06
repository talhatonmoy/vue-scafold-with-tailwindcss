<script setup>
import { ref, reactive, watch, watchEffect } from 'vue'

const post = reactive({
  title: ''
})

const postId = ref(1)

/**
 * Using Async Awit
 */

watch(postId, async (newValue, oldValue) => {
  post.title = 'Loading.....'
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${newValue}`)
  const json = await response.json()
  post.title = json.title
}, { immediate: true })


/**
 * Using Fetch API Promise
 */
// watch(postId, (newValue, oldValue) => {
//   post.title = 'Loading.....'
//   fetch(`https://jsonplaceholder.typicode.com/posts/${newValue}`)
//     .then((response) => response.json())
//     .then((json) => {
//       post.title = json.title
//     })
// }, { immediate: true })


</script>

<template>
  <div class="container mx-auto space-y-2 bg-gray-100 p-5 rounded-lg w-1/3 mt-20">
    <p>Post Title: {{ post.title }}</p>
    <p>Post Id: {{ postId }} </p>
    <input type="text" v-model="postId">
  </div>
</template>

<style scoped></style>
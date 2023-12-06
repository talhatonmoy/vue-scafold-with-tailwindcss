<script setup>
import { ref, reactive, computed, watch, watchEffect } from 'vue'


const fruitsNameWithPrice = ref([
    { name: 'apple', price: 10.5 },
    { name: 'banana', price: 15 },
    { name: 'jackfruit', price: 20 },
    { name: 'mango', price: 40 },
])

const fname = ref('')
const fprice = ref('')

const add = () => {

    if (fname.value !== '' && fprice.value !== '') {
        fruitsNameWithPrice.value.push({
            name: fname.value, price: fprice.value
        })
    }

    fname.value = ''
    fprice.value = ''
}


/**
 * deep: true => For array
 * immediate: true => For run at first time
 */

const totalPrice = ref(0)

watch(fruitsNameWithPrice.value, (newValue, oldValue) => {
    let total = 0
    for (let i = 0; i < newValue.length; i++) {
        total += newValue[i].price * 1
    }
    totalPrice.value = total
}, { deep: true, immediate: true })





</script>

<template>
    <div class="container mt-10 mx-auto bg-gray-100 space-y-3 rounded-sm p-3">
        <div class="flex space-x-2">
            <label for="">Fruit Name</label>
            <input type="text" class="p-1.5 rounded-md" name="" v-model="fname" id="">
        </div>

        <div class="flex space-x-2">
            <label for="">Fruit Price</label>
            <input type="number" class="p-1.5 rounded-md" name="" v-model="fprice" id="">
        </div>

        <button @click="add" class=" rounded-md py-1.5 px-2 bg-blue-500 text-white">Add Fruit</button>

        <div class="flex space-x-2">
            <label for="">Total Price: {{ totalPrice }}</label>
        </div>

    </div>

    <div class="container mx-auto ">
        {{ fruitsNameWithPrice }}
    </div>
</template>

<style scoped></style>
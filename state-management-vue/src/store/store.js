import { defineStore } from "pinia";
import { ref, reactive, computed } from 'vue'

// New Composition API Style
const CounterStore = defineStore('counter', () => {
    const count = ref(15);
    const doubleCount = computed(() => count.value * 2)
    const increment = () => count.value++

    return {
        count, doubleCount, increment
    }
})

// const CounterStore = defineStore({
//     id: 'counter',
//     state: () => ({
//         count: 16
//     }),
//     getters: {
//         doubleCount: (state) => (state.count * 2)
//     },
//     actions: {
//         increment() {
//             this.count++
//         }
//     }
// })

export { CounterStore }
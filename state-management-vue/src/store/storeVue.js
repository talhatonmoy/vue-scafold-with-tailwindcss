import { ref, reactive, computed } from 'vue'

const CounterStore = reactive({
    count: 14,
    doubleCount: computed(() => (CounterStore.count * 2)),
    increment: () => {
        CounterStore.count++
    }
})

export { CounterStore }
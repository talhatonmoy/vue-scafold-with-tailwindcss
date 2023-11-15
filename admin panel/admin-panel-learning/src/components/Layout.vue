<script setup>
import HeaderComponent from '../components/layoutParts/HeaderComponent.vue'
import SideNavigationComponent from '../components/layoutParts/SideNavigationComponent.vue'
</script>

<template>
    <div class="">

        <!-- Heading h-[8vh] -->
        <HeaderComponent />

        <div class="flex h-[92vh]">
            <!-- Sidebar -->
            <SideNavigationComponent />

            <!-- Content Display -->
            <div class=" w-full duration-700 bg-gray-100 py-5 px-6">
                <slot></slot>
            </div>
        </div>



    </div>
</template>

<style scoped></style>
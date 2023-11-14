<script setup>
import { menuCollapsStore } from '../store/uiReactivityStore';
</script>

<template>

<div class="grid grid-cols-12 h-screen grid-rows-[auto_minmax(auto,_1fr)_auto]" >

    <!-- Heading -->
    <div :class="(menuCollapsStore.isCollapse) ? 'col-span-12' : 'col-span-10'" class=" duration-700 bg-blue-600 p-5 flex items-center justify-between shadow-md">
       <div class="flex items-center space-x-3">
        <!-- Menu Icon -->
        <i @click="menuCollapsStore.changeMenuState" class="fa-solid fa-bars text-xl text-white cursor-pointer"></i>
            <!-- Search -->
            <div class="relative ">
                <i class="absolute top-3 left-3 text-sm text-gray-700 fa-solid fa-magnifying-glass"></i>
                <input type="text" class="text-sm pl-10 pr-3 py-2 rounded-2xl focus:outline-none" placeholder="search here...">
            </div>
            <!-- Search End-->
       </div>

        <!-- Profile Section -->
        <div>
            <ul class="flex space-x-7 items-center text-white ">
                <li>
                    <i class="fa-regular fa-bell p-1"></i>
                </li>
                <li>
                    <i class="fa-regular fa-message p-1"></i>
                </li>
                <li>
                    <div class="flex items-center space-x-2 justify-center">
                        <img src="src/assets/img/talhatonmoy.png" class=" w-8 h-8 rounded-full" alt="">
                        <p class="text-sm font-semibold">Talha Tonmoy</p>
                    </div>
                </li>
            </ul>
        </div>
        <!-- Profile Section End -->
    </div>

    <!-- Sidebar -->
    <aside :class="(menuCollapsStore.isCollapse) ? ' translate-x-[-100%] opacity-50' : 'col-span-2 opacity-100' " class="bg-red-400 transition-transform duration-700 row-span-full bg-white p-5 ">
        <!-- Logo -->
        <div class="flex items-center justify-between pb-4 border-b border-gray-200 ">
            <img class=" w-28" src="src/assets/img/ttlogo.png" alt="">
        </div>

        <div class="mt-5">
            <ul class="space-y-4 text-black opacity-90 text-sm">
                <li class="px-3 py-3 hover:bg-gray-50 rounded-sm">
                   <i class="fa-solid fa-house-laptop mr-2"></i>
                    Dashboard
                </li>
                <li class="px-3 py-3 hover:bg-gray-50 rounded-sm">
                    <i class="fa-solid fa-table mr-2"></i>
                    Table
                </li>
                <li class="px-3 py-3 hover:bg-gray-50 rounded-sm">
                    <i class="fa-solid fa-chart-column mr-2"></i>
                    Chart
                </li>
                <li class="px-3 py-3 hover:bg-gray-50 rounded-sm">
                    <i class="fa-regular fa-bell mr-2"></i>
                    Toast Notification
                </li>
                <li class="px-3 py-3 hover:bg-gray-50 rounded-sm">
                    <i class="fa-solid fa-spell-check mr-2"></i>
                    Rich Text Editor
                </li>
            </ul>
        </div>
    </aside>

    <div :class="(menuCollapsStore.isCollapse) ? 'col-span-12' : 'col-span-10'" class="duration-700 bg-gray-100 py-5 px-6">
        <slot></slot>
        {{ menuCollapsStore.isCollapse }}
    </div>

    

</div>


</template>

<style scoped>

</style>
<script setup>
import { menuCollapsStore } from '../store/uiReactivityStore';
</script>

<template>
    <div class="">

        <!-- Heading -->
        <div class="duration-700 bg-blue-600 p-5 flex items-center justify-between shadow-md h-[8vh]">
            <div class="flex items-center space-x-3">
                <!-- Menu Icon -->
                <i @click="menuCollapsStore.changeMenuState" class="fa-solid fa-bars text-xl text-white cursor-pointer"></i>
                <!-- Search -->
                <div class="relative ">
                    <i class="absolute top-3 left-3 text-sm text-gray-700 fa-solid fa-magnifying-glass"></i>
                    <input type="text" class="text-sm pl-10 pr-3 py-2 rounded-2xl focus:outline-none"
                        placeholder="search here...">
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

        <div class="flex h-[92vh]">
            <!-- Sidebar -->
            <div :class="(menuCollapsStore.isCollapse) ? ' w-16 flex-shrink-0 p-2' : ' w-52 p-5'"
                class="bg-white duration-300 h row-span-full  ">
                <!-- Logo -->
                <div class="p-2 border-b border-gray-200 ">
                    <img class=" w-28" src="src/assets/img/ttlogo.png" alt="">
                </div>

                <div class="mt-5">
                    <ul class="space-y-4 text-black text-sm cursor-pointer">
                        <li class="px-3 py-3 hover:bg-gray-50 rounded-sm flex flex-nowrap items-center">
                            <i class="fa-solid fa-house-laptop mr-2"></i>
                            <span :class="(menuCollapsStore.isCollapse) ? 'opacity-0' : ' opacity-100'"
                                class="duration-200">Dashboard</span>
                        </li>
                        <li class="px-3 py-3 hover:bg-gray-50 rounded-sm flex flex-nowrap items-center ">
                            <i class="fa-solid fa-table mr-2"></i>
                            <span :class="(menuCollapsStore.isCollapse) ? 'opacity-0' : ' opacity-100'"
                                class="duration-200">Table</span>
                        </li>
                        <li class="px-3 py-3 hover:bg-gray-50 rounded-sm flex flex-nowrap items-center">
                            <i class="fa-solid fa-chart-column mr-2"></i>
                            <span :class="(menuCollapsStore.isCollapse) ? 'opacity-0' : ' opacity-100'"
                                class="duration-200">Chart</span>
                        </li>
                        <li class="px-3 py-3 hover:bg-gray-50 rounded-sm flex flex-nowrap items-center">
                            <i class="fa-regular fa-bell mr-2"></i>
                            <span :class="(menuCollapsStore.isCollapse) ? 'opacity-0' : ' opacity-100'"
                                class="duration-200">Toast Notification</span>
                        </li>
                        <li class="px-3 py-3 hover:bg-gray-50 rounded-sm flex flex-nowrap items-center">
                            <i class="fa-solid fa-spell-check mr-2"></i>
                            <span :class="(menuCollapsStore.isCollapse) ? 'opacity-0' : ' opacity-100'"
                                class="duration-200">Rich Text Editor</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Content Display -->
            <div class=" w-full duration-700 bg-gray-100 py-5 px-6">
                <slot></slot>
            </div>
        </div>



    </div>
</template>

<style scoped></style>
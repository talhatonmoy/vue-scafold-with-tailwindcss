<script setup>
import { menuCollapsStore } from '../../store/uiReactivityStore.js'

</script>

<template>
    <div :class="(menuCollapsStore.isCollapse) ? ' w-16 flex-shrink-0 p-2' : ' w-52 p-5'"
        class="bg-white duration-300 h row-span-full relative ">
        <!-- Logo -->
        <div class="p-2 border-b border-gray-200">
            <img class=" w-28" src="src/assets/img/ttlogo.png" alt="">
        </div>

        <div class="mt-5">
            <ul class="space-y-4 text-black text-sm cursor-pointer">
                <li>
                    <router-link class="px-3 py-3 hover:bg-gray-50 rounded-sm flex flex-nowrap items-center"
                        :to="{ name: 'dashboardHome' }">
                        <i class="fa-solid fa-house-laptop mr-2"></i>
                        <span :class="(menuCollapsStore.isCollapse) ? 'opacity-0' : ' opacity-100'"
                            class="duration-200">Dashboard</span>
                    </router-link>
                </li>

                <li>
                    <router-link class="px-3 py-3 hover:bg-gray-50 rounded-sm flex flex-nowrap items-center"
                        :to="{ name: 'tableComponent' }">
                        <i class="fa-solid fa-table mr-2"></i>
                        <span :class="(menuCollapsStore.isCollapse) ? 'opacity-0' : ' opacity-100'"
                            class="duration-200">Table</span>
                    </router-link>
                </li>

                <li>
                    <router-link class="px-3 py-3 hover:bg-gray-50 rounded-sm flex flex-nowrap items-center"
                        :to="{ name: 'chart' }">
                        <i class="fa-solid fa-chart-column mr-2"></i>
                        <span :class="(menuCollapsStore.isCollapse) ? 'opacity-0' : ' opacity-100'"
                            class="duration-200">Chart</span>
                    </router-link>
                </li>
                <li>
                    <router-link class="px-3 py-3 hover:bg-gray-50 rounded-sm flex flex-nowrap items-center"
                        :to="{ name: 'toastNotification' }">
                        <i class="fa-regular fa-bell mr-2"></i>
                        <span :class="(menuCollapsStore.isCollapse) ? 'opacity-0' : ' opacity-100'"
                            class="duration-200">Toast Notification</span>
                    </router-link>
                </li>
                <li>
                    <router-link class="px-3 py-3 hover:bg-gray-50 rounded-sm flex flex-nowrap items-center"
                        :to="{ name: 'richTextEditor' }">
                        <i class="fa-solid fa-spell-check mr-2"></i>
                        <span :class="(menuCollapsStore.isCollapse) ? 'opacity-0' : ' opacity-100'"
                            class="duration-200">Rich Text Editor</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <div @click="menuCollapsStore.changeMenuState"
            class="absolute bottom-2 -right-3 flex items-center justify-center  bg-blue-600 w-6 h-6 rounded-full cursor-pointer">
            <i :class="(menuCollapsStore.isCollapse) ? 'rotate-180' : ''"
                class="fa-solid fa-arrow-left duration-200 text-sm text-white "></i>
        </div>
    </div>
</template>

<style scoped></style>
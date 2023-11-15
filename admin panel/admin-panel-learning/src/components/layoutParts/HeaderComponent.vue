<script setup>

</script>

<template>
    <div class="duration-700 bg-blue-600 p-5 flex items-center justify-between shadow-md h-[8vh]">
        <div class="flex items-center space-x-3">
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
</template>

<style scoped></style>
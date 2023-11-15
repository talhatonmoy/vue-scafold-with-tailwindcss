<script setup>
import * as cGridAll from "vue-cheetah-grid";



</script>

<template>

  
  <c-grid :data="records" :frozen-col-count="1">
    <!-- define checkbox -->
    <c-grid-check-column field="check" width="50"> </c-grid-check-column>
    <c-grid-column field="personid" width="85"> ID </c-grid-column>
    <!-- multiple headers -->
    <c-grid-column-group caption="Name">
      <c-grid-input-column field="fname" width="20%" min-width="150">
        First Name
      </c-grid-input-column>
      <c-grid-input-column field="lname" width="20%" min-width="150">
        Last Name
      </c-grid-input-column>
    </c-grid-column-group>
    <!-- define button -->
    <c-grid-button-column caption="SHOW REC" width="120" @click="onClickRecord">
    </c-grid-button-column>
  </c-grid>
  


</template>

<style scoped>

</style>
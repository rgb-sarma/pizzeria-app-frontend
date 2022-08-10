<template>
  <div class="bg-red-500 h-12 w-screen m-0 p-0 top-0 left-0 fixed">
    THis is the navbar
    <button class="bg-blue-200" @click="dummyCall">Click me</button>
  </div>
</template>

<script setup lang="ts">
import api from '../api/index';

const dummyCall = async () => {
  try {
    const response = await api.getAllPizzas();
    console.log(response.data);
  }
   catch (error) {
    console.log(error);
  }
}
</script>

<style scoped>

</style>
<script setup>
import ItemVue from './components/Item.vue';
import TabsVue from './components/Tabs.vue';



</script>

<template>
  <header-item></header-item>
        <router-view></router-view>    
<footer-item></footer-item>
</template>




<script>
</script>
<style>
section {
  border: 2px solid salmon;
  padding: 10px;
}
</style>

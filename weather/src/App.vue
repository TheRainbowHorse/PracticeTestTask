<script setup>
import Cities from './components/Cities.vue';
import Weather from './components/Weather.vue'
</script>

<template>
<div>
  <header>
    <h1>Weather</h1>
  </header>
  <component v-bind:is="Cities"></component>
  <router-view></router-view>
</div>
</template>
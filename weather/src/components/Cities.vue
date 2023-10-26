<script setup>
import { ref, onMounted } from 'vue';

const citiesArr = ref([]);
const cityName = ref('');

function addCity() {
    citiesArr.value.push(cityName.value);
    localStorage.setItem('cities', JSON.stringify(citiesArr.value));
};
function removeCity(city) {
    let index = citiesArr.value.indexOf(city);
    if (index !== -1) {
        citiesArr.value.splice(index, 1);
        localStorage.setItem('cities', JSON.stringify(citiesArr.value));
    }
}

onMounted(() => {
    if (!localStorage.getItem('cities'))
        localStorage.setItem('cities', JSON.stringify(citiesArr.value));
    citiesArr.value = JSON.parse(localStorage.getItem('cities'));
});
</script>

<template>
<div class="cities">
    <h2>Cities</h2>
    <div class="add-city">
        <label>Додати місто </label>
        <input type="text" v-model="cityName">
        <button @click="addCity()">+</button>
    </div>
    
    <ul>
        <li v-for="ct in citiesArr" :key="ct">
            <router-link :to="'/weather/'+ct" :key="ct">{{ct}}</router-link>
            <button @click="removeCity(ct)">-</button>
        </li>
    </ul>
</div>
</template>

<style>
li {
    list-style-type: none
}
</style>

<script setup>
import axios from 'axios';
import { onUpdated, onMounted, ref } from 'vue';

const props = defineProps({
  city: ''
});

var city = '';
const coord = ref({
  lat: 0,
  lon: 0
});
const buCoordMessage = ref('');
const weather = ref({
  weather: [{description: ''}],
  main: {
    temp: '',
    humidity: '',
    pressure: ''
  },
  wind: {
    speed: ''
  }
});

function getWeather(){
  axios.get('https://api.openweathermap.org/data/2.5/weather?q='+props.city+'&units=metric&lang=ua&appid=7914d5a440960cfd5df3bd0388a7ad0f').then((response) => {
    console.log(response.data);
    weather.value = response.data;
    buCoordMessage.value = '';
  })
}
function getWeatherByCoord(){
  console.log(coord.value.lon);
  console.log('+');
  console.log(coord.value.lon);
  axios.get('https://api.openweathermap.org/data/2.5/weather?lat='+coord.value.lat+'&lon='+coord.value.lon+'&units=metric&lang=ua&appid=7914d5a440960cfd5df3bd0388a7ad0f').then((response) => {
    console.log(response.data);
    weather.value = response.data;
    buCoordMessage.value = 'Погода за вашими координатами:';
  })
}
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
}
function showPosition(position) {
  coord.value.lat = position.coords.latitude;
  coord.value.lon = position.coords.longitude;
  getWeatherByCoord();
}

onMounted(() => {
  if (props.city){
    getWeather();
    city = props.city;
  }
  else{
    getLocation();
  }
});
onUpdated(() => {
  if (props.city != city){
    getWeather();
    city = props.city;
  }
});
</script>

<template>
  <div class="weather">
    <h1>{{ props.city }}</h1>
    {{buCoordMessage}}
    <ul>
      <li>Погода: {{ weather.weather[0].description }}</li>
      <li>Температура: {{ weather.main.temp }} °C</li>
      <li>Вологість: {{ weather.main.humidity }}</li>
      <li>Тиск: {{ weather.main.pressure }} гПа</li>
      <li>Вітер: {{ weather.wind.speed }} м/с</li>
    </ul>
  </div>
</template>
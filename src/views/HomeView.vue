<script setup>
import apiCallJson from '../services/ApiJson.js';
import { ref, onBeforeMount, computed } from 'vue';
import FilterUser from "../components/FilterUser.vue";
import User from '../components/User.vue';


const api = new apiCallJson();
const user = ref([]);
const filterSearch = ref("");


onBeforeMount(async () => {

  await api.fetchAllRequest();
  user.value = api.getRequest();

});


const filterUsers = computed(() => {
  if (!filterUsers.value) return user.value;
  return user.value.filter(
    (u) =>
    //filter by name 
      u.name.toLowerCase().includes(filterSearch.value.toLowerCase()) ||
      //filter by id colocamos toString para que el numero lo pase a un string
      u.id.toString().toLowerCase().includes(filterSearch.value.toLowerCase())


  )
});


</script>

<template>
  <main>
  <FilterUser v-model="filterSearch" />
  <User v-for="user in filterUsers" :user="user" :key="user.id"/>
  </main>
</template>

<!-- <ul>
  <li v-for="user in users" :key="user.id">{{ user.name }}</li>
</ul> -->
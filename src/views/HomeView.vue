<script setup>
import apiCallJson from '../services/ApiJson.js';
import { ref , onBeforeMount , computed } from 'vue';
import FilterUser from "../components/FilterUser.vue";


const api = new apiCallJson();
const users = ref([]);
const filterSearch = ref("");


 onBeforeMount(async () =>{

  await api.fetchAllRequest();
  users.value = api.getRequest();

 });


//  const filterUsers = computed (() => {
//   if(!filterUsers.value) return users.value;
//   return users.value.filter(
//     (user) =>
//     user 
//   )
//  })



</script>

<template>
 <div>

 
  



   
    
    
  </div>
</template>

<!-- <ul>
  <li v-for="user in users" :key="user.id">{{ user.name }}</li>
</ul> -->
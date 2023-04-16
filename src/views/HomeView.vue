<script>
import apiCallJson from '../services/ApiJson.js';


export default {
  data() {
    return {
      users: []
    }
  },
  methods: {
    async fetchAllUsers() {
      const myApiCall = new apiCallJson();
      await myApiCall.fetchAllRequest();
      this.users = myApiCall.getRequest();
    }
  }
}

</script>

<template>
 <div>
    <button @click="fetchAllUsers">Fetch All Users</button>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

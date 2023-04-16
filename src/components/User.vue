<script setup>
import { defineProps } from "vue";

const props = defineProps({
    user: Object,
});

</script>

<template>
    <div class="wrapper">
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id"></tr>
                <th>{{ user.id }}</th>
                <th>{{ user.name }}</th>
                <th>{{ user.city }}</th>
            </tbody>

        </table>
    </div>
</template>

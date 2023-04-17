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
               <tr>
                   <th>{{ user.id }}</th>
                   <th>{{ user.name }}</th>
                   <th>{{ user.address.city }}</th>
                   
               </tr>
            </tbody>

        </table>
    </div>
</template>

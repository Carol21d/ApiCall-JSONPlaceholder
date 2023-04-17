<script setup>
import { ref, defineProps , defineEmits, watch} from "vue";

const props = defineProps({
    modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);
const search = ref(props.modelValue);

watch(search, findUser => {
    emit("update:modelValue", findUser);
});


</script>
<template>
    <div>

        <input type="search" name="search" placeholder="Search..." v-model="search" />
        <!-- <button @click="search">Search</button> -->
    </div>
</template>
<style lang="scss" scoped></style>
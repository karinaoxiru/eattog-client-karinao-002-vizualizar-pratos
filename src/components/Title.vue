<template>
    <h2 class="title">{{ text }}</h2>
</template>

<script setup>
    import { defineProps } from 'vue';
    const props = defineProps({
        text: String
    });
</script>

<style>
.title{
    left: 8.5%;
    font-weight: 700;
    padding-top: 20px;
    margin-bottom: 20px;
    position: relative;
    border-bottom: 1px solid #ffe5009c;
    width: fit-content;
}
</style>
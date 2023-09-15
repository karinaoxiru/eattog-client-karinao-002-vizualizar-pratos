<script setup>
    import Carousel from '../components/Carousel.vue';
    import Dishes from '../components/Dishes.vue';
    import Title from '../components/Title.vue';
</script>
<template>
    <Carousel/>
    <Title text="Pratos típicos da região"></Title>
    <el-row justify="center">
        <el-col :span="20">
            <Dishes/>
        </el-col>
    </el-row>
</template>

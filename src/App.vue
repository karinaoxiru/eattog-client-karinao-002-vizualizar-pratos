<script setup>
    import Navbar from './components/Navbar.vue';
    import Footer from './components/Footer.vue';
</script>

<template>
  <div>
    <Navbar logo="/assets/logo.svg" alt="Logo" />
    <router-view></router-view>
    <Footer> </Footer>
  </div>
</template>

<style scoped>
  * {
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
</style>
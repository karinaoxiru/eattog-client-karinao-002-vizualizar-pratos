<template>
  <div>
    <el-header v-if="isDesktop" class="nav desktop">
      <router-link id="logo-url" to="/">
        <span class="nav-name-logo">Eattog</span>
        <img class="logo" :src="logo" :alt="alt" />
      </router-link>
      <router-link to="/" :class="[$route.path === '/' ? 'nav-active' : '']">Inicio</router-link>
      <router-link to="/restaurants" :class="[$route.path === '/restaurants' ? 'nav-active' : '']">Restaurantes</router-link>

      <el-button class="location-input" @click="openModal">
        <span class="location-input__address">{{ userCity ? userCity : 'Localização' }}</span>
        <i class="el-icon-caret-bottom location-input__icon-arrow"></i>
      </el-button>
    </el-header>
    <el-header v-else class="nav nav-mobile">
      <el-button class="location-input" @click="openModal">
        <span class="location-input__address">{{ userCity ? userCity : 'Localização' }}</span>
        <i class="el-icon-caret-bottom location-input__icon-arrow"></i>
      </el-button>
    </el-header>

    <div v-if="modalOpen" class="custom-modal">
      <Modal @update-user-city="updateUserCity" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, provide, reactive } from 'vue';
import Modal from './Modal.vue';
import logoImage from '@/assets/quadrado.png';

const logo = ref(logoImage);
const alt = ref('Eattog');
const modalOpen = ref(false);

const state = reactive({
  userCity: ''
});

provide('navbarState', { userCity: state.userCity, modalOpen });

const openModal = () => {
  modalOpen.value = true;
};

const isDesktop = ref(window.innerWidth >= 768);

const handleResize = () => {
  isDesktop.value = window.innerWidth >= 768;
};

const updateUserCity = (newUserCity) => {
  state.userCity = newUserCity;
  modalOpen.value = false;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});
</script>


<style scoped>
  .nav {
    display: flex;
    position: sticky;
    flex-direction: row;
    align-items: center;
    grid-column-gap: 24px;
    -moz-column-gap: 24px;
    column-gap: 24px;
    height: 80px;
    background-color: #fff;
    box-shadow: inset 0 -1px 0 #dcdcdc;
    top: 0;
    z-index: 9997;
    padding: 20px 32px;
  }
  .nav-mobile{
    display: flex;
    justify-content: center;
  }
  .nav a {
    color: black;
    text-decoration: none;
  }
  .nav-name-logo {
    font-weight: 600;
  }

  .nav #logo-url {
    margin: auto;
    margin-left: 0;
  }
  .logo {
    width: 10px;
    height: 10px;
    position: relative;
    bottom: -8px;
  }
  .nav-active {
    border-bottom: 1px solid #ffe500;
  }
  .location-input, .location-input:hover{
    background-color: transparent;
    border: none;
  }
  .location-input__icon-arrow {
    display: inline-block;
    font-size: 12px;
    top: 2px;
    position: relative;
    margin-left: 4px;
  }
  .location-input__address {
    font-size: 14px;
    color: #ffe500;
    font-weight: 600;
  }
  .custom-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999999999999;
  }
</style>

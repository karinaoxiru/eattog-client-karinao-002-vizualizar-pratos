<script setup>

</script>

<template>
  <div id="navigation">
    <div id="home" class="navigator">
      <font-awesome-icon icon="fa-solid fa-house" />
      <span>Feed</span> 
    </div>
    <div id="alimentacao" class="navigator">
      <font-awesome-icon icon="fa-solid fa-utensils" />
      <span>Alimentação</span>
    </div>
    <div id="notificacoes" class="navigator">
      <font-awesome-icon icon="fa-solid fa-bell" />
      <span>Notificações</span>
    </div>
    <div id="perfil" class="navigator">
      <font-awesome-icon icon="fa-solid fa-user" />
      <span>Perfil</span>
    </div>

  </div>
</template>

<style>
#navigation {
  display: flex;
  justify-content: space-between;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 20px 20px 0 0 ;
}

.navigator {
  color: #bea1d1;
  margin: 0 8px;
  display: grid;
  text-align: center;
}
.navigator svg{ margin: auto;}

.navigator:hover {
  color: #7625ab;
}
</style>
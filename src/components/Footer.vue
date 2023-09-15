<template>
  <footer class="cmp-footer">
      <el-row justify="center">
        <el-col :span="16" class="cmp-footer--margin-none">
          <el-row :gutter="10">
            <el-col :xs="8" :sm="6" :md="4" :lg="6" :xl="6">
                <router-link to="/" class="cmp-footer-link">Termos e condições de uso</router-link>
            </el-col>
            <el-col :xs="8" :sm="6" :md="8" :lg="6" :xl="6">
                <router-link to="/" class="cmp-footer-link">Código de conduta</router-link>
            </el-col>
            <el-col :xs="8" :sm="6" :md="8" :lg="6" :xl="6">
                <router-link to="/" class="cmp-footer-link">Privacidade</router-link>
            </el-col>
            
          </el-row>
        </el-col>
      </el-row>
      <div class="cmp-footer-text">
        <div class="cmp-footer-logo">
          <img src="../assets/icon _stop.svg" alt="Logo Eattog" />
        </div>
        <p >
          © Copyright 2023 - Eattog - Todos os direitos reservados Eattog com
          Agência de Restaurantes Online S.A.
        </p>
        <p>CNPJ 16.642.553/0001-88</p>
      </div>
  </footer>
</template>

<style setup>
@media (max-width: 768px) {
    .cmp-footer {
        border-top: 1px solid #dcdcdc;
    }
    .cmp-footer-link {
        text-decoration: none;
        color: black;
    }
    .cmp-footer-text {
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
    }
    .cmp-footer--margin-none {
        margin: 0 !important;
    }
    .cmp-footer-text .cmp-footer-logo img {
        margin-right: 10px;
    }
    .cmp-footer-logo {
        left: -100px;
    }
    
  
  }
</style>
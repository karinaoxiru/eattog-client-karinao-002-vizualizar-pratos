<template>
    <Title text="Plates"></Title>
    <el-row justify="center">
               <el-col :span="20">
            <el-row :gutter="12">
                <Plate v-for="restaurant in restaurants" :plate ="restaurant" />
            </el-row>
        </el-col>
    </el-row>
</template>
<script setup>
import { ref } from "vue";
import Title from "../components/Title.vue";
import Plate from "../components/Plate.vue";

const restaurants = ref([
    {
        id: 1,
        image: 'https://img.cybercook.com.br/receitas/802/molho-a-carbonara-forum-madalena-saifi.jpeg',
        logo: 'https://img.freepik.com/vetores-gratis/uma-estrela-restaurante-icon-ilustracao_53876-40629.jpg?w=2000',
        title: 'Chalé Marmitaria',
        rating: 3.0,
        type: 'Refeição saudável',
        price: 'R$ 45',
        distance: '2,5km',
        retiring: 'Local',
        description: 'Marmitaria com pratos tradicionais para o seu dia-a-dia, com opções saudáveis no local'
    },
    {
        id: 2,
        image: 'https://img.cybercook.com.br/receitas/802/molho-a-carbonara-forum-madalena-saifi.jpeg',
        logo: 'https://img.freepik.com/vetores-gratis/uma-estrela-restaurante-icon-ilustracao_53876-40629.jpg?w=2000',
        title: 'Burger King',
        rating: 4.0,
        type: 'Refeição saudável',
        price: 'R$ 45',
        distance: '1,5km',
        retiring: 'Retirada apenas',
        description: 'Marmitaria com pratos tradicionais para o seu dia-a-dia, com opções saudáveis no local'
    },
    {
        id: 3,
        image:'https://img.cybercook.com.br/receitas/802/molho-a-carbonara-forum-madalena-saifi.jpeg' ,
        logo: 'https://img.freepik.com/vetores-gratis/uma-estrela-restaurante-icon-ilustracao_53876-40629.jpg?w=2000',
        title: 'Divina Espetaria',
        rating: 5.0,
        type: 'Refeição saudável',
        price: 'R$ 45',
        distance: '7,5km',
        retiring: 'Local e retirada',
        description: 'Marmitaria com pratos tradicionais para o seu dia-a-dia, com opções saudáveis no local'
    },
    {
        id: 5,
        image: 'https://img.cybercook.com.br/receitas/802/molho-a-carbonara-forum-madalena-saifi.jpeg' ,
        logo: 'https://img.freepik.com/vetores-gratis/uma-estrela-restaurante-icon-ilustracao_53876-40629.jpg?w=2000',
        title: 'Chalé Marmitaria',
        rating: 3.0,
        type: 'Refeição saudável',
        price: 'R$ 45',
        distance: '2,5km',
        retiring: 'Local',
        description: 'Marmitaria com pratos tradicionais para o seu dia-a-dia, com opções saudáveis no local'
    },
    {
        id: 6,
        image: 'https://img.cybercook.com.br/receitas/802/molho-a-carbonara-forum-madalena-saifi.jpeg',
        logo: 'https://img.freepik.com/vetores-gratis/uma-estrela-restaurante-icon-ilustracao_53876-40629.jpg?w=2000',
        title: 'Burger King',
        rating: 4.0,
        type: 'Refeição saudável',
        price: 'R$ 45',
        distance: '1,5km',
        retiring: 'Retirada apenas',
        description: 'Marmitaria com pratos tradicionais para o seu dia-a-dia, com opções saudáveis no local'
    },
    {
        id: 7,
        image: 'https://img.cybercook.com.br/receitas/802/molho-a-carbonara-forum-madalena-saifi.jpeg',
        logo: 'https://img.freepik.com/vetores-gratis/uma-estrela-restaurante-icon-ilustracao_53876-40629.jpg?w=2000',
        title: 'Divina Espetaria',
        rating: 5.0,
        type: 'Refeição saudável',
        price: 'R$ 45',
        distance: '7,5km',
        retiring: 'Local e retirada',
        description: 'Marmitaria com pratos tradicionais para o seu dia-a-dia, com opções saudáveis no local'
    },
])
console.log(restaurants)
</script>


<style>

.el-col {
    margin: 12px 0;
}

.grid-content {
    text-align: center;
    background-color: #ffffff;
    color: #303030;
}

/*title*/
.title{
    
}

.image {
    height: 180px;
    background-size: cover !important;
    background-repeat: no-repeat;
    display: grid;
    align-content: end;
}

.image .restaurant-data {
    text-align: left;
    display: flex;
    color: #ffffff;
    padding-left: 20px;
    padding-bottom: 12px;
}

.image .restaurant-data h6 {
    font-size: 16px;
    font-weight: 700;
}

.image .restaurant-data img {
    width: 50px;
    height: 50px;
    padding-right: 8px;
    object-fit: contain;
}

.details {
    padding: 4px 20px 32px 20px;
}

.details div {
    display: flex;
    justify-content: space-between;
}

.details span {
    font-size: 13px;
}

.description {
    text-align: left;
    font-size: 14px;
}
.place-data-img{
    width: 60px;
    height: 60px;
}

</style>-------------------


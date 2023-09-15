<template>
        <div>
        <el-row :gutter="5" justify="center">
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :span="8" v-for="(prato, index) in pratos" :key="prato.id">
            <el-card :body-style="{ padding: '0px' }">
                <img :src="prato.image" class="image">
                <template v-if="tagsAlimentos[index] !== 'Alimentos Processados'">
                    <tag class="tag-aliment">{{ tagsAlimentos[index] }}</tag>
                </template>
                <div style="padding: 14px;">
                    <span>{{ prato.title }}</span>
                    <div class="bottom clearfix">
                        <time class="time">{{ tempos[index] }} min</time>

                        <el-button type="text" class="button" :to="{ name: 'Plates', query: { id: prato.id } }">Adicionar</el-button>

                    </div>
                </div>
            </el-card>
            </el-col>
        </el-row>
        </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  
  const adicionarPrato = (pratoId) => {
    const router = useRouter();
    router.push({ name: 'Plates', query: { id: pratoId } });
  };


    import { ref} from 'vue';

    const apiKey = '0a727021fc924cd9b2ea52e03ccd461e';
    const apiUrl = 'https://api.spoonacular.com/recipes/complexSearch';
    
    const tempos = [35, 40, 30, 45, 35, 40, 30, 50, 50]; 
    const tagsAlimentos = ['Alimentos Saudáveis' , 'Alimentos Processados' , 'Alimentos Saudáveis' , 'Alimentos Saudáveis' ,'Alimentos Saudáveis','Alimentos Processados' , 'Alimentos Saudáveis' , 'Alimentos Saudáveis' , 'Alimentos Saudáveis'  , 'Alimentos Saudáveis' ]
//   const pratos = ref([]);
//   fetch(`${apiUrl}?apiKey=${apiKey}`)
//         .then((res) => res.json())
//         .then((json) => {
//         console.log('Requisição bem-sucedida');
//         pratos.value = json.results;
//         })
//         .catch((err) => {
//         console.log('Ocorreu um erro na requisição', err);
//         });

    import lanche from '@/assets/img-pratos/lanche.jpg';
    import pacu from '@/assets/img-pratos/pacu-recheado.jpg';
    import soba from '@/assets/img-pratos/soba-pantaneiro.jpg';
    import salada from '@/assets/img-pratos/salada-pantaneira.jpg';
    import pintado from '@/assets/img-pratos/pintado-na-telha.webp';
    import moqueca from '@/assets/img-pratos/moqueca-pantaneira.jpg';
    import feijao from '@/assets/img-pratos/feijao-tropeiro.jpg';
    const pratos = ref([
        {
            id: 1,
            image: pacu,
            title: 'Pacu Assado',
            ingredients: 'Pacu, temperos, ervas',
            time: 35,
        },
        {
            id: 2,
            image: lanche,
            title: 'Lanche',
            ingredients: 'Pão, carne, queijo, alface, tomate',
            time: 10,
        },
        {
            id: 3,
            image: soba,
            title: 'Sobá Pantaneiro',
            ingredients: 'Macarrão, carne de porco, cebola, verduras',
            time: 30,
        },
        {
            id: 4,
            image: pintado,
            title: 'Pintado na Telha',
            ingredients: 'Pintado, temperos, legumes',
            time: 45,
        },
        {
            id: 5,
            image: feijao,
            title: 'Feijão Tropeiro',
            ingredients: 'Feijão, linguiça, torresmo, ovos, farinha de mandioca',
            time: 35,
        },
        {
            id: 9,
            image: lanche,
            title: 'Lanche Pantaneiro',
            ingredients: 'Pão, carne, temperos, queijo',
            time: 25,
        },
        {
            id: 8,
            image: moqueca,
            title: 'Moqueca Pantaneira',
            ingredients: 'Peixe, temperos, verduras',
            time: 30,
        },

        {
            id: 10,
            image: salada,
            title: 'Salada',
            ingredients: 'Verduras, frutas, castanhas, molho especial',
            time: 15,
        },
    ]);
</script> 
<style>
    .el-row {
        text-align: center;
    }
    .tag-aliment {
        position: relative;
        bottom: 12px;
        background-color: #ffe500e8;
        color: #ffffff;
        padding: 5px;
        border-radius: 4px;
        font-weight: 600;
    }
    
    .image {
        height: auto;
        width: 100%;
        object-fit: cover;
    }
    .bottom {
        margin-top: 10px;
    }
    .time {
        float: left;
    }
    .button {
        float: right;
    }
    .card {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .el-button--text {
        border-color: transparent;
        background: 0 0;
        color: #f39c12;
        padding-left: 0;
        padding-right: 0;
    }
</style>
<script setup>
const props = defineProps({
    plate: {
        id: Number,
        image: String,
        logo: String,
        title: String,
        rating: Number,
        type: String,
        price: String,
        distance: String,
        retiring: String,
        description: String
    }
});
import { useRoute } from 'vue-router'

const route = useRoute()

const result = route.params.id

const plateData =
{
    image: 'https://img.freepik.com/free-photo/vegetarian-buddha-bowl-with-fresh-vegetable-salad-chickpea_1150-42359.jpg?w=740&t=st=1693780540~exp=1693781140~hmac=cbf8a6ee3daa6c9de0c6890f97bb984d2d7a2ae50e1f44c562231aaf30be0449',
    title: 'Salada 100% completa',
    description: 'Cenoura, brócolis, couve-flor, aspargos, vagem e tomate; Grão-de-bico cozido e abacate fresco',
    price: 35,
    isSale: false,
    sale_price: 25
}
</script>

<template>
    <section id="singlePlate">
        <div class="grid-content">
            <el-row :gutter="5" justify="center">
                <el-card :body-style="{ padding: '0px' }">
                    {{ result }}

                    <img class="idprato" :src="plateData.image" alt="">

                    <div style="padding: 14px">
                        <span class="titulo-prato"> {{ plateData.title }} </span>
                        <div>
                            <span class="description-prato"> {{ plateData.description }} </span>
                        </div>
                        <div class="preco-coluna">
                            <div class="dish-coluna1">
                                <span class="preco-pratos"> {{ plateData.price }} </span>
                            </div>
                            <div class="dish-coluna2">
                                <span class="desconto-pratos"> {{ plateData.sale_price }} </span>
                            </div>
                        </div>
                    </div>
                </el-card>
            </el-row>
        </div>
    </section>
</template>


<style setup>
@media (max-width: 768px) {
#singlePlate .titulo-prato {
    font-weight: bold;
    color: rgb(0, 0, 0);
}

#singlePlate .description-prato {
    color: rgb(28, 28, 34);
}

#singlePlate .preco-coluna {
    text-align: justify-content;
}

#singlePlate .preco-pratos {
    font-weight: bold;
    position: relative;
    font-size: 20px;
    color: #412a14c2;
    text-decoration: line-through;
    margin-left: 6px;
}

.desconto-pratos {
    color: #3dd13898;
    font-size: 20px;
    margin-bottom: 10px;
}

#singlePlate .time {
    font-size: 12px;
    color: #999;
}

#singlePlate .bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#singlePlate .button {
    padding: 0;
    min-height: auto;
}

#singlePlate .idprato {
    align-items: center;
    width: 30%;
}
}
</style>
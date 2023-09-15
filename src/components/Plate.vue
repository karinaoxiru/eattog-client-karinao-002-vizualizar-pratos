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
console.log(props); 
</script>
<template>
    <el-col :xs="12" :sm="12" :md="8" :lg="6" :span="8">
        <router-link :to="{
            name: 'SinglePlates',
            params: {
                id: plate.id
            },

        }">
            <div class="grid-content">
                <div class="image" :style="{ background: 'url(' + props.plate.image + ')' }">
                    <div class="plate-data">
                        <img :src='plate.logo' alt="">
                        <div>
                            <h6 class="titleName">{{ plate.title }}</h6>
                            <el-rate disabled v-model="plate.rating" />
                        </div>
                    </div>
                </div>
                <div class="details">
                    <div>

                        <span class="type">{{ plate.type }}</span>
                        <span class="price">{{ plate.price }}</span>
                        <span>{{ plate.distance }}</span>
                        <span>{{ plate.retiring }}</span>
                    </div>
                    <p class="description">
                        {{ plate.description }}
                    </p>
                </div>
            </div>
        </router-link>
    </el-col>
</template>
<style>
.plate-data img {
    width: 60px;
    height: 60px;
}

.titleName {
    font-size: 14px;
}

.price {

    color: #50a773;
    margin-bottom: 10px;
}
</style>

<script setup>

defineProps({
    restaurant: {
        image: String,
        logo: String,
        title: String,
        rating: Number,
        type: String,
        distance: String,
        retiring: String,
        description: String
    }
});
</script>
<template>
    <el-col :xs="24" :sm="12" :md="8" :lg="6" :span="8">
        <div class="grid-content">
            <div class="image" :style="{ background: 'url(' + restaurant.image + ')' }">
                <div class="restaurant-data">
                    <img :src='restaurant.logo' alt="">
                    <div>
                        <h6>{{ restaurant.title }}</h6>
                        <el-rate disabled v-model="restaurant.rating" />
                    </div>
                </div>
            </div>
            <div class="details">
                <div>
                    <span>{{ restaurant.type }}</span>
                    <span>{{ restaurant.distance }}</span>
                    <span>{{ restaurant.retiring }}</span>
                </div>
                <p class="description">
                    {{ restaurant.description }}
                </p>
            </div>
        </div>
    </el-col>
</template>
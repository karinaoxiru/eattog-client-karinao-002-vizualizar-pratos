<template>
  <div>
    <el-carousel :autoplay="false" :indicator-position="'none'" :arrow="'hover'" :loop="true" class="custom-carousel">
      <el-carousel-item v-for="(banner, index) in banners" :key="index">
        <div class="banner-wrapper">
          <img class="banner-format" :src="banner.image" alt="Banner" />
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import Banner1 from '@/assets/img-banner/banner-1.jpg';
import Banner2 from '@/assets/img-banner/banner-2.jpg';
import Banner3 from '@/assets/img-banner/banner-3.jpg';

export default {
  data() {
    return {
      banners: [
        { image: Banner1 },
        { image: Banner2 },
        { image: Banner3 },
      ],
    };
  },
};
</script>

<style>
.banner-format {
  object-fit: cover;
  width: 100%;
  height: 200px;
}
.custom-carousel {
  position: relative;
}

.banner-wrapper {
  position: relative;
}

.el-carousel__container {
    height: 200px;
}
.el-carousel__arrow--left,
.el-carousel__arrow--right {
  bottom: 20px; 
  background-color: rgba(255, 255, 0, 0.642); 
}
.el-carousel__arrow--left{
  right: auto;
  left: 46%;
}
.el-carousel__arrow--right {
  left: auto;
  right: 46%;
}
@media (max-width: 768px) {
  .el-carousel__arrow--left{
    right: auto;
    left: 38%;
  }
  .el-carousel__arrow--right {
    left: auto;
    right: 38%;
  }
}
</style>


<script setup>
import { House } from '@/models/House.js';

const props = defineProps({
    houseProp: {type: House, required: true}
})

</script>


<template>
    <div class="house-border">
        <img :src="houseProp.imgUrl" alt="" class="house-img">
        <p>Bathrooms: {{ houseProp.bathrooms }}</p>
        <p>Bedrooms: {{ houseProp.bedrooms }}</p>
        <p>Asking Price: {{ houseProp.price }}</p>
        <p>Year Built: {{ houseProp.year }}</p>
        <p>House Levels: {{ houseProp.levels }}</p>
        <p>{{ houseProp.description }}</p>
    </div>
</template>


<style lang="scss" scoped>
.house-img{
    width: 100%;
    height: 300px;
    object-fit: cover;
}

.house-border{
    height: 650px;
    border: 8px inset black;
}
</style>
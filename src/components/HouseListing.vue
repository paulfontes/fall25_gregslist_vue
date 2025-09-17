<script setup>
import { House } from '@/models/House.js';
import { housesService } from '@/services/HousesService.js';
import { Pop } from '@/utils/Pop.js';

const props = defineProps({
    houseProp: {type: House, required: true}
})

async function deleteHouse() {
    try {
      await housesService.deleteHouse(props.houseProp.id)
    }
    catch (error){
      Pop.error(error);
    }
}

</script>


<template>
    <div class="house-border position-relative">
        <img :src="houseProp.imgUrl" alt="" class="house-img">
        <p>Bathrooms: {{ houseProp.bathrooms }}</p>
        <p>Bedrooms: {{ houseProp.bedrooms }}</p>
        <p>Asking Price: {{ houseProp.price }}</p>
        <p>Year Built: {{ houseProp.year }}</p>
        <p>House Levels: {{ houseProp.levels }}</p>
        <p>{{ houseProp.description }}</p>
        <div class="position-absolute top-0 end-0">
            <button @click="deleteHouse()" class="btn btn-outline-danger">Delete</button>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.house-img{
    width: 100%;
    height: 330px;
    object-fit: cover;
}

.house-border{
    height: 650px;
    border: 8px inset black;
}
</style>
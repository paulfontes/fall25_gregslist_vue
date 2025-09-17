<script setup>
import { AppState } from '@/AppState.js';
import { House } from '@/models/House.js';
import { housesService } from '@/services/HousesService.js';
import { Pop } from '@/utils/Pop.js';
import { computed } from 'vue';


const account = computed(()=> AppState.account)

const props = defineProps({
    houseProp: {type: House, required: true}
})

async function deleteHouse() {
    const confirmed = await Pop.confirm('Are you sure you want to delete a this house?', 'It will be gone forever', 'Yes', 'No')

    if (!confirmed) {
        return
    }
    
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
            <button v-if="account?.id == houseProp.creatorId" @click="deleteHouse()" class="btn btn-outline-danger">Delete</button>
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
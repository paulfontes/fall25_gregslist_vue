<script setup>
import { AppState } from '@/AppState.js';
import HouseListing from '@/components/HouseListing.vue';
import { housesService } from '@/services/HousesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

const houses = computed(()=> AppState.houses)

onMounted(()=> getHouses())

async function getHouses(){
    try {
      await housesService.getCars()
    }
    catch (error){
      Pop.error(error);
      logger.error('Got an Error Getting the Cars!!', error)
    }
}


</script>


<template>
    <div class="container-fluid mt-5">
        <div class="row g-3">
            <div v-for="house in houses" :key="house.id" class="col-md-6">
                <HouseListing :houseProp="house" />
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>
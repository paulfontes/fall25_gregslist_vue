<script setup>
import { housesService } from '@/services/HousesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { ref } from 'vue';

const editableHouseData = ref({
    bathrooms: 0,
    bedrooms: 0,
    year: new Date().getFullYear,
    price: 0,
    levels: 0,
    imgUrl: '',
    description: ''
    
})




async function createHouse() {
    try {
        await housesService.createHouse(editableHouseData.value)
        
    editableHouseData.value = {
    bathrooms: 0,
    bedrooms: 0,
    year: new Date().getFullYear,
    price: 0,
    levels: 0,
    imgUrl: '',
    description: ''
    
}
      
    }
    catch (error){
      Pop.error(error);
      logger.log('Could not create car!', error)
    }
}

</script>


<template>
    <form @submit.prevent="createHouse()">
        <div class="row g-2 justify-content-between">
        <div class="col-4">
                <label for="house-bathrooms">Bathrooms: </label>

                <input v-model="editableHouseData.bathrooms" type="number" id="house-bathrooms" required max="25">
            </div>
            <div class="col-4">
                <label  for="house-bedrooms">Bedrooms: </label>

                <input v-model="editableHouseData.bedrooms" type="number" id="house-bedrooms" required max="50">
            </div>
            <div class="col-4">
                <label for="house-price">Price: </label>

                <input v-model="editableHouseData.price" type="number" id="house-price" required max="100000000">
            </div>
            <div class="col-4">
                <label for="house-levels">Levels: </label>

                <input id="house-levels" v-model="editableHouseData.levels" type="number">
            </div>
            <div class="col-4">
                <label for="house-picture">Picture: </label>

                <input v-model="editableHouseData.imgUrl" type="url" id="house-picture" required>
            </div>
            <div class="col-4">
                <label for="house-year">Year: </label>
                <input v-model="editableHouseData.year" type="number" id="house-year" required>
            </div>
            <div class="col-4">
                <label for="house-description">Description:</label>
                <textarea id="house-description" v-model="editableHouseData.description" name=""></textarea>
            </div>
            <div class="col-12 d-flex justify-content-end">
                <button type="submit" class="btn btn-outline-success w-25">Submit</button>
            </div>
        </div>
    </form>
    </template>


<style lang="scss" scoped>

</style>
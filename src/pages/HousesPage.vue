<script setup>
import { AppState } from '@/AppState.js';
import { logger } from '@/utils/Logger.js';
import { onMounted } from 'vue';


onMounted(()=> AppState.houses)

async function getHouses(){
    logger.log('getting houses')
}


</script>


<template>
Houses
</template>


<style lang="scss" scoped>

</style>
import { logger } from "@/utils/Logger.js";
import { api } from "./AxiosService.js"
import { House } from "@/models/House.js";
import { AppState } from "@/AppState.js";

class HousesService {
    async getCars() {
        const response = await api.get('api/houses')
        const house = response.data.map((pojo) => new House(pojo))
        AppState.houses = house

    }

}

export const housesService = new HousesService()
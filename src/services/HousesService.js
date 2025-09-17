import { logger } from "@/utils/Logger.js";
import { api } from "./AxiosService.js"
import { House } from "@/models/House.js";
import { AppState } from "@/AppState.js";

class HousesService {
    async deleteHouse(houseId) {
        const response = await api.delete(`api/houses/${houseId}`)
        const index = AppState.houses.findIndex(house => house.id == houseId)
        AppState.houses.splice(index, 1)
    }
    async createHouse(formData) {
        const response = await api.post('api/houses', formData)
        const house = new House(response.data)
        AppState.houses.push(house)
    }
    async getCars() {
        const response = await api.get('api/houses')
        const house = response.data.map((pojo) => new House(pojo))
        AppState.houses = house

    }

}

export const housesService = new HousesService()
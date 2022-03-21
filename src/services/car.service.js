import {axiosService} from "./axios.service";
import {urls} from "../config/urls";


export const carService = {
    getAll: () => axiosService.get(urls.cars).then(value => value.data),
    getByParkId: (id) => axiosService.get(`${urls.cars}?autoParkId=${id}`).then(value => value.data),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`).then(value => value.data)
}

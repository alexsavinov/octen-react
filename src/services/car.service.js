import {axiosService} from "./axios.service";
import {urls, baseURLCars} from "../configs";

export const carService = {
    create: (car) => axiosService.post(`${baseURLCars + urls.cars}`, car).then(value => value.data),
    deleteById: (id) => axiosService.delete(`${baseURLCars + urls.cars}/${id}`).then(value => value.data),
    getAll: () => axiosService.get(`${baseURLCars + urls.cars}`).then(value => value.data),
    updateById:(id, car)=>axiosService.patch(`${baseURLCars + urls.cars}/${id}`, car).then(value => value.data)
}

import {axiosService} from './axios.service';
import {urls} from '../config/urls';

//"http://localhost:8000/api/v1/auto_parks?page=2"

export const carService = {
    getAll: (page = 1) => axiosService.get(`${urls.cars}?page=${page}`).then(value => value.data),
    getByParkId: (id, page = 1) => axiosService.get(`${urls.cars}?autoParkId=${id}&page=${page}`).then(value => value.data),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`
            }
        }).then(value => value.data)
}

import {axiosService} from "./axios.service";
import {urls, baseURLPlaceholder} from "../configs/urls";

export const postService = {
    getAll: () => axiosService.get(`${baseURLPlaceholder + urls.posts}`).then(value => value.data),
    getByUserId: (id) => axiosService.get(`${baseURLPlaceholder + urls.posts}?userId=${id}`).then(value => value.data)
}

import {axiosService} from "./axios.service";
import {urls, baseURLPlaceholder} from "../configs/urls";

export const commentService = {
    getAll: () => axiosService.get(`${baseURLPlaceholder + urls.comments}`).then(value => value.data),
    getByPostId: (id) => axiosService.get(`${baseURLPlaceholder + urls.comments}?postId=${id}`).then(value => value.data)
}

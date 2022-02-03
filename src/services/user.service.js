import {axiosService} from "./axios.service";
import {urls, baseURLPlaceholder} from "../configs/urls";

export const userService = {
    getAll: () => axiosService.get(baseURLPlaceholder + urls.users).then(value => value.data)
}

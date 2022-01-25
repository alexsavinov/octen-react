import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const albumsService = {
    getByUserId: (id) => axiosService.get(`${urls.users}/${id}/albums`).then(value => value.data),
    getByAlbumId: (albumId) => axiosService.get(`${urls.albums}/${albumId}/photos`).then(value => value.data)
}

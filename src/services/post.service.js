import {urls} from "../configs/urls";


const getByUserId = (id) => {
    return fetch(`${urls.users}/${id}/posts`)
        .then(value => value.json())
}

export const postService = {
    getByUserId
}


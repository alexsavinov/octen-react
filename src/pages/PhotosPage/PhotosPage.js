import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {albumsService} from "../../services/albums.service";
import {Photo} from "../../components";

const PhotosPage = () => {
    const {albumId} = useParams();
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        albumsService.getByAlbumId(albumId).then(value => setPhotos([...value]))
    }, [albumId]);

    return (
        <div>
            <h3>Photos</h3>
            <div>
                {photos.map(photo =>
                    <Photo key={photo.id} photo={{...photo}}/>
                )}
            </div>
        </div>
    );
};

export {PhotosPage};
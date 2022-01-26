import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import css from "./Photos.css";

import {albumsService} from "../../services/albums.service";

const PhotosPage = () => {
    const {albumId} = useParams();
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        albumsService.getByAlbumId(albumId).then(value => setPhotos(value))
    }, [albumId]);

    return (
        <div>
            <h3>Photos</h3>
            <div>
                {photos.map(album =>
                    <div className={css.photo} key={album.id}>
                        <div>
                            [{album.id}] {album.title}
                        </div>
                        <div>
                            <img src={album.url} alt="photo"/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export {PhotosPage};
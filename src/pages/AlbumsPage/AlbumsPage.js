import {useEffect, useState} from "react";
import {Link, Outlet, useParams} from "react-router-dom";

import css from "./Albums.module.css";

import {albumsService} from "../../services/albums.service";

const AlbumsPage = () => {
    const {id} = useParams();
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumsService.getByUserId(id).then(value => setAlbums(value))
    }, [id]);

    return (
        <div>
            <h3>Albums</h3>
            <div>
                {albums.map(album =>
                    <div className={css.albums} key={album.id}>
                        <div>
                            [{album.id}] {album.title}
                        </div>
                        <Link to={album.id + '/photos'}>
                            <button>Photos</button>
                        </Link>
                    </div>
                )}
            </div>

            <Outlet/>
        </div>
    );
};

export {AlbumsPage};
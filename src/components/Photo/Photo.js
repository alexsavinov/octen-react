import css from "./Photo.module.css";

const Photo = ({photo}) => {
    const {id, title, url, thumbnailUrl} = photo;
    return (
        <div className={css.photo}>
            <div>
                <a href={url}><img src={thumbnailUrl} alt="photo"/></a>
            </div>
            <div>
                [{id}] {title}
            </div>
        </div>
    );
};

export {Photo};

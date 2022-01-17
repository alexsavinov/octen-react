const Post = (props) => {
    const {id, userId, title, body} = props;

    return (
        <div>
            <div><b>id: {id}</b></div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <hr/>
        </div>
    );
};

export default Post;

const Comment = (props) => {
    const {id, postId, name, email, body} = props;

    return (
        <div>
            <div><b>id: {id}</b></div>
            <div>postId: {postId}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <hr/>
        </div>
    );
};

export default Comment;

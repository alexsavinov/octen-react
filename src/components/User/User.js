const User = (props) => {
    const {id, name, username, email, street} = props;

    return (
        <div>
            <div><b>id: {id}</b></div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>street: {street}</div>
            <hr/>
        </div>
    );
};

export default User;

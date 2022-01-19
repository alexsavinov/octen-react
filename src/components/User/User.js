const User = ({user, getUser}) => {
    const {id, name} = user;

    return (
        <div>
            {id}) {name} <button onClick={() => getUser(user)}>Get details</button>
        </div>
    );
};

export default User;

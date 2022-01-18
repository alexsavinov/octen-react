const User = (props) => {
    // const {id, name, username, email, street} = props;
    const {id, name} = props;

    return (
        <div>
            {id}) {name} <button>Get details</button>
        </div>
    );
};

export default User;

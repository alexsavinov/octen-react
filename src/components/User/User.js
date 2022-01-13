const User = (props) => {
    const {id, name, surname, email, street} = props;

    return (
        <div>
            {/*{id}--{name}--{surname}--{email}*/}
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>surname: {surname}</div>
            <div>email: {email}</div>
            <div>street: {street}</div>
        </div>
    );
};

export default User;

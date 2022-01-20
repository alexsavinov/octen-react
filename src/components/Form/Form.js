import React, {useState} from 'react';

const Form = ({getFilter}) => {
    let [form, setForm] = useState({name: '', username: '', email: ''});

    const formHandler = (e) => {
        const eventData = {...form, [e.target.name]: e.target.value};
        setForm({...form, ...eventData});
        // getFilter(eventData);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        getFilter(form);
    }

    return (
        <div>
            <label>Name: <input type="text" name={'name'} value={form.name} onChange={formHandler}/></label>
            <label>Username: <input type="text" name={'username'} value={form.username} onChange={formHandler}/></label>
            <label>Email: <input type="text" name={'email'} value={form.email} onChange={formHandler}/></label>
            <button onClick={onSubmit}>Filter</button>
        </div>
    );
};  

export default Form;
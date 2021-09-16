import React, { useState } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router';

const AddFriendForm = () => {
    const { push } = useHistory();
    const [friends, setFriends] = useState([])
    const [form, setForm] = useState({
        name: "",
        age: "",
        email: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post("/api/friends", form)
            .then(res =>{
                push("/friends")
            }).catch(err => {console.log(err)})
    }

    return (
        <div className='main'>
            <form onSubmit={handleSubmit}>
                <h3>Add a new friend</h3>
                <fieldset className='form-group'>
                    <label>friend's name: </label>
                    <input 
                        type='text'
                        onChange={handleChange}
                        value={form.name}
                        name='name'
                        className='form-control'
                    />
                </fieldset>
                <fieldset className='form-group'>
                    <label>friend's age: </label>
                    <input 
                        type='text'
                        onChange={handleChange}
                        value={form.age}
                        name='age'
                        className='form-control'
                    />
                </fieldset>
                <fieldset className='form-group'>
                    <label>friend's email: </label>
                    <input 
                        type='email'
                        onChange={handleChange}
                        value={form.email}
                        name='email'
                        className='form-control'
                    />
                </fieldset>
                <button type='submit'>Submit new friend</button>
            </form>
        </div>
    )
}

export default AddFriendForm
import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

const intitialState = {
    username: '',
    password: ''
}

const Login = () => {

    const [formValues, setFormValues] = useState(intitialState)
    const { push } = useHistory();
    const handleChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    };

    const login = e => {
        e.preventDefault();
        setFormValues({
            ...formValues,
        })
        axios.post("http://localhost:5000/api/login", formValues)
            .then(res => {
                localStorage.setItem("token", res.data.payload);
                push("/friends");
            }).catch(err => {console.log(err)})
    }


    return (
        <div className='login'>
            <form onSubmit={login}>
                <label htmlFor="username">username: </label>
                <input
                    id="username"
                    type='text'
                    name='username'
                    value={formValues.username}
                    onChange={handleChange}
                /> 
                <label htmlFor="password">password: </label>
                <input 
                    id="password"
                    type='password'
                    name='password'
                    value={formValues.password}
                    onChange={handleChange}
                />
                <button>Log In</button>
            </form>
        </div>
    );
}


export default Login;
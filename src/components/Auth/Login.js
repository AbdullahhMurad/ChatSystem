import React, { useState } from 'react';
import loginImage from '../../assets/images/login.svg'
import './Auth.scss';
import '../../../src/App.scss';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import AuthService from '../../services/authService';


import { useDispatch } from 'react-redux';
import { login } from '../../store/actions/auth';




import './Auth.scss';

const Login = ({history}) => {
    //Return jsx code
const dispatch = useDispatch();
const navigate = useNavigate();

    const [email, setEmail] = useState('john.doe@gmail.com');
    const [password, setPassword] = useState('mamnoo3');

    const submitForm = (e) => {

        e.preventDefault()

        dispatch(login({email, password}, history))
        navigate("/")
        
        // AuthService.login({email, password}).then(res => console.log(res));
        // axios.post('http://localhost:3001/login', { email, password })
        // .then( res => {
        //      console.log("res", res);
        //      })	
        // .catch(err => {
        //     console.log('err', err);
        //     })
        // console.log({email, password});
    }
    
    


return (
        
        <div id='auth-container'>
            <div id='auth-card'>
                    {/* First Section */}
                <div className='card-shadow'>
                    <div id='image-section'>
                    
                    <img src={loginImage} alt='Login'/>

                    </div>
                    {/* Second Section */}
                    <div id='form-section'>

                    <h2>Welcome back</h2>

                        
    <form onSubmit={submitForm}>
        <div className='input-field mb-1'>
                <input placeholder='Email' 
                onChange={e => setEmail(e.target.value)} 
                value={email}
                require = 'required'
                type = 'text'                
                />
         </div>
           
            <div className='input-field mb-2'>
                <input placeholder='Password' 
                onChange={e => setPassword(e.target.value)} 
                value={password}
                require = 'required'
                type = 'text'     
                />
             </div>
           
            <button> Login  </button>
    </form>
        <p> Don't have an account? <Link to={"/register"}>Register</Link>  </p>

                    </div>
            </div>
        </div>
    </div>

    );
}

export default Login
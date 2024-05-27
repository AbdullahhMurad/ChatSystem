import React, { useState } from 'react';
import registerImage from '../../assets/images/register.svg'
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../../store/actions/auth';

const Register = ({ history }) => {
    //Return jsx code

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('male');
    const [password, setPassword] = useState('');
    
    const submitForm = (e) => {

        e.preventDefault()

        dispatch(register({ firstName, lastName, email, gender, password}, history))
        navigate("/")
    }


    return (
        <div id='auth-container'>
        <div id='auth-card'>
                {/* First Section */}
            <div className='card-shadow'>
                <div id='image-section'>
                
                <img src={registerImage} alt='Register'/>

                </div>
                {/* Second Section */}
                <div id='form-section'>

                <h2>Create an account</h2>

                    
<form onSubmit={submitForm}>
    
    <div className='input-field mb-1'>
            <input 
             onChange={e => setFirstName(e.target.value)} 
             value={firstName}
             require = 'required'
             type = 'text'    
            
            placeholder='First name' />
     </div>

     <div className='input-field mb-1'>
            <input 
             onChange={e => setLastName(e.target.value)} 
             value={lastName}
             require = 'required'
             type = 'text'    
            placeholder='Last name' />
     </div>


    <div className='input-field mb-1'>
            <input 
             onChange={e => setEmail(e.target.value)} 
             value={email}
             require = 'required'
             type = 'text'    
            placeholder='Email' />
     </div>
        
     <div className='input-field mb-1'>
        <select
         onChange={e => setGender(e.target.value)} 
         value={gender}
         require = 'required'
        >
            <option value={"male"}>Male</option>
            <option value={"female"}>Female</option>
        </select>

     </div>


        <div className='input-field mb-2'>
            <input 
             onChange={e => setPassword(e.target.value)} 
             value={password}
             require = 'required'
             type = 'password'    
            placeholder='Password' />
         </div>
       
        <button> Register  </button>
</form>
    <p> Already have an account? <Link to={'/login'} >Login</Link> </p>

                </div>
        </div>
    </div>
</div>

        );
}

export default Register
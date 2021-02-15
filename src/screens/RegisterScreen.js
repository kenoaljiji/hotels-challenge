import React, { useState, useContext, useEffect } from 'react';
import {Link} from 'react-router-dom';
import AlertContext from '../context/alert/alertContext';
import HotelContext from '../context/hotel/hotelContext';



const RegisterScreen = (props) => {


    const alertContext = useContext(AlertContext);
    const hotelContext = useContext(HotelContext)

    const { setAlert } = alertContext;
    const { register, error,isAuthenticated,clearErrors } = hotelContext

    
    useEffect(() => {
      if (isAuthenticated) {
        props.history.push('/dashboard');
      }
  
      if (error === 'User already exists') {
        setAlert(error, 'danger');
        clearErrors();
      }
      // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);
  


    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
      });

    
    const { username, email, password, password2 } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else register({
      username,
      email,
      password
    });
  };

    return (
        <div className='form-container'>
          <h1>
            <span className='text-primary'>Sing Up</span>
          </h1>
          <form onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='username'>Username</label>
              <input
                id='username'
                type='text'
                name='username'
                value={username}
                onChange={onChange}
                required
              />
            </div>
            <div className='form-group'>
            <label htmlFor='email'>Email Address</label>
            <input
              id='email'
              type='email'
              name='email'
              value={email}
              onChange={onChange}
              required
            />
        </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                id='password'
                type='password'
                name='password'
                value={password}
                onChange={onChange}
                required
                minLength='6'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password2'>Confirm Password</label>
              <input
                id='password2'
                type='password'
                name='password2'
                value={password2}
                onChange={onChange}
                required
                minLength='6'
              />
            </div>
            <div className='form-group'>
                <Link to='/'>Sing In</Link>
            </div>
            <button
              type='submit'
              value='Register'
              className='btn btn-primary btn-block'
            >Register</button>
          </form>
        </div>
      );
}

export default RegisterScreen

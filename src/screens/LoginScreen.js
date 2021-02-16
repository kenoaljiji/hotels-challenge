import React, {useState, useEffect,useContext }  from 'react';
import { Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import HotelContext from '../context/hotel/hotelContext'
import AlertContext from '../context/alert/alertContext'


const LoginScreen = (props) => {

        const alertContext = useContext(AlertContext);
        const hotelContext = useContext(HotelContext);


        const { setAlert } = alertContext;
        const { login, isAuthenticated, error } = hotelContext;

        
        useEffect(() => {
          if (isAuthenticated) {
            props.history.push('/dashboard');
          }
      
          if (error === 'Unable to log in with provided credentials.') {
            setAlert(error, 'danger');
            
            
          }
          // eslint-disable-next-line
        }, [error, isAuthenticated, props.history]);

        const [user, setUser] = useState({
          username: '',
          password: ''
      });

      
    
      const { username, password } = user;
    
      const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

      const onSubmit = e => {
      e.preventDefault();
        if (username === '' || password === '') {
          setAlert('Please fill in all fields', 'danger');
        } else {
          login({
            username,
            password
          });
        }
        
      };

        return (
            <div className='form-container'>
              <h1>
            <span className='text-primary'> Sing In</span>
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
                  <label htmlFor='password'>Password</label>
                  <input
                    id='password'
                    type='password'
                    name='password'
                    value={password}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className='form-group'>
                    <Link to='/register'>Sing Up</Link>
                </div>
                <Button className='btn btn-primary btn-block' type='submit' value='login'>
                    Login
                </Button>
                
              </form>
            </div>
    )
}

export default LoginScreen

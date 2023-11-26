import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const DisplayError = () => {
    const error = useRouteError();
    const {logOut} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        logOut()
        .then(() => {
            navigate('/');
        })
        .catch(err => console.log(err))
      }
    return (
        <div>
            <p className='text-red-500'>Something went worng !!!</p>
            <p className='text-red-400'>{error.statusText || error.message}</p>
            <h3 className='text-3xl'>Please <button className='btn text-red-500' onClick={handleLogout}>Sign Out</button> and log back in</h3>
        </div>
    );
};

export default DisplayError;
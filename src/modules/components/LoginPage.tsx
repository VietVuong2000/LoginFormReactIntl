import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import logo from '../../../src/logo-420-x-108.png';

// import { ILoginParameter } from '../../models/auth';
// import { useDispatch } from 'react-redux';
// import { ThunkDispatch } from 'redux-thunk';

// import { Action } from 'redux';

const LoginPage = () => {

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onLogin = () =>{}

    //   async (values: ILoginParameter) => {
    //     setErrorMessage('');
    //     setLoading(true);
//   } 

   
  

  return (
    <div
      className="container"
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <img src= {logo}
        style={{ maxWidth: '250px', margin: '32px' }}
      ></img>

      <LoginForm onLogin={onLogin} loading={loading} errorMessage={errorMessage} />
    </div>
  );
};


export default LoginPage;


  
  
  
  
  
  
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Login = () => {
  // const [isLoggin,setisLoggin]=useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();
 
   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("in handelsubmit");
      // console.log(isLoggedIn);
      const response = await axios.post('https://finhunttbackend-production.up.railway.app/api/dashboard/admin', { email, password });
      localStorage.setItem('token', response.data.token);
      // value(isLoggin, setisLoggin);
      // isLoggedIn=true;
      navigate('/addata');
    } catch (error) {
      window.alert("InCorrect Password");
      console.error(error);
    }
  };

  return (
  <div className='flex justify-center items-center h-screen bg-green-300'>
    <form onSubmit={handleSubmit} className=' rounded bg-yellow-300 '>
      <label  className='m-3 font-mono text-lg '>
        Email
        <br/>
        <input   className='rounded-md m-4 bg-yellow-100' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br/>
      <label className='m-3 font-mono text-lg '>
        Password
        <br/>
        <input className='rounded-md m-4  bg-yellow-100' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br/>
      <button type="submit" className='font-mono text-lg  rounded-md m-4 bg-blue-600 p-2'>Login</button>
    </form>
    </div>
  );
};

export default Login;

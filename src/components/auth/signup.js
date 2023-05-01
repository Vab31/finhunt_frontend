import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Signup = () => {
    var [email,setEmail]=useState();
    var[password,setPassword] =useState();
    var [confirmPassword,setconfirmPassword]=useState();
    
    const emailUpdate=(event)=>{ // Dealing with name field changes to update our state
        setEmail(event.target.value)
    }
    
    const passUpdate=(event)=>{ // Dealing with name field changes to update our state
        setPassword(event.target.value)
    }

    const cpassUpdate=(event)=>{ // Dealing with name field changes to update our state
        setconfirmPassword(event.target.value)
    }

  const handleSubmit=(e)=> { // Once the form has been submitted, this function will post to the backend
    e.preventDefault()
    console.log("handleSubmit is running")
    if(password!==confirmPassword){
      console.log("Please write correct passsword");
    }else{
    const userdetail = {
        email:email,
        password:password,
        
    };
   
    axios.post('https://finhunttbackend-production.up.railway.app/api/dashboard/addAdmin', userdetail)
        .then((res) => {
        setEmail("");
        setPassword("");
        setconfirmPassword("");
            console.log(res.data)

        }).catch((error) => {
            console.log(error)
        });}
  }
  return (
    <div className=' flex justify-center items-center h-screen bg-green-300'>
    <Form className='mt-5 rounded bg-yellow-300 p-3' onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="Title" >
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter Title" onChange={emailUpdate} />
   </Form.Group>
   <br/>
  <Form.Group className="mb-3" controlId="link" >
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" onChange={passUpdate} />
    </Form.Group>
  <Form.Group className="mb-3" controlId="link">
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control type="password" placeholder="Conirm Password"  onChange={cpassUpdate}/>
    </Form.Group>
      <Button variant="primary" type="submit">
      Add
    </Button>
  </Form>
  </div>
  );
};

export default Signup;

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Axios from 'axios'

function AddLearn() {
    var [title,setTitle]=useState();
    var[link,setLink] =useState();
    var [desc,setDesc]=useState();
    
    const titleUpdate=(event)=>{ // Dealing with name field changes to update our state
        setTitle(event.target.value)
    }
    
    const linkUpdate=(event)=>{ // Dealing with name field changes to update our state
        setLink(event.target.value)
    }

    const descUpdate=(event)=>{ // Dealing with name field changes to update our state
        setDesc(event.target.value)
    }
    const handleSubmit=(e)=> { // Once the form has been submitted, this function will post to the backend
      e.preventDefault()
      console.log("handleSubmit is running")
      const userObject = {
          title:title,
          // link:link,
          // description:desc
          // name : "Aadarsh Kumar"
          url: link,
          description : desc
      };
      Axios.post('http://localhost:3002/adddata', userObject)
          .then((res) => {
              console.log(res.data)
          }).catch((error) => {
              console.log(error)
          });
    }

  return (
    <Form className='mt-5' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="Title" >
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Title" onChange={titleUpdate} />
     </Form.Group>
    <Form.Group className="mb-3" controlId="link" >
        <Form.Label>Link</Form.Label>
        <Form.Control type="text" placeholder="Link" onChange={linkUpdate} />
      </Form.Group>
    <Form.Group className="mb-3" controlId="link">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="description"  onChange={descUpdate}/>
      </Form.Group>
        <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
}

export default AddLearn;
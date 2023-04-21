import React from "react";

import Card from 'react-bootstrap/Card';

const CommunityCard = ({item}) => {
  const { img, name } = item;
// let name="Vaibhav Singh"
// let img="C:\Users\dell\Downloads\thebulls-master-finally\thebulls-master\public\card\Vaibhav.jpg";
  return (
    
    
 
    <div className="mb-4">
      <Card className='mx-2 sm:w-80 md:w-96 '>
         <img src={img} alt="" height={1000}  />
            <Card.Body className='bg-purple-300'>
            <Card.Title > <b>{name}</b></Card.Title>
         </Card.Body>
       </Card>
  </div>
    

  
  );

  }
export default CommunityCard;

import React from 'react';
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
// import InstagramEmbed from 'react-instagram-embed';
import Card from 'react-bootstrap/Card';
import './bloglandingpage.css'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';



export default function Bloglandingpage(){
 
const [data, setData] = useState([]); // Replace 'any' with the correct type if you have it

  useEffect(() => {
    // Fetch data from backend when component mounts
    axios.get('https://finhunttbackend-production.up.railway.app/data/val')
      .then((response) => {
        // Update state with fetched data
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return(
   <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-4 mt-5'>
   

     
      <div>
    <Card className='mx-2 shadow-inner rounded'>
      <iframe  height={400} src="https://youtube.com/embed/-N03iQUBNTk?feature=share" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
         <Card.Body className='bg-purple-300'>
          <Card.Title > <b>Budget 2023..!!</b></Card.Title>
          <Card.Text>
          This is a wider card with supporting text below as a natural lead-into…
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <div> 
    <Card className='mx-2 shadow-inner rounded'>
      <iframe  height={400} src="https://www.youtube.com/embed/0WukZgbWJ-8?feature=share" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
         <Card.Body className='bg-purple-300'>
          <Card.Title > <b>Pay tax on 50% income only</b></Card.Title>
          <Card.Text>
          This is a wider card with supporting text below as a natural lead-into…
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
       <div>
    <Card className='mx-2 shadow-inner rounded'>
      <iframe  height={400} src="https://www.youtube.com/embed/l7b20TRyVk0?feature=share" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
         <Card.Body className='bg-purple-300'>
          <Card.Title > <b>How WhatsApp Earn Money?</b></Card.Title>
          <Card.Text>
          This is a wider card with supporting text below as a natural lead-into…
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <div>
    <Card className='mx-2 shadow-inner rounded'>
      <iframe  height={400} src="https://www.youtube.com/embed/SGj0Fe1Rc9A?feature=share" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
         <Card.Body className='bg-purple-300'>
          <Card.Title > <b>GET Business loan at 7%</b></Card.Title>
          <Card.Text>
          This is a wider card with supporting text below as a natural lead-into…
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <div>
    <Card className='mx-2 shadow-inner rounded'>
      <iframe  height={400} src="https://www.youtube.com/embed/e_MN6ZPDl1s?feature=share" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
         <Card.Body className='bg-purple-300'>
          <Card.Title > <b>5 BEST YouTube Channels for FINANCE! </b></Card.Title>
          <Card.Text>
          This is a wider card with supporting text below as a natural lead-into…
          </Card.Text>
        </Card.Body>
      </Card>
      
</div>



    </div>
  )


}

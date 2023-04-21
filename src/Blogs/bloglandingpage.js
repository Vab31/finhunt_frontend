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
 
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from backend when component mounts
    axios.get('/data/val')
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
    {/* <CardGroup className='my-2'>
      <Card className='mx-2 shadow-inner rounded'>
      <iframe  height={400} src="https://youtube.com/embed/-N03iQUBNTk?feature=share" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
         <Card.Body className='bg-purple-300'>
          <Card.Title > <b>Budget 2023..!!</b></Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='mx-2'>
      <iframe  height={400} src="https://youtube.com/embed/ski_icC3uOQ?feature=share" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     <Card.Body className='bg-purple-300'>
          <Card.Title><b>Government Unlimited Paisa Kyu Print Nhi Karti ?</b></Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
   </Card>
      <Card className='mx-2'>
      <iframe  height={400} src="https://youtube.com/embed/b9ckDX1XhUU?feature=share" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     <Card.Body className='bg-purple-300'>
          <Card.Title><b>Why Adani Group Share Are Falling</b></Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
</Card>
    </CardGroup> */}

    {/* <CardGroup className='my-4'>
      <Card className='mx-2 '>
      <iframe  height={400} src="https://youtube.com/embed/u1S9pPpeVCM?feature=share" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <Card.Body className='bg-purple-300'>
          <Card.Title> <b>5 Tax Saving Schemes...!</b></Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='mx-2'>
      <iframe  height={400} src="https://youtube.com/embed/D8zfIEBEbMI?feature=share" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     <Card.Body className='bg-purple-300'>
          <Card.Title><b>How Rich Avoid Paying Taxes ?</b></Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
   </Card>
      <Card className='mx-2'>
      <iframe  height={400} src="https://youtube.com/embed/ClTAcaAT2qg?feature=share" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     <Card.Body className='bg-purple-300'>
          <Card.Title><b>SIP VS LUMPSUM</b></Card.Title> 
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
</Card>
    </CardGroup> */}
    {data.map((o) => (
      <div>
    <Card className='mx-2 shadow-inner rounded'>
      <iframe  height={400} src={o.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
         <Card.Body className='bg-purple-300'>
          <Card.Title > <b>{o.title}</b></Card.Title>
          <Card.Text>
            {o.description}
          </Card.Text>
        </Card.Body>
      </Card>
</div>
      ))}


    </div>
  )


}

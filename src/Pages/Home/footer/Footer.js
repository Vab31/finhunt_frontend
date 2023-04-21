import React from 'react'
import './footer.css'
import { MDBFooter } from 'mdb-react-ui-kit';

const Footer = () => {
  return (

    <MDBFooter bgColor='light' className='text-center text-lg-left io mt-2'>
    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      &copy; {new Date().getFullYear()} Copyright:{' '}
      <a className='text-dark' href='/'>
        The Finhuntt
      </a>
    </div>
  </MDBFooter>
 

  )
}

export default Footer
import React from 'react'
import BodyofAdvice from './bodyoftakeadvice'
import EditIcon from '@mui/icons-material/Edit';

export default function Profilepage() {
  return (
  <div className='bg-gray-800'>
      <div className='flex flex-wrap p-10  justify-center items-center'>
 <div className=''>
  <img
    className="object-cover object-center rounded h-60 w-60 md:h-30 md"
    alt="hero"
    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
  />

</div>
<div  className='md:ml-40 text-center'>
    
               <p className='text-slate-400 text-5xl' style={{fontFamily:'Intagram Sans Light'}}>Vaibhav Singh   <button className='rounded-full' > <a href='/editProfile'> <EditIcon/> </a></button> </p>
               <p className='text-white'>@Vab_31</p>
              {/* <button className=" text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg m-2">Edit profile</button> */}
              {/* <button className=" text-white bg-indigo-500 border-0  py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg m-2">Button</button> */}
               <br/>
               {/* Normal user + user Profile */}
               <button className=" text-white bg-indigo-500 border-0 py-2 px-6 m-2 rounded ">14K People Like</button>
              <button className=" text-white bg-indigo-500 border-0  py-2 px-6 m-2 rounded ">50 Talks</button>
              <button className=" text-white bg-indigo-500 border-0  py-2 px-6 m-2 rounded ">Make Insiparation</button>
              <button className=" text-white bg-indigo-500 border-0  py-2 px-6 m-2 rounded ">Lets Talks</button>
              <button className=" text-white bg-indigo-500 border-0  py-2 px-6 m-2 rounded ">₹40/hr</button>
               <p className='text-white' style={{fontFamily:'Intagram Sans Light'}}> Computer Geeks Web development Expert Founder of Your Dost</p>
              
              </div>

</div>
<BodyofAdvice/>
</div>
  )
}

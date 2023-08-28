// import React, { useState } from 'react'
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/TextField';
// // useState

// export default function Editprofile() {
//     const [file, setFile] = useState('https://cdn-icons-png.flaticon.com/512/3135/3135715.png');
//     function handleChange(e) {
//         console.log(e.target.files);
//         setFile(URL.createObjectURL(e.target.files[0]));
//     }
 
//   return (
//     <div className=' bg-gray-300'>

//      <h1 className='text-center font-extrabold' style={{fontFamily:'Instagram Sans Headline'}}>Edit Profile</h1>
             
//                <div className=' flex justify-center items-center flex-col'>


//                <h2>Preview Image:</h2>
//             <img src={file} className=' rounded-full h-60 w-60 md:h-30 md m-2' />
//             <input type="file"  onChange={handleChange} className='m-2 mb-4' />
 
//         <TextField id="outlined-basic" className='' label="Name" variant="outlined" />
//         <br/>
//         <TextField id="outlined-basic" label="About You" variant="outlined" />
//         <br/>
//         <TextField id="outlined-basic" label="Tags" variant="outlined" />
//         <br/>
//         <TextField id="outlined-basic" label="Fee" variant="outlined" />
        
//         <button className='bg-indigo-500 p-2 m-3 text-white font-semibold rounded'>Save</button>

//   </div>



//     </div>
//   )
// }

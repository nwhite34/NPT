import React from 'react';
import Navbar  from './Navbar';
import Firstsection  from './Firstsection';
import Secondsection  from './Secondsection';
import Thirdsection  from './Thirdsection';
import Fourthsection  from './Fourthsection';
import Fifthsection  from './Fifthsection';
import Sixthsection from  './Sixthsection';
import Seventhsection from  './Seventhsection';
import Footer  from './Footer';

const Homepage = () => {
  return (
    // For a 3x taller wrapper, use `style={{ height: '300vh' }}`. For 4x, use '400vh'.
    <div className=" text-white font-bold rounded flex flex-col" >
         <Navbar /> 
      

    
         <Firstsection /> 
         <div className='bg-black w-full h-2'></div>
     
         
         <div className='bg-black w-full h-2'></div>

         <Sixthsection /> 
         <div className='bg-black w-full h-2'></div>
     
         <Thirdsection /> 
         <Secondsection /> 
      
   
       
         <div className='bg-black w-full h-20'></div>

         <Fifthsection /> 
         <div className='bg-black w-full h-2'></div>

       

         <Fourthsection /> 
         <div className='bg-black w-full h-2'></div>
         <Seventhsection /> 
    
         <Footer /> 
     
    </div>
  );
};

export default Homepage;

import React from 'react'

function Footer() {
 const name = localStorage.getItem("name")
  return (
    name&&
    <div className='w-full flex justify-center bg-black text-white h-28 text-xl'>
       
     <h1 className='mt-10'> &copy; Copyright Reserved For 2022  </h1>
    
    </div>
  )
}

export default Footer

import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
    const name = localStorage.getItem("name")
    return (
        <div className='text-xl sm:text-2xl flex p-2 justify-between sm:mx-12'>
            <ul>
            <Link to='/'>    <li className='font-bold'>
               Home.
                </li></Link>

            </ul>
            <ul>
                <li>Hello,{name}</li>
                </ul>
            <ul className='flex justify-between mr-4 w-40'>
            <Link to='/login'>   <li>
                    <button className='p-2 hover:text-white rounded-xl hover:scale-100 hover:bg-indigo-700'>  Login</button>
                </li></Link>
                <Link to='/signup'>    <li>
                     <button className='p-2 rounded-xl mx-2 hover:scale-100 bg-indigo-700 text-white hover:bg-indigo-600'>   Signup</button>
                </li></Link>
            </ul>
        </div>
    )
}

export default Nav

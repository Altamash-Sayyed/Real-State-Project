import React from 'react'
import data from '../Data'
import { VscSearch, VscLocation, VscHome } from 'react-icons/vsc'
import { ImTable2 } from 'react-icons/im'
import { MdPriceCheck } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Result = () => {
    const name = localStorage.getItem("name")
    const [country,setCountry]= React.useState()
    const [type,settype]= React.useState()
    const [price,setprice]= React.useState()
    const [rooms,setrooms]= React.useState()
    const [res,setRes]=React.useState(data)

    const filtercntr =()=>{
        if(country==="undefined" &&type==="undefined"&&rooms==="undefined"&&price==="undefined") return <h1>Not Found</h1>
    const c= data.filter((elem)=>{
        return elem.country === country && elem.type === type && elem.bedrooms ===rooms && elem.range === price
    })
     setRes(c)
    
}


    
        const search =()=>{
            filtercntr()
        }

    return (
    !name ? <Link className='text-3xl mt-40 m-80' to='/signup'>
    Signup First
    </Link>:    <>
    
        <div className='flex justify-center p-4 w-full '>
             <div className='bg-gray-100 border-2 border-indigo-700 rounded-lg flex flex-col sm:flex-row '>

                <section className='flex flex-col w-60'>
                    <p className="font-bold flex" ><VscLocation />Location:</p>
                        <div className='flex'><p className='mx-1' >Canada</p> <input name='country' onChange={(e)=>setCountry("Canada")} value="Canada" className='mx-1'  type="radio" /></div>
                    
                         <div  className='flex'> <p className='mx-1' >United States</p> <input onChange={(e)=>setCountry("United States")} value="United States" name='country' className='mx-1'  type="radio" /></div>
                </section>

                <section className='flex flex-col w-60'>
                        <p className="font-bold flex" ><VscHome />Type:</p>
                        <div  className='flex'><p className='mx-1' >Apartment</p> <input  onChange={(e)=>settype("Apartament")} name='type' value="Apartament" className='mx-1' type="radio" /></div>
                    
                    <div    className='flex'> <p className='mx-1' >Home</p> <input value="House" onChange={(e)=>settype("House")} className='mx-1'name='type' type="radio" /></div>
             </section>

                <section className='flex flex-col w-60'>
                    <p className="font-bold flex" ><ImTable2/>Rooms:</p>
                    <div className='flex'><p className='mx-1' >4</p> <input value="4"  onChange={(e)=>setrooms("4")} name='room' className='mx-1' type="radio" /></div>
                    
                    <div className='flex'> <p className='mx-1' >8</p> <input name='room' onChange={(e)=>setrooms("8")} value="8" className='mx-1'  type="radio" /></div>
            </section>

                <section className='flex flex-col w-60'>
                    <p className="font-bold flex" ><MdPriceCheck />Price:</p>
                    <div className='flex'><p className='mx-1' >$20000-$40000</p> <input name='price' onChange={(e)=>setprice("a")} value="a"  className='mx-1'  type="radio" /></div>
                    
                    <div className='flex'> <p className='mx-1' >$110000-$$180000</p> <input name='price' onChange={(e)=>setprice("b")}  value="b" className='mx-1'  type="radio" /></div>
                    <div className='flex'> <p className='mx-1' >$200000-$220000</p> <input name='price' onChange={(e)=>setprice("c")} value="c"  className='mx-1'  type="radio" /></div>
          
                </section>
                <button onClick={search} className='px-2 h-12 w-20 mt-8  justify-center text-white text-bold text-3xl bg-indigo-700 m-1 rounded-lg'><VscSearch className='mx-4' /></button>
             </div>
             </div>

            <div className='grid grid-cols-1 gap-8 sm:grid-cols-3 mb-2'>
                {
                    
                    res.map((item, index) => {
                        return (
                            <div key={index} className="flex justify-center">
                                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                                    <div >
                                        <img className="rounded-t-lg w-full h-60" src={item.image} alt={item.name} />
                                    </div>
                                    <div className="p-6">
                                    <p className="text-semibold flex justify-center rounded-lg text-white bg-indigo-700 w-24 mb-4">
                                            {item.type}
                                        </p>
                                        <h5 className="text-gray-900 text-xl font-medium mb-2">{item.name}</h5>
                                        <p className="text-gray-700 text-base mb-4">
                                            {item.address}
                                        </p>
                                        <p className="text-gray-700 font-semibold
                                         text-base mb-4">
                                            {item.country}
                                        <p className="text-indigo-700  text-bold mb-4">
                                        </p>
                                            ${item.price}
                                        </p>
                               <Link to={`/homes/${item.id}`} > <button type="button"  className=" inline-block px-6 py-2.5 bg-indigo-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">   view</button></Link> 
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </>
    )
}

export default Result

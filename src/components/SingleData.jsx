import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import data from '../Data'

function SingleData({ match }) {
    const [res, setres] = React.useState()

    useEffect(() => {

        findId()
        // eslint-disable-next-line
    }, [])

    let { id } = useParams()
    const findId = () => {

        console.log(id)
        const resp = data.find((elem) => {
            return elem.id === id

        })
        setres(resp)

    }
    if (!res)
        return <></>
    return (
        <div className='flex flex-col sm:flex-row'>
            <div className='w-fit h-full m-2'>
                <img className='rounded-xl' src={res.image} alt="" />
            </div>
            <div className='w-1/2 m-3'>
                <div className='flex m-2'>
                    <p className='mx-2 font font-semibold text-lg'>Name:{res.name}</p>
                    <p className='mx-2 font font-semibold text-lg'>Type:{res.type}</p>
                    <p className='mx-2 font font-semibold text-lg'>Area:{res.surface}</p></div>
                <p className='mx-2 w-full sm:w-full font font-semibold text-lg'>{res.description}</p>
                <div className='flex'> <p className='mx-2 font font-semibold text-lg'>Adress:{res.address}</p>
                    <p className='mx-2 font font-semibold text-lg'>{res.country}</p></div>
                <div className='m-2'>
                    <img className='rounded-xl' src={res.agentimage} alt="" />
                    <p className='mx-2 font font-semibold text-lg'>{res.agentname}</p>
                    <p className='mx-2 font font-semibold text-lg'>{res.agentphone}</p>
                    <button className='px-2 h-12 w-20 mt-8  justify-center text-white text-bold text-3xl bg-indigo-700 m-1 rounded-lg'>BUY</button>
                </div>


            </div>
        </div>
    )
}

export default SingleData

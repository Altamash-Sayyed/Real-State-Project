import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate()
    const [password, setPassword] = React.useState('')
    const [email, setemail] = React.useState('')

    const logged = () => {
        let aml = localStorage.getItem("email")
        let psd = localStorage.getItem("password")
        console.log(aml)
        if (aml !== email) {
            alert("give correct email")
        } else if (psd !== password) {
            alert("incorrect password")
        } else {
            navigate("/")
        }
    }

  return (
    <div>
      <div className='flex  justify-between sm:bg-white h-screen bg-blue-700'>
            <div className='hidden sm:block w-1/2' >
                <div className='w-5/6  h-screen flex flex-col justify-center  bg-blue-700'>
                    <p className='text-white mt-14 ml-12 text-3xl'>WELCOME ON REAL STATE</p>
                    <img className='h-96 m-4 ml-16 w-96' src="https://images.pexels.com/photos/1031593/pexels-photo-1031593.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>
            </div>
            <div className="h-96 m-2 bg-white sm:mr-40 p-2 rounded-xl mt-12 justify-center flex flex-col  w-96">
                <p className='text-3xl m-4'>Log In</p>
                <div className='flex flex-col'>
                    <label htmlFor="">Email</label>
                    <input onChange={(e) => setemail(e.target.value)} value={email} className="m-2 border-2 border-gray-200 p-2" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="johndoe@gmail.com" />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} className="m-2 border-2 border-gray-200 p-2" type="password" placeholder="••••••••••••" />
                </div>
                <button onClick={logged} className="m-2 p-2 rounded-lg text-white font-bold bg-blue-700 hover:bg-indigo-700 hover:scale-100">Submit</button>
                <p className="ml-40 m-2 cursor-pointer">Have You <span className="text-blue-700"> <Link to="/register">Register ?</Link></span></p>


            </div>
        </div>
    </div>
  )
}

export default Login

import React from 'react'
import Footer from './components/Footer';
import Nav from './components/Nav';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Banner from './components/Banner';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Result from './components/Result';
import SingleData from './components/SingleData';



function App() {

  return (
    <div className="App">
<BrowserRouter>
<Nav />
  

<Banner />
<Routes>
  <Route path='/' element={<Result />}/>
  
  <Route path='/login' element={<Login />}/>
  <Route path='/signup' element={<SignUp />}/>
  <Route path="/homes/:id" element={<SingleData />}/>
</Routes>
<Footer />
</BrowserRouter>
    </div>
  );
}

export default App;

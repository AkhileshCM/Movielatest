
import { useState } from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route, useNavigate} from 'react-router-dom';
import Maincontainer from './Components/Maincontainer';
import Searchpage from './Components/Searchpage';
import Moviedetail from './Moviedetail'
import Romance from './Romance';
import Trailer from './Trailer';
import Favourites from './Favourites';
import Protected from './Protected';
import Account from './Account';


function App() {
  const [user,setu]=useState("")
  const [pass,setp]=useState("")
  const [isloggedin,setisloggedin]=useState(null)
  const path=useNavigate()
 const check=(e)=>{
    setu(e.target.value)
  }
  const checkp=(e)=>{
    setp(e.target.value)
  }
  const bpath=useNavigate()
  const out=()=>{
      bpath("/favourites")
      document.getElementById("sgnin").style.display="block"
      setisloggedin(false)


  }
  const validate=()=>{
    if(user==="a@gmail.com" && pass==="abcd"){
          setisloggedin(true)
          document.getElementById("sgnin").style.display="none"
          path("/home")
          
    }
    else{
      setisloggedin(false)
    }

  }
   
  return(
    <div >
      <div className='signpage' id='sgnin'>
        <input type='email' onChange={check}>

        </input>
        <input type='password' onChange={checkp}></input>
        <button onClick={validate}>SignIn</button>
      </div>
      
    
      <Routes>
        <Route path='/' element={<></>}/>
        <Route path='/home' element={<Protected isloggedin={isloggedin} >
             <Maincontainer />
           </Protected>}/>
        <Route path='/details' element={<Moviedetail/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/trailer' element={<Trailer/>}/>
        <Route path='/romance' element={<Romance/>}/>
        <Route path='/favourites' element={<Favourites/>}/>
        <Route path='/searchpage' element={<Searchpage/>}/>
      </Routes>
      </div>
    
  )
}

export default App;

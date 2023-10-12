import React from 'react';
import NavbarSide from './Components/NavbarSide';
import './Acccss.css'
import {PiSignOutBold} from "react-icons/pi"
import { useNavigate } from 'react-router-dom';
function Account(props) {
    const nav=useNavigate()
    const signut=()=>{
        
        
    }
    console.log(JSON.parse(localStorage.getItem("log")))
    return (
        <div className='maindetail'>
            
            <div className='dp'>
                <img src='#' alt='DP'></img>
                <div className='photolink' >
                    Upload Photo<br/>
                    <input type='file' style={{marginLeft:"-16px"}}></input>
                </div>
            </div>
            <div className='details' >
                <h1>Username</h1>
                <div className='signoutt' onClick={signut}>
                    <PiSignOutBold/>
                    <h3>SignOut</h3></div>
            </div>
        </div>
    );
}

export default Account;
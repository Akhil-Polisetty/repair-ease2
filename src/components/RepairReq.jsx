import React from 'react'
import axios from 'axios'
import NavBar from './NavBar'
import { useState } from 'react'
import { useEffect } from 'react'
import './repairreq.css'


const RepairReq = () => {
    const [repairs,setRepairs]=useState([])
    useEffect(()=>{
        axios.get('https://repair-ease2.vercel.app:7000/repair')
        .then(repairs => setRepairs(repairs.data))
        .catch(err => console.log("the error is at repair 14 ",err))
    },[])
    console.log("the data is ",repairs)

  return (
    <>
        <NavBar/>
        <div className='rep_cont'>
            {
                repairs.map(
                    user=>{
                        return(
                        <div className='datareq_cont'>
                        <p className='req_data'>{user.rname}</p>
                        <p className='req_data'>{user.rappliance}</p>
                        <p className='req_data'>{user.rmodel}</p>
                        <p className='req_data'>{user.rdesc}</p>
                        <p className='req_data'>{user.location}</p>
                        <p className='req_data'>{user.radress}</p>
                        </div>
                        )
                    }
                )
            }
        </div>
    </>
  )
}

export default RepairReq
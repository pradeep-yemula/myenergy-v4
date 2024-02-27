import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Pendingcomplaints = (props) => {
    const navigate = useNavigate();
    const [pending_complaints, setPending_complaints] = useState({});
    const fetchData=async()=>{
        const response = await fetch('https://powersense.in/api/pending_complaints',{
            method: 'GET',
            headers:{
                'Accept':'application/json',
                'Authorization':`${localStorage.getItem('token_type')} ${localStorage.getItem('access_token')}`
            }
        })
        const data = await response.json();
        setPending_complaints(data);
    }
    useEffect(() => {
        if(localStorage.getItem('token_type')){
            fetchData();
            props.setNavbar(true)
        }
        else{
            props.setNavbar(false)
            navigate('/')
        }
        // eslint-disable-next-line
    }, [localStorage.getItem('token_type')]);
  return (
    <div className='container contain' >
        <h1>Pending Complaints</h1>
      {(pending_complaints.pending_complaints)?.map((element)=>{
        return (
            <div className='my-3' key={element.id}>
      <div className="card">
  <div className="card-body">
        <div><span style={{fontWeight:"650"}}>Message : </span>{element.message}</div>
        <div><span style={{fontWeight:"650"}}>Registered By : </span>{element.Registered_by}</div>
        <div><span style={{fontWeight:"650"}}>Complaint Type : </span>{element.complaint_type}</div>
        <div><span style={{fontWeight:"650"}}>Date of Complaint : </span>{element.date_of_complaint}</div>
        <div><span style={{fontWeight:"650"}}>Expected Resolution Date : </span>{element.expected_resolution_date}</div>
        <div><span style={{fontWeight:"650"}}>ID : </span>{element.id}</div>
  </div>
</div>
    </div>
        )
      })}
    </div>
  )
}

export default Pendingcomplaints

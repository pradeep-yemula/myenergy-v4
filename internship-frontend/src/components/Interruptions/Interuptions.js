import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Interuptions = (props) => {
    let {month, type} = useParams();
    const [interruptions, setInterruptions] = useState({});
    let newtype = type.charAt(0).toUpperCase() + type.slice(1); 
    const fetchData = async()=>{
        const response = await fetch(`https://powersense.in/api/${type}_interruptions?start_datetime=${month}`,{
            method : 'GET',
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('access_token')}`,
                "accept": "application/json"
            }
        })
        const data = await response.json();
        setInterruptions(data);
    }
    const navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem('token_type')){
            props.setNavbar(true);
            fetchData();
        }
        else{
            alert('Some internal error')
            navigate('/');
        }
    
        return () => {
            
        }
        // eslint-disable-next-line
    }, [localStorage.getItem('token_type')]);
    return (
        <div className='container media contain main interruptions-main' style={{display : 'flex',flexDirection : 'column', width : '50rem', alignItems:'center'}}>
          <h1>{newtype} Interruptions</h1>
          <div className="card" style={{width: "50rem", height:"300px"}}>
      <div className="card-body d-flex" style={{flexDirection : 'column',alignItems : 'center'}}>
        <p className="card-text">USN : {interruptions.usn}</p>
        <p className="card-text">Start_datetime : {interruptions.start_datetime}</p>
        <p className="card-text">End_datetime : {interruptions.end_datetime}</p>
        <p className="card-text">Number of interruptions : {interruptions.number_of_interruptions}</p>
    

      </div>
    </div>
        </div>
      )
}

export default Interuptions

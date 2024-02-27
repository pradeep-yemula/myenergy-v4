import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Outagesdata from './Outagesdata';

const Outages = (props) => {
    const [style, setStyle] = useState({height:"100vh"});
    const [outagesData, setOutagesData] = useState({});
    const navigate = useNavigate();
    const [month, setMonth] = useState();
    const fetchOutages = async (month) => {
        let url =''
        if (props.type === 'scheduled') {
            
         url = `https://powersense.in/api/${props.type}`
        }
        else{
        url = `https://powersense.in/api/${props.type}?start_datetime=${month}`
        }
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('access_token')}`,
                "accept": "application/json"
            }
        })
        const data = await response.json();
        setOutagesData(data)
    }
    const handleMonth = (e)=>{
        setMonth(e.target.value)
     }
     const handleSubmit = (e) =>{
        setStyle({})
        e.preventDefault();
        if(!month){
            alert('Please enter correct month and year')
        }
        else{
            fetchOutages(month);
        }    
    }
    useEffect(() => {
        if(props.type){
            setStyle({})
        }
        if (localStorage.getItem('token_type')) {
            if(props.type==='scheduled_outages'){
                fetchOutages(month);
            }
            props.setNavbar(true)
        }
        else {
            props.setNavbar(false)
            navigate('/')
        }
        // eslint-disable-next-line
    }, [localStorage.getItem('token_type')]);
    return (
        <div className='container contain' style={style}>
            <h1 className='my-3'>{props.type==='active_outages'?'Active outages':'Scheduled outages'}</h1>
            {props.type ==='active_outages'?<form onSubmit={handleSubmit}>
            <div className="form-floating" style={{marginTop:"35px", marginBottom:"15px"}}>
                <input type='month' style={{height: "100px"}} className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" onChange={handleMonth} required={true}></input>
                <label htmlFor="floatingTextarea2" style={{opacity:"0.5",zIndex:'0'}}>Specify the Start DateTime here :</label>
                </div>
                <button type='submit' className="btn btn-dark">Submit</button>
            </form>:<div/>}
            {(outagesData.outages)?.map((element) => {
                return <Outagesdata key={element.start_time}
            usn={element.usn}
            start_time={element.start_time}
            status={element.status}
            reason={element.reason}
            affected_users={element.affected_users}
            estimated_time={element.estimated_time}
            state={element.state}
            town={element.town}
            area={element.area}
            sub_station_name={element.sub_station_name}
            feeder_name={element.feeder_name}
            outage_type={element.outage_type}    
            />
          })}
        </div>
    )
}

export default Outages

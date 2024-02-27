import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [response, setResponse] = useState();
  const fetchData= async(Date)=>{
    const resp = await fetch(`https://powersense.in/api/total_pending_amount?start_datetime=${Date.getFullYear()}-${Date.getMonth()}`,{
      method:'GET',
      headers: {
        'accept':'application/json',
        'Authorization':`${localStorage.getItem('token_type')} ${localStorage.getItem('access_token')}`
      }
    })
    setResponse(await resp.json());
  }
  const qualityScore = async () =>{
    const response = await fetch("https://powersense.in/api/supply_quality_score",{
      method : 'GET',
      headers: {
        'accept':'application/json',
        'Authorization':`${localStorage.getItem('token_type')} ${localStorage.getItem('access_token')}`
      }
    })
    const data = await response.json();
    setScore(data.power_quality_score);
  }
  useEffect(() => {
    if(localStorage.getItem('access_token')){
          props.setNavbar(true)
          let D = new Date();
          fetchData(D);
          qualityScore();
        }
        else{
          navigate('/')
        }
        // setTimeout(() => {
        //   localStorage.removeItem('access_token');
        //   localStorage.removeItem('token_type');
        // }, 1800000);
      
      
      // eslint-disable-next-line
  }, [localStorage.getItem('access_token')]);
  const [date, setDate] = useState();
  setInterval(() => {
    setDate(new Date());
  }, 1000);

let days =["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
  return (
    <div className='container media'  style={{display : 'flex',flexDirection : 'column', justifyContent : 'center', width : '50rem', alignItems:"center"}}>
      <div className="welcometext"> Welcome {localStorage.getItem('username')}</div>
      <div className="card" style={{width: "50rem",height : "100%"}}>
        <table class="mytable">
          <tr>
            <td>Date and Time: </td>
            <td>{days[date?.getDay()]} {date?.getDate()}-{date?.getMonth()+1}-{date?.getFullYear()}, {date?.getHours()}:{date?.getMinutes()}</td>
          </tr>
          <tr>
            <td>Unique Service Number(USN):</td>
            <td>{response?.usn}</td>
          </tr>

          <tr>
            <td>Supply Quality Score:</td>
            <td>{score}</td>
          </tr>

          <tr>
            <td>Unbilled Amount: </td>
            <td>Rs. {parseInt(response?.total_amount)}</td>
          </tr>

          <tr>
            <td>Last Bill Date:</td>
            <td>{response?.start_datetime.replace(" 00:00:00","")}</td>
          </tr>

          <tr>
            <td>Due Date:</td>
            <td>{response?.end_datetime.replace(" 00:00:00","")} <a target='_blank' rel="noreferrer" href='#' className="btn btn-primary">Pay Now</a></td>
          </tr>

        </table>
          <div className="card-body d-flex" style={{flexDirection : 'column',alignItems : 'left'}}>
            <div className='d-flex flex-column mb-3 my-3' style={{width : '100%'}}>
              <h3>Visualize Energy Data:</h3>
              <div className='d-flex justify-content-around' id='buttons'>
                  <Link to='/HourlyConsumption'><button className="btn btn-outline-dark my-3 rbuttons">Hourly</button></Link>
                  <Link to='/DailyConsumption'><button className="btn btn-outline-dark my-3 rbuttons">Daily</button></Link>
                  <Link to='/WeeklyConsumption'><button className="btn btn-outline-dark my-3  rbuttons">Weekly</button></Link>
                  <Link to='/MonthlyConsumption'><button className="btn btn-outline-dark my-3  rbuttons">Monthly</button></Link>
                  <Link to='/YearlyConsumption'><button className="btn btn-outline-dark my-3  rbuttons">Yearly</button></Link>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Home

import React from 'react'
import { useEffect,useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Profile = (props) => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});
    const fetchUser = async ()=>{
        const response = await fetch("https://powersense.in/api/user_data",{
          method : "GET",
          headers : {
            "Authorization" : `Bearer ${localStorage.getItem('access_token')}`,
            "accept" : "application/json"
          }
        })
        let data = await response.json();
        setUserData(data);
    }
    useEffect(() => {
        if(localStorage.getItem('token_type')){
            fetchUser();
            props.setNavbar(true)
        }
        else{
          props.setNavbar(false)
            navigate('/')
        }
         // eslint-disable-next-line
    }, [ localStorage.getItem('token_type')]);
  return (
    <div className='container media' style={{display : 'flex',flexDirection : 'column', justifyContent : 'center', width : '50rem', alignItems:"center"}}>
      <h1>User Profile</h1>
      <div className="card" style={{width: "50rem",height : "100%"}}>
  <div className="card-body d-flex" style={{flexDirection : 'column',alignItems : 'center'}}>
    {/* <h5 className="card-title">{days[date?.getDay()]} {date?.getDate()}-{date?.getMonth()}-{date?.getFullYear()}, {date?.getHours()}:{date?.getMinutes()}</h5>
    <h5 className="card-title">Bills till now</h5> */}
    <p className="card-text">USN : {userData.usn}</p>
    <p className="card-text">Name : {userData.username}</p>
    <p className="card-text">Email-ID : {userData.email} </p>
    

<div className='d-flex flex-column mb-3 my-3' style={{width : '100%'}}>
  <h3>Update :</h3>
  {/* <div className='d-flex justify-content-around'>
  
  <Link to='/update/email'><button className="btn btn-primary my-3">Email</button></Link>
  <Link to='/update/password'><button className="btn btn-primary my-3">Password</button></Link>
  <Link to='/update/username'><button className="btn btn-primary my-3">Username</button></Link>
  </div> */}
  <div className="list-group">
  <Link to='/update/email' className="list-group-item list-group-item-action">Email</Link>
  <Link to='/update/password' className="list-group-item list-group-item-action">Password</Link>
  <Link to='/update/username' className="list-group-item list-group-item-action">Username</Link>
</div>
</div>
<div className='d-flex flex-column mb-3 my-3' style={{width : '100%'}}>
  <h3>Complaints :</h3>
  {/* <div className='d-flex justify-content-around'>
  
  <Link to='/filecomplaints'><button className="btn btn-primary my-3">File Complaint</button></Link>
  <Link to='/pendingcomplaints'><button className="btn btn-primary my-3">Pending Complaints</button></Link>
  </div> */}
  <div className="list-group">
  <Link to='/filecomplaints' className="list-group-item list-group-item-action">File Complaint</Link>
  <Link to='/pendingcomplaints' className="list-group-item list-group-item-action">Pending Complaints</Link>
</div>
</div>
  </div>
</div>
    </div>
  )
}

export default Profile
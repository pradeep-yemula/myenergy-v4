import React, {useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

const Login = (props) => {
    useEffect(() => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('token_type')
        localStorage.removeItem('username')
        props.setNavbar(false);
        // eslint-disable-next-line
    }, [ ]);
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [USN, setUSN] = useState('');
    const handleUsername = (e) => {
        e.preventDefault();
        setUsername(e.target.value);
        setUSN(e.target.value.replace("user", "U"));;
    }
    const handlePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value)
    }
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://powersense.in/api/login',{
            method : 'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body : new URLSearchParams({
                'client_id' : USN,
                'username': username,
                'password': password,
        })
    })
    const data = await response.json();
    props.setToken(data);
    localStorage.setItem('token_type',data.token_type);
    localStorage.setItem('access_token',data.access_token);
    localStorage.setItem('username',username);
    if(data.access_token){
        navigate('/home')
    }
    else{
        alert('Incorrect Credentials')
    }
    }

    return (
        <div className="container">
            <div className="welcome">
                <div className="welcometext"> Project</div>
                <div> <p className='weltext'> Standardized way of Sharing Energy Data with End Consumer Applications </p> 
                </div>

                <div className="welcometext"> Funding:</div>
                <div> <p className='weltext'> from NSGM to IIT Hyderabad</p></div>
  
                <div className="welcometext"> Output</div>
                <div> <p className='weltext'> Draft Standard submission to BIS </p> </div>
                
            </div>       
            
            <div className='login-form' >
                <form onSubmit={handleOnSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label" >Username</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={username} onChange={handleUsername} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={handlePassword} />
                    </div>
                    <div> hint: login using 'user3' and 'password3' </div>
                    <button type="submit" className="btn btn-dark">Login  &rarr;</button>
                </form>
            </div>
        </div>
    )
}

export default Login

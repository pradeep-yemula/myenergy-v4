import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [USN, setUSN] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const handleName=(e)=>{
        e.preventDefault();
        setName(e.target.value);

    }
    const handleUSN=(e)=>{
        e.preventDefault();
        setUSN(e.target.value);
    }
    const handlePassword=(e)=>{
        e.preventDefault();
        setPassword(e.target.value);
    }
    const handleConfirmPassword=(e)=>{
        e.preventDefault();
        setConfirmPassword(e.target.value);
    }
    const handleEmail=(e)=>{
        e.preventDefault();
        setEmail(e.target.value);
    }
    const handleSubmit= async(e)=>{
        e.preventDefault();
        const response = await fetch('https://powersense.in/api/create_user',{
            method:'POST',
            headers : {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                usn : USN,
                username : name,
                email,
                password,

            })
        })
        const data = await response.json();
        console.log(data);
        if(data.message){

          alert(data.message);
          navigate('/')
        }
        else{
          alert(data.detail)
        }
    }
  return (
    <div className='container contain main'>
        <h1 className='my-3'>Sign Up</h1>
      <form className='my-3' onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="USN" className="form-label">USN</label>
    <input type="text" className="form-control" id="USN" aria-describedby="emailHelp" value={USN} onChange={handleUSN} required={true}/>
  </div>
  <div className="mb-3">
    <label htmlFor="Name" className="form-label">Name</label>
    <input type="text" className="form-control" id="Name" aria-describedby="emailHelp" value={name} onChange={handleName} required={true}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={handleEmail} required={true}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={handlePassword} required={true}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="exampleInputPassword2" value={confirmPassword} onChange={handleConfirmPassword} required={true}/>
  </div>
  
  <button disabled={!(password===confirmPassword)} type="submit" className="btn btn-dark">Sign Up  &rarr;</button>
</form>
<span>Already a user? </span> <Link className='link-dark' to="/">Login</Link>
    </div>
  )
}

export default Signup

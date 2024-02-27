import React,{useState} from 'react'
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

const Update = (props) => {
    const [entry, setEntry] = useState('');
    const [confirm, setConfirm] = useState('');
    const navigate = useNavigate();
    const handleEntry=(e)=>{
        setEntry(e.target.value)
    }
    const handleConfirm=(e)=>{
        setConfirm(e.target.value)
    }
    const handleSubmit= async(e)=>{
        e.preventDefault();
        const response = await fetch(`https://powersense.in/api/update_${type}?new_${type}=${entry}`,{
            method : 'PUT',
            headers : {
                'Accept': 'application/json',
                'Authorization':`${localStorage.getItem('token_type')} ${localStorage.getItem('access_token')}`
            }
        })
        const data = await response.json();
        alert(data.message);
        props.setNavbar(false);
        navigate('/')
    }
    let {type} = useParams();
    useEffect(() => {
      if(localStorage.getItem('token_type')){

        props.setNavbar(true);
      }
      else{
        props.setNavbar(false);
        navigate('/');
      }
        // eslint-disable-next-line
    }, [localStorage.getItem('token_type')]);
  return (
    <div className='container contain main'>
        <h1 className='my-3'>Update {type}</h1>
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="new email" className="form-label">New {type}</label>
    <input type={`${type==='username'?'text':type}`} className="form-control" id="new email" aria-describedby="emailHelp" required={true} onChange={handleEntry}/>
  </div>
  <div className="mb-3">
    <label htmlFor="confirm email" className="form-label">Confirm {type}</label>
    <input type={`${type==='username'?'text':type}`} className="form-control" id="confirm email" required={true} onChange={handleConfirm}/>
  </div>
  <button disabled={entry!==confirm} type="submit" className="btn btn-dark">Submit</button>
</form>
    </div>
  )
}

export default Update

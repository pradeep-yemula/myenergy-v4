import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Interruptionsform = (props) => {
    const [type, setType] = useState('');
    const [month, setMonth] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!type){
            alert('Select the interuption type please')
        }
        else{

            navigate(`/interruption/${type}/${month}`)
        }
        
    }
    const handleSelect = (e) =>{
        setType(e.target.value)
    }
    const handleMonth =(e) =>{
        setMonth(e.target.value);
    }
    const navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem('token_type')){
            props.setNavbar(true);
        }
        else{
            navigate('/');
        }
        // eslint-disable-next-line
    }, [localStorage.getItem('token_type')]);
    return (
        <div className='container my-3 contain main'>
            <h1 className='my-3'>Interruptions</h1>
            <form onSubmit={handleSubmit}>

                <select className="form-select" aria-label="Default select example" onChange={handleSelect} required={true}>
                    <option defaultValue={null}>Select Interruption type</option>
                    <option value="temporary"> temporary </option>
                    <option value="extended"> extended</option>
                    <option value="sustained"> sustained </option>
                </select>
                {/* <label style={{display:"block", marginTop:"30px"}} htmlFor="description">Describe your problem :</label> */}
                {/* <textarea style={{display:"block", marginBottom:"15px"}}  name="description" id="description" cols="100" rows="10" placeholder='Enter description here' value={description} onChange={handleDescription}></textarea> */}
                <div className="form-floating" style={{marginTop:"35px", marginBottom:"15px"}}>
                <input type='month' style={{height: "100px"}} className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" onChange={handleMonth} required={true} ></input>
                <label htmlFor="floatingTextarea2" style={{opacity:"0.5",zIndex:'0'}}>Enter Month and Year here : </label>
                </div>
                <button type='submit' className="btn btn-dark">Submit</button>
            </form>
        </div>
    )
}

export default Interruptionsform

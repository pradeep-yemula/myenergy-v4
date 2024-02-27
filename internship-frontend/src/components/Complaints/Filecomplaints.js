import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Filecomplaints = (props) => {
    const [problemType, setProblemType] = useState('');
    const navigate = useNavigate();
    const [description, setDescription] = useState('');
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }
    const handleSelect= (e)=>{
        setProblemType(e.target.value)
    }
    const handleSubmit= async(e)=>{
        e.preventDefault();
        const response = await fetch('https://powersense.in/api/submit_complaint',{
            method :'POST',
            headers:{
                'Accept':'application/json',
                'Authorization':`${localStorage.getItem('token_type')} ${localStorage.getItem('access_token')}`,
                'Content-Type' :'application/json'
            },
            body :JSON.stringify({
                complaint_type: problemType,
                issue_message: description
            })
        })
        const data = await response.json();
        if(data.message){
            alert(data.message);
            navigate('/home');
        }
        else{
            alert(data.detail)
        }
    }
    useEffect(() => {
        if (localStorage.getItem('token_type')) {
            props.setNavbar(true);
        }
        else {
            props.setNavbar(false);
            navigate('/');
        }
        // eslint-disable-next-line
    }, [localStorage.getItem('token_type')]);
    return (
        <div className='container my-3 contain main'>
            <h1 className='my-3'>File complaint</h1>
            <form onSubmit={handleSubmit}>

                <select className="form-select" aria-label="Default select example" onChange={handleSelect}>
                    <option defaultValue={`open this select menu`}>Select problem type</option>
                    <option value="DTR - Failure"> DTR - Failure </option>
                    <option value="DTR - Smokes/Flames Seen"> DTR - Smokes/Flames Seen </option>
                    <option value="DTR - No Fencing"> DTR - No Fencing </option>
                    <option value="DTR - Vehicle Dashed"> DTR - Vehicle Dashed </option>
                    <option value="House Shocking"> House Shocking </option>
                    <option value="Line Snapping"> Line Snapping </option>
                    <option value="LT Jumper Cut"> LT Jumper Cut </option>
                    <option value="LT Line - Bunched/Twisted/Loose Span"> LT Line - Bunched/Twisted/Loose Span </option>
                    <option value="LT Pole Damage"> LT Pole Damage </option>
                    <option value="LT Pole Shock"> LT Pole Shock </option>
                    <option value="LT-Pole: Conducter Touching Pole"> LT-Pole: Conducter Touching Pole </option>
                    <option value="LT-Pole: Vehicle Dashed"> LT-Pole: Vehicle Dashed </option>
                    <option value="LT-Pole: Damaged"> LT-Pole: Damaged </option>
                    <option value="Line - Tree Branches Touching"> Line - Tree Branches Touching </option>
                    <option value="Loose Connection At Pole"> Loose Connection At Pole </option>
                    <option value=" Overhead Line Breakdown"> Overhead Line Breakdown </option>
                    <option value="Phase Reverse"> Phase Reverse </option>
                    <option value="Pole Fell Down"> Pole Fell Down </option>
                    <option value="Pole Rusted/Damaged/Leaning"> Pole Rusted/Damaged/Leaning </option>
                </select>
                {/* <label style={{display:"block", marginTop:"30px"}} htmlFor="description">Describe your problem :</label> */}
                {/* <textarea style={{display:"block", marginBottom:"15px"}}  name="description" id="description" cols="100" rows="10" placeholder='Enter description here' value={description} onChange={handleDescription}></textarea> */}
                <div className="form-floating" style={{marginTop:"35px", marginBottom:"15px"}}>
                <textarea style={{height: "200px"}} className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" onChange={handleDescription} ></textarea>
                <label htmlFor="floatingTextarea2" style={{opacity:"0.5",zIndex:'0'}}>Enter Description here : </label>
                </div>
                <button type='submit' className="btn btn-dark">Submit</button>
            </form>
        </div>
    )
}

export default Filecomplaints
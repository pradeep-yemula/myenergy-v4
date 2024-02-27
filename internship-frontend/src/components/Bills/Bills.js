import React,{useState, useEffect} from 'react'
import Billdata from './Billdata';
import { useNavigate } from 'react-router-dom';

const Bills = (props) => {
  const [style, setStyle] = useState({height:"100vh"});
  
    const navigate = useNavigate();
    const [billData, setBilldata] = useState({});
    const [month, setMonth] = useState();
    let billtype = props.type.charAt(0).toUpperCase() + props.type.slice(1);
    const fetchData =async (month)=>{
        const response = await fetch (`https://powersense.in/api/${props.type}_bills?start_datetime=${month}`,{
            method :'GET',
            headers :{
                'Accept':'application/json',
                'Authorization' : `${localStorage.getItem('token_type')} ${localStorage.getItem('access_token')}`
        }
        })
        const data = await response.json();
        setBilldata(data);
    }
    const handleMonth = (e)=>{
      setMonth(e.target.value)
   }
   const handleSubmit = (e) =>{
    setStyle({});
      e.preventDefault();
      if(!month){
          alert('Please enter correct month and year')
      }
      else{
          fetchData(month);
      }
    }    
    useEffect(() => {
        if(localStorage.getItem('token_type')){

            props.setNavbar(true);
        }
        else{
            navigate('/')
        }
        // eslint-disable-next-line
    }, [ ]);
  return (
      <div className="container contain" style={style}>
      <h1 className='my-3'>{billtype} Bills</h1>
      <form onSubmit={handleSubmit}>
            <div className="form-floating" style={{marginTop:"35px", marginBottom:"15px"}}>
                <input type='month' style={{height: "100px"}} className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" onChange={handleMonth} required={true}></input>
                <label htmlFor="floatingTextarea2" style={{opacity:"0.5",zIndex:'0'}}>Specify the Start DateTime here :</label>
                </div>
                <button type='submit' className="btn btn-dark">Submit</button>
            </form>
      {(billData.bills)?.map((element)=>{
        return <Billdata key={element.start_time}
        meterid={element.meterid}
        payment_date={element.payment_date}
        start_time={element.start_time}
        end_time={element.end_time}
        amount={element.amount}
        customer_type={element.customer_type}
        status={element.status}
        units_consumed={element.units_consumed}
        fixed_rate_charge={element.fixed_rate_charge}
        variable_rate_charge={element.variable_rate_charge}
        demand_charge={element.demand_charge}
        fuel_adjustment_charge={element.fuel_adjustment_charge}
        taxes_and_duties={element.taxes_and_duties}
        penalty_charge={element.penalty_charge}
        payment_url={element.payment_url}
        />
      })}
    </div>
  )
}


export default Bills

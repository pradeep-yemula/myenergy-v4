import React from 'react'

const Billdata = (props) => {
  return (
    <div className='my-3 '>
      <div className="card">
  <div className="card-body">
        <div><span style={{fontWeight:"650"}}>Meter ID : </span>{props.meterid}</div>
        <div><span style={{fontWeight:"650"}}>Payment Date : </span>{props.payment_date}</div>
        <div><span style={{fontWeight:"650"}}>Start Time : </span>{props.start_time}</div>
        <div><span style={{fontWeight:"650"}}>End Time :</span>{props.end_time}</div>
        <div><span style={{fontWeight:"650"}}>Amount : </span>{props.amount}</div>
        <div><span style={{fontWeight:"650"}}>Customer Type : </span>{props.customer_type}</div>
        <div><span style={{fontWeight:"650"}}>Status : </span>{props.status}</div>
        <div><span style={{fontWeight:"650"}}>Units Consumed : </span>{props.units_consumed}</div>
        <div><span style={{fontWeight:"650"}}>Fixed Rate Charge : </span>{props.fixed_rate_charge}</div>
        <div><span style={{fontWeight:"650"}}>Variable Rate Charge : </span>{props.variable_rate_charge}</div>
        <div><span style={{fontWeight:"650"}}>Demand Charge : </span>{props.demand_charge}</div>
        <div><span style={{fontWeight:"650"}}>Fuel Adjustment Charge : </span>{props.fuel_adjustment_charge}</div>
        <div><span style={{fontWeight:"650"}}>Tax and Duties : </span>{props.taxes_and_duties}</div>
        <div><span style={{fontWeight:"650"}}>Penalty Charge : </span>{props.penalty_charge}</div>
        <div><span style={{fontWeight:"650"}}>Payment URL : </span><a target='_blank' rel="noreferrer" href={`${props.payment_url}`}>{props.payment_url}</a></div>
  </div>
</div>
    </div>
  )
}

export default Billdata

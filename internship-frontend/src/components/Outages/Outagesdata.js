import React from 'react'

const Outagesdata = (props) => {
  return (
    <div className='my-3'>
      <div className="card">
  <div className="card-body">
 <div><span style={{fontWeight:"650"}}>USN : </span>            {props.usn}</div>
 <div><span style={{fontWeight:"650"}}>Start Time : </span>     {props.start_time}</div>
 <div><span style={{fontWeight:"650"}}>Status : </span>          {props.status}</div>
 <div><span style={{fontWeight:"650"}}>Reason : </span>          {props.reason}</div>
 <div><span style={{fontWeight:"650"}}>Affected Users : </span>  {props.affected_users}</div>
 <div><span style={{fontWeight:"650"}}>Estimated Time : </span>  {props.estimated_time}</div>
 <div><span style={{fontWeight:"650"}}>State : </span>           {props.state}</div>
 <div><span style={{fontWeight:"650"}}>Town : </span>            {props.town}</div>
 <div><span style={{fontWeight:"650"}}>Area : </span>            {props.area}</div>
 <div><span style={{fontWeight:"650"}}>Sub-Station Name : </span>{props.sub_station_name}</div>
 <div><span style={{fontWeight:"650"}}>Feeder Name : </span>     {props.feeder_name}</div>
 <div><span style={{fontWeight:"650"}}>Outage Type : </span>     {props.outage_type}</div>
  </div>
</div>
    </div>
  )
}

export default Outagesdata

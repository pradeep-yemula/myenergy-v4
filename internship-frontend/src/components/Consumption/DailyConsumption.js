import React,{ useEffect,useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );
  
const DailyConsumption = (props) => {
    let arr = [];
    const [day, setDay] = useState('');
    const [ChartData, setChartData] = useState([]);
    const navigate = useNavigate();
    const [loading, setloading] = useState(true);
    const fetchData = async(day)=>{
        setloading(true);
        let response = await fetch (`https://powersense.in/api/${props.type}_consumption?start_datetime=${day}`,{
            method :'GET',
            headers :{
                'Accept':'application/json',
                'Authorization' : `${localStorage.getItem('token_type')} ${localStorage.getItem('access_token')}`,
               
        },
           
        })

        const data = await response.json();
        console.log(data);
        
        var myObject = data.energy_data;
        let i=0;
        for (var key in myObject) {

        if (myObject.hasOwnProperty(key)) {
            arr[i]=[key,myObject[key]];
            i++;
        }
     }  
     const Chartdata = arr.map(value => ({ x: value[0],
        y: value[1]?.toFixed(2)}))
        setChartData(Chartdata)
        setloading(false)
    // }
    console.log(ChartData);
}
            const options = {
                responsive: true
                }
                const data = {
                labels: ChartData.map(value => value.x),
                datasets: [
                {
                label:'daily consumption',
                borderColor: ' rgb(255, 99, 132)',
                backgroundColor:  '#FFA500',
                fill: true,
                data: ChartData.map(value => value.y) 
                }
            ]
            }
     const handleDay = (e)=>{
        setDay(e.target.value)
     }
     const handleSubmit = (e) =>{
        e.preventDefault();
        if(!day){
            alert('Please enter correct date')
        }
        else{
            fetchData(day);
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
    <>
    <div className='main' style={{height:"130vh"}}>
    <div className='container contain'>
      <h1 className='my-3'>Daily Consumption</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-floating" style={{marginTop:"35px", marginBottom:"15px"}}>
                <input type='date' style={{height: "100px"}} className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" onChange={handleDay} required={true}></input>
                <label htmlFor="floatingTextarea2" style={{opacity:"0.5",zIndex:'0'}}>Specify the Start DateTime here :</label>
                </div>
                <button type='submit' className="btn btn-dark">Submit</button>
            </form>
            </div>
            <div style={{width:'100vw',overflow:'hidden',overflowX:'auto'}}>
                <div style={{width:"1000px", margin:"auto"}}>
            {!loading && <Bar className='container' style={{backgroundColor:'white', borderRadius:'5px', marginTop:"20px"}} options={options} data={data}/>}
            </div>
            </div>
            </div>

            <div className="container d-flex justify-content-around" style={{width: "100rem"}}>
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




      </>
  )
}

export default DailyConsumption
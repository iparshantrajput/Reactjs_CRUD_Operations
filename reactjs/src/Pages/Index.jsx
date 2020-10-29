import React, {Component} from "react";
import {Route,Switch,Link,redirect} from 'react-router-dom';
import BG from './bg.jpg';
import Notebook from './Notebook.jpg';
class DoctorDashboard extends Component{
    render(){
        return(
            /*<div>
                <h1>Welcome Dr. Doctorname!!</h1>
                <Link to="/" style={{color:'black',fontStyle:'bold',fontFamily:'Ariel',fontSize:'18px'}}><u>Logout</u></Link>
            </div>*/
        <div className='wrapper' style={{backgroundImage:`url(${BG})`,backgroundSize:'cover',backgroundSize:'1600px 800px',backgroundRepeat:'no-repeat'}}>
            <h1 style={{color:'white',marginTop:'50px'}}>Welcome Dr. Doctorname!!</h1>
            <div>
                <Link to="/" style={{color:'white',fontStyle:'bold',fontFamily:'Ariel',fontSize:'18px',marginLeft:'1500px'}}><u>Logout</u></Link>
            </div > 
            <div>
                <button className='popup' style={{backgroundColor:'white',height:'35px',marginBottom:'15px'}}>Check Pending Appointments</button>
                
            </div > 
            <div  className='form-wrapper'style={{borderRadius:'50',height:'500px',width:'60%',backgroundColor:'',backgroundImage:`url(${Notebook})`,backgroundSize:'cover',backgroundSize:'1100px 550px',backgroundRepeat:'no-repeat'}}>
              <center> <h2>Upcoming Appointments</h2></center>
              <center> <table border='1' style={{margin:'15px',height:'350px',width:'850px',textAlign:'center'}}>
                        <tr>
                            <th>S.No.</th>
                            <th>PatientName</th>
                            <th>Timing</th>
                            
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Xyz</td>
                            <td>12pm</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Xyz</td>
                            <td>12pm</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Xyz</td>
                            <td>12pm</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Xyz</td>
                            <td>12pm</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Xyz</td>
                            <td>12pm</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Xyz</td>
                            <td>12pm</td>
                        </tr>
                    </table></center>
            </div>
            <div className="bg-modal">
                <div className="model-content">
                    <div className="close">
                        +
                    </div>
                    <h2>Pending Appointments</h2>
                    <center> <table border='1'>
                        <tr>
                            <th>S.No.</th>
                            <th>PatientName</th>
                            <th>Timing</th>
                            <th>Accept or reject</th>
                            
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Xyz</td>
                            <td>12pm</td>
                            <td><button style={{backgroundColor:'lightgreen',margin:'2px'}}>Accept</button> 
                               <button style={{backgroundColor:'Red'}}>Reject</button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Xyz</td>
                            <td>12pm</td>
                            <td><button style={{backgroundColor:'lightgreen',margin:'2px'}}>Accept</button>
                            <button style={{backgroundColor:'Red'}}>Reject</button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Xyz</td>
                            <td>12pm</td>
                            <td><button style={{backgroundColor:'lightgreen',margin:'2px'}}>Accept</button>
                            <button style={{backgroundColor:'Red'}}>Reject</button></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Xyz</td>
                            <td>12pm</td>
                            <td><button style={{backgroundColor:'lightgreen',margin:'2px'}}>Accept</button>
                            <button style={{backgroundColor:'Red'}}>Reject</button></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Xyz</td>
                            <td>12pm</td>
                            <td><button style={{backgroundColor:'lightgreen',margin:'2px'}}>Accept</button>
                            <button style={{backgroundColor:'Red'}}>Reject</button></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Xyz</td>
                            <td>12pm</td>
                            <td><button style={{backgroundColor:'lightgreen',margin:'2px'}}>Accept</button>
                            <button style={{backgroundColor:'Red'}}>Reject</button></td>
                        </tr>
                    </table></center>
                </div>
            </div>
                
        </div>
        
        );
        
    }
    
}

/*window.onload= function (){

    document.querySelector('.popup').addEventListener('click',function(){
        document.querySelector('.bg-modal').style.display='flex';
        });
        document.querySelector('.close').addEventListener('click',function(){
            document.querySelector('.bg-modal').style.display='none'; 
            });
}*/

/*<script src="https://code.jquery.com/jquery-3.5.1.min.js">
$( document ).ready(function() {
    
});

</script>
*/


export default DoctorDashboard;
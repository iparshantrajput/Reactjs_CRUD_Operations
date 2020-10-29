import React, {Component} from "react";
import {Route,Switch,Link,redirect} from 'react-router-dom';
import "./App.css";
import ambulance from './Ambulance.gif';
import BloodBank from './BloodBank.gif';
import GiveBlood from './Give-Blood.gif';
import Doctors from './Doctors.gif';
import BG from './Bguser.jpg';
class Dashboard extends Component{
    render(){
        return(
            <div className='wrapper' style={{backgroundImage:`url(${BG})`,backgroundSize:'cover'}}>
                
                <h1>Welcome Username!!</h1>
                <div>
                    <Link to="/" style={{color:'black',fontStyle:'bold',fontFamily:'Ariel',fontSize:'18px'}}><u>Logout</u></Link>
                </div > 
                <div  className='form-wrapper'style={{borderRadius:'50',height:'500px',width:'60%',backgroundColor:'',backgroundImage:`url(${Doctors})`,backgroundSize:'cover',backgroundSize:'1100px 550px',backgroundRepeat:'no-repeat'}}>
                   <center> <button style={{backgroundImage:`url(${ambulance})`,backgroundSize:'cover',fontStyle:'bold',borderRadius:'25px',blockSize:'100',height:'250px',width:'250px',paddingTop:'150px',fontSize:'18px',marginTop:'100px',marginLeft:'50px',}}>Find Best Hospitals Around you </button>
                    <button style={{backgroundImage:`url(${BloodBank})`,backgroundSize:'350px 150px',backgroundPosition:'center',backgroundRepeat:'no-repeat',fontStyle:'bold',backgroundColor:'white',borderRadius:'25px',blockSize:'100',height:'250px',width:'250px',paddingTop:'150px',fontSize:'18px',marginTop:'100px',marginLeft:'50px'}}>Find Blood Banks Around you </button>
                    <button style={{backgroundImage:`url(${GiveBlood})`,backgroundSize:'250px 150px',backgroundPosition:'center',backgroundRepeat:'no-repeat',fontStyle:'bold',backgroundColor:'#03a8f3',borderRadius:'25px',blockSize:'100',height:'250px',width:'250px',paddingTop:'128px',fontSize:'18px',marginTop:'100px',marginLeft:'50px'}}>Donate Blood </button></center>
                </div>

            </div>
            
        );
    }
}
export default Dashboard;
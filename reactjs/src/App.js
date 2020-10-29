import React, {Component, createElement} from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import {Route,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import firebase from "./fire.js";
import ambulance from './Ambulance.gif';
import BloodBank from './BloodBank.gif';
import GiveBlood from './Give-Blood.gif';
import Doctors from './Doctors.gif';
import BG from './Bguser.jpg';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class Dashboard extends Component{
    render(){
        return(
            <div className='wrapper' style={{backgroundImage:`url(${BG})`,backgroundSize:'cover'}}>
              <div>
              <button><Link to="/" style={{color:'black',fontSize:'30px',fontStyle:'bold'}}>Logout</Link></button>
              </div>
              <div>
                <button style={{backgroundImage:`url(${ambulance})`,backgroundSize:'cover',fontStyle:'bold',borderRadius:'55px',blockSize:'50',height:'250px',width:'250px',paddingTop:'150px',fontSize:'18px',marginTop:'50px',marginLeft:'50px'}}><Link style={{color:'black'}} to="/khihospitals">Find Best Hospitals Around You</Link></button>
                <button style={{backgroundImage:`url(${BloodBank})`,backgroundSize:'350px 150px',backgroundPosition:'center',backgroundRepeat:'no-repeat',fontStyle:'bold',backgroundColor:'white',borderRadius:'25px',blockSize:'100',height:'250px',width:'250px',paddingTop:'150px',fontSize:'18px',marginTop:'100px',marginLeft:'50px'}}><Link style={{color:'black'}} to="/khibbanks">Find Blood Banks Around you </Link></button>
                <button style={{backgroundImage:`url(${GiveBlood})`,backgroundSize:'250px 150px',backgroundPosition:'center',backgroundRepeat:'no-repeat',fontStyle:'bold',backgroundColor:'#03a8f3',borderRadius:'25px',blockSize:'100',height:'250px',width:'250px',paddingTop:'128px',fontSize:'18px',marginTop:'100px',marginLeft:'50px'}}><Link style={{color:'white'}} to="/donateblood">Become Blood Donor</Link></button>
                <button style={{backgroundImage:`url(${Doctors})`,backgroundSize:'250px 150px',backgroundPosition:'center',backgroundRepeat:'no-repeat',fontStyle:'bold',backgroundColor:'#03a8f3',borderRadius:'25px',blockSize:'100',height:'250px',width:'250px',paddingTop:'128px',fontSize:'18px',marginTop:'100px',marginLeft:'50px'}}><Link style={{color:'white'}} to="/blooddonors">View All Our Blood-Donors</Link></button>
              </div>
            </div>
            
        );
    }
}

//Hospitals
class IsbHosptials extends Component{
  state={
    data:[],
    HName:'',
    HAddress:'',
    HNo:'',
  }
  componentDidMount(){
    const ref = firebase.database().ref("IsbHospitals");
    ref.on('value',(snapshot)=>{
      let words = snapshot.val();
      let newState = [];

      for(let key in words){
        newState.push({
          id:key,
          HName:words[key].HName,
          HNo:words[key].HNo,
          HAddress:words[key].HAddress,
        });

      }
      this.setState({
        data: newState
      });
    });
  }
  submitKHI = e =>{
    firebase
    .database()
    .ref("IsbHospitals")
    .push({
      HName:this.state.HName,
      HNo:this.state.HNo,
      HAddress:this.state.HAddress,
    });
    alert(this.state.HName+" successfully added in list, Kindly reload");
  }
  render(){
    return(
      <div>
        <center>
        <div>
          <button><Link to="/dashboard" style={{color:'black',fontSize:'30px',fontStyle:'bold'}}>BACK TO DASHBOARD</Link></button>
        </div>
        <h1>Find Hospitals By Selecting Area</h1>
        <br></br>
        <button><Link to="/khihospitals">Karachi</Link></button>
        <button><Link to="/peshawarhospitals">Peshawar</Link></button>
        <button><Link to="/isbhospitals">Islamabad</Link></button>
        <button><Link to="/lhrhospitals">Lahore</Link></button>
        <button><Link to="/quettahospitals">Quetta</Link></button>
        </center>
        <br></br>
        <h1 id='title'><center>Hospitals In Islamabad</center></h1>
        <table id='students'>
              <tbody>
                <th id='studentsth'>Hospital's Name</th>
                <th id='studentsth'>Hospital's Phone No</th>
                <th id='studentsth'>Hospital's Address</th>
                {this.state.data.map((item)=>{
                return(
                  <tr>
                    <td>{item.HName}</td>
                    <td>{item.HNo}</td>
                    <td>{item.HAddress}</td>
                  </tr>
                )
              })}
            </tbody> 
        </table>
        <br></br>
        <h3 style={{color:'red'}}>Add one if you want</h3>
        <form onSubmit={e=>this.submitKHI(e)}>
            <input placeholder="Hospital Name" onChange={e=>this.setState({HName:e.target.value})}/>
            <input placeholder="Hospital No" onChange={e=>this.setState({HNo:e.target.value})}/>
            <input placeholder="Hospital Address" onChange={e=>this.setState({HAddress:e.target.value})}/>
            <input type="submit"/>
        </form>
        </div>
    );
  }
}

class LhrHosptials extends Component{
  state={
    data:[],
    HName:'',
    HNo:'',
    HAddress:'',
  }
  componentDidMount(){
    const ref = firebase.database().ref("LhrHospitals");
    ref.on('value',(snapshot)=>{
      let words = snapshot.val();
      let newState = [];

      for(let key in words){
        newState.push({
          id:key,
          HName:words[key].HName,
          HNo:words[key].HNo,
          HAddress:words[key].HAddress,
        });

      }
      this.setState({
        data: newState
      });
    });
  }
  submitKHI = e =>{
    firebase
    .database()
    .ref("LhrHospitals")
    .push({
      HName:this.state.HName,
      HNo:this.state.HNo,
      HAddress:this.state.HAddress,
    });
    alert(this.state.HName+" successfully added in list, Kindly reload");
  }
  render(){
    return(
      <div>
        <center>
        <div>
          <button><Link to="/dashboard" style={{color:'black',fontSize:'30px',fontStyle:'bold'}}>BACK TO DASHBOARD</Link></button>
        </div>
        <h1>Find Hospitals By Selecting Area</h1>
        <br></br>
        <button><Link to="/khihospitals">Karachi</Link></button>
        <button><Link to="/peshawarhospitals">Peshawar</Link></button>
        <button><Link to="/isbhospitals">Islamabad</Link></button>
        <button><Link to="/lhrhospitals">Lahore</Link></button>
        <button><Link to="/quettahospitals">Quetta</Link></button>
        </center>
        <br></br>
        <h1 id='title'><center>Hospitals In Lahore</center></h1>
        <table id='students'>
              <tbody>
                <th id='studentsth'>Hospital's Name</th>
                <th id='studentsth'>Hospital's Phone No</th>
                <th id='studentsth'>Hospital's Address</th>
                {this.state.data.map((item)=>{
                return(
                  <tr>
                    <td>{item.HName}</td>
                    <td>{item.HNo}</td>
                    <td>{item.HAddress}</td>
                  </tr>
                )
              })}
            </tbody> 
        </table>
        <br></br>
        <h3 style={{color:'red'}}>Add one if you want</h3>
        <form onSubmit={e=>this.submitKHI(e)}>
            <input placeholder="Hospital Name" onChange={e=>this.setState({HName:e.target.value})}/>
            <input placeholder="Hospital No" onChange={e=>this.setState({HNo:e.target.value})}/>
            <input placeholder="Hospital Address" onChange={e=>this.setState({HAddress:e.target.value})}/>
            <input type="submit"/>
        </form>
        </div>
    );
  }
}

class QuettaHosptials extends Component{
  state={
    data:[],
    HName:'',
    HNo:'',
    HAddress:'',
  }
  componentDidMount(){
    const ref = firebase.database().ref("QuettaHospitals");
    ref.on('value',(snapshot)=>{
      let words = snapshot.val();
      let newState = [];

      for(let key in words){
        newState.push({
          id:key,
          HName:words[key].HName,
          HNo:words[key].HNo,
          HAddress:words[key].HAddress,
        });

      }
      this.setState({
        data: newState
      });
    });
  }
  submitKHI = e =>{
    firebase
    .database()
    .ref("QuettaHospitals")
    .push({
      HName:this.state.HName,
      HNo:this.state.HNo,
      HAddress:this.state.HAddress,
    });
    alert(this.state.HName+" successfully added in list, Kindly reload");
  }
  render(){
    return(
      <div>
        <center>
        <div>
          <button><Link to="/dashboard" style={{color:'black',fontSize:'30px',fontStyle:'bold'}}>BACK TO DASHBOARD</Link></button>
        </div>
        <h1>Find Hospitals By Selecting Area</h1>
        <br></br>
        <button><Link to="/khihospitals">Karachi</Link></button>
        <button><Link to="/peshawarhospitals">Peshawar</Link></button>
        <button><Link to="/isbhospitals">Islamabad</Link></button>
        <button><Link to="/lhrhospitals">Lahore</Link></button>
        <button><Link to="/quettahospitals">Quetta</Link></button>
        </center>
        <br></br>
        <h1 id='title'><center>Hospitals In Quetta</center></h1>
        <table id='students'>
              <tbody>
                <th id='studentsth'>Hospital's Name</th>
                <th id='studentsth'>Hospital's Phone No</th>
                <th id='studentsth'>Hospital's Address</th>
                {this.state.data.map((item)=>{
                return(
                  <tr>
                    <td>{item.HName}</td>
                    <td>{item.HNo}</td>
                    <td>{item.HAddress}</td>
                  </tr>
                )
              })}
            </tbody> 
        </table>
        <br></br>
        <h3 style={{color:'red'}}>Add one if you want</h3>
        <form onSubmit={e=>this.submitKHI(e)}>
            <input placeholder="Hospital Name" onChange={e=>this.setState({HName:e.target.value})}/>
            <input placeholder="Hospital No" onChange={e=>this.setState({HNo:e.target.value})}/>
            <input placeholder="Hospital Address" onChange={e=>this.setState({HAddress:e.target.value})}/>
            <input type="submit"/>
        </form>
        </div>
    );
  }
}

class PeshawarHosptials extends Component{
  state={
    data:[],
    HName:'',
    HNo:'',
    HAddress:'',
  }
  componentDidMount(){
    const ref = firebase.database().ref("PeshawarHospitals");
    ref.on('value',(snapshot)=>{
      let words = snapshot.val();
      let newState = [];

      for(let key in words){
        newState.push({
          id:key,
          HName:words[key].HName,
          HNo:words[key].HNo,
          HAddress:words[key].HAddress,
        });

      }
      this.setState({
        data: newState
      });
    });
  }
  submitKHI = e =>{
    firebase
    .database()
    .ref("PeshawarHospitals")
    .push({
      HName:this.state.HName,
      HNo:this.state.HNo,
      HAddress:this.state.HAddress,
    });
    alert(this.state.HName+" successfully added in list, Kindly reload");
  }
  render(){
    return(
      <div>
        <center>
        <div>
          <button><Link to="/dashboard" style={{color:'black',fontSize:'30px',fontStyle:'bold'}}>BACK TO DASHBOARD</Link></button>
        </div>
        <h1>Find Hospitals By Selecting Area</h1>
        <br></br>
        <button><Link to="/khihospitals">Karachi</Link></button>
        <button><Link to="/peshawarhospitals">Peshawar</Link></button>
        <button><Link to="/isbhospitals">Islamabad</Link></button>
        <button><Link to="/lhrhospitals">Lahore</Link></button>
        <button><Link to="/quettahospitals">Quetta</Link></button>
        </center>
        <br></br>
        <h1 id='title'><center>Hospitals In Peshawar</center></h1>
        <table id='students'>
              <tbody>
                <th id='studentsth'>Hospital's Name</th>
                <th id='studentsth'>Hospital's Phone No</th>
                <th id='studentsth'>Hospital's Address</th>
                {this.state.data.map((item)=>{
                return(
                  <tr>
                    <td>{item.HName}</td>
                    <td>{item.HNo}</td>
                    <td>{item.HAddress}</td>
                  </tr>
                )
              })}
            </tbody> 
        </table>
        <br></br>
        <h3 style={{color:'red'}}>Add one if you want</h3>
        <form onSubmit={e=>this.submitKHI(e)}>
            <input placeholder="Hospital Name" onChange={e=>this.setState({HName:e.target.value})}/>
            <input placeholder="Hospital No" onChange={e=>this.setState({HNo:e.target.value})}/>
            <input placeholder="Hospital Address" onChange={e=>this.setState({HAddress:e.target.value})}/>
            <input type="submit"/>
        </form>
        </div>
    );
  }
}

class KhiHosptials extends Component{
  state={
    data:[],
    HName:'',
    HNo:'',
    HAddress:'',
  }
  componentDidMount(){
    const ref = firebase.database().ref("KhiHospitals");
    ref.on('value',(snapshot)=>{
      let words = snapshot.val();
      let newState = [];

      for(let key in words){
        newState.push({
          id:key,
          HName:words[key].HName,
          HNo:words[key].HNo,
          HAddress:words[key].HAddress,
        });

      }
      this.setState({
        data: newState
      });
    });
  }
  submitKHI = e =>{
    firebase
    .database()
    .ref("KhiHospitals")
    .push({
      HName:this.state.HName,
      HNo:this.state.HNo,
      HAddress:this.state.HAddress,
      
    });
    alert(this.state.HName+" successfully added in list, Kindly reload");
  }
  render(){
    return(
      <div>
        <center>
        <div>
          <button><Link to="/dashboard" style={{color:'black',fontSize:'30px',fontStyle:'bold'}}>BACK TO DASHBOARD</Link></button>
        </div>
        <h1>Find Hospitals By Selecting Area</h1>
        <br></br>
        <button><Link to="/khihospitals">Karachi</Link></button>
        <button><Link to="/peshawarhospitals">Peshawar</Link></button>
        <button><Link to="/isbhospitals">Islamabad</Link></button>
        <button><Link to="/lhrhospitals">Lahore</Link></button>
        <button><Link to="/quettahospitals">Quetta</Link></button>
        </center>
        <br></br>
        <h1 id='title'><center>Hospitals In Karachi</center></h1>
        <table id='students'>
              <tbody>
                <th id='studentsth'>Hospital's Name</th>
                <th id='studentsth'>Hospital's Phone No</th>
                <th id='studentsth'>Hospital's Address</th>
                {this.state.data.map((item)=>{
                return(
                  <tr>
                    <td>{item.HName}</td>
                    <td>{item.HNo}</td>
                    <td>{item.HAddress}</td>
                  </tr>
                )
              })}
            </tbody> 
        </table>
        <br></br>
        <h3 style={{color:'red'}}>Add one if you want</h3>
        <form onSubmit={e=>this.submitKHI(e)}>
            <input placeholder="Hospital Name" onChange={e=>this.setState({HName:e.target.value})}/>
            <input placeholder="Hospital No" onChange={e=>this.setState({HNo:e.target.value})}/>
            <input placeholder="Hospital Address" onChange={e=>this.setState({HAddress:e.target.value})}/>
            <input type="submit"/>
        </form>
        </div>
    );
  }
}

//BLOOD BANKS
class KhiBBanks extends Component{
  state={
    data:[],
    BName:'',
    HNo:'',
    BAddress:'',
  }
  componentDidMount(){
    const ref = firebase.database().ref("KhiBBanks");
    ref.on('value',(snapshot)=>{
      let words = snapshot.val();
      let newState = [];

      for(let key in words){
        newState.push({
          id:key,
          BName:words[key].BName,
          BNo:words[key].BNo,
          BAddress:words[key].BAddress,
        });

      }
      this.setState({
        data: newState
      });
    });
  }
  submitKHI = e =>{
    firebase
    .database()
    .ref("KhiBBanks")
    .push({
      BName:this.state.BName,
      BNo:this.state.BNo,
      BAddress:this.state.BAddress,
    });
    alert(this.state.BName+" successfully added in list, Kindly reload");
  }
  render(){
    return(
      <div>
        <center>
        <div>
          <button><Link to="/dashboard" style={{color:'black',fontSize:'30px',fontStyle:'bold'}}>BACK TO DASHBOARD</Link></button>
        </div>
        <h1>Find Blood Banks By Selecting Area</h1>
        <br></br>
        <button><Link to="/khibbanks">Karachi</Link></button>
        <button><Link to="/peshawarbbanks">Peshawar</Link></button>
        <button><Link to="/isbbbanks">Islamabad</Link></button>
        <button><Link to="/lhrbbanks">Lahore</Link></button>
        <button><Link to="/quettabbanks">Quetta</Link></button>
        </center>
        <br></br>
        <h1 id='title'><center>Blood Banks In Karachi</center></h1>
        <table id='students'>
              <tbody>
                <th id='studentsth'>Bank's Name</th>
                <th id='studentsth'>Banks's Phone No</th>
                <th id='studentsth'>Banks's Address</th>
                {this.state.data.map((item)=>{
                return(
                  <tr>
                    <td>{item.BName}</td>
                    <td>{item.BNo}</td>
                    <td>{item.BAddress}</td>
                  </tr>
                )
              })}
            </tbody> 
        </table>
        <br></br>
        <h3 style={{color:'red'}}>Add one if you want</h3>
        <form onSubmit={e=>this.submitKHI(e)}>
            <input placeholder="Bank Name" onChange={e=>this.setState({BName:e.target.value})}/>
            <input placeholder="Bank No" onChange={e=>this.setState({BNo:e.target.value})}/>
            <input placeholder="Bank Address" onChange={e=>this.setState({BAddress:e.target.value})}/>
            <input type="submit"/>
        </form>
        </div>
    );
  }
}
class PeshawarBBanks extends Component{
  state={
    data:[],
    BName:'',
    HNo:'',
    BAddress:'',
  }
  componentDidMount(){
    const ref = firebase.database().ref("PeshawarBBanks");
    ref.on('value',(snapshot)=>{
      let words = snapshot.val();
      let newState = [];

      for(let key in words){
        newState.push({
          id:key,
          BName:words[key].BName,
          BNo:words[key].BNo,
          BAddress:words[key].BAddress,
        });

      }
      this.setState({
        data: newState
      });
    });
  }
  submitKHI = e =>{
    firebase
    .database()
    .ref("PeshawarBBanks")
    .push({
      BName:this.state.BName,
      BNo:this.state.BNo,
      BAddress:this.state.BAddress,
    });
    alert(this.state.BName+" successfully added in list, Kindly reload");
  }
  render(){
    return(
      <div>
        <center>
        <div>
          <button><Link to="/dashboard" style={{color:'black',fontSize:'30px',fontStyle:'bold'}}>BACK TO DASHBOARD</Link></button>
        </div>
        <h1>Find Blood Banks By Selecting Area</h1>
        <br></br>
        <button><Link to="/khibbanks">Karachi</Link></button>
        <button><Link to="/peshawarbbanks">Peshawar</Link></button>
        <button><Link to="/isbbbanks">Islamabad</Link></button>
        <button><Link to="/lhrbbanks">Lahore</Link></button>
        <button><Link to="/quettabbanks">Quetta</Link></button>
        </center>
        <br></br>
        <h1 id='title'><center>Blood Banks In Peshawar</center></h1>
        <table id='students'>
              <tbody>
                <th id='studentsth'>Bank's Name</th>
                <th id='studentsth'>Banks's Phone No</th>
                <th id='studentsth'>Banks's Address</th>
                {this.state.data.map((item)=>{
                return(
                  <tr>
                    <td>{item.BName}</td>
                    <td>{item.BNo}</td>
                    <td>{item.BAddress}</td>
                  </tr>
                )
              })}
            </tbody> 
        </table>
        <br></br>
        <h3 style={{color:'red'}}>Add one if you want</h3>
        <form onSubmit={e=>this.submitKHI(e)}>
            <input placeholder="Bank Name" onChange={e=>this.setState({BName:e.target.value})}/>
            <input placeholder="Bank No" onChange={e=>this.setState({BNo:e.target.value})}/>
            <input placeholder="Bank Address" onChange={e=>this.setState({BAddress:e.target.value})}/>
            <input type="submit"/>
        </form>
        </div>
    );
  }
}
class IsbBBanks extends Component{
  state={
    data:[],
    BName:'',
    HNo:'',
    BAddress:'',
  }
  componentDidMount(){
    const ref = firebase.database().ref("IsbBBanks");
    ref.on('value',(snapshot)=>{
      let words = snapshot.val();
      let newState = [];

      for(let key in words){
        newState.push({
          id:key,
          BName:words[key].BName,
          BNo:words[key].BNo,
          BAddress:words[key].BAddress,
        });

      }
      this.setState({
        data: newState
      });
    });
  }
  submitKHI = e =>{
    firebase
    .database()
    .ref("IsbBBanks")
    .push({
      BName:this.state.BName,
      BNo:this.state.BNo,
      BAddress:this.state.BAddress,
    });
    alert(this.state.BName+" successfully added in list, Kindly reload");
  }
  render(){
    return(
      <div>
        <center>
        <div>
          <button><Link to="/dashboard" style={{color:'black',fontSize:'30px',fontStyle:'bold'}}>BACK TO DASHBOARD</Link></button>
        </div>
        <h1>Find Blood Banks By Selecting Area</h1>
        <br></br>
        <button><Link to="/khibbanks">Karachi</Link></button>
        <button><Link to="/peshawarbbanks">Peshawar</Link></button>
        <button><Link to="/isbbbanks">Islamabad</Link></button>
        <button><Link to="/lhrbbanks">Lahore</Link></button>
        <button><Link to="/quettabbanks">Quetta</Link></button>
        </center>
        <br></br>
        <h1 id='title'><center>Blood Banks In Islamabad</center></h1>
        <table id='students'>
              <tbody>
                <th id='studentsth'>Bank's Name</th>
                <th id='studentsth'>Banks's Phone No</th>
                <th id='studentsth'>Banks's Address</th>
                {this.state.data.map((item)=>{
                return(
                  <tr>
                    <td>{item.BName}</td>
                    <td>{item.BNo}</td>
                    <td>{item.BAddress}</td>
                  </tr>
                )
              })}
            </tbody> 
        </table>
        <br></br>
        <h3 style={{color:'red'}}>Add one if you want</h3>
        <form onSubmit={e=>this.submitKHI(e)}>
            <input placeholder="Bank Name" onChange={e=>this.setState({BName:e.target.value})}/>
            <input placeholder="Bank No" onChange={e=>this.setState({BNo:e.target.value})}/>
            <input placeholder="Bank Address" onChange={e=>this.setState({BAddress:e.target.value})}/>
            <input type="submit"/>
        </form>
        </div>
    );
  }
}
class QuettaBBanks extends Component{
  state={
    data:[],
    BName:'',
    HNo:'',
    BAddress:'',
  }
  componentDidMount(){
    const ref = firebase.database().ref("QuettaBBanks");
    ref.on('value',(snapshot)=>{
      let words = snapshot.val();
      let newState = [];

      for(let key in words){
        newState.push({
          id:key,
          BName:words[key].BName,
          BNo:words[key].BNo,
          BAddress:words[key].BAddress,
        });

      }
      this.setState({
        data: newState
      });
    });
  }
  submitKHI = e =>{
    firebase
    .database()
    .ref("QuettaBBanks")
    .push({
      BName:this.state.BName,
      BNo:this.state.BNo,
      BAddress:this.state.BAddress,
    });
    alert(this.state.BName+" successfully added in list, Kindly reload");
  }
  render(){
    return(
      <div>
        <center>
        <div>
          <button><Link to="/dashboard" style={{color:'black',fontSize:'30px',fontStyle:'bold'}}>BACK TO DASHBOARD</Link></button>
        </div>
        <h1>Find Blood Banks By Selecting Area</h1>
        <br></br>
        <button><Link to="/khibbanks">Karachi</Link></button>
        <button><Link to="/peshawarbbanks">Peshawar</Link></button>
        <button><Link to="/isbbbanks">Islamabad</Link></button>
        <button><Link to="/lhrbbanks">Lahore</Link></button>
        <button><Link to="/quettabbanks">Quetta</Link></button>
        </center>
        <br></br>
        <h1 id='title'><center>Blood Banks In Quetta</center></h1>
        <table id='students'>
              <tbody>
                <th id='studentsth'>Bank's Name</th>
                <th id='studentsth'>Banks's Phone No</th>
                <th id='studentsth'>Banks's Address</th>
                {this.state.data.map((item)=>{
                return(
                  <tr>
                    <td>{item.BName}</td>
                    <td>{item.BNo}</td>
                    <td>{item.BAddress}</td>
                  </tr>
                )
              })}
            </tbody> 
        </table>
        <br></br>
        <h3 style={{color:'red'}}>Add one if you want</h3>
        <form onSubmit={e=>this.submitKHI(e)}>
            <input placeholder="Bank Name" onChange={e=>this.setState({BName:e.target.value})}/>
            <input placeholder="Bank No" onChange={e=>this.setState({BNo:e.target.value})}/>
            <input placeholder="Bank Address" onChange={e=>this.setState({BAddress:e.target.value})}/>
            <input type="submit"/>
        </form>
        </div>
    );
  }
}
class LhrBBanks extends Component{
  state={
    data:[],
    BName:'',
    HNo:'',
    BAddress:'',
  }
  componentDidMount(){
    const ref = firebase.database().ref("LhrBBanks");
    ref.on('value',(snapshot)=>{
      let words = snapshot.val();
      let newState = [];

      for(let key in words){
        newState.push({
          id:key,
          BName:words[key].BName,
          BNo:words[key].BNo,
          BAddress:words[key].BAddress,
        });

      }
      this.setState({
        data: newState
      });
    });
  }
  submitKHI = e =>{
    firebase
    .database()
    .ref("LhrBBanks")
    .push({
      BName:this.state.BName,
      BNo:this.state.BNo,
      BAddress:this.state.BAddress,
    });
    alert(this.state.BName+" successfully added in list, Kindly reload");
  }
  render(){
    return(
      <div>
        <center>
        <div>
          <button><Link to="/dashboard" style={{color:'black',fontSize:'30px',fontStyle:'bold'}}>BACK TO DASHBOARD</Link></button>
        </div>
        <h1>Find Blood Banks By Selecting Area</h1>
        <br></br>
        <button><Link to="/khibbanks">Karachi</Link></button>
        <button><Link to="/peshawarbbanks">Peshawar</Link></button>
        <button><Link to="/isbbbanks">Islamabad</Link></button>
        <button><Link to="/lhrbbanks">Lahore</Link></button>
        <button><Link to="/quettabbanks">Quetta</Link></button>
        </center>
        <br></br>
        <h1 id='title'><center>Blood Banks In Lahore</center></h1>
        <table id='students'>
              <tbody>
                <th id='studentsth'>Bank's Name</th>
                <th id='studentsth'>Banks's Phone No</th>
                <th id='studentsth'>Banks's Address</th>
                {this.state.data.map((item)=>{
                return(
                  <tr>
                    <td>{item.BName}</td>
                    <td>{item.BNo}</td>
                    <td>{item.BAddress}</td>
                  </tr>
                )
              })}
            </tbody> 
        </table>
        <br></br>
        <h3 style={{color:'red'}}>Add one if you want</h3>
        <form onSubmit={e=>this.submitKHI(e)}>
            <input placeholder="Bank Name" onChange={e=>this.setState({BName:e.target.value})}/>
            <input placeholder="Bank No" onChange={e=>this.setState({BNo:e.target.value})}/>
            <input placeholder="Bank Address" onChange={e=>this.setState({BAddress:e.target.value})}/>
            <input type="submit"/>
        </form>
        </div>
    );
  }
}
class BloodDonors extends Component{
  state={
    data:[],
  }
  componentDidMount(){
    const ref = firebase.database().ref("BloodDonors");
    ref.on('value',(snapshot)=>{
      let words = snapshot.val();
      let newState = [];

      for(let key in words){
        newState.push({
          id:key,
          donorName:words[key].donorName,
          donorAge:words[key].donorAge,
          donorBGroup:words[key].donorBGroup,
          donorNo:words[key].donorNo,
          donorAddress:words[key].donorAddress,
        });

      }
      this.setState({
        data: newState
      });
    });
  }
  render(){
    return(
      <div>
        <h1 id='title'><center>All Our Blood Donors</center></h1>
        <table id='students'>
              <tbody>
                <th id='studentsth'>Donor's Name</th>
                <th id='studentsth'>Donor's Blood Group</th>
                <th id='studentsth'>Donor's Age</th>
                <th id='studentsth'>Donor's Phone No</th>
                <th id='studentsth'>Donor's Address</th>
                {this.state.data.map((item)=>{
                return(
                  <tr>
                    <td>{item.donorName}</td>
                    <td>{item.donorBGroup}</td>
                    <td>{item.donorAge}</td>
                    <td>{item.donorNo}</td>
                    <td>{item.donorAddress}</td>
                  </tr>
                )
              })}
            </tbody> 
        </table>
        <br></br>
        <center><button><Link style={{color:'black'}} to="/donateblood">Become our donor</Link></button></center>
      </div>
    );
  }
}
class DonateBlood extends Component{
  state={
    donorName:'',
    donorAge:'',
    donorNo:'',
    donorBGroup:'',
    donorAddress:'',
  }
  componentDidMount(){
    firebase
    .database()
    .ref("BloodDonors")
    
  }
  formSubmit = e =>{
    firebase
    .database()
    .ref("BloodDonors")
    .push({
      donorName:this.state.donorName,
      donorAge:this.state.donorAge,
      donorNo:this.state.donorNo,
      donorBGroup:this.state.donorBGroup,
      donorAddress:this.state.donorAddress,
    });
    alert(this.state.donorName+" successfully added as our blood donor");
  }
  render(){
    return(
      <div className="wrapper">   
        <div className="form-wrapper" style={{backgroundImage: "linear-gradient(to left, #4780EC, #018CAD,white)"}}>
          <h1 style={{marginBottom:'80px',color:'white'}}>Become Blood Donor</h1>
          <form onSubmit={e=>this.formSubmit(e)}>
            <div className="firstName">
              <input
                placeholder="Name"
                type="text"
                name="Name"
                onChange={e=>this.setState({donorName:e.target.value})}
              />
            </div>
            <div className="firstName">
              <input
                placeholder="Age"
                type="number"
                name="Name"
                onChange={e=>this.setState({donorAge:e.target.value})}
              />
            </div>
            <div className="firstName">
              <input
                placeholder="Blood Group"
                type="text"
                name="Name"
                onChange={e=>this.setState({donorBGroup:e.target.value})}
              />
            </div>
            <div className="firstName">
              <input
                placeholder="Address"
                type="text"
                name="Name"
                onChange={e=>this.setState({donorAddress:e.target.value})}
              />
            </div>
            <div className="firstName">
              <input
                placeholder="Ph. Number"
                type="text"
                name="Name"
                onChange={e=>this.setState({donorNo:e.target.value})}
              />
            </div>
            <div className="firstName">
              <input
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

class Login extends Component {
  state = {
    Name: null,
    email: null,
    password: null,
    loginState: false,
    data:[],
    formErrors: {
        Name: "",
        email: "",
        password: ""
      }
  };
  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Name: ${this.state.Name}
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "Name":
        formErrors.Name =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };
  submitLogin=()=>{

    // alert('SubmitLogin');
  
    firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        this.submitSignedInOrNot();
      }).catch((error)=>{
        alert('Login or password is not Correct');
      });
      
    }
  submitRegister=()=>{
      // alert(this.state.login);
      firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
         alert('New User Created Successfully');
       }).catch((error)=>{
         alert('User Could not be registered');
       });
  }
  
  submitSignedInOrNot=()=>{
      // alert(this.state.login);
      firebase.auth().onAuthStateChanged((user)=>{
        if (user) {
          alert("Welcome "+this.state.Name);
        }else{
          alert('User is not Signed In');
        }
      });
  }
  
  render() {
    const { formErrors } = this.state;
    return (
      <div className="wrapper">   
        <div className="form-wrapper" style={{backgroundImage: "linear-gradient(to right, vine, white,grey)"}}>
          <h1 style={{marginBottom:'80px',color:'white'}}>Create Account</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">Name</label>
              <input
                className={formErrors.Name.length > 0 ? "error" : null}
                placeholder="Name"
                type="text"
                name="Name"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Name.length > 0 && (
                <span className="errorMessage">{formErrors.Name}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="createAccount">        
            <Link to='/dashboard/' onClick={this.submitLogin} style={{color:'white',fontSize:'30px',fontStyle:'bold'}}>Sign In</Link>
            <Link onClick={this.submitRegister} style={{color:'white',fontSize:'30px',fontStyle:'bold'}}>Sign Up</Link>
            <small>Already Have an Account?</small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

class App extends Component{
  render(){
    return(
      <Router>
          <Route path="/" exact component={Login}/>
          <Route path="/dashboard" exact component={Dashboard}/>
          <Route path="/khihospitals" exact component={KhiHosptials}/>
          <Route path="/isbhospitals" exact component={IsbHosptials}/>
          <Route path="/lhrhospitals" exact component={LhrHosptials}/>
          <Route path="/quettahospitals" exact component={QuettaHosptials}/>
          <Route path="/peshawarhospitals" exact component={PeshawarHosptials}/>
          <Route path="/khibbanks" exact component={KhiBBanks}/>
          <Route path="/peshawarbbanks" exact component={PeshawarBBanks}/>
          <Route path="/isbbbanks" exact component={IsbBBanks}/>
          <Route path="/lhrbbanks" exact component={LhrBBanks}/>
          <Route path="/quettabbanks" exact component={QuettaBBanks}/>
          <Route path="/donateblood" exact component={DonateBlood}/>
          <Route path="/blooddonors" exact component={BloodDonors}/>
      </Router>
    );
  }
}
export default App;

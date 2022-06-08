import React, { useState } from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import './stylessheet.css';
import MicRecorder from 'mic-recorder-to-mp3';

const API_PATH = 'http://localhost/signup.php';
const Mp3Recorder = new MicRecorder({ bitRate: 128 });

class Signup extends Component{

  constructor(props) 
{
    super(props);
    this.state = {
        sid1:'',
        fname: '',
        lname:'',
        mname:'',
        dob:'',
        phone:'',
        pwd1:'',
        pwd2:'',
        audioclip:'',
        gender:'',
        email: '',
        message: 'successfully signed up with sayItright',
        dataSent:'',
        isRecording: false,
        blobURL: '',
        isBlocked: false,
        user1:'',
        
                 }

                 this.submitfunction = this.submitfunction.bind(this);

  } 
  

  submitfunction = e => {
    e.preventDefault();
    console.log(this.state);
   

    axios({
      method: 'POST',
      url: API_PATH,
      headers: {
            
          'content-type': 'application/json'
      },
      
      data: this.state
      
  })
  .then(result => {
      console.log(result.data)
      this.setState({
          dataSent: result.data.sent,
          user1: result.data.user,
      })
      console.log(this.state)
  })
  .catch(error => this.setState({
      error: error.message
  }));
    
  
}



start = () => {
  if (this.state.isBlocked) {
    console.log('Permission Denied');
  } else {
    Mp3Recorder
      .start()
      .then(() => {
        this.setState({ isRecording: true });
      }).catch((e) => console.error(e));
  }
};

stop = () => {
  Mp3Recorder
    .stop()
    .getMp3()
    .then(([buffer, blob]) => {
      const blobURL = URL.createObjectURL(blob)
      this.setState({ blobURL, isRecording: false });
    }).catch((e) => console.log(e));
};

  render(){

    

 
return (
<div>
  

<center/><img src={process.env.PUBLIC_URL + '/images/logo.jpg'} width="250px" height="250px" align="center"  /> <br/><br/>
    
<form >
  
<div>
<label for="SID" ><center/><b>Student ID*</b></label>
<input type="text" placeholder="Student ID" name="sid1" id="sid1"  value={this.state.sid1} onChange={e => this.setState({ sid1: e.target.value })} required /> <br/><br/>

<label for="First Name" id="name"><b>First Name*</b></label> 
<input type="text" placeholder="First Name" name="fname" id="fname" value={this.state.fname} onChange={e => this.setState({ fname: e.target.value })} required /> 

<label for="Last Name"><b>Last Name</b></label> 
<input type="text" placeholder="Last Name" name="lname" id="lname"  value={this.state.lname} onChange={e => this.setState({ lname: e.target.value })} required /> 

<label for="Middle Name"><b>Middle Name</b></label> 
<input type="text" placeholder="Middle Name" name="mname" id="mname" value={this.state.mname} onChange={e => this.setState({ mname: e.target.value })} /> <br/><br/>

<label for="dob"><center /><b>Date of Birth</b></label> 
  <input type="date" placeholder="Date of Birth" name="dob" id="dob" value={this.state.dob} onChange={e => this.setState({ dob: e.target.value })} required /> <br/><br/>

<label for="Email" id="em"><center /><b>Email*</b></label> 
<input type="text" placeholder="email" name="email" pattern=".+@gmail.com" size="30" id="email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} required /> <br/><br/>

<label for="Contact"><center/><b>Contact*</b></label> 
<input type="text" placeholder="Contact" name="contact" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" id="phone" value={this.state.phone} onChange={e => this.setState({ phone: e.target.value })} required /> <br/><br/>

<label for="pwd"><b>Password</b></label>
<input type="password" placeholder="Enter Password*" name="pwd" id="pwd1" value={this.state.pwd1} onChange={e => this.setState({ pwd1: e.target.value })} required /> <br/><br/>

<label for="confirm"><b>re-enter</b></label>
<input type="password" placeholder="Confirm Password*" name="confirm" id="pwd2" value={this.state.pwd2} onChange={e => this.setState({ pwd2: e.target.value })} required /> <br/><br/>

<label for="Gender"><center/><b>Gender</b></label> 
<input type="radio" name="gender" value="male" id="g_m"  onChange={e => this.setState({ gender: e.target.value })} /> Male
<input type="radio" name="gender" value="female" id="g_f"  onChange={e => this.setState({ gender: e.target.value })} /> Female<br/><br/>

<div class='audio-container'>
  <p><b>Record Name</b></p>
  <button id="recbutton" onClick={this.start} disabled={this.state.isRecording}>
  Record
</button>

<div id="main-circle">
<button id="inner-circle"  onClick={this.stop} disabled={!this.state.isRecording} >
  Stop
</button>

</div>
<audio src={this.state.blobURL} controls="controls"  />
</div>
 </div>


<br/>
<div>
<button class="button1" type="submit" onClick={e=>this.submitfunction(e)}><strong>SignUp</strong></button> 
</div>
<div>

{this.state.dataSent ?
<p className="msg" ><b>
   SUCCESSFULLY SUBMITTED<b/></b><br/><br/>
   Thanks for submitting your feedback.<br/>
   We appreciate your time.
</p> :<p> </p>
  }

  {this.state.user1 ?
  <p> <b> SID already exists</b> </p> : <p></p>}

</div>
</form>
<p><center>Already have an account? <a href="Login.html" >Sign in</a>.</center></p>
</div>

);

  }
}



export default Signup;
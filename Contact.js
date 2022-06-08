import React from 'react';
import './stylessheet.css';
import { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

const API_PATH = 'http://localhost/sayITright/sayitright_app/src/api/Contact.php';

class Contact extends Component{

  constructor(props){
    super(props);
    this.state={ 
      StudentId:'',
      Firstname:'',
      Lastname:'',
      Email:'',
    phone:'',
    message:''
    }
    this.handleSubmit=this.handleSubmit.bind(this);
    }
    
    handleSubmit = e => {
      axios({
        method: 'post',
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
        })
        console.log(this.state)
    })
    .catch(error => this.setState({
        error: error.message
    }));
      e.preventDefault();
      console.log(this.state);
    
    
    }

  render(){
    return (

      <div>
         <div >
          <div styles="margin-right: 0%;">
          <input style={{ marginRight: "0px" }} type="text" placeholder="Search.." name="search" styles="border: 2px solid black;" />
          <button style={{ marginRight: "1250px" }} type="submit"><b>Search</b></button><br /><br />
          
          </div>
        </div>
      <center/>
      <img src={process.env.PUBLIC_URL + '/images/logo.jpg'}  width="250" height="250" align="center" /> <br/><br/>
      <form action="/Contact.php" method="POST">
      
        <label for="SID"><center/><b>Student ID*</b></label>
          <input type="text" placeholder="Student ID" name="StudentId" value={this.state.id}
                onChange={e => this.setState({id:e.target.value})} required / > <br/><br/>
          
          <label for="First Name"><b>First Name*</b></label> 
          <input type="text" placeholder="First Name" name="Firstname" value={this.state.fname}
                onChange={e => this.setState({fname:e.target.value})} required/> 
          
          <label for="Last Name"><b>Last Name</b></label> 
          <input type="text" placeholder="Last Name" name="Lastname" value={this.state.lname}
                onChange={e => this.setState({lname:e.target.value})} required/> <br/> <br/>
      
          <label for="Email"><center/><b>Email*</b></label> 
            <input type="text" placeholder="email" name="Email" pattern=".+@gmail\.com" size="30" value={this.state.email}
                onChange={e => this.setState({email:e.target.value})} required/> <br/><br/>
      
            <label for="phone"><center/><b>Phone*</b></label> 
              <input type="tel" placeholder="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={this.state.phone}
                onChange={e => this.setState({phone:e.target.value})} required/> <br/><br/>
              
           <div>
           
           
          <label for="query"><b>Query</b></label> <br/>
      
           <textarea placeholder="Type your query here......" name="message"  value={this.state.message} onChange={e => this.setState({message:e.target.value})} style={{textAlign:'center',justifyContent:'absolute',position: 'center',bottom:'80%', top:'80%',height: '20vh',width:'50vh',maxlength:'400'}}/>
      </div>
      <button  class="open-button" onClick={e => this.handleSubmit(e)} >Chat</button>
    
      
      
           <div class="chat-popup" id="myForm" >
             <form  class="form-container">  
             <label for="msg"><b>Message</b></label>
             <textarea placeholder="Type message.." name="msg" required></textarea>
         
             <button type="submit" class="btn">Send</button>
           
             <button type="button" class="btn cancel" onClick="closeForm()">Close</button>
           </form>
         </div>
          
      </form>
      </div>
          );
      }
      
      }
      
  

export default Contact;
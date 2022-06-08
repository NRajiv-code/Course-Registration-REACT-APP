import React, { Component } from 'react';
import {useHistory} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
const API_PATH = 'http://localhost/sayITright/sayitright_app/src/api/Insert.php'




class Login extends Component{
    constructor(props){
        super(props);
        this.onchangeemail=this.onchangeemail.bind(this);
        this.onchangepassword=this.onchangepassword.bind(this);
        this.state={Email:'',Password:'',}
    }
    onchangeemail(e){
        this.setState({Email:e.target.value});
    }

    onchangepassword(e)
    {
        this.setState({Password:e.target.value});
    }
    onsubmit(e){
        e.preventdefault();
        if(this.state.Password===this.state.passwordconform){

         const obj={
            Email:this.state.Email,
            Password:this.state.Password,
            passwordConform:this.state.passwordConform,
        };
     
    
        this.setState({Email:'',Password:''})
    }
    else{
        alert("Password missmatch")
    }
}
render()
{
    return(
        <div>
           <center/><img src={process.env.PUBLIC_URL + '/images/logo.jpg'} width="250" height="250" align="center"  /> <br/><br/>
      
      
      <form action="./Insert.php"  >
      <label for="email"><center/><b>Email*</b></label> 
      <input type="text" placeholder="something@gmail.com" name="Email" pattern=".+@gmail.com" 
      onChange={this.onchangeemail} size="30" id="em"  /> <br/><br/>
      
      <label for="pwd"><b>Password*</b></label>
      <input type="password" placeholder="Enter Password" name="Password" id="pwd"  onChange={this.onchangepassword} /> <br/><br/>
      <div>
      <button type="submit" class="button1" onClick={this.onsubmit} ><strong>Login</strong></button> <center/>
      </div>
      </form>
      <p><center>Create an account? <a href="signin.js" >Sign in</a>.</center></p>
      <br/><br/><br/><br/><br/><br/><br/><br/>
       </div>

    );
}

}
       
export default Login;
 
      
      
     
import React, { Component } from 'react';
import axios from 'axios';
const API_PATH = 'http://localhost/sayITright/sayitright_app/src/api/professorlogin.php';

class ProfessorLogin extends Component{
  constructor(props){
    super(props)
    {
      
      this.state={
        Subjectcode:'',
        Coursename:'',
        Location:'',
        Date:'',
        Time:'',
        Student_Name:'',
        StudentId:'',
        UTA_ID:'',
        Phone:'',
        Grade:'',
        Submission:'',

        

      }
    }
    this.onsubmit=this.onsubmit.bind(this);

}
onsubmit(event){
  event.preventDefault();
  console.log(this.state);
  axios(
    {
      method:'Post',
      URL:API_PATH,
      headers:{'content-type':'application/json'},

    }
  )
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
 
}


  render(){
    return(
      <div>
        <div class="header">
  <img src={process.env.PUBLIC_URL + '/images/logo.jpg'}/>

  
</div>

<div styles= "float: right;">
    <div>
        <div styles='height:50px'>
        <select styles="font-size: larger; position: relative;
        font-family:Verdana, Geneva, Tahoma, sans-serif; background-color:#dddddd ;">
        <option value = "blank">Elizabeth Diaz</option>
        <option id="_optionGuest"> Profile settings </option>
        <option id="_logout">Logout</option>
        <option id="_logout">Help</option>
        </select>
        </div>
        </div>
</div>
  

   
    <br/>
    

    <div >
    <h3 styles="  margin-top: 50px;"><font styles="font-size: 40px; color: rgb(0, 0, 0);"><b>W</b>elcome Prof.Elizabeth Diaz!</font></h3>
    </div>

    <div class="firstblock">
        <button type="submit" class="button1"><strong>Manage Course/Schedule</strong></button>
        <button type="submit" class="button1"><strong>Manage Audio</strong></button>
        <button type="submit" class="button1"><strong>Manage Profile</strong></button>
        <button type="submit" class="button1"><strong>Media</strong></button>
  
      </div>
     
          
          <input type="date"  border/><br/><br/>


  <div styles="text-align: center;" class="grid">
    <div styles="text-align: center;">

    <h3>Manage Student:</h3>  
    <div>
      <select id="id2" onchange="showFun('show_Student,this')">
        <option value="WDM">Web Data Management</option>
        <option value="DM">DATA MINING</option>
        <option value="DAA">DAA</option>
        <option>C programming</option>
      </select>
    </div>

   <br/><br/>

<div>
    <table border="5">
        <tr>
        <th>Subject Code</th>
        <th>Course Name</th>
        <th>Location</th>
        <th>Date</th>
        <th width="20%">Time</th>
        <th>Student_Name</th>
        <th>UTA_ID</th>
        <th>Phone</th>
        </tr>

        <tr>
        <td>#5301</td>
        <td>DAA</td>
        <td >Online Sync.</td>
        <td>07/10/20201</td>
        <td>04:00 PM - 6:50 PM</td>
        <td>Glen</td>
        <td>10013436</td>
        <td>989394837</td>
        </tr>

        <tr>
        <td>#5201</td>
        <td>WDM</td>
        <td>NH 110</td>
        <td>07/10/20201</td>
        <td>08:00 PM - 9:50 PM</td>
        <td>Max</td>
        <td>10013456</td>
        <td>989394456</td>
        </tr>

        <tr>
        <td>#5001</td>
        <td>DM</td>
        <td>Online Sync.</td>
        <td>07/10/20201</td>
        <td>01:00 PM - 2:50 PM</td>
        <td>Well</td>
        <td>10015676</td>
        <td>6793948317</td>
        </tr>

        <tr>
        <td>#4002</td>
        <td>C programming</td>
        <td>ERB 201</td>
        <td>07/10/20201</td>
        <td>02:00 PM - 03:50 PM</td>
        <td>Rohit</td>
        <td>100178986</td>
        <td>9893453237</td>
        </tr>

      </table> 
      </div>

      </div>

      <div styles="text-align: center;"> 
        
        

        
            <h3>Manage Homework:</h3><br/><br/><br/>

        <table border="5">
        <tr>
        <th>Subject Code</th>
        <th>Course Name</th>
        <th>Submission</th>
        <th>Date</th>
        <th>Grade</th>
        <th>Student_Name</th>
        <th>UTA_ID</th>
        <th>Phone</th>
        </tr>

        <tr>
        <td>#4002</td>
        <td>C programming</td>
        <td>Zip</td>
        <td>07/10/20201</td>
        <td>A</td>
        <td>Rohit</td>
        <td>100178986</td>
        <td>9893453237</td>
        </tr>

        
        <tr>
        <td>#4002</td>
        <td>C programming</td>
        <td>Zip</td>
        <td>07/10/20201</td>
        <td>A</td>
        <td>Rohit</td>
        <td>100178986</td>
        <td>9893453237</td>
        </tr>
        
        <tr>
        <td>#4002</td>
        <td>C programming</td>
        <td>Zip</td>
        <td>07/10/20201</td>
        <td>A</td>
        <td>Rohit</td>
        <td>100178986</td>
        <td>9893453237</td>
        </tr>
        
        <tr>
        <td>#4002</td>
        <td>C programming</td>
        <td>Zip</td>
        <td>07/10/20201</td>
        <td>A</td>
        <td>Rohit</td>
        <td>100178986</td>
        <td>9893453237</td>
        </tr>

        
        
    </table>
  </div>

</div>

<div styles="text-align: center;" class="grid">
<div styles="text-align: center;">
<h3>Create Announcement:</h3>  
<label><b>Announcement Subject : </b></label><input type="text" placeholder="Subject" name="subject"/><br/><br/>
<label><b>Announcement : </b></label><input type="text" placeholder="type something" name="announcement"/><br/><br/>
<button type="submit" class="button1" onClick={this.onsubmit} ><strong>Login</strong></button> <center/>

<label><b>Select class</b></label>
<select>
  <option>Class #004</option>
  <option>Class #005</option>
  <option>Class #007</option>
</select><br/><br/>
<textarea placeholder="type...." name="query" maxlength="400" height="200px" styles="width: 300px; height: 150px;"></textarea>



</div>

<div styles="text-align: center;">
<h3> Manage Recordings:</h3>
<table border="5">
        <tr>
        <th>Student Name</th>
        <th>Recordings</th>
        <th>Language</th>
        <th>Subject</th>
        <th>Country</th>
        <th>Action</th>
        <th>UTA_ID</th>
        </tr>

        <tr>
          <td>Madhu</td>
          <td><img src="./Images/recording.png" alt="recording" width="20" height="20"/></td>
          <td>Telugu</td>
          <td>WDM</td>
          <td>India</td>
          <td><img src="./Images/del.png" alt="recording" width="20" height="20"/></td>
          <td>100187893</td>
        </tr>

        <tr>
          <td>Sarah</td>
          <td><img src="./Images/recording.png" alt="recording" width="20" height="20"/></td>
          <td>English</td>
          <td>WDM</td>
          <td>India</td>
          <td><img src="./Images/del.png" alt="recording" width="20" height="20"/></td>
          <td>1001834593</td>
        </tr>

        <tr>
          <td>Pavan</td>
          <td><img src="./Images/recording.png" alt="recording" width="20" height="20"/></td>
          <td>Gujarati</td>
          <td>WDM</td>
          <td>India</td>
          <td><img src="./Images/del.png" alt="recording" width="20" height="20"/></td>
          <td>1001457893</td>
        </tr>

        <tr>
          <td>Madhu</td>
          <td><img src="./Images/recording.png" alt="recording" width="20" height="20"/></td>
          <td>Telugu</td>
          <td>WDM</td>
          <td>India</td>
          <td><img src="./Images/del.png" alt="recording" width="20" height="20"/></td>
          <td>100187893</td>
        </tr>

        
        
    </table>
  
</div>

</div>


    <br/><br/>
    <br/><br/><br/>

    

      </div>
    );
  }
}

export default ProfessorLogin;
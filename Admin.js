import axios from 'axios';
import React, { Component } from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
const API_PATH = 'http://localhost/sayITright/sayitright_app/src/api/Admin.php';

class Admin extends Component

{

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
<div>
            <h1 styles="left: auto;">sayITright</h1>  

   
    <br/>

  <div >
    <div styles="margin-right: 0%;">
      <input type="text" placeholder="Search.." name="search" styles="border: 2px solid black;"/>
      <button type="submit" ><b>Search</b></button><br/><br/>
    </div>
  </div>
<br/>
  <span styles="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; open</span>
  <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
      <a href="#" onclick="function_Disp(id)">Create Reports</a>
      <a href="#">Manage Schedule</a>
      <a href="#">Manage Advisors</a>
      <a href="#">Maintain website</a>

    </div>

    <br/>
    <center>
    <p><img height="600" id="map_img" src={process.env.PUBLIC_URL + '/images/graph.jpg'}  width="80%"/> </p>
        </center>
        <br/><br/>

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
          <button type="submit" class="button1" onClick={this.onsubmit} ><strong>Login</strong></button> <center/>
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
            <td>Sumit</td>
            <td>100170986</td>
            <td>9893765237</td>
            </tr>
            
            <tr>
            <td>#4002</td>
            <td>C programming</td>
            <td>Zip</td>
            <td>07/10/20201</td>
            <td>A</td>
            <td>Christie</td>
            <td>1001982341</td>
            <td>8987635232</td>
            </tr>
            
            <tr>
            <td>#4002</td>
            <td>C programming</td>
            <td>Zip</td>
            <td>07/10/20201</td>
            <td>A</td>
            <td>Madhu</td>
            <td>10013445676</td>
            <td>62897378233s</td>
            </tr>
    
            
            
        </table>
      </div>
    
    </div>
    <br/><br/><br/>
        </div>
    </div>

  );

  }
}



export default Admin;
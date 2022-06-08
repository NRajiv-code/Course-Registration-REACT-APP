import React from 'react';

function Student(){

    return(
        <div>

  
  <div class="header">
    <img src="/images/logo.jpg"/>
    <h1>sayITright</h1>  
    
  </div>
  
  <div styles= "float: right; margin-left: 100%;">
      <div>
          <div styles='height:50px'>
          <select styles="font-size: larger; position: relative;
          font-family:Verdana, Geneva, Tahoma, sans-serif; background-color:#dddddd ;">
          <option value = "blank">Madhu Bendrum</option>
          <option id="_optionGuest"> Profile settings </option>
          <option id="_logout">Logout</option>
          <option id="_logout">Help</option>
          </select>
          </div>
          </div>
  </div>
    
 
   
    <br/> 
      
  
      <div >
      <h3 styles="  margin-top: 50px;"><font styles="font-size: 40px; color: rgb(0, 0, 0);"><b>W</b>elcome Madhu Bendrum!</font></h3>
      </div>
  
      <div class="firstblock">
          <button type="submit" class="button1"><strong>Manage Course/Schedule</strong></button>
          <button type="submit" class="button1"><strong>Manage Audio</strong></button>
          <button type="submit" class="button1"><strong>Manage Profile</strong></button>
          <button type="submit" class="button1"><strong>Media</strong></button>
    
        </div>
       
            
            <input  type="date" /><br/><br/>
      <div>
  
        <h3>Manage class</h3>
      <table border="5">
          <tr>
          <th>Subject Code</th>
          <th>Course Name</th>
          <th>Location</th>
          <th>Date</th>
          <th>Time</th>
          </tr>
          <tr>
          <td>#5301</td>
          <td>DAA</td>
          <td>Online Sync.</td>
          <td>07/10/20201</td>
          <td>04:00 PM - 6:50 PM</td>
          
          </tr>
          <tr>
          <td>#5201</td>
          <td>DAMT</td>
          <td>NH 110</td>
          <td>07/10/20201</td>
          <td>08:00 PM - 9:50 PM</td>
          </tr>
          <tr>
          <td>#5001</td>
          <td>DM</td>
          <td>Online Sync.</td>
          <td>07/10/20201</td>
          <td>01:00 PM - 2:50 PM</td>
          </tr>
          <tr>
          <td>#4002</td>
          <td>C programming</td>
          <td>ERB 201</td>
          <td>07/10/20201</td>
          <td>02:00 PM - 03:50 PM</td>
          </tr>
  
        </table> 
      </div>
      <br/><br/>
      <div>
              <h2>Submit Homework</h2>
  
                <h3>Upload Assignment</h3>

                <form action="/action_page.php">

                  <textarea placeholder="Add Comments" name="query" style={{textAlign:'center',justifyContent:'absolute',position: 'center',bottom:'80%', top:'80%',height: '20vh',width:'50vh',maxlength:'400'}} maxlength="400" height="200px" styles="width: 80px; height: 30px;"></textarea><br/><br/>
                  
                  <label for="myfile">Select files(PDF/Word/PNG):</label>
                  <input type="file" id="myfile" name="myfile" multiple /><br/><br/>
                  <button type="submit" class="button1">Submit Assignment</button>
                </form>
                
      </div>
      <br/><br/>
  
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  
      
      
  
  
  
  


        </div>

    );
}

export default Student;
import React from 'react';

import { Component } from 'react';

class About extends Component{
  render()
  {
    return(
        <>
        <div>      
           
       
           <input style={{  marginRight: "0px" }} type="text" placeholder="Search.." name="search" styles="border: 2px solid black;" />
        <button style={{  marginRight: "1250px" }} type="submit"><b>Search</b></button><br /><br />
    
  
<div class="background">
  <div class="transbox">
    
        <p styles="  margin-top: 50px; align-content: center;"><b><font styles="font-size: 40px; color: black;">Welcome to SayITright</font> </b></p>      
  <p id="id1">The University of Texas at Arlington is a public research university in Arlington, Texas.</p>
<p id="id1">UTA offers state-of-the-art facilities that encourage students to be critical thinkers. Through academic, internship, and research programs, our students receive real-world experiences that help them contribute to their community and, ultimately, the world.</p>
<p>The university was founded in 1895 and was in the Texas A&M University System for several decades until joining The University of Texas System in 1965.</p>

  <p>This University offers more than 100 Masters and Bachelor courses.</p>
  </div>
  
</div>


</div>
</>
    );
  }
    
}

export default About;
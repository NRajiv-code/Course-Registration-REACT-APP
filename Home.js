import React from 'react';

import { Component } from 'react';
class Home extends Component
{
  render()
  {
    return(
        
        <><><div>
          <input style={{ marginRight: "0px" }} type="text" placeholder="Search.." name="search" styles="border: 2px solid black;" />
          <button style={{ marginRight: "1250px" }} type="submit"><b>Search</b></button><br /><br />
        </div><div>
            <div styles=" text-align:center; ">
              <img src={process.env.PUBLIC_URL + '/images/logo.jpg'} alt="sorry check your network" width="250" height="250" />

              <center>
                <p styles="  margin-top: 50px;"><font styles="font-size: 40px; color: black;"><b>W</b>elcome to SayITright</font></p><br />
                <p id="id1">This is a student/professor portal, where students and professors manage classwork</p>
                <p id="id1">The best feature of the website is to provide a way to learn how to
                  <br />pronounce eachothers names by having it registered in their profile</p>
              </center>
            </div>
          </div><div>
            <marquee behavior="scroll" direction="right"> Updates : UTA artist wins Best in Show for paintings, UTA team exploring artificial ferroelectric materials, UTA launches MPA cohort with city of Fort Worth</marquee>
          </div></></>
  
  

    );

    
}
}
export default Home;
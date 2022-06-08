import React from 'react';
import {useHistory} from 'react-router-dom'

function Services(){
    let history=useHistory();

    return(
        <div>
    <div >
      <div>
      <input style={{  marginRight: "0px" }} type="text" placeholder="Search.." name="search" styles="border: 2px solid black;" />
        <button style={{  marginRight: "1250px" }} type="submit"><b>Search</b></button><br /><br />
      </div>
    </div>      

    <center /><img src={process.env.PUBLIC_URL + '/images/Logo.jpg'} width="250" height="250" align="center"  /> <br/><br/>

    <div >
      <button type="submit" class="button1" onClick={() => {history.push('/Signup')}} ><strong>Create Profile</strong></button>
      <button type="submit" class="button1" onClick={() => {history.push('/Login')}}><strong>Manage School & class</strong></button>
      <button type="submit" class="button1"><strong>Media & Homework</strong></button>

    </div>
   
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

        </div>


);
}

export default Services;
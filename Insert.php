<?php

include 'connect.php';
session_start();

if(isset($_POST["Email"])&& isset($_POST["Password"]))
{

    $Email=mysqli_real_escape_string($con,$_POST["Email"]);
    $Password=$_POST["Password"];
    $sql="select * from users where email='$Email' and password='$Password'";
    $run_query=mysqli_query($con,$sql);
    $count=mysql_num_rows($run_query);

    if(mysqli_query($con,$sql)){

        echo " Login successfull"
    }
    else{
        echo "server error"; 
    }
       
}
}
?> 
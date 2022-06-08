<?php
include 'connect.php',
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");



$Subjectcode=$_POST['Subjectcode'];
$Coursename=$_POST['Coursename'];
$Location=$_POST['Location'];
$Schedule=$_POST['Schedule'];
$Studentname=$_POST['Studentname'];
$StudentID=$_POST['StudentId'];
$Professor=$_POST['Professor'];
$Date=$_POST['Date'];
$Time=$_POST['Time'];
$Phone=$_POST['Phone'];

$sql=" select s.Subjectcode,s.Coursename,s.Location,s.Date,s.Time,s.Studentname,s.StudentID,s.Phone,m.Professor,c.Language,c.recordings,
c.subject,c.country,c.action * from managestudent s 
join managecourse m on m.StudentID=s.StudentID join managerecordings c on c.StudentID=s.StudentID ";

$result=mysqli_query($con,$sql);
if($result)
{
    $Message="Query submitted successfully";
}

else{

    $Message="server error... Please try later";
}
echo($Message);
}





?>
<?php
include 'connect.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
// $rest_json = file_get_contents("php://input");
// $_POST = json_decode($rest_json, true);


$StudentId=$_POST['StudentId'];
$Firstname=$_POST['Firstname'];
$Lastname=$_POST['Lastname'];
$Email=$_POST['Email'];
$Phone=$_POST['Contact'];
$Query=$_POST['Query'];

$sql="insert into Contact(StudentId,Firstname,Lastname,Email,Phone,Query)
values('$StudentId','$Firstname','$Lastname','$Email','$Contact','$Query')";

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
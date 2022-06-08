<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$conn = mysqli_connect("localhost", "root", "", "sayitright");

$query = "INSERT INTO signup(sid,fname,lname,mname,dob,phone,pwd1,pwd2,audioclip,g_m,g_f,email)
VALUES(
'" . $_POST['sid'] . "',
'" . $_POST['fname'] . "',
'" . $_POST['lname'] . "'
'" . $_POST['mname'] . "',
'" . $_POST['dob'] . "',
'" . $_POST['phone'] . "',
'" . $_POST['pwd1'] . "',
'" . $_POST['pwd2'] . "',
'" . $_POST['audioclip'] . "',
'" . $_POST['g_m'] . "',
'" . $_POST['g_f'] . "',
'" . $_POST['email'] . "',

)";
$result = @mysqli_query($conn, $query);
if ($result) {
    echo json_encode(["sent" => 1, ]);
} else {
    echo json_encode(["sent" => 0, ]);
}
?>
 
<!-- 
 header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

 $conn = mysqli_connect("localhost", "root", "", "sayitright");
          
        // Check connection
        if($conn === false){
            die("ERROR: Could not connect. " 
                . mysqli_connect_error());
        }
          
        // Taking all  values from the form data(input)
        $sid =  $_REQUEST['sid'];
        $first_name =  $_REQUEST['fname'];
        $last_name = $_REQUEST['lname'];
        $middle_name =  $_REQUEST['mname'];
        $dob = $_REQUEST['dob'];
        
        $phone =  $_REQUEST['phone'];
        $pwd1 =  $_REQUEST['pwd1'];
        $pwd2 =  $_REQUEST['pwd2'];
        $audioclip =  $_REQUEST['audioclip'];
        $g_m =  $_REQUEST['g_m'];
        $g_f =  $_REQUEST['g_f'];
        $email = $_REQUEST['email'];

        // Performing insert query execution
    

        $query = "insert into signup(sid,fname,lname,mname,dob,phone,pwd1,pwd2,audioclip,g_m,g_f,email)
values(
'" . $_POST['sid'] . "',
'" . $_POST['fname'] . "',
'" . $_POST['lname'] . "'
'" . $_POST['mname'] . "',
'" . $_POST['dob'] . "',
'" . $_POST['phone'] . "',
'" . $_POST['pwd1'] . "',
'" . $_POST['pwd2'] . "',
'" . $_POST['audioclip'] . "',
'" . $_POST['g_m'] . "',
'" . $_POST['g_f'] . "',
'" . $_POST['email'] . "',

)";
          
        if(mysqli_query($conn, $query)){
            echo "<h3>data stored in a database successfully." 
                . " Please browse your localhost php my admin" 
                . " to view the updated data</h3>"; 
  
            echo nl2br("\n$first_name\n $last_name\n "
                . "$middle_name\n $dob\n $email\n $phone"\n $pwd1\n $audioclip\n $g_f\n $g_f);
        } else{
            echo "ERROR: Hush! Sorry $sql. " 
                . mysqli_error($conn);
        }
          
        // Close connection
        mysqli_close($conn);
        ?>
    </center>
</body>
  
</html> -->
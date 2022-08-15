<?php
require("dbconnection.php");
if(isset($_POST['u_email'])){
    $email=$_POST['u_email'];
    $exec_query=mysqli_query($connection,"SELECT * FROM users WHERE user_em='$email'");
    if(mysqli_num_rows($exec_query)>0){
        echo "<span style='color:red'>Email is not available</span>";
        echo "<script>$('#submitbtn').attr('disabled',true);</script>";
        }
    else{
        echo "<span style='color:green'>Email is available</span>";
        echo "<script>$('#submitbtn').attr('disabled',false);</script>";
        }
}

?>
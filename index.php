<?php
require("dbconnection.php");
$msg="";

if(isset($_POST['btn_save'])){
    $fname=$_POST['u_fname'];
    $lname=$_POST['u_lname'];
    $email=$_POST['u_email'];
    $mobile=$_POST['u_mobile'];
    $cpass=$_POST['u_cpass'];

      // echo $utype;

      $query="INSERT INTO users(user_fn,user_ln,user_em,user_mob,user_pas) VALUES('$fname','$lname','$email','$mobile','$cpass')";

      $exec_query=mysqli_query($connection,$query);
  
      if($exec_query){
          $msg="Data inserted successfully!";
      }
      else{
          $msg="error";
      }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD App</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
        integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
        crossorigin="anonymous"></script>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <style>
        .formbox {
            border-radius: 10px;
        }
    </style>
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                PHP CRUD
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="container">
        <div class="alert alert-primary my-3" role="alert">
            <h3 class="text-dark text-center">
                SIGNUP
            </h3>
        </div>
        <form action="" method="post">
        <div class="formbox shadow-lg p-4">
            <div class="mb-3">
                <label for="" class="form-label">First Name :</label>
                <input type="text" class="form-control" name="u_fname" id="fn" placeholder="Enter your name:" required>
                <span id="fninvalid"></span>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Last Name :</label>
                <input type="text" class="form-control" name="u_lname" id="ln" placeholder="Enter your name:" required>
                <span id="lninvalid"></span>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Mobile:</label>
                <input type="text" class="form-control" name="u_mobile" id="mb" placeholder="Enter your Mobile no:" required>
                <span id="mobinvalid"></span>
                
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Email</label>
                <input type="email" class="form-control" name="u_email" id="em" placeholder="Enter your email" required>
                <span id="eminvalid"></span>
                <span id="emin"></span>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Password:</label>
                <input type="password" class="form-control" id="pas" name="u_pass" placeholder="Password" required>
                <span id="pasinvalid"></span>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Confirm Password:</label>
                <input type="password" class="form-control" id="cpas" name="u_cpass" placeholder="Password" required>
                <span id="cpasinvalid"></span>
            </div>
            <div class="">
                <button type="submit" id="submitbtn" class="btn btn-primary shadow-lg" name="btn_save">Submit</button>
            </div>
            <p><?php echo $msg; ?></p>
        </div>
        </form>
    </div>
    <script>
        $(document).ready(function () {
            $('#em').keyup(function(){
                var email=$('#em').val();
                $.ajax({
                    method:"POST",
                    url:"checkemail.php",
                    data:{
                        u_email:email
                    },
                    success:function(response){
                    console.log(response);
                    $('#emin').html(response);
                    $('#submitbtn').attribute(response);
                    }
                });
            });
        });
    </script>
    <script src="validation.js"></script>
</body>

</html>
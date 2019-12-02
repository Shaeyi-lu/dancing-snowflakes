<?php
if(!empty($_POST)){
$dbhost="localhost";
$dbuser="root";
$dbpass="12345";
$dbname="legacy";
$conn= mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
if(mysqli_connect_error()){
  die("Connection failed: " . mysqli_connect_error(). "(" . mysqli_connect_error() . ")");
}
if(isset($_POST['login'])){
  $email=$_POST['email'];
  $pass=$_POST['pass'];
  $sql= "SELECT * FROM users WHERE email='".$email."' AND pass='".$pass."' LIMIT 1";
  $res=mysqli_query($conn, $sql);
  if (mysqli_num_rows($res)==1){
    if($email !='' && $pass !='')
        {
        header("Location:payments.html");
        }
        }
    exit();
  }
  else {
    echo "Invalid Login Information. Please try again.";
    exit();
  }
}
if(isset($_POST['signup'])){
  $fname=$_POST['fname'];
  $lname=$_POST['lname'];
  $email=$_POST['email'];
  $pass=$_POST['pass'];
    $sql= "INSERT INTO users (fname, lname, email, pass, membersince) 
    VALUES ('".$fname."', '".$lname."','".$email."','".$pass."', NOW()); ";
    $res=mysqli_query($conn, $sql);
    if ($res==TRUE){
      if($fname !='' && $lname !='' && $email !='' && $pass !='')
        {
        //  To redirect form on a particular page
        header("Location:login.html");
        }
      exit();
    }
    else {
      echo "Invalid entry. Please try again.";
      exit();
    }
}
?>
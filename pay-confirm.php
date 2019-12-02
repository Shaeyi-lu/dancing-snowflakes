<?php
// payment confirmation summary
if(!empty($_POST)){
$dbhost="localhost";
$dbuser="root";
$dbpass="12345";
$dbname="legacy";

$conn= mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
if(mysqli_connect_error()){
  die("Connection failed: " . mysqli_connect_error(). "(" . mysqli_connect_error() . ")");
}

if(isset($_POST['pay'])){
  $name=$_POST['name'];
  $number=$_POST['number'];
  $date=$_POST['date'];
  $code=$_POST['code'];
    $sql= "INSERT INTO payment (name, number, date, code) 
    VALUES ('".$name."', '".$number."','".$date."','".$code."'); ";
    $res=mysqli_query($conn, $sql);
    if ($res==TRUE){
      echo "<h1>Payment Confirmed!</h1>";
      echo "<h2>Purchase Summary:</h2>";
      echo "Cardholder Name: " .$name. "<br>";
      echo "Card Number: ". $number. "<br>";
      echo "Payment Amount: ". "<br>";
      echo "Transaction Date: " .date("l"). ", " .date("m-d-Y"). " at " .date('h:i A', strtotime($date)). "<br>" ;

      echo "<h2>Your Selection: </h2>";
      echo "Movie: ". "<br>";
      echo "Date: ". "<br>";
      echo "Time: ". "<br>";
      echo "Screen: ". "<br>";
      echo "Total # of Tickets: ". "<br>";
      
      exit();
    }
    else {
      echo "Invalid entry. Please try again.";
      exit();
    }
}
}
?>
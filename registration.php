<?php
$conn=mysqli_connect("localhost","root","","products");
if($conn) {
    echo "Connected";
}
else {
    echo "Failed";
}

$fname= $_POST['fname'];
$lname= $_POST['lname'];
$email= $_POST['email'];
$password= $_POST['password'];

$data = "INSERT INTO registration (fname,lname,email,password) VALUES ('$fname','$lname','$email','$password')";
$check = mysqli_query($conn, $data);
if($check) {
    header('Location: http://localhost/PRODUCTS/Books.html');
    exit;
   }
else {
    echo "Data not sent";
}
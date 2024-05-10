<?php
$conn=mysqli_connect("localhost","root","","products");
if($conn) {
    echo "Connected";
}
else {
    echo "Failed";
}

$username= $_POST['username'];
$password= $_POST['password'];

$data = "INSERT INTO login (username, password) VALUES ('$username','$password')";
$check = mysqli_query($conn, $data);
if($check) {
    header('Location: http://localhost/PRODUCTS/Books.html');
    exit;
   }
else {
    echo "Data not sent";
}
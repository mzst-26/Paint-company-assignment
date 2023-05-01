<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header("Content-Type: application/json; charset=UTF-8");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "paint-company";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents("php://input"), true);

if ($data["message"] != "" ){
  $message = $data["message"];

  $sql = "INSERT INTO Messages (Message) VALUES ('$message')";
  
  if ($conn->query($sql) === TRUE) {
    echo json_encode(array("message" => "Message sent successfully!"));
  } else {
    echo json_encode(array("message" => "Error: " . $sql . "<br>" . $conn->error));
  }
  
} else{
  echo "Empty request";
}

$conn->close();
?>

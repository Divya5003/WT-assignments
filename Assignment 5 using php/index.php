<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marks</title>
</head>

<body>

</body>

</html>

<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "marks";

$conn = mysqli_connect($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// $sql = "INSERT INTO student VALUES (17, 'Divya', 48, 54)";
$sql = "SELECT * FROM student";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    foreach ($result as $row) {
        echo $row["Roll no."] . " " . $row["Name"] . "<br>";
    }
}

?>
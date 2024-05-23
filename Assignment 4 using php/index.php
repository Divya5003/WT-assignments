<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Electricity Bill</title>
</head>

<body>
    <h1>Electricity Bill</h1>
    <form action="index.php" method="post">
        <label for="unit">Enter the unit consumed:</label>
        <input type="text" name="unit">
        <input type="submit" name="calculate" value="Calculate">
    </form>
</body>

</html>

<?php
if (isset($_POST["calculate"])) {
    if (empty($_POST["unit"])) {
        echo "Please enter the unit consumed.";
    } else {
        $unit = $_POST["unit"];
        echo "The unit consumed are " . $unit * 3.5;
    }
}
?>
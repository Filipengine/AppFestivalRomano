<?php

include ("credenciais.php");

$sql = "INSERT INTO Login (Nome, Password) VALUES ('Igor', '123')";

if ($con->query($sql) === TRUE) {
echo "New record created successfully";
} else {
echo "Error: " . $sql . "<br>" . $con->error;
}$con->close();
?> 
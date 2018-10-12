<?php
$servername = "127.0.0.1";
$username = "filipeng_teste";
$password = "filipengine123";
$dbname = "filipeng_teste";

// Create connection
$con = mysqli_connect($servername, $username, $password, $dbname);

if (!$con)
{
    die("Falha na ligação: ".$con->connect_error);
}

?> 
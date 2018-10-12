<?php

include ("credenciais.php");

$sql = "SELECT * FROM Login";
$result = mysqli_query($con, $sql);
$rows = array();

if(mysqli_num_rows($result) > 0){
    while($r = mysqli_fetch_assoc($result)){
        array_push($rows, $r);
    }
    
    print json_encode($rows);
}else{
    echo "Não existem dados a apresentar";
}

mysqli_close($con);

?> 
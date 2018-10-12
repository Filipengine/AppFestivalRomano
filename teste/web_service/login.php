<?php

include ("credenciais.php");

$nome = mysqli_escape_string($con, $_POST['nome']);
$password = mysqli_escape_string($con, $_POST['password']);


$squery = mysqli_query ($con, "SELECT nome, password FROM Login WHERE nome ='$nome'");
$query = mysqli_fetch_array($squery, MYSQLI_BOTH);
$rowcount = mysqli_num_rows($squery);

if($rowcount == 1)
{
    if ($password != $query['password']){
        echo  1; //Password incorreta
    }
    
    else{ 
        echo 2; //Login com sucesso

    }
}
else {
        echo 0; //Conta inexistente
}
?> 
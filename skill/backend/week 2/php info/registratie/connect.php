<?php
$DATABASE_HOST = 'localhost';
$DATABASE_USER = 'root';
$DATABASE_PASS = 'root';
$DATABASE_NAME = 'voorbeeld';

$con = mysqli_connect($DATABASE_HOST, $DATABASE_NAME, $DATABASE_PASS, $DATABASE_USER);
if (mysqli_connect_errno()){
    exit('connection Database voorbeeld failed: ' . mysqli_connect_errno());
}
?>

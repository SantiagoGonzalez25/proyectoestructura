<?php 

require_once('conexion.php');
$id=$_POST['boxid'];

print "$id</p>\n";


$sql=("DELETE FROM `usuarios` WHERE `usuarios`.`identificacion` = $id");

if (mysqli_query($conn, $sql)) {
    echo "Exito en la insercion";
    header("Location: ../index.html", TRUE, 301);
    exit();
    mysqli_close($conn);
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

?> 
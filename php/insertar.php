<?php

require_once('conexion.php');
$identificacion=$_POST ['tipoid'];
$tipoid=$_POST['boxid'];
$nombre=$_POST['boxname'];
$apellido=$_POST['boxlastname'];
$email=$_POST['boxemail'];
$n_tel=$_POST['boxnumerocel'];
$password=$_POST['boxpass'];
$tipo_usuario=$_POST['tipousr'];
print "<p>el nombre es $nombre</p>\n";
print "<p>el apellido es $apellido</p>\n";
print "<p>el email es $email</p>\n";
print "<p>el celular es $n_tel</p>\n";
print "<p>el select es $identificacion</p>\n";
print "<p>el select tipo de usuario es $tipo_usuario</p>\n";


<div class=".
."></div>
//ejecutar el query en la base de datos medianten la conexión
if(mysqli_query($conn, $sql)){
    echo "Exito en la insercion";
    header("location:../index.html", TRUE,301);
    Exit();
    mysqli_close($conn);

}else{
    echo "Error: " .$sql. "<br>" . mysqli_error($conn);
}


?>
<?php
require_once('conexion.php')

?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">

<title>ANTIFAKETEAM</title>
<link href="../css/estilos.css" rel="stylesheet" type="text/css"/>
<script src="../js/funciones.js"></script>

 
</head>

<body>
    <header class="header">
        <ul> 
            <li>
                <a href="../index.html" >inicio</a>
           </li>    
              <li>
                    <a href="indexformulario.html" >registrar</a>
               </li>
               <li>
                     <a href="indexmru.html" >mru</a>
                </li>
                <li>
                     <a href="indextrabajo.html">trabajo</a>
                </li>
                <li>
                     <a href="indexbiblioteca.html">biblioteca</a>
                </li>
        </ul>

   </header>
<div>

    <h1 id="textocontenedor"></h1>
    <br>
    <br>
    <table border="3" id="contenedor">
        <tr>
            <!--<td>id</td>-->
            <td>identificacion</td>
            <td>Nombre</td>
            <td>apellido</td>
            <td>email</td>
            <td>numero de telefono</td>
            <td>Tipo de usuarios</td>
        </tr>
    <?php
    $sql="SELECT * FROM usuarios";
    $result=mysqli_query($conn, $sql);
    while($mostrar=mysqli_fetch_array($result)){
    ?>

    <tr>
        <td><?php echo $mostrar['identificacion']?></td>
        <td><?php echo $mostrar['nombre']?></td>
        <td><?php echo $mostrar['apellido']?></td>
        <td><?php echo $mostrar['email']?></td>
        <td><?php echo $mostrar['n_tel']?></td>
        <td><?php echo $mostrar['tipo_usuario']?></td>
    
    
    
    </tr>
    <?php
   }
?>
 </table>
</div> 

</body>

 </html>



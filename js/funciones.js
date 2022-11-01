function recibirdatos()//funcion
{


    //alert("Esta es la función");
    var nombre=(document.getElementById("boxname").value);// definicion de variable
    console.log(nombre);// procedimiento matematico 

    var apellido=(document.getElementById("boxapellido").value);// definicion de variable
    console.log(apellido);// procedimiento matematico 

    var email=(document.getElementById("boxemail").value);// definicion de variable
    console.log(email);// procedimiento matematico 

    var documento=(document.getElementById("boxdocumento").value);// definicion de variable
    console.log(documento);// procedimiento matematico 

    
     alert("nombre completo es: "+nombre+" "+apellido);// escribir
     if (nombre=="santi" && documento=="1015069205")// inicio de condicional
     {

        alert("nice,eres tu")//
     }
     else // falso
     {
      alert("no eres tu")// escribir, mostrar datos 
     }
     alert("email completo es: "+email+" "+ "su documento es:"+documento); // mostrar datos, escribir


}
//como suicidarse


function funcionvelocidad()//funcion

{

   var numero1=parseFloat(document.getElementById("cajadistancia").value);// definicion de variable
   console.log(numero1);// procedimiento matematico 

   var numero2=parseFloat(document.getElementById("cajatiempo").value);// definicion de variable
   console.log(numero2);// procedimiento matematico 

     console.log=(numero1/numero2);//
     
     alert("la velocidad en m/s:"+(numero1/numero2));// mostrar datos escribir
}
    

   function calculartrabajo()//
  {
   var numero1= parseFloat(document.getElementById("cajafuerza").value);// definición de variable

   var numero2= parseFloat(document.getElementById("cajadistancia").value);//definición de variable
   
   var numero3= parseFloat(document.getElementById("cajaangulo").value);// definición de variable
   
   numero3=(numero3*Math.PI)/180//proceso matematico
   
   var trabajo=numero1*numero2*(Math.cos(numero3))// variable
   
   console.log (numero1/numero2);//proceso matematico
   
   alert("El trabajo en jules es: "+trabajo);// mostrar datos escribir   
 }

 function calcular() 
 
{

var tipo=(document.getElementById("cajatipo").value)

var autor=(document.getElementById("cajaautor").value)

var cantidad= parseInt(document.getElementById("cajacantidad").value)

var valorlibro= parseFloat(document.getElementById("cajavalorlibro").value)

var descuento=0

var pagar=0

if (tipo=="A" && autor=="X" || autor=="Y" && cantidad>=1 && cantidad<=10 ){

      descuento=1500
}

 if (tipo=="B" && autor=="Z" && cantidad<=5 ){

  descuento=1000
  
}


   if (tipo=="C" && autor=="X" && cantidad<=5 ){

 descuento=900
}


 if (tipo=="A" && autor=="Z" && cantidad<=3 ){

      descuento=750
}
pagar=(cantidad*valorlibro)-(descuento*cantidad)
alert("el valor a pagar  es: $" + pagar + "descuento " + descuento) 

}

function recibirdatos22()//funcion
{


    //alert("Esta es la función");
    var usuario=(document.getElementById("boxusuario").value);// definicion de variable
    console.log(usuario);// procedimiento matematico 

    var contraseña=(document.getElementById("boxcontraseña").value);// definicion de variable
    console.log(contraseña);// procedimiento matematico 

    
     alert("acabas de ingresar "+usuario+" "+contraseña);// escribir


}

function recibir_pares_e_impares()
{
   var num = parseFloat(document.getElementById("cajapares").value);
   console.log(num)
   if (num%2==0){

    alert("El numero par es :"+num);


   }else{

alert("el numero impar es:"+num)

   }

}

function recibirdatossobrevalores()
{
   var num1 = parseInt(document.getElementById("cajanum1").value);
   console. log (num1)
   var num2 = parseInt(document.getElementById("cajanum2").value);
   console.log(num2)
   var num3 = parseInt(document.getElementById("cajanum3").value);
   console.log(num3)

   if (num1 > num2 && num1 > num3)
   {
   alert("El numero mayor es:"+num1);
   }
   else{
      alert("Los numeros son iguales")
   }
   if (num2 > num1 && num2 > num3)
   {

      alert("El numero mayor es:"+num2);
   }
   if (num3 > num1 && num3 > num2)
   {
      alert("El numero mayor es:"+num3);
   }
  
   if (num1 < num2 && num1 < num3)
   {
   alert("El numero menor es:"+num1);
   }
   if (num2 < num1 && num2 < num3)
   {

      alert("El numero menor es:"+num2);
   }
   if (num3 < num1 && num3 < num2)
   {
      alert("El numero menor es:"+num3);
   }
 


}
//Antes de eso ponemos la función, entonces como ya esta definida como (recibirdatosporcentajes)
function recibirdatosporcentaje() {
// Primero empezamos por poner las variables; en este caso ocupamos las variables mujeres y hombres
   var mujeres = parseFloat(document.getElementById("cajamujer").value);
   console. log (mujeres)
   var hombres = parseFloat(document.getElementById("cajahombre").value);
   console.log(hombres)
// No es necesario usar condicionales. Ocupamos la alerta y afuera de esa alerta usamos la operación matemática. +mujeres/(mujeres+hombres)*100) 
   alert("El porcentaje de mujeres son:"+mujeres/(mujeres+hombres)*100) 
   alert("El porcentaje de hombres son:"+hombres/(hombres+mujeres)*100)


   
   
   
}

function articulo() {
   var articulo = (document.getElementById("cajaarticulo").value);
   console. log (articulo)
   var  clave= parseFloat(document.getElementById("cajaclave").value);
   console.log(clave)
   var precio= parseFloat(document.getElementById("cajaprecio").value);
   console. log (precio)
   var descuento1= parseFloat(document.getElementById.value);
   console. log (descuento1)
   var descuento2= parseFloat(document.getElementById.value);
   console. log (descuento2)


   if(clave==01)
   {
      alert ("El nombre de esto es."+articulo)
      alert ("El precio de este articulo es:"+precio)
      alert ("La clave es: "+clave)
      descuento1=precio*10/100
      precio=precio-descuento1
   
      alert ("El precio con descuento es:"+descuento1)
      alert ("El precio con descuento es:"+precio)

   }

   else if(clave==02)
   {
      alert ("El nombre de esto es."+articulo)
      alert ("El precio de este articulo es:"+precio)
      alert ("La clave es: "+clave)
      descuento2=precio*0.20
      precio=precio-descuento2
      alert ("El precio con descuento es:"+descuento2)
      alert ("El precio con descuento es:"+precio)

     

   }

   
}
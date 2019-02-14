/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numero1sumar;
    var numero2sumar;
    numero1sumar=document.getElementById("numeroUno").value;
    numero2sumar=document.getElementById("numeroDos").value;
    numero1sumar=parseInt(numero1sumar);
    numero2sumar=parseInt(numero2sumar);
    alert("la suma es "+ [ numero1sumar+numero2sumar]);
	
}

function restar()
{   
    var numero1;
    var numero2;
    numero1=document.getElementById("numeroUno").value;
    numero2=document.getElementById("numeroDos").value;
    numero1=parseInt(numero1);
    numero2=parseint(numero2);
    alert("la resta es "+[numero1-numero2]);

}

function multiplicar()
{ 
	
}

function dividir()
{
	
}


/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo;
var ancho;
largo=document.getElementById("Largo").value;
ancho=document.getElementById("Ancho").value;
largo=parseInt(largo);
ancho=parseInt(ancho);
alert("alambre a comprar "+[largo*3+ancho*3]+" mts");
}
function Circulo () 
{
    var radio;
    var area;
    radio=document.getElementById("Radio").value;
    radio=parseInt(radio);
    area=radio*radio;
    area=parseInt(area);
    alert(area*3);

}
function Materiales () 
{ 
    var largo1;
    var ancho2;
    largo1=document.getElementById("Largo").value;
    ancho2=document.getElementById("Ancho").value;
    largo1=parseInt(largo1);
    ancho2=parseInt(ancho2);
    var terreno;
    terreno=largo1*2+ancho2*2;
    alert("con un terreno de "+terreno+" se necesitan "+[terreno*2 ]+" bolsas de cemento y "+ [terreno*3]+"bolsas de kal" );
}
/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%.
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.

 */

function CalcularPrecio ()
     {
  /*
  var cantlamparas;
  var precio;
  var marca;
  var descuento;
  var mensaje;


  cantlamparas=document.getElementById("Cantidad").value;
  marca=document.getElementById("Marca").value;
  mensaje=document.getElementById("precioDescuento").value;
  precio=35;

  if(cantlamparas>=6){
     descuento=cantlamparas*precio*50/100
      }else{

        if(cant==5){
           if(marca=="argentinaluz"){
             descuento=cantlamparas*precio*40/100
           }else{
             descuento=cantlamparas*precio*30/100

           }
        if(cantlamparas==4){
          if(marca=="argentinaluz"=="felipelamparas");
        }alert(descuen)
        }



}
*/

var cantidad;
var precio;
var descuento;
var marca;

cantidad=document.getElementById("Cantidad").value;

marca=document.getElementById("Marca").value;


precio=35;

   switch (cantidad) {
     
          case "6":{
         
          document.getElementById("precioDescuento").value=cantidad*precio*0.50

        
   
         }
    case "5":
         switch (marca) {
           case "ArgentinaLuz":
           
           document.getElementById("precioDescuento").value=cantidad*precio*0.40
           break;
          
           default:
           document.getElementById("precioDescuento").value=cantidad*precio*0.30
             break;
         }
   
    case "4":

          switch (marca) {
            case "ArgentinaLuz":
            case "FelipeLamparas":

            document.getElementById("precioDescuento").value=cantidad*precio*0.25
              break;
          
            default:
            document.getElementById("precioDescuento").value=cantidad*precio*0.20
              break;
          }
          
    
    case "1":
    case "2":
    document.getElementById("precioDescuento").value=cantidad*precio*1
  



         
   case "3":
   
        switch (marca)           { 
                      
         case "ArgentinaLuz":

         document.getElementById("precioDescuento").value=cantidad*precio*0.15
    
   
         case "FelipeLamparas":

         document.getElementById("precioDescuento").value=cantidad*precio*0.10

       default:

        document.getElementById("precioDescuento").value=cantidad*precio*0.5
       
                        break }
     }
     
     {         
         c
       
       }
      }
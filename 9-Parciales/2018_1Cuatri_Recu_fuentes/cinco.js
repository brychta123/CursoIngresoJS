function mostrar()
{
var precio
var descuento 
var tipodepago
var preciofinal
var paquete
var mensaje

precio=prompt("precio de la habitacio")
tipodepago=prompt("como desea pagar")
paquete=prompt("los paquete a elegir pueden ser ninguno,todoincluido o solo desayunos ")

    precio=parseInt(precio)

 
     switch(tipodepago){

      case "tarjeta visa":
        descuento=precio*0.90
        break

        case "paypal":
               switch (paquete) {
                   case value:
                       
                       break;
               
                   default: 
                   descuento=precio*0.85
                       break;
       
        break

        case "mercado pago":
        descuento=precio*0.90
        break

        case "efectivo":}
        
                     switch(paquete){
                    case"todo incluido":

                     descuento=precio-precio*0.80
                     
                    break }
  
  
                    preciofinal=descuento
  
                    alert("el precio final a pagar es"+desceunto);
  
                       }

}

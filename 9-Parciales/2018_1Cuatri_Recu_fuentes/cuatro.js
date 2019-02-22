function mostrar()
{
var numero1
var numero2
var numero3
var numero4
var suma
var descuento

 numero1=prompt("ingrese un numero");
 numero2=prompt("ingrese el segundo numero");
 numero3=prompt("ingrese el tercer numero");
 numero4=prompt("ingrese el cuarto numero");

 numero1=parseInt(numero1);
numero2=parseInt(numero2);
numero3=parseInt(numero3);
numero4=parseInt(numero4);


    suma=(numero1+numero2+numero3+numero4);
    suma=parseInt(suma);

       if(numero1>numero2  && numero1>numero3 && numero1>numero4 ){
           alert("el numero 1 es el mas alto");
               }else; { 
                   
                if(numero2>numero1  && numero2>numero3 && numero2>numero4 ){
                    alert("el numero 2 es el mas alto");
                     }else; { 
                         
                        if(numero3>numero1  && numero3>numero2 && numero3>numero4 ){
                            alert("el numero 3 es el mas alto");
                              }else; { 
                              
                                if(numero4>numero1  && numero4>numero2 && numero4>numero3 ){
                                alert("el numero 4 es el mas alto");
                                
                            }else; { 
                                
                            
            }
               if(suma>100){
           descuento=suma*10/100;
           descuento=parseInt(descuento);
           alert("si la suma de los numero es mayor que cien su descuento es del 10% "+descuento+" su total es "+[suma-descuento]);
              } else;{
          }
               if(suma>50){
                descuento=suma*5/100;
                descuento=parseInt(descuento);
                alert("si la suma de los numero es mayor que cincuenta su descuento es del 5%  "+descuento+" su total es "+[suma-descuento]);
                   } else;{
            }
            if(suma<50){
                descuento=suma*15/100;
                descuento=parseInt(descuento);
                alert("si la suma de los numero es menor que cincuenta su recargo es del 15% "+descuento+" su total es "+[suma+descuento]);
                   } else;{

         }
    
} 


    }

}  }

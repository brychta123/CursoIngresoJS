function mostrar()
{
   /* var velocidad;
    var combustible;
    var contador;
    var acumulador;
    var promedio
    velocidad=0;
    contador=0;
    acumulador=0;
    
    while(contador<5)
    {
        velocidad=prompt("Ingrese una velocidad");
        velocidad=parseInt(velocidad);
        combustible=prompt("Que tipo de combustible usa");
        
        while(velocidad<0||velocidad>250)
        {
            velocidad=prompt("Ingrese una velocidad entre 0 y 250 km");
            velocidad=parseInt(velocidad);
            contador--;
            while(combustible!="l" || combustible!="s")
            {
                combustible=prompt("Ingrese su tipo de combustible l o s");
                contador--;
            }
            while(combustible){
                


            
            }
        }

        
        acumulador=acumulador+velocidad;   
         
        contador++;

    }
    promedio=acumulador/5;
    alert("el promedio de las velocidades es "+promedio);
    
    

}
*/
var nota;
var sexo;
var contador;
var alumno;
var promedio;
var sumaNotas;
var notamasbaja;
var cantidadvarones;

contador=0;
sumaNotas=0;
promedio=0;
cantidadvarones=0;
while(contador<5)
{
    nota=prompt("Ingrese la nota");
    nota=parseInt(nota);
    sexo= prompt("Ingrese su sexo");
    while(sexo != "m" && sexo != "f")
    {
        sexo=prompt("Ingrese m o f para el sexo");
    }
    while(nota<0 || nota>10)
    {
        nota=prompt("Ingrese bien su nota");
        nota=parseInt(nota);
    }
if(contador==0)
{
notamasbaja=nota;
}
else
{
if(notamasbaja>nota)
{
notamasbaja=nota;
}
}
switch(sexo)
{
case "m":
              if(nota>6){
                  cantidadvarones++;
              }
        
              break;
            }
            sumaNotas = sumaNotas + nota;
            contador++;
        }



promedio = sumaNotas/5;
alert("sus datos se ingresaron correctamente");
alert("El promedio de las notas es "+promedio);
alert("La nota mas baja es"+notamasbaja);
alert("la cantidad de varones es"+cantidadvarones);


}
 

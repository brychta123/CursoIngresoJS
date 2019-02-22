function mostrar()
{
//tomo la edad
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);

switch (mesDelAño) {
  case "Febrero":

     alert("este mes tiene 28 dias,  a menos que sea año viciesto que tiene 29")

   break;

  case "Enero":
  case  "Marzo":
  case  "Mayo":
  case  "Julio":
  case  "Agosto":
  case  "Octubre":
  case  "Diciembre":

     alert("este mes tiene 31 dias");
   break
     default:
     alert("este mes tiene 30 dias")
    break;

}



}//FIN DE LA FUNCIÓN

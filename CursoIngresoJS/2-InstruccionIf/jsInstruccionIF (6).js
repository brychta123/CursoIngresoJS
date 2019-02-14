function mostrar()
{

//tomo la edad  
    var edad;
    edad=document.getElementById("edad").value;

    if(edad>=18) {

        alert ("sos mayor de edad");
    }
    else
    {
        
        if(edad>=13) {
            alert("usted es adolescente");
            
        } else {
            alert("sos menor");
        }
    }
  



}//FIN DE LA FUNCIÓN
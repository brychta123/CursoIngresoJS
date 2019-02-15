function mostrar()
{
    var precio;
    var propina;
    var preciototalpropina;
    var precioindividual

    precio=prompt("precio");
    propina=(precio*10/100);
    preciototalpropina=(precio+propina);
    precioindividual=(preciototalpropina/4);
    alert("la propina es "+propina+"$ el precio total con propina es " +preciototalpropina+ "y el precio por cada uno es "+precioindividual );



}

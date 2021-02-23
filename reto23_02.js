let jarr = [];


function recogerDatos ()
{
    let desde = document.getElementById("desde").value
    let hacia = document.getElementById("hacia").value
    let date = document.getElementById("date").value
    let numero = document.getElementById("numero").value
    let json = {"desde":desde, "hacia": hacia, "fecha":date, "pasajeros":numero}
    jarr.push(json);
    console.log (jarr)
    let datos = json.desde + " " +json.hacia + " " +json.fecha + " " +json.pasajeros;
    document.getElementById("reserva").innerHTML = datos;
}


function filtrar ()
{
    let r = "";
    
    for (let i = 0; i<jarr.length; i++)

    {
        if (jarr[i].desde.includes("r"))
        {
            r+=jarr[i].desde + " ";
        }

        else if (jarr[i].hacia.includes("r"))
        {
            r+=jarr[i].hacia + " ";
        }

    }
    document.getElementById("filtro").innerHTML =r;
}

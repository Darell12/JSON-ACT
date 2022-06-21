console.log('Conectado')



async function ObtenerDatos(){

    const response = await fetch("http://127.0.0.1:5500/Familia.json");
    let json = await response.json();

    console.log(json);

//  json.Familia.forEach(element => {
//      console.log(element.Nombres);
//      console.log(element.Apellidos);
//      console.log(element.Edad);
   
//     });
    
    LlenarHeader(json);
}

function LlenarHeader(json){
    const H1 = document.createElement('h1');
    console.log(json);


}

LlenarHeader();

ObtenerDatos();
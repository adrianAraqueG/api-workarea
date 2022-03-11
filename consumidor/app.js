
const url = 'http://localhost:3000/usuario';
const data = {
    nombre: 'Jose Eduardo',
    apellido: 'Eustacio Rivera'
}

async function consultarAPI(){
    fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(respuesta => respuesta.json())
        .then(resultado => console.log(resultado))
        .catch(error => console.log(error));
}

consultarAPI();
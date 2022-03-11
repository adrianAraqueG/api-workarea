
const form = document.querySelector('#login');

form.addEventListener('submit', e =>{
    e.preventDefault();

    const user = document.querySelector('input[name="user"]').value;
    const pass = document.querySelector('input[name=pass]').value;

    if(user === '' || pass === ''){
        console.log('No hay usuario ni password');
        return;
    }

    const url = 'http://localhost:3000/login';
    const data = {
        user,
        pass
    }

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

});



const buttonGenera = document.getElementById('btn-submit');

buttonGenera.addEventListener('click', function (event) {
    event.preventDefault();

    // Inserimento nome nel box
    const nomeUtente = document.getElementById('name-field').value;
    const boxNome = document.querySelector('.col-4.bg-secondary .mt-3');
    boxNome.innerText = nomeUtente;

});
const buttonGenera = document.getElementById('btn-submit');
const btnReset = document.getElementById('btn-reset');

buttonGenera.addEventListener('click', function (event) {
    event.preventDefault();

    // Inserimento nome nel box
    const nomeUtente = document.getElementById('name-field').value;
    const boxNome = document.querySelector('.col-4.bg-secondary .mt-3');
    boxNome.innerText = nomeUtente;

    // Calcolo prezzo base
    const kmDaPercorrere = document.getElementById('km-field').value;
    const fasciaEta = document.getElementById('age-field').value;

    let prezzoTotale = kmDaPercorrere * 0.21;
    let tipoOfferta = 'Biglietto Standard';

    // Calcolo sconto
    if (fasciaEta === 'minorenne') {
        prezzoTotale = prezzoTotale * 0.80;
        tipoOfferta = 'Sconto Minorenne';
    } else if (fasciaEta === 'over65') {
        prezzoTotale = prezzoTotale * 0.60;
        tipoOfferta = 'Sconto Over 65';
    }

    const boxOfferta = document.getElementById('ticket-offer');
    boxOfferta.innerText = tipoOfferta;

});
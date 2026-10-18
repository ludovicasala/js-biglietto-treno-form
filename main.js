const ticketForm = document.getElementById('ticket-form');
const btnAnnulla = document.getElementById('btn-reset');

ticketForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Recupero i valori inseriti dall'utente
    const nomeUtente = document.getElementById('name-field').value;
    const kmDaPercorrere = parseFloat(document.getElementById('km-field').value);
    const fasciaEta = document.getElementById('age-field').value;

    // Calcolo del prezzo base
    const prezzoBase = kmDaPercorrere * 0.21;
    let prezzoFinale = prezzoBase;
    let tipoOfferta = 'Biglietto Standard';

    // Calcolo sconto
    if (fasciaEta === 'minorenne') {
        prezzoFinale = prezzoBase * 0.80;
        tipoOfferta = 'Sconto Minorenne';
    } else if (fasciaEta === 'over65') {
        prezzoFinale = prezzoBase * 0.60;
        tipoOfferta = 'Sconto Over 65';
    }

    // Stampiamo risultati biglietto
    document.getElementById('ticket-name').innerText = nomeUtente;
    document.getElementById('ticket-offer').innerText = tipoOfferta;
    document.getElementById('ticket-base-price').innerText = prezzoBase.toFixed(2) + ' €';
    document.getElementById('ticket-price').innerText = prezzoFinale.toFixed(2) + ' €';
});

btnAnnulla.addEventListener('click', function () {
    document.getElementById('ticket-name').innerText = '-';
    document.getElementById('ticket-offer').innerText = '-';
    document.getElementById('ticket-base-price').innerText = '-';
    document.getElementById('ticket-price').innerText = '-';
});
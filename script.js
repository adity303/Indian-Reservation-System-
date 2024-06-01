document.getElementById('reservation-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const trainNumber = document.getElementById('train-number').value;
    const date = document.getElementById('date').value;
    const travelClass = document.getElementById('class').value;

    const reservation = {
        name,
        trainNumber,
        date,
        travelClass
    };

    addReservationToList(reservation);
    clearForm();
});

function addReservationToList(reservation) {
    const reservationsList = document.getElementById('reservations');
    const listItem = document.createElement('li');
    listItem.textContent = `${reservation.name} - Train: ${reservation.trainNumber}, Date: ${reservation.date}, Class: ${reservation.travelClass}`;
    reservationsList.appendChild(listItem);
}

function clearForm() {
    document.getElementById('reservation-form').reset();
}

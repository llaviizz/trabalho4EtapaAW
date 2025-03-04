const form = document.querySelector('form');
const tableBody = document.getElementById('table-body');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const musica = document.getElementById('música').value; 
    const bandaCantor = document.getElementById('cantor').value;

    const newRow = document.createElement('tr');
    const newCellIndex = document.createElement('td');
    const newCellMusica = document.createElement('td');
    const newCellBandaCantor = document.createElement('td');


    newCellIndex.textContent = tableBody.children.length + 1;
    newCellMusica.textContent = musica;
    newCellBandaCantor.textContent = bandaCantor;

    newRow.appendChild(newCellIndex);
    newRow.appendChild(newCellMusica);
    newRow.appendChild(newCellBandaCantor);

    tableBody.insertBefore(newRow, tableBody.firstChild);

    form.reset();
});
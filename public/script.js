// script.js

document.addEventListener('DOMContentLoaded', () => {
    const myButton = document.getElementById('myButton');
    const resultDiv = document.getElementById('result');

    myButton.addEventListener('click', () => {
        fetchData(); // Vous pouvez ajouter votre logique ici
    });

    function fetchData() {
// Ici, vous pouvez effectuer des opérations en réponse au clic sur le bouton
        resultDiv.innerText = 'Le bouton a été cliqué !';
    }
});
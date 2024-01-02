// main.js
import { fetchData, filterPets, generatePetHTML } from './app.js';

async function main() {
    const apiUrl = 'https://api.jsonbin.io/b/your-json-bin-id/latest'; 
    const params = new URLSearchParams(window.location.search);

    const data = await fetchData(apiUrl);
    const filteredData = filterPets(data, params.get('type'));
    renderPets(filteredData);
}

function renderPets(data) {
    const outputElement = document.getElementById('pet-slider');
    outputElement.innerHTML = '';

    data.forEach(animal => {
        const slideElement = document.createElement('div');
        slideElement.className = 'slide';
        slideElement.innerHTML = generatePetHTML(animal);
        outputElement.appendChild(slideElement);
    });
}

document.addEventListener('DOMContentLoaded', main);

// app.js
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function filterPets(data, type) {
    if (!type) {
        return data;
    }
    return data.filter(animal => animal.type === type);
}

function displayPets(filteredData) {
    const petSlider = document.getElementById('pet-slider');
    petSlider.innerHTML = '';

    filteredData.forEach(animal => {
        const slideElement = document.createElement('div');
        slideElement.className = 'slide';
        slideElement.innerHTML = generatePetHTML(animal);
        petSlider.appendChild(slideElement);
    });
}

function generatePetHTML(animal) {
    return `
        <div>
            <img src="${animal.image}" alt="${animal.type}">
            <p>${animal.date}</p>
            <p>${animal.sex}, ${animal.type}, ${animal.location}</p>
            <button class="mine">${animal.status === "үрчлэх" ? "Үрчлэе" : "Минийх"}</button>
        </div>
    `;
}

async function main() {
    const apiUrl = 'https://api.jsonbin.io/b/your-json-bin-id/latest'; 
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');

    const data = await fetchData(apiUrl);
    const filteredData = filterPets(data, type);
    displayPets(filteredData);
}

document.addEventListener('DOMContentLoaded', main);

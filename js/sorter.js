function sortPets() {
    const selectedAnimal = document.getElementById("animal").value;
    console.log("Selected Animal:", selectedAnimal);

    const filteredData = animalData.filter(animal => animal.type === selectedAnimal);
    populateSlider(filteredData);
}


// Update populateSlider to accept filtered data
function populateSlider(filteredData) {
    const petSlider = document.getElementById("pet-slider");
    petSlider.innerHTML = '';

    // Iterate through the filtered animal data
    for (let i = 0; i < filteredData.length; i += 3) {
        const currentRow = document.createElement('div');
        currentRow.classList.add('row');

        for (let j = i; j < i + 3 && j < filteredData.length; j++) {
            const petHTML = generatePetHTML(filteredData[j]);
            currentRow.innerHTML += petHTML;
        }

        petSlider.appendChild(currentRow);
    }
}

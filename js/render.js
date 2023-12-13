//render.js
document.addEventListener("DOMContentLoaded", function() {
    // Animal data JSON
    const animalData = [
        { type: "Муур", sex: "ЭР", status: "авах", date: "2023.11.05", image: "../assets/pet-pic/muur1.png", location: "Хан-Уул" },
        { type: "Нохой", sex: "ЭР", status: "авах", date: "2023.11.10", image: "../assets/pet-pic/nohoi2.png", location: "Баянгол" },
        { type: "Муур", sex: "ЭМ", status: "үрчлэх", date: "2023.11.15", image: "../assets/pet-pic/muur2.png", location: "Сонгинохайрхан" },
        { type: "Муур", sex: "ЭР", status: "үрчлэх", date: "2023.11.20", image: "../assets/pet-pic/muur3.png", location: "Багануур" },
        { type: "Нохой", sex: "ЭР", status: "үрчлэх", date: "2023.11.25", image: "../assets/pet-pic/nohoi1.png", location: "Багахангай" },
        { type: "Муур", sex: "ЭМ", status: "авах", date: "2023.11.30", image: "../assets/pet-pic/muur4.png", location: "Баянзүрх" },
        { type: "Муур", sex: "ЭР", status: "үрчлэх", date: "2023.12.01", image: "../assets/pet-pic/muur5.png", location: "Налайх" },
        { type: "Нохой", sex: "ЭР", status: "авах", date: "2023.11.05", image: "../assets/pet-pic/nohoi2.png", location: "Чингэлтэй" },
        { type: "Муур", sex: "ЭМ", status: "үрчлэх", date: "2023.11.01", image: "../assets/pet-pic/muur7.png", location: "Сүхбаатар" },
        
    ];
    function sortPets() {
        const animalSorter = document.querySelector('animal-sorter');
        const type = document.getElementById('animal').value;
        const sex = document.getElementById('sex').value;
        const status = document.getElementById('status').value;
        const date = document.getElementById('sortDate').value;
        const location = document.getElementById('location').value;

        // Call the sortPets method of the custom element
        animalSorter.sortPets(type, sex, status, date, location);
    }
  // html dynamic generation
    function generatePetHTML(animal) {
        return `
            <div class="slide">
                <img src="${animal.image}" alt="${animal.type}">
                <div>
                    <p>${animal.date}</p>
                    <p>${animal.sex}, ${animal.type}, ${animal.location}</p>
                    <button class="mine">${animal.status === "үрчлэх" ? "Үрчлэе" : "Минийх"}</button>
                </div>                   
            </div>
        `;
    }

    function populateSlider() {
        const petSlider = document.getElementById("pet-slider");
        petSlider.innerHTML = '';

        // Iterate through the animal data
        for (let i = 0; i < animalData.length; i += 3) {
            const currentRow = document.createElement('div');
            currentRow.classList.add('row');

            for (let j = i; j < i + 3 && j < animalData.length; j++) {
                const petHTML = generatePetHTML(animalData[j]);
                currentRow.innerHTML += petHTML;
            }

            petSlider.appendChild(currentRow);
        }
    }


    populateSlider();
    window.sortPets = sortPets;
});

import ""
class AnimalSorter extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        
        this.animalData = [
            { type: "муур", sex: "эр", status: "авах", date: "2023.11.05", image: "../assets/pet-pic/muur1.png", location: "Хан-Уул" },
        ];

        const container = document.createElement('div');
        container.setAttribute('id', 'animalSorterContainer');
        this.shadowRoot.appendChild(container);

        
        this.render();
    }

    
    render() {
        const petSlider = this.shadowRoot.getElementById('animalSorterContainer');
        petSlider.innerHTML = '';

        for (let i = 0; i < this.animalData.length; i += 3) {
            const currentRow = document.createElement('div');
            currentRow.classList.add('row');

            for (let j = i; j < i + 3 && j < this.animalData.length; j++) {
                const petHTML = this.generatePetHTML(this.animalData[j]);
                currentRow.innerHTML += petHTML;
            }

            petSlider.appendChild(currentRow);
        }
    }

    generatePetHTML(animal) {
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

    // Sort pet data
    sortPets(type, sex, status, date, location) {
        this.animalData.sort((a, b) => (a.type > b.type) ? 1 : -1);

        this.render();
    }
}

customElements.define('animal-sorter', AnimalSorter);

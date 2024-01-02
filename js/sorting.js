// sorting.js
function sortAnimalData(animalData, type, sex, status, date, location) {
    const sortedData = animalData.filter(animal => {
        return (!type || animal.type === type) &&
               (!sex || animal.sex === sex) &&
               (!status || animal.status === status) &&
               (!date || new Date(animal.date) >= new Date(date)) &&
               (!location || animal.location === location);
    });

    return sortedData;
}

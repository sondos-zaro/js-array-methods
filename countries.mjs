import { arrayOfCountries } from './countryList.mjs';

// Generate new Id 
function generateId() {
    const ids = arrayOfCountries.map(country => country.id);

    return  Math.max(...ids) + 1; 
}

// Sorted Array in ascending oreder
function ascendingSort(){
    let prevName;
    let currentName;
    const ascendingArr = arrayOfCountries.sort((prevObject, currentObject) => {
        prevName = prevObject.name.toUpperCase();
        currentName = currentObject.name.toUpperCase();

        return (prevName > currentName) ? 1 : (prevName < currentName) ? -1 : 0;
    });

    return ascendingArr;
}

// Sorted Array in descending oreder
function descendingSort(type) {
    let prevName;
    let currentName;
    const descendingArr = arrayOfCountries.sort((prevObject, currentObject) => {
        prevName = prevObject.name.toUpperCase();
        currentName = currentObject.name.toUpperCase();

        return (prevName < currentName) ? 1 : (prevName > currentName) ? -1 : 0;    
    });

    return descendingArr;
}

// Return if the country exist or not
function ifExist(countryName) {
    if (typeof countryName !== 'string') {
        return;
    }
    const ifExist = arrayOfCountries.find(country => country.name.toLowerCase() === countryName.toLowerCase());

    return ifExist !== undefined ? true : false;
}

// Return index of specific country
function indexOfCountry(countryName) {
    if (typeof countryName !== 'string') {
        return;
    }

    return arrayOfCountries.findIndex((country) => country.name.toLowerCase() === countryName.toLowerCase());
}

// Add new counrty at the first of array of objects
function addAtFirst(newCountry) {
    const isExist = ifExist(newCountry);

    if (isExist) {
        console.log("This country is already exist");

        return;
    }
    const newId = generateId();
    newCountry.id = newId;
    arrayOfCountries.unshift(newCountry);
}

// Add new counrty at the end of array of objects
function addAtEnd(newCountry) {
    const isExist = ifExist(newCountry);
    
    if (isExist) {
        console.log("This country is already exist");

        return;
    }
    const newId = generateId();
    newCountry.id = newId;
    arrayOfCountries.push(newCountry);
}

// Remove  counrty from first of array of objects
function removeFromFirst() {
    arrayOfCountries.shift();
}

// Remove  counrty from End of array of objects
function removeFromEnd() {
    arrayOfCountries.pop();
}

// Remove  a specific counrty 
function removeCountry(countryName) {
    if (typeof countryName !== 'string') {
        return;
    }
    const index = indexOfCountry(countryName);

    if (index === -1) {
        console.log("this country doesn't exists")
    } else {
        arrayOfCountries.splice(index, 1);
    }
}

// Search for specific counrty
function searchForCountry(countryName) {
    if (typeof countryName !== 'string') {
        return;
    }
    const country = arrayOfCountries.find((country) => country.name.toLowerCase() == countryName.toLowerCase());   

    return country ? country : "This country doesn't exist";
}

// Return size for an array
function getArraySize(countries) {
    return countries.length;
}

// Convert array to chunks
function arrayToChunks(chunkSize) {
    let chunks = [];
    let chunk;

    for (let i = 0;i < arrayOfCountries.length; i += chunkSize) {
        chunk = arrayOfCountries.slice(i, i + chunkSize);
        chunks.push(chunk);
    }

    return chunks;
}

// Concat arrays
function concatArrays(...arrays) {
   let concatArray = [];
   for (const arr of arrays) {
       concatArray = concatArray.concat(arr)
    }

   return concatArray;
}

// Update specific country
function updateCountry(countryName, newCountry) {
    const index = indexOfCountry(countryName);

    if (index === -1) {
        return "this country doesn't exist";
    } else {
        arrayOfCountries[index] = newCountry;
    }
}

// Get all cities for counbtry
function getCountryCities(countryName) {
    const index = indexOfCountry(countryName);

    if (index === -1) {
        return "this country doesn't exist";
    } else {
        return arrayOfCountries[index].cities.map(city => city.name);
    }
}

// Get country for specific city
function getCountryForCity(cityName) {
    const index = arrayOfCountries.findIndex( (country) => {
    return country.cities.map(city => city.name.toLowerCase()).includes(cityName.toLowerCase());
    });

    if (index !== -1) {
        return arrayOfCountries[index].name;
    } else {
        return "this city doesn't exist";
    }
}

// Add city for country
function addCity(countryName, newCity) {
    const index = indexOfCountry(countryName);

    if (index !== -1) {
        arrayOfCountries[index].cities.push(newCity);
    } else {
        return "this country doesn't exist";
    }
}

// Delete city from country
function deleteCity(cityName) {
    const indexOfCountry = arrayOfCountries.findIndex((country) => {
        return country.cities.map(city => city.name.toLowerCase()).includes(cityName.toLowerCase());
    });

    if (indexOfCountry !== -1) {
        const indexOfCity = arrayOfCountries[indexOfCountry].cities.findIndex( (city) => {
            return city.name.toLowerCase() === cityName.toLowerCase();
        });
        arrayOfCountries[indexOfCountry].cities.splice(indexOfCity, 1);
    } else {
        return "this city doesn't exist";
    }    
}

// Update city 
function updatecity(cityName, newCity) {
    const indexOfCountry = arrayOfCountries.findIndex( (country) => {
        return country.cities.map(city => city.name.toLowerCase()).includes(cityName.toLowerCase());
    });

    if (indexOfCountry !== -1) {
        const indexOfCity = arrayOfCountries[indexOfCountry].cities.findIndex( (city) => {
            return city.name.toLowerCase() === cityName.toLowerCase();
        });
        arrayOfCountries[indexOfCountry].cities[indexOfCity].name = newCity;
    } else {
        return "this city doesn't exist";
    }     
}

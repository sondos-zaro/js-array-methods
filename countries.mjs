import { arrayOfCountries } from './countryList.mjs';

// Generate new Id 
function generateId() {
    let ids;

    ids = arrayOfCountries.map(country => {
        return country.id;
      })

    return  Math.max(...ids)+1; 
}

// Sorted Array according to type (ascending, descending)
function sortArray(type) {
    let sortedCountries ;
    let name1;
    let name2;

    if (typeof type !== 'string') {
        return;
    }

    type = type.toUpperCase();
    sortedCountries = arrayOfCountries.sort((object1, object2) => {
        name1 = object1.name.toUpperCase();
        name2 = object2.name.toUpperCase();

        if (type == "D") {
            return (name1 < name2) ? 1 : (name1 > name2) ? -1 : 0;    
        } else {
            return (name1 > name2) ? 1 : (name1 < name2) ? -1 : 0; 
        }
        
    })
    
    return sortedCountries;
}

// Add new counrty at the first of array of objects
function addAtFirst(newCountry) {
    let newId;
    let isExist = arrayOfCountries.find((country) => country.name === newCountry.name);

    if (isExist) {
        console.log("This country is already exist");

        return;
    }
    newId = generateId();
    newCountry.id = newId;
    arrayOfCountries.unshift(newCountry);
}

// Add new counrty at the end of array of objects
function addAtEnd(newCountry) {
    let newId;
    let isExist = arrayOfCountries.find((country) => country.name === newCountry.name);
    
    if (isExist) {
        console.log("This country is already exist");

        return;
    }
    newId = generateId();
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
    let index ;

    if (typeof countryName !== 'string') {
        return;
    }
    index = arrayOfCountries.findIndex( (country) => country.name.toLowerCase() === countryName.toLowerCase());
    arrayOfCountries.splice(index,1);
}

// Search for specific counrty
function searchForCountry(countryName) {
    let country;

    if (typeof countryName !== 'string') {
        return;
    }
    country = arrayOfCountries.find((country) => country.name.toLowerCase() == countryName.toLowerCase());   

    if(country) {
        return country;
    } else {
        return "This country doesn't exist";
    }
}

// Return index of specific country
function indexOfCountry(countryName) {
    if (typeof countryName !== 'string') {
        return;
    }

    return arrayOfCountries.findIndex( (country) => country.name.toLowerCase() === countryName.toLowerCase());
}

// Return if the country exist or not
function ifExist(countryName) {
    if (typeof countryName !== 'string') {
        return;
    }
    
    return arrayOfCountries.map(country => country.name.toLowerCase()).includes(countryName.toLowerCase());
}

// Return size for an array
function getArraySize(countries) {
    return countries.length;
}

// Convert array to chunks
function arrayToChunks(chunkSize) {
    let chunks = [];
    let chunk;

    for (let i = 0; i < arrayOfCountries.length; i += chunkSize) {
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
function editCountry(countryName, newCountry) {
    let index = indexOfCountry(countryName);

    if (index == -1) {
        return "this country doesn't exist";
    } else {
        arrayOfCountries[index]=newCountry;
    }
}

// Get all cities for counbtry
function getCountryCities(countryName) {
    let index = indexOfCountry(countryName);

    if (index == -1) {
        return "this country doesn't exist";
    } else {
        return arrayOfCountries[index].cities;
    }
}

// Get country for specific city
function getCountryForCity(cityName) {
    let index =arrayOfCountries.findIndex( (country) => {
    return country.cities.includes(cityName)
    });

    if (index !== -1) {
        return arrayOfCountries[index].name;
    } else {
        return "this city doesn't exist";
    }
}

// Add city for country
function addCity(countryName, cityName) {
    let index = indexOfCountry(countryName);

    arrayOfCountries[index].cities.push(cityName);
}

// Delete city from country
function deleteCity(cityName) {
    let indexOfCity;
    let indexOfCountry =arrayOfCountries.findIndex( (country) => {
        return country.cities.includes(cityName);
        });
    
        if (indexOfCountry !== -1) {
            indexOfCity = arrayOfCountries[indexOfCountry].cities.findIndex( (city) => {
            return city.includes(cityName) ;
            });

            arrayOfCountries[indexOfCountry].cities.splice(indexOfCity,1);
        } else {
            return "this city doesn't exist";
        }    
}

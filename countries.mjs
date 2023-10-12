import { arrayOfCountries } from './countryList.mjs';

function generateId() {
    let ids;

    ids = arrayOfCountries.map(country => {
        return country.id;
      })

    return  Math.max(...ids)+1; 
}

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

function addAtFirst(newCountry
    ) {
    let newId;
    let isExist = arrayOfCountries.find((country) => country.name === newCountry
    .name);

    
    if (isExist) {
        console.log("This country is already exist");

        return;
    }
    newId = generateId();
    newCountry
    .id = newId;
    arrayOfCountries.unshift(newCountry
        );
}

function addAtEnd(newCountry) {
    let newId;
    let isExist = arrayOfCountries.find((country) => country.name === newCountry.name);

    
    if (isExist) {
        console.log("This country is already exist");

        return;
    }
    newId = generateId();
    newCountry
    .id = newId;
    arrayOfCountries.push(newCountry
        );
}

function removeFromFirst() {
    arrayOfCountries.shift();
}

function removeFromEnd() {
    arrayOfCountries.pop();
}

function removeCountry(countryName) {
    if (typeof countryName !== 'string') {
        return;
    }
    let index = arrayOfCountries.findIndex( (country) => country.name.toLowerCase() === countryName.toLowerCase());

    arrayOfCountries.splice(index,1);
}


function searchForCountry(countryName) {
    if (typeof countryName !== 'string') {
        return;
    }

    let country = arrayOfCountries.find((country) => country.name.toLowerCase() == countryName.toLowerCase());   

    if(country) {
        return country;
    } else {
        return "This country doesn't exist";
    }
}


function indexOfCountry(countryName) {
    if (typeof countryName !== 'string') {
        return;
    }

    return arrayOfCountries.findIndex( (country) => country.name.toLowerCase() === countryName.toLowerCase());
}

function ifExist(countryName) {
    if (typeof countryName !== 'string') {
        return;
    }
    
    return arrayOfCountries.map(country => country.name).includes(countryName);
}

function getArraySize(countries) {
    return countries.length;
}

function arrayToChunks(chunkSize) {
    let chunks = [];
    let chunk;

    for (let i = 0; i < arrayOfCountries.length; i += chunkSize) {
        chunk = arrayOfCountries.slice(i, i + chunkSize);
        chunks.push(chunk);
    }

    return chunks;
}
function concatArrays(...arrays) {
   let concatArray = [];
   for (const arr of arrays) {
       concatArray = concatArray.concat(arr)
    }

   return concatArray;
}

function editCountry(countryName, newCountry) {
    let index = indexOfCountry(countryName);

    if (index == -1) {
        return "this country doesn't exist";
    } else {
        arrayOfCountries[index]=newCountry;
    }
}

function getCountryCities(countryName) {
    let index = indexOfCountry(countryName);

    if (index == -1) {
        return "this country doesn't exist";
    } else {
        return arrayOfCountries[index].cities;
    }
}

function getCountryForCity(cityName) {
    let index =arrayOfCountries.findIndex( (country) => {
    return country.cities.includes(cityName)
    })
    
    if (index !== -1) {
        return arrayOfCountries[index].name;
    } else {
        return "this city doesn't exist"
    }
}

function addCity(countryName, cityName) {
    let index = indexOfCountry(countryName);
    arrayOfCountries[index].cities.push(cityName);
}

console.log(getCountryForCity("sds"));
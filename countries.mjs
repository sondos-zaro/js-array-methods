import { arrayOfCountries } from './countryList.mjs';

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

function searchForCountry(countryName) {
    if (typeof countryName !== 'string') {
        return;
    }

    return arrayOfCountries.find((country) => country.toLowerCase() == countryName.toLowerCase());   
}

function addAtFirst(country) {
    arrayOfCountries.unshift(country);
}

function addAtEnd(country) {
    arrayOfCountries.push(country);
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

    return   arrayOfCountries.filter((country) => country.toLowerCase() !== countryName.toLowerCase());
}

function indexOfCountry(countryName) {
    const lowerCaseArray = arrayOfCountries.map((country) => country.toLowerCase());

    return lowerCaseArray.indexOf(countryName.toLowerCase());
}

function searchForCountries(countryName) {
    if (typeof countryName !== 'string') {
        return;
    }

    return  arrayOfCountries.filter(country=> country.toLowerCase().includes(countryName.toLowerCase()));
}


function ifExist(countryName) {
    if (typeof countryName !== 'string') {
        return;
    }
    const loweCaseArray = arrayOfCountries.map((country) => country.toLowerCase());

    return loweCaseArray.includes(countryName.toLowerCase());
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



console.log(sortArray("D"));
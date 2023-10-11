import { arrayOfCountries } from './countryList.mjs';

function sortArray(type) {
    let sortedCountries = [...arrayOfCountries];

    if (sortedCountries.length <= 0 || typeof type !== 'string') {
        return;
    }

    type = type.toUpperCase();

    if (type == "A") {
        sortedCountries.sort();
    } else if (type == "D") {
        sortedCountries.sort();
        sortedCountries.reverse();
    }

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
    const loweCaseArray = arrayOfCountries.map((country) => country.toLowerCase());

    return loweCaseArray.indexOf(countryName.toLowerCase());
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




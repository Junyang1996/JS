'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
function getCountryData(c) {
  const request = new XMLHttpRequest(); //old school with xml
  request.open('GET', `https://restcountries.com/v2/name/${c}`);
  request.send();

  // data = request.send();//no no no. becasue the data is not here yet, so
  //once it's load, call this function
  request.addEventListener('load', function () {
    //   console.log(this.responseText); //this is actually the request
    const [data] = JSON.parse(this.responseText);
    //or const data = JSON.parse(this.responseText)[0] this is to destruct json object into arrays;
    console.log(data);
    const html = `
  <article class="country">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} million people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>
`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
}
getCountryData('china');
getCountryData('uae');
getCountryData('japan');

import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';

const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');
const list = document.querySelector('.country-list');
const div = document.querySelector('.country-info');

let searchCountryName = '';

input.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));

function onInputChange() {}

function renderCountryCard() {
  clearAll();
  const c = country[0];
  const renderCard = `<div class="country-card">
  <div class="country-card__hero">
    <img src="${c.flags.svg}" alt="Flag" width="50" height="30" />
    <h2 class="country-card__name">${c.name.official}</h2>
  </div>
  <p class="country-card__text">
    Capital: <span class="value">${c.capital}</span>
  </p>
  <p class="country-card__text">
    Population: <span class="value">${c.population}</span>
  </p>
  <p class="country-card__text">
    Languages:
    <span class="value">${Object.values(c.languages).join(',')}</span>
  </p>
</div>`;
  div.innerHTML = renderCard;
}
function renderCountryList() {
  clearAll();
  const renderList = country
    .map(
      c => `<li class="country-list__item">
  <img src="${c.flags.svg}" alt="Flag" width="50" height="30" />
  <h2 class="country-card__name">${c.name.official}</h2>
  </li>`
    )
    .join('');
  list.insertAdjacentHTML('beforeend', renderList);
}
function clearAll() {
  list.innerHTML = '';
  div.innerHTML = '';
}

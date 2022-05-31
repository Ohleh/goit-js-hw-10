import './css/styles.css';
import fetchCountries from './js/fetchCountries';

const refs = {
  serchInput: document.querySelector('#search-box'),
  countryList: document.querySelector('country-list'),
  countryInfo: document.querySelector('country-info'),
};

const DEBOUNCE_DELAY = 300;

refs.serchInput.addEventListener('input', onSearchIpnut);

function onSearchIpnut(e) {
  const searchInput = e.currentTarget.value;
  fetchCountries(searchInput).then(response => console.log(response));
}

// const ddd = fetchCountries();
// const aaa = ddd.map(e => e.name);
// console.log(aaa);

// fetchCountries().then(response => {
//   console.log(response[0].name.official);
// });

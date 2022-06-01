import './css/styles.css';
import fetchCountry from './js/fetchCountries';
var debounce = require('lodash.debounce');
// import debounce from 'lodash.debounce';

const refs = {
  serchInput: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

const DEBOUNCE_DELAY = 300;

refs.serchInput.addEventListener(
  'input',
  debounce(onSearchIpnut),
  DEBOUNCE_DELAY
);

function onSearchIpnut(e) {
  const searchInput = e.target.value;
  //   console.log(e.target.value);
  const searchInputKillSpace = searchInput.trim();
  fetchCountry(searchInputKillSpace).then(response => renderUserList(response));
}

// fetchCountry('ukraine').then(response => {
//   renderUserList(response);
// });

function renderUserList(name) {
  console.log(name.length);

  const markup = name
    .map(name => {
      const picFlag = name.flags;
      const languaGes = name.languages;
      //   console.log('name.name.official', name.name.official);
      //     console.log('name.official', name.official);
      //     console.log('name.capital', name.capital);
      return `<li>
            <p><img src="${picFlag['svg']}" width="20"> : <b>${
        name.name.official
      }</b></p>
            <p><b>Capital</b>: ${name.capital}</p>
            <p><b>Population</b>: ${name.population}</p>
            <p><b>Languages</b>: ${Object.values(languaGes)}</p>
          </li>`;
    })
    .join('');
  refs.countryInfo.innerHTML = markup;
}

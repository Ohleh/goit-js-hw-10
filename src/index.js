import './css/styles.css';
import fetchCountry from './js/fetchCountries';
var debounce = require('lodash.debounce');
// import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

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
  //   console.log(e.target);
  const searchInputKillSpace = searchInput.trim();
  //   console.dir(searchInputKillSpace);
  fetchCountry(searchInputKillSpace)
    .then(response => {
      renderUserList(response);
      return response;
    })
    .then(er => {
      //   console.log(er.status);
      if (er.status === 404)
        return Notiflix.Notify.failure(
          'Oops, there is no country with that name'
        );
    });
  if (searchInputKillSpace === '') {
    refs.countryList.innerHTML = '';
    refs.countryInfo.innerHTML = '';
  }
}

// fetchCountry('ukraine').then(response => {
//   renderUserList(response);
// });

function renderUserList(name) {
  //   console.log(name.length);
  // countryListFunct(name);
  if (name.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  }
  if (name.length <= 1) {
    refs.countryList.innerHTML = '';
    countryInfofunct(name);
  }
  if ((name.length > 2) & (name.length < 10)) {
    refs.countryInfo.innerHTML = '';
    countryListFunct(name);
  }
}

function countryListFunct(name) {
  const marklist = name
    .map(name => {
      const picFlag = name.flags;
      const languaGes = name.languages;
      return `<li>
              <p><img src="${picFlag['svg']}" width="40"> : <b>${name.name.official}</b></p>

            </li>`;
    })
    .join('');
  refs.countryList.innerHTML = marklist;
}

function countryInfofunct(name) {
  const markupInfo = name
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
  refs.countryInfo.innerHTML = markupInfo;
}

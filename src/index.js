import './css/styles.css';
import fetchCountries from './js/fetchCountries';

const refs = {
  serchInput: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

const DEBOUNCE_DELAY = 300;

// refs.serchInput.addEventListener('input', onSearchIpnut);

// function onSearchIpnut(e) {
//   const searchInput = e.currentTarget.value;
//   fetchCountries(searchInput).then(response => renderUserList(response));
// }

// const ddd = fetchCountries();
// const aaa = ddd.map(e => e.name);
// console.log(aaa);

// fetchCountries().then(response => {
//   console.log(response[0].name.official);
// });

fetchCountries('japan').then(response => {
  renderUserList(response);
  // console.log(response);
});
//   .then(console.log(renderUserList));

function renderUserList(name) {
  const markup = name
    .map(name => {
      console.dir(name.flags);
      const languaGua = name.languages;
      return `<li>
            <p><b>🇺🇦</b>: ${name.name.official}</p>
            <p><b>Capital</b>: ${name.capital}</p>
            <p><b>Population</b>: ${name.population}</p>
            <p><b>Languages</b>: ${Object.values(languaGua)}</p>
          </li>`;
    })
    .join('');
  refs.countryInfo.innerHTML = markup;
}

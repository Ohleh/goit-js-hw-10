export default function fetchCountries(name) {
  return fetch(
    // `https://restcountries.com/v3.1/all?fields=name,capital,population,flags.svg,languages`
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
    // `https://restcountries.com/v3.1/name/${name}`
  ).then(response => {
    return response.json();
  });
  // .catch(error => console.log('erorRRR', error));
  // .then(name => console.log(name.official));
}

import Notiflix from 'notiflix';
export default function fetchCountries(name) {
  return fetch(
    // `https://restcountries.com/v3.1/all?fields=name,capital,population,flags.svg,languages`
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
    // `https://restcountries.com/v3.1/name/${name}`
  )
    .then(response => {
      if (!response.ok) {
        // throw new Error(response.statusText);
        throw new Error();
      }
      return response.json();
    })
    .catch(error => {
      console.log('404 Not Found main fetch : ' + error);
      return Notiflix.Notify.failure(
        'Denis, there is no country with that name'
      );
    });
}

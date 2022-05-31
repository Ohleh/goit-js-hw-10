export default function (name) {
  return fetch(
    // `https://restcountries.com/v3.1/all?fields=name,capital,population,flags.svg,languages`
    `https://restcountries.com/v2/all?fields=${name},capital,population,flags.svg,languages`
  ).then(response => {
    return response.json();
  });
  // .then(name => console.log(name.official));
}

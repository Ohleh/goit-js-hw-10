!function(){var n,t={serchInput:document.querySelector("#search-box"),countryList:document.querySelector(".country-list"),countryInfo:document.querySelector(".country-info")};(n="ukraine",fetch("https://restcountries.com/v3.1/name/".concat(n,"?fields=name,capital,population,flags,languages")).then((function(n){return n.json()}))).then((function(n){var c;c=n.map((function(n){var t=n.flags,c=n.languages;return'<li>\n            <p><b><img src="'.concat(t.svg,'" width="21"> </b>: ').concat(n.name.official,"</p>\n            <p><b>Capital</b>: ").concat(n.capital,"</p>\n            <p><b>Population</b>: ").concat(n.population,"</p>\n            <p><b>Languages</b>: ").concat(Object.values(c),"</p>\n          </li>")})).join(""),t.countryInfo.innerHTML=c}))}();
//# sourceMappingURL=index.14cfc5e8.js.map

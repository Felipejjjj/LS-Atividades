var container = document.querySelector("ul");

fetch("https://restcountries.com/v3.1/all?fields=name,flags")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    data.sort((a, b) => a.name.common.localeCompare(b.name.common));

    data.map((pais)=> {
        container.innerHTML += `
        <li>
            <img src="${pais.flags.png}">
            <span class="commom-name">${pais.name.common}</span>
            <span class="official-name">${pais.name.official}</span>
        </li>`
    })
  });
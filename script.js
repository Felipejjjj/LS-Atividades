var container = document.querySelector("ul");

fetch("https://restcountries.com/v3.1/all?fields=name,flags")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {

    data.map((pais, index)=> {
        // if (index <50)
        container.innerHTML += `
        <li>
            <img src="${pais.flags.png}">
            <span class="commom-name">${pais.name.common}</span>
            <span class="official-name">${pais.name.official}</span>
        </li>`
    })
  });
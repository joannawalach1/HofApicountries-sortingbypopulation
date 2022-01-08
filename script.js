async function fetchApi() {
    const countriesAPI = 'https://restcountries.com/v2/all';
    await fetch(countriesAPI)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            const countries = data.filter((country) => (country.population) > 37000000);
            const sortedCountries = countries.sort((a, b) => { return b.population - a.population });
            sortedCountries.map(country => {
                let wrapper = document.querySelector(".wrapper");
                let row = document.createElement("div");
                row.className = "row";
                wrapper.appendChild(row);
                let name = document.createElement("p");
                row.appendChild(name);
                name.innerText = country.name;
                let capital = document.createElement("p");
                row.appendChild(capital);
                capital.innerText = country.capital;
                let area = document.createElement("p");
                row.appendChild(area);
                area.innerText = country.area;
                let population = document.createElement("p");
                row.appendChild(population);
                population.innerText = country.population;
            })
        })
        .catch((err) => {
            console.log(err)
        });
}

fetchApi();


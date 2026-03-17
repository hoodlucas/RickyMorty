function getCharacteres() {
    fetch('https://rickandmortyapi.com/api/character', { method: 'GET' })
        .then(response => response.json())
        .then(data => {
            renderCharacters(data.results);
        })
        .catch(error => console.error('Error:', error));
}

function renderCharacters (arr)
{
    for (let index = 0; index < arr.length; index++) {
        document.querySelector(".items").innerHTML += `
            <div class="card flex-shrink-0 me-3" style="width: 18rem;">
                <img src="${arr[index].image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${arr[index].name}</h5>
                    <p class="card-text">${arr[index].gender}</p>
                    <p class="card-text">${arr[index].status}</p>
                    <p class="card-text">${arr[index].type}</p>
                    <a href="details.html" class="btn btn-primary">More information</a>
                </div>
            </div>`;
    }
}

getCharacteres()

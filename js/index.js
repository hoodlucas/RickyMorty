function getCharacteres() {
    fetch('https://rickandmortyapi.com/api/character', { method: 'GET' })
        .then(response => response.json())
        .then(data => {
            renderCharacters(data.results);
        })
        .catch(error => console.error('Error:', error));
}

function getLocations(){
    fetch("https://rickandmortyapi.com/api/location", { method: 'GET'})
        .then(response => response.json())
        .then(data => {
            renderLocation(data.results);
        })
        .catch(error => console.log('Error:', error));
}

function renderCharacters (arr){
    for (let index = 0; index < arr.length; index++) {
                document.querySelector(".items").innerHTML += `<div class="card" style="width: 18rem;">
                    <img src="${arr[index].image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title"> ${arr[index].name}  </h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>`
            }
}

function renderLocation(arr) {
    for (let index = 0; index < arr.length; index++) {
        document.querySelector('.locations').innerHTML += `<div class="card" style="width: 18rem;">
        <img src="location.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${arr[index].name}</h5>
            <p class="card-text">${arr[index].dimension}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>`
        
    }
}
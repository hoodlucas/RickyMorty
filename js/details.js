// 1. Obtenemos la URL de la barra de direcciones
let direccion = window.location.href; 

// 2. Sacamos el ID (el número que viene después del =)
let partes = direccion.split('=');
let idEncontrado = partes[1];

let detailContainer = document.querySelector('#character-detail');

// 3. Lógica para decidir qué buscar
if (idEncontrado) {
    
    if (direccion.includes('location')) {
        // Buscamos ubicación
        fetch(`https://rickandmortyapi.com/api/location/${idEncontrado}`)
            .then(res => res.json())
            .then(data => {
                renderLocationDetail(data);
            });
    } else {
        // Buscamos personaje
        fetch(`https://rickandmortyapi.com/api/character/${idEncontrado}`)
            .then(res => res.json())
            .then(data => {
                renderDetail(data);
            });
    }
}



function renderDetail(character) {
    detailContainer.innerHTML = `
    <div class="container mt-5">
        <div class="row align-items-center mb-5">
            <div class="col-md-6">
                <img src="${character.image}" class="img-fluid rounded shadow w-100">
            </div>
            <div class="col-md-6 text-center text-md-start">
                <h1 class="display-2 fw-bold">${character.name}</h1>
                <p class="fs-4">Personaje de Rick and Morty. Explorando los detalles de su origen y estado actual en el multiverso.</p>
            </div>
        </div>
        <hr class="my-5 border-danger border-2 opacity-100">
        <div class="row row-cols-1 row-cols-md-6 text-center">
            <div class="col"><p class="text-danger fw-bold mb-1">Name</p><p>${character.name}</p></div>
            <div class="col"><p class="text-danger fw-bold mb-1">Status</p><p>${character.status}</p></div>
            <div class="col"><p class="text-danger fw-bold mb-1">Species</p><p>${character.species}</p></div>
            <div class="col"><p class="text-danger fw-bold mb-1">Type</p><p>${character.type || "None"}</p></div>
            <div class="col"><p class="text-danger fw-bold mb-1">Gender</p><p>${character.gender}</p></div>
            <div class="col"><p class="text-danger fw-bold mb-1">Origin</p><p>${character.origin.name}</p></div>
        </div>
    </div>`;
}

function renderLocationDetail(location) {
    detailContainer.innerHTML = `
    <div class="container mt-5">
        <div class="row align-items-center mb-5">
            <div class="col-md-6 text-center">
                <img src="https://img.freepik.com/vector-premium/paisaje-planeta-alienigena-superficie-marte-o-futuro-mundo-espacial_107791-2365.jpg" class="img-fluid rounded shadow w-100">
            </div>
            <div class="col-md-6 text-center text-md-start">
                <h1 class="display-2 fw-bold">${location.name}</h1>
                <p class="fs-4 lead">Ubicación: ${location.type} situada en la dimensión ${location.dimension}.</p>
            </div>
        </div>
        <hr class="my-5 border-danger border-2 opacity-100">
        <div class="row row-cols-1 row-cols-md-6 text-center">
            <div class="col"><p class="text-danger fw-bold mb-1">Name</p><p>${location.name}</p></div>
            <div class="col"><p class="text-danger fw-bold mb-1">Type</p><p>${location.type}</p></div>
            <div class="col"><p class="text-danger fw-bold mb-1">Dimension</p><p>${location.dimension}</p></div>
            <div class="col"><p class="text-danger fw-bold mb-1">Residents</p><p>${location.residents.length}</p></div>
            <div class="col"><p class="text-danger fw-bold mb-1">Created</p><p>${new Date(location.created).toLocaleDateString()}</p></div>
            <div class="col"><p class="text-danger fw-bold mb-1">ID</p><p>#${location.id}</p></div>
        </div>
    </div>`;
}
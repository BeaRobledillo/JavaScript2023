//Colores badges para especies
const colors = {
  bug: '#709972',
  dragon: '#ffbf5a',
  electric: '#e8cb38',
  fairy: '#c663d6',
  fighting: '#e3870e',
  fire: '#e35959',
  flying: '#5ad5e6',
  grass: '#61f26a',
  ground: '#b5620e',
  ice: '#dae7ed ',
  normal: '#ffffff',
  poison: '#7123cc',
  psychic: '#cbd130',
  rock: '#9e9e9b',
  water: '#35a7de',
};
//Colores para especies
const bgColors = {
  bug: 'warning',
  dark: 'black',
  dragon: 'primary',
  electric: 'secondary',
  fairy: 'info',
  fighting: 'primary',
  fire: 'danger',
  flying: 'info',
  ghost: 'info',
  grass: 'success',
  ground: 'warning',
  ice: 'info ',
  normal: 'secondary',
  poison: 'primary',
  psychic: 'info',
  rock: 'danger',
  water: 'primary',
};

//Rangos
const rangeInput1 = document.querySelector ('.rangeInput1');
const rangeInput2 = document.querySelector ('.rangeInput2');
const rangeArea1 = document.querySelector ('.rangeArea1');
const rangeArea2 = document.querySelector ('.rangeArea2');

//Rango 1
rangeInput1.addEventListener ('input', e => {
  if (Number (rangeInput1.value) > Number (rangeInput2.value)) {
    rangeInput1.value = rangeInput2.value;
  }
  // console.log(e.target.value)
  rangeArea1.innerHTML = e.target.value;
});
//Rango 2
rangeInput2.addEventListener ('input', e => {
  if (Number (rangeInput2.value) < Number (rangeInput1.value)) {
    rangeInput2.value = rangeInput1.value;
  }
  rangeArea2.innerHTML = e.target.value;
});

//Botón de buscar por Kg
const search = document.querySelector ('.search');
search.addEventListener ('click', () => {
  const kgs = document.querySelectorAll ('.kg');
  let counter = 0;
  kgs.forEach (item => {
    item.closest ('.card').style.display = 'none';
    const result =
      Number (item.innerText) < Number (rangeInput2.value) &&
      Number (item.innerText) > Number (rangeInput1.value);
    if (result) {
      counter++;
      item.closest ('.card').style.display = 'block';
    }
  });
  const foundedFavsDiv = document.querySelector ('.foundedFavs');
  foundedFavsDiv.innerText = `${counter} pokes founded`;
});

//Botón de Limpiar
const resetKg = document.querySelector ('.resetBtn');
resetKg.addEventListener ('click', () => {
  const cards = document.querySelectorAll ('.card');
  cards.forEach (item => {
    item.style.display = 'block';
  });
  const foundedFavs = document.querySelector ('.foundedFavs');
  foundedFavs.innerHTML = `${cards.length} pokes founded`;
  rangeInput1.value = 0;
  rangeInput2.value = 1000;
  rangeArea1.innerHTML = 0;
  rangeArea2.innerHTML = 1000;
});

//Input de Buscar
const searchInput = document.querySelector ('.search');
searchInput.addEventListener ('keyup', e => {
  const allNames = document.querySelectorAll ('.pokeName');
  const search = searchInput.value.toLowerCase ();

  allNames.forEach (item => {
    item.parentElement.parentElement.style.display = 'block';
    if (!item.innerHTML.toLowerCase ().includes (search)) {
      item.parentElement.parentElement.style.display = 'none';
    }
  });
});

//Conexión a la API
const fetchPokedex = async number => {
  // console.log(number)
  const url = `https://pokeapi.co/api/v2/pokemon/${number}`;
  const res = await fetch (url); //espera a la URL
  const data = await res.json (); //espera al JSON
  changeId (data);
};
fetchPokedex ();
//cambiar ID y Actualizar
const changeId = data => {
  if (data.id < 10) {
    data.id = '00' + data.id;
  } else if (data.id < 100) {
    data.id = '0' + data.id;
  }
  updateDom (data);
};

//Pokemons por número
const pokesNumbers = pokeN => {
  const foundedFavs = document.querySelector ('.foundedFavs');
  foundedFavs.innerText = `${pokeN - 1} pokes founded`;
};
const numbers = () => {
  for (var i = 0; i <= 150; i++) {
    fetchPokedex (i);
  }
  pokesNumbers (i);
};
numbers ();

//Mostrar imágenes de pokemons en cards
const updateDom = poke => {
  const rowDiv = document.querySelector ('.row');
  // console.log(rowDiv)
  const type = poke.types[0].type.name;
  const color = colors[type];
  const bgColor = bgColors[type];
  rowDiv.innerHTML += `
    <div class="card shadow text-center justify-content-center" style="width: 18rem; background: ${color}">
    <div  class="d-flex align-items-center justify-content-between">
    <h5 class="d-flex mt-2 mr-1"><span class="badge bg-${bgColor ? bgColor : ''}">${type.toUpperCase ()}</span></h5>
    <i class="fa-regular fa-heart text-danger"></i>
    </div>
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${poke.id}.png" class="card-img-top" alt="...">
        <div class="card-body">
        <h2 class="pokeName">${poke.name.toUpperCase ()}</h2>
        <p class="card-text" id="pokeIds">#${poke.id}</p>
        <p class="card-text"><b>Weight: </b><span class="kg">${poke.weight}</span> Kg</p>
        <p class="card-text"><b>Height: </b>${(poke.height / 3.28).toFixed (3)} m</p>
        <p class="card-text"><b>Type: </b>${poke.types[0].type.name}</p>        
        </div>
  </div>
    `;
};

//Filas de elementos
const row = document.querySelector ('.row');
let favPokes;
row.addEventListener ('click', e => {
  if (e.target.classList.contains ('fa-heart')) {
    const pokeId =
      e.target.parentElement.parentElement.lastElementChild.firstElementChild
        .nextElementSibling.innerText;
    //LocalStorage
    let locStorageArr = JSON.parse (localStorage.getItem ('favs'));
    if (!locStorageArr) {
      favPokes = [];
      favPokes.push (Number (pokeId.slice (1)));
    } else {
      favPokes = locStorageArr;
      let isExist = false;
      favPokes.forEach (item => {
        if (item == Number (pokeId.slice (1))) {
          let index = favPokes.indexOf (item);
          favPokes.splice (index, 1);
          isExist = true;
        }
      });
      isExist ? '' : favPokes.push (Number (pokeId.slice (1)));
    }
    localStorage.setItem ('favs', JSON.stringify (favPokes));
    // console.log(JSON.parse(localStorage.getItem("favs")));
    if (e.target.classList.contains ('fa-regular')) {
      e.target.classList.replace ('fa-regular', 'fa-solid');
    } else {
      e.target.classList.replace ('fa-solid', 'fa-regular');
    }
  }
});
setTimeout (() => {
  if (!localStorage.getItem ('favs')) {
  } else {
    const pokeIds = document.querySelectorAll ('#pokeIds');
    const favsArr = JSON.parse (localStorage.getItem ('favs'));
    pokeIds.forEach (item => {
      for (let i = 0; i < pokeIds.length; i++) {
        if (Number (item.innerText.slice (1)) == favsArr[i]) {
          // console.log(item);
          item.parentElement.parentElement.firstElementChild.lastElementChild.classList.replace (
            'fa-regular',
            'fa-solid'
          );
        }
      }
    });
  }
}, 700);

//Mostrar los favoritos segun localStorage
const showFavsButton = document.querySelector ('.showFavs');
showFavsButton.addEventListener ('click', e => {
  if (
    JSON.parse (localStorage.getItem ('favs')).length == 0 &&
    e.target.innerText != 'Mostrar Todo'
  ) {
    console.log (favFlag);
    alert ('Elige un pokemon favorito');
  } else {
    if (showFavsButton.innerText == 'Mostrar Favoritos') {
      showFavsButton.innerText = 'Mostrar Todo';
      let favArr = JSON.parse (localStorage.getItem ('favs'));
      const allPokes = document.querySelectorAll ('#pokeIds');
      let foundedFavsCounter = 0;
      allPokes.forEach (item => {
        item.parentElement.parentElement.style.display = 'none';
        for (let i = 0; i < allPokes.length; i++) {
          if (favArr[i] == Number (item.innerText.slice (1))) {
            item.parentElement.parentElement.style.display = 'block';
            foundedFavsCounter++;
          }
        }
      });
      const foundedFavsDiv = document.querySelector ('.foundedFavs');
      foundedFavsDiv.innerHTML = `${foundedFavsCounter} pokes founded`;
      favFlag = true;
    } else {
      showFavsButton.innerText = 'Mostrar Favoritos';
      const cards = document.querySelectorAll ('.card');
      const foundedFavsDiv = document.querySelector ('.foundedFavs');
      foundedFavsDiv.innerHTML = `${cards.length} pokes founded`;
      cards.forEach (item => {
        item.style.display = 'block';
      });
    }
  }
});

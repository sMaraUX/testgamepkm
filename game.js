

//CLASE POKEMON
class Pokemon {
    constructor(nombre, vida, ataque1, ataque2, poderataque1, poderataque2, img, id) {
      this.nombre = nombre
      this.vida = vida
      this.ataque1 = ataque1
      this.ataque2 = ataque2
      this.poderataque1 = poderataque1
      this.poderataque2 = poderataque2
      this.img = img
      this.id = id
    }
  }
  class User {
    constructor(username) {
        this.username = username
  
    }
}

  // ataques y daños
  
  const impactTrueno = 230
  const rayo = 300
  const lanzallamas = 230
  const ascuas = 120
  const pistoladeAgua = 210
  const burbujas = 150
  const latigazo = 200
  const latigoCepa = 60

  // GENERANDO POKEMONS
  
  const pikachu = new Pokemon("Pikachu", 1350, "impact Trueno", "rayo", impactTrueno, rayo, "Pikachu.png", "pikachuId")
  const charmander = new Pokemon("Charmander", 1260, "Lanzallamas", "Ascuas", lanzallamas, ascuas, "Charmander.png", "charmanderId")
  const squirtle = new Pokemon("Squirtle", 1250, "Pistola de Agua", "Burbujas", pistoladeAgua, burbujas, "Squirtle.png", "squirtleId")
  const bulbasaur = new Pokemon("Bulbasaur", 1210, "Latigazo", "Latigo Cepa", latigazo, latigoCepa, "Bulbasaur.png", "bulbasaurId")

// Array de Pokemons disponibles
  const pokebolas = [pikachu, charmander, squirtle, bulbasaur]


//Nombre jugador y storage

idnombre = document.getElementById("idnombre")
const jugadordatos = []

// input name

idnombre.addEventListener('submit', (e) => {
    e.preventDefault()
    const username = document.getElementById("name_field").value


    const user = new User(username)

    jugadordatos.push(user)
    idnombre.reset()

})

// storage


// if(localStorage.getItem('jugadordatos')) { 
//   jugadordatos =  JSON.parse(localStorage.getItem('jugadordatos')) 
// } else {
//     localStorage.setItem('jugadordatos', JSON.stringify(jugadordatos)) 
// }

console.log(jugadordatos)


  // const hiddenname = document.getElementById("idnombre")
  // hiddenname.addEventListener("click", () => {
  //   hiddenname.classList.remove("inputname");
  //   hiddenname.classList.add("inputnamehidden");
  // })



// cards elección de pokemon
const pokebolasEleccion = document.getElementById('PokebolasEleccion')

pokebolas.forEach(pokebolas => {
  pokebolasEleccion.innerHTML += `
        <div class="nes-container" id="${pokebolas.id}" style="width: 300px; border-radius: 10px; margin: 10px;">
            <div class="card-body"  >
                <h5 class="card-title">${pokebolas.nombre}</h5>
                <p class="card-text">Vida: ${pokebolas.vida}</p>
                <p class="card-text">Ataque 1: ${pokebolas.ataque1}</p>
                <p class="card-text">Ataque 2: ${pokebolas.ataque2}</p>
                <img src="${pokebolas.img}" width="100px" height="auto" style="margin: 15px;"/>
                <br>
                <button type="button" class="nes-btn is-primary"id="button-${pokebolas.id}">Yo te elijo!</button>
           </div> 
        </div>   
        `
})

// jugadores array vacío

const jugador1 = []
const jugadorPC = []


// <div class="jugador1">
        //         <div class="hpvida1" id="hpvida1">${pokebolas.vida}</div>
        //         <img src="${pokebolas.img}" class="pokemon2" id="pokemon1"/>
        //     </div>
        //     <div class="jugador2">
        //         <div class="hpvida2" id="hpvida2">${pokebolas.vida}</div>
        //         <img src="${pokebolas.img}" class="pokemon2" id="pokemon2"/>
        //     </div> 
      
// selección: Pikachu
const buttonpikachu = document.getElementById("button-pikachuId")
buttonpikachu.addEventListener("click",() => {
  jugador1.push(pikachu)

 })


const buttoncharmander = document.getElementById("button-charmanderId")
buttoncharmander.addEventListener("click",() => {
  jugador1.push(charmander)
 // jugadorPC.push(Math.floor(Math.random()*pokebolas.length))
})

const buttonsquirtle = document.getElementById("button-squirtleId")
buttonsquirtle.addEventListener("click",() => {
  jugador1.push(squirtle)
  //jugadorPC.push(Math.floor(Math.random()*pokebolas.length))
  
})

const buttonbulbasaur = document.getElementById("button-bulbasaurId")
buttonbulbasaur.addEventListener("click",() => {
  jugador1.push(bulbasaur)
  jugadorPC.push(Math.floor(Math.random()*pokebolas.length))

})
// buttonelegir.addEventListener("click", () => {
//   pokebolasEleccion.classList.remove("card");
//   pokebolasEleccion.classList.add("cardremove");
// })

//ELECCIÓN DEL PC

function eleccionPC(){
  pcElige = parseInt(Math.floor(Math.random()*pokebolas.length))
    switch (pcElige) {
      case (pcElige = 1):
        jugadorPC.push(pikachu)
        break
    case (pcElige = 2):
        jugadorPC.push(charmander)
        break
    case (pcElige = 3):
      jugadorPC.push(squirtle)
      break
   case (pcElige = 4):
      jugadorPC.push(bulbasaur)
    break
    default:
    eleccionPC()
    }
}
eleccionPC()

const pikachuId = document.getElementById("pikachuId")
const cardpokemon = document.querySelectorAll(".card")

pikachuId.addEventListener("click", () => {
    pikachuId.innerHTML = `
    <img src="Pokeball.png" class="" width="100px" height="auto"/>
    <p>Pikachu atrapado!</p>
    `
    charmanderId.classList.remove("card");
    charmanderId.classList.add("cardremove");
    squirtleId.classList.remove("card");
    squirtleId.classList.add("cardremove");
    bulbasaurId.classList.remove("card");
    bulbasaurId.classList.add("cardremove");
    
    
})


const charmanderId = document.getElementById("charmanderId")

charmanderId.addEventListener("click", () => {
  charmanderId.innerHTML = `
  <img src="Pokeball.png" class="" width="100px" height="auto"/>
  <p>Charmander atrapado!</p>
  `
  pikachuId.classList.remove("card");
  pikachuId.classList.add("cardremove");
  squirtleId.classList.remove("card");
  squirtleId.classList.add("cardremove");
  bulbasaurId.classList.remove("card");
  bulbasaurId.classList.add("cardremove");
  
})

const squirtleId = document.getElementById("squirtleId")


squirtleId.addEventListener("click", () => {
  squirtleId.innerHTML = `
  <img src="Pokeball.png" class="" width="100px" height="auto"/>
  <p>Squirtle atrapado!</p>
  `
  pikachuId.classList.remove("card");
  pikachuId.classList.add("cardremove");
  bulbasaurId.classList.remove("card");
  bulbasaurId.classList.add("cardremove");
  charmanderId.classList.remove("card");
  charmanderId.classList.add("cardremove");
  

})
const bulbasaurId = document.getElementById("bulbasaurId")
bulbasaurId.addEventListener("click", () => {
  bulbasaurId.innerHTML = `
  <img src="Pokeball.png" class="" width="100px" height="auto"/>
  <p>Bulbasaur atrapado!</p>
  `
  pikachuId.classList.remove("card");
  pikachuId.classList.add("cardremove");
  squirtleId.classList.remove("card");
  squirtleId.classList.add("cardremove");
  charmanderId.classList.remove("card");
  charmanderId.classList.add("cardremove");

  
})

// forEach
// `<progress class="nes-progress is-primary" value="${jugador1.tupokebola1.vida}" max="100"></progress>`

console.log(jugador1, jugadorPC)
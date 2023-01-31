// @ts-nocheck

const Toast = Swal.mixin({
  toast: true,
  position: 'center-end',
  showConfirmButton: false,
  timer: 5000,
  background: '#fcbb15',
  color: '#ffffff',
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

let cheese = 0
let totalCheese = 0
let mouseElem = document.getElementById('mouseButton')
let roverElem = document.getElementById('roverButton')
let pickaxeElem = document.getElementById('pickaxeButton')
let drillElem = document.getElementById('drillButton')
let alienElem = document.getElementById('alienButton')
let mothershipElem = document.getElementById('mothershipButton')
let tntElem = document.getElementById('tntButton')
let pickText = document.getElementById('pickText')
let roverText = document.getElementById('roverText')
let drillText = document.getElementById('drillText')
let mouseText = document.getElementById('mouseText')
let tntText = document.getElementById('tntText')
let alienText = document.getElementById('alienText')
let mothershipText = document.getElementById('mothershipText')
let mouseStats = document.getElementById('mouseStats')
let roverStats = document.getElementById('roverStats')
let pickaxeStats = document.getElementById('pickStats')
let drillStats = document.getElementById('drillStats')
let tntStats = document.getElementById('tntStats')
let alienStats = document.getElementById('alienStats')
let autoElem = document.getElementById('autoCheese')
let clickElem = document.getElementById('clickCheese')

let IDs = []

let alien = {
  name: 'alien',
  price: 25000,
  quantity: 0,
  revealed: false
}

let mothership = {
  name: 'mothership',
  price: 100000,
  quantity: 0,
  revealed: false
}


let clickUpgrades = [
  {
    name: 'pickaxe',
    price: 50,
    quantity: 0,
    multiplier: 1,
    revealed: false
  },
  {
    name: 'drill',
    price: 250,
    quantity: 0,
    multiplier: 10,
    revealed: false
  },
  {
    name: 'tnt',
    price: 1000,
    quantity: 0,
    multiplier: 50,
    revealed: false
  }
]

let automaticUpgrades = [
  {
    name: 'mousetronaut',
    price: 100,
    quantity: 0,
    multiplier: 5,
    revealed: false
  },
  {
    name: 'rover',
    price: 500,
    quantity: 0,
    multiplier: 25,
    revealed: false
  }
]

loadProgress()

let mouse = automaticUpgrades.find(object => object.name == 'mousetronaut')
let rover = automaticUpgrades.find(object => object.name == 'rover')
let pickaxe = clickUpgrades.find(object => object.name == 'pickaxe')
let drill = clickUpgrades.find(object => object.name == 'drill')
let tnt = clickUpgrades.find(object => object.name == 'tnt')


function mine(){
  let mineAmount = 1
clickUpgrades.forEach(upgrade => {
  let amount = upgrade.quantity * upgrade.multiplier
  mineAmount += amount
})
  if(cheese >= pickaxe.price - mineAmount){
    pickaxeElem.removeAttribute(`disabled`)
  } 
  if(cheese >= drill.price - mineAmount){
    drillElem.removeAttribute(`disabled`)
  } 
  if(cheese >= mouse.price - mineAmount){
    mouseElem.removeAttribute(`disabled`)
  } 
  if(cheese >= rover.price - mineAmount){
    roverElem.removeAttribute(`disabled`)
  }
  if(cheese >= tnt.price - mineAmount){
    tntElem.removeAttribute(`disabled`)
  }  
  if((cheese >= alien.price - mineAmount) && alien.quantity == 0){
    alienElem.removeAttribute(`disabled`)
  }
  if((cheese >= mothership.price - mineAmount) && mothership.quantity == 0){
    mothershipElem.removeAttribute(`disabled`)
  }
  cheese += mineAmount
  totalCheese += mineAmount
  drawUpgrades()
  drawCheese()
  playClick()
}

function buyPickaxe(){
  let pickaxe = clickUpgrades.find(object => object.name == 'pickaxe')
  if(cheese >= pickaxe.price){
    cheese -= pickaxe.price
    pickaxe.quantity += 1
    pickaxe.price += 50
  }
  drawPick()
  drawCheese()
  drawUpgrades()
}

function buyTNT(){
  let tnt = clickUpgrades.find(object => object.name == 'tnt')
  if(cheese >= tnt.price){
    cheese -= tnt.price
    tnt.quantity += 1
    tnt.price += 1000
  }
  drawTNT()
  drawCheese()
  drawUpgrades()
}

function buyDrill(){
  let drill = clickUpgrades.find(object => object.name == 'drill')
  if(cheese >= drill.price){
    cheese -= drill.price
    drill.quantity += 1
    drill.price += 250
  }
  drawDrill()
  drawCheese()
  drawUpgrades()
}

let upgrades = 0

function buyMousetronaut(){
  let mousetronaut = automaticUpgrades.find(object => object.name == 'mousetronaut')
  if(cheese >= mousetronaut.price){
    cheese -= mousetronaut.price
    mousetronaut.quantity += 1
    upgrades += 1
    mouse.price += 100
  }
  if(upgrades == 1){
    startInterval()
  }
  drawMouse()
  drawCheese()
  drawUpgrades()
}

function buyRover(){
  let rover = automaticUpgrades.find(object => object.name == 'rover')
  if(cheese >= rover.price){
    cheese -= rover.price
    rover.quantity += 1
    upgrades += 1
    rover.price += 500
  }
  if(upgrades == 1){
    startInterval()
  }
  drawRover()
  drawCheese()
  drawUpgrades()
}

function buyAlien(){
  if(cheese >= alien.price){
    cheese -= alien.price
    alien.quantity++
  }
  if(cheese < mouse.price){
    mouseElem.setAttribute(`disabled`, '')
  }
  if(cheese < rover.price){
    roverElem.setAttribute(`disabled`, '')
  }
  if(cheese < drill.price){
    drillElem.setAttribute(`disabled`, '')
  }
  if(cheese < pickaxe.price){
    pickaxeElem.setAttribute(`disabled`, '')
  }
  if(cheese < tnt.price){
    tntElem.setAttribute(`disabled`, '')
  }
  if(alien.quantity == 1){
    alienElem.setAttribute(`disabled`, '')
  }
  if(mothership.quantity == 1 || cheese < mothership.price){
    mothershipElem.setAttribute(`disabled`, '')
  }
  document.getElementById('alien').removeAttribute('hidden')
  playBogos()
  drawAlien()
  drawCheese()
  drawUpgrades()
}

function buyMothership(){
  if(cheese >= mothership.price){
    cheese -= mothership.price
    mothership.quantity++
    clearInterval(IDs[0])
    setInterval(collectAutoUpgrades, 500)
  }
  document.getElementById('mothership').removeAttribute('hidden')
  playBogos()
  drawCheese()
  drawUpgrades()
}

function collectAutoUpgrades(){
  let autoTotal = 0
automaticUpgrades.forEach(upgrade => {
  let auto = upgrade.quantity * upgrade.multiplier
  autoTotal += auto
})
  if(cheese >= pickaxe.price - autoTotal){
    pickaxeElem.removeAttribute(`disabled`)
  } 
  if(cheese >= drill.price - autoTotal){
    drillElem.removeAttribute(`disabled`)
  } 
  if(cheese >= mouse.price - autoTotal){
    mouseElem.removeAttribute(`disabled`)
  } 
  if(cheese >= rover.price - autoTotal){
    roverElem.removeAttribute(`disabled`)
  }
  if(cheese >= tnt.price - autoTotal){
    tntElem.removeAttribute(`disabled`)
  }
  if((cheese >= alien.price - autoTotal) && alien.quantity == 0){
    alienElem.removeAttribute(`disabled`)
  }
  if((cheese >= mothership.price - autoTotal) && mothership.quantity == 0){
    mothershipElem.removeAttribute(`disabled`)
  }
  if(alien.quantity == 1){
    autoTotal *= 2
  }
  cheese += autoTotal
  totalCheese += autoTotal
  drawCheese()
  drawUpgrades()
  console.log('collected')
}



function startInterval(){
  let intervalID = setInterval(collectAutoUpgrades, 1000)
  IDs.push(intervalID)
}

function drawCheese(){
  let cheeseElem = document.getElementById('cheese')
  let totalElem = document.getElementById('totalCheese')
  let title = document.getElementById('title')
  totalElem.innerText = `Total Cheese Mined: ${totalCheese.toString()}`
  cheeseElem.innerHTML = `
  <i class="mdi mdi-cheese"></i>: ${cheese}
  `
  title.innerText = `Moon Miner - ${cheese.toString()}🧀`

  if(totalCheese >= 1000 && document.getElementById('achieve1').hasAttribute('hidden')){
    Toast.fire(
      '1,000 Total Cheese Mined',
      "I've seen feta.",
      'success'
    )
    document.getElementById('achieve1').removeAttribute('hidden')
  }
  if(totalCheese >= 7500 && document.getElementById('achieve2').hasAttribute('hidden')){
    Toast.fire(
      '7,500 Total Cheese Mined',
      "I brie-lieve in you...",
      'success'
    )
    document.getElementById('achieve2').removeAttribute('hidden')
  }
  if(totalCheese >= 50000 && document.getElementById('achieve3').hasAttribute('hidden')){
    Toast.fire(
      '50,000 Total Cheese Mined',
      "Wow! Gouda job!",
      'success'
    )
    document.getElementById('achieve3').removeAttribute('hidden')
  }
  if(totalCheese >= 100000 && document.getElementById('achieve4').hasAttribute('hidden')){
    Toast.fire(
      '100,000 Total Cheese Mined',
      "I'm Blue (Da Ba Cheese Da Ba Mine)",
      "You can thank my girlfriend for that one...",
      'success'
    )
    document.getElementById('achieve4').removeAttribute('hidden')
  }
  if(cheese < mouse.price){
    mouseElem.setAttribute(`disabled`, '')
  }
  if(cheese < rover.price){
    roverElem.setAttribute(`disabled`, '')
  }
  if(cheese < drill.price){
    drillElem.setAttribute(`disabled`, '')
  }
  if(cheese < pickaxe.price){
    pickaxeElem.setAttribute(`disabled`, '')
  }
  if(cheese < tnt.price){
    tntElem.setAttribute(`disabled`, '')
  }
  if(cheese < alien.price){
    alienElem.setAttribute(`disabled`, '')
  }
  if(mothership.quantity == 1 || cheese < mothership.price){
    mothershipElem.setAttribute(`disabled`, '')
  }
  window.localStorage.setItem('cheese', JSON.stringify(cheese))
  window.localStorage.setItem('totalCheese', JSON.stringify(totalCheese))
}

function drawUpgrades(){
  if(cheese >= 50 || pickaxe.revealed == true){
    pickText.innerHTML = `<p class="nomb">Pickaxe!</p>
    <p class="nomb">Click Power +1</p>`
    pickaxeStats.innerHTML = `Pickaxes <i class="mdi mdi-arrow-right-bold"></i> ${pickaxe.quantity.toString()}`
    pickaxe.revealed = true
  }
  if(cheese >= 100 || mouse.revealed == true){
    mouseText.innerHTML = `<p class="nomb">Mousetronaut!</p>
    <p class="nomb">5 Cheese/s</p>`
    mouseStats.innerHTML = `Mousetronauts <i class="mdi mdi-arrow-right-bold"></i> ${mouse.quantity.toString()}`
    mouse.revealed = true
  }
  if(cheese >= 250 || drill.revealed == true){
    drillText.innerHTML = `<p class="nomb">Drill!</p>
    <p class="nomb">Click Power +10</p>`
    drillStats.innerHTML = `Drills <i class="mdi mdi-arrow-right-bold"></i> ${drill.quantity.toString()}`
    drill.revealed = true
  }
  if(cheese >= 500 || rover.revealed == true){
    roverText.innerHTML = `<p class="nomb">Rover!</p>
    <p class="nomb">25 Cheese/s</p>`
    roverStats.innerHTML = `Rovers <i class="mdi mdi-arrow-right-bold"></i> ${rover.quantity.toString()}`
    rover.revealed = true
  }
  if(cheese >= 1000 || tnt.revealed == true){
    tntText.innerHTML = `<p class="nomb">TNT!</p>
    <p class="nomb">Click Power +50</p>`
    tntStats.innerHTML = `TNT <i class="mdi mdi-arrow-right-bold"></i> ${tnt.quantity.toString()}`
    tnt.revealed = true
  }
  if(cheese >= 25000 && alien.quantity == 0 || alien.revealed == true){
    alienText.innerHTML = `<p class="nomb">Alien!</p>
    <p class="nomb">Cheese/s * 2</p>`
    alienStats.innerHTML = `Alien?`
    alien.revealed = true
  }
  if(cheese >= 100000 && mothership.quantity == 0 || mothership.revealed == true){
    mothershipText.innerHTML = `<p class="nomb">Mothership!</p>
    <p class="nomb">Get your cheese every HALF second!</p>`
    mothership.revealed = true
  }


  
  let mineAmount = 1
  clickUpgrades.forEach(upgrade => {
    let amount = upgrade.quantity * upgrade.multiplier
    mineAmount += amount
  })
  
  let autoTotal = 0
  automaticUpgrades.forEach(upgrade => {
    let auto = upgrade.quantity * upgrade.multiplier
    autoTotal += auto
  })
  
  if(alien.quantity == 1){
    autoTotal *= 2
    window.localStorage.setItem('alien', JSON.stringify(alien))
  }
  if(mothership.quantity == 1){
    autoTotal *= 2
    window.localStorage.setItem('mothership', JSON.stringify(mothership))
  }

  mouseElem.innerHTML = `${mouse.price}<i class="mdi mdi-cheese"></i>`
  roverElem.innerHTML = `${rover.price}<i class="mdi mdi-cheese"></i>`
  pickaxeElem.innerHTML = `${pickaxe.price}<i class="mdi mdi-cheese"></i>`
  drillElem.innerHTML = `${drill.price}<i class="mdi mdi-cheese"></i>`
  tntElem.innerHTML = `${tnt.price}<i class="mdi mdi-cheese"></i>`
  autoElem.innerHTML = `Cheese / Sec <i class="mdi mdi-arrow-right-bold"></i> ${autoTotal}`
  clickElem.innerHTML = `Cheese / Click <i class="mdi mdi-arrow-right-bold"></i> ${mineAmount}`

  window.localStorage.setItem('autoUpgrades', JSON.stringify(automaticUpgrades))
  window.localStorage.setItem('clickUpgrades', JSON.stringify(clickUpgrades))
}

function drawPick(){
  pickaxeStats.innerHTML = `Pickaxes <i class="mdi mdi-arrow-right-bold"></i> ${pickaxe.quantity}`
}
function drawDrill(){
  drillStats.innerHTML = `Drills <i class="mdi mdi-arrow-right-bold"></i> ${drill.quantity}`
}
function drawTNT(){
  tntStats.innerHTML = `TNT <i class="mdi mdi-arrow-right-bold"></i> ${tnt.quantity}`
}
function drawMouse(){
  mouseStats.innerHTML = `Mousetronauts <i class="mdi mdi-arrow-right-bold"></i> ${mouse.quantity}`
}
function drawRover(){
  roverStats.innerHTML = `Rovers <i class="mdi mdi-arrow-right-bold"></i> ${rover.quantity}`
}
function drawAlien(){
  alienStats.innerHTML = `Alien? <i class="mdi mdi-checkbox-marked green"></i> `
}

function playClick(){
  let click = document.getElementById('click-sound')
  // @ts-ignore
  click.play();
}

function playBogos(){
  let bogos = document.getElementById('bogos-binted')
  // @ts-ignore
  bogos.play()
}

function loadProgress(){
  let cheeseData = JSON.parse(window.localStorage.getItem('cheese'))
  let totalCheeseData = JSON.parse(window.localStorage.getItem('totalCheese'))
  let clickUpgradesData = JSON.parse(window.localStorage.getItem('clickUpgrades'))
  let autoUpgradesData = JSON.parse(window.localStorage.getItem('autoUpgrades'))
  let alienData = JSON.parse(window.localStorage.getItem('alien'))
  let mothershipData = JSON.parse(window.localStorage.getItem('mothership'))
  if(cheeseData){
    cheese = cheeseData
  }
  if(totalCheeseData){
    totalCheese = totalCheeseData
  }
  if(clickUpgradesData){
    clickUpgrades = clickUpgradesData
  }
  if(autoUpgradesData){
    automaticUpgrades = autoUpgradesData
  }
  if(alienData){
    alien.quantity = 1
  }
  if(mothershipData){
    mothership.quantity = 1
  }
}

drawCheese()
drawUpgrades()
let cheese = 0
let totalCheese = 0
let ID = setInterval(collectAutoUpgrades, 1000)
clearInterval(ID)

let alien = {
  name: 'alien',
  price: 25000,
  quantity: 0,
}

let mothership = {
  name: 'mothership',
  price: 100000,
  quantity: 0
}


let clickUpgrades = [
  {
    name: 'pickaxe',
    price: 50,
    quantity: 0,
    multiplier: 1
  },
  {
    name: 'drill',
    price: 250,
    quantity: 0,
    multiplier: 10
  },
  {
    name: 'tnt',
    price: 1000,
    quantity: 0,
    multiplier: 50,
  }
]

let automaticUpgrades = [
  {
    name: 'mousetronaut',
    price: 100,
    quantity: 0,
    multiplier: 5
  },
  {
    name: 'rover',
    price: 500,
    quantity: 0,
    multiplier: 25
  }
]

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
    let pickaxeElem = document.getElementById('pickaxeButton')
    pickaxeElem.removeAttribute(`disabled`)
  } 
  if(cheese >= drill.price - mineAmount){
    let drillElem = document.getElementById('drillButton')
    drillElem.removeAttribute(`disabled`)
  } 
  if(cheese >= mouse.price - mineAmount){
    let mouseElem = document.getElementById('mouseButton')
    mouseElem.removeAttribute(`disabled`)
  } 
  if(cheese >= rover.price - mineAmount){
    let roverElem = document.getElementById('roverButton')
    roverElem.removeAttribute(`disabled`)
  }
  if(cheese >= tnt.price - mineAmount){
    let tntElem = document.getElementById('tntButton')
    tntElem.removeAttribute(`disabled`)
  }  
  if((cheese >= alien.price - mineAmount) && alien.quantity == 0){
    let alienElem = document.getElementById('alienButton')
    alienElem.removeAttribute(`disabled`)
  }
  if((cheese >= mothership.price - mineAmount) && mothership.quantity == 0){
    let mothershipElem = document.getElementById('mothershipButton')
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
  }else{
    window.alert('You gotta up that cheddar, Big Cheese!')
}
if(cheese < mouse.price){
  let mouseElem = document.getElementById('mouseButton')
  mouseElem.setAttribute(`disabled`, '')
}
if(cheese < rover.price){
  let roverElem = document.getElementById('roverButton')
  roverElem.setAttribute(`disabled`, '')
}
if(cheese < drill.price){
  let drillElem = document.getElementById('drillButton')
  drillElem.setAttribute(`disabled`, '')
}
if(cheese < pickaxe.price){
  let pickaxeElem = document.getElementById('pickaxeButton')
  pickaxeElem.setAttribute(`disabled`, '')
}
if(cheese < tnt.price){
  let tntElem = document.getElementById('tntButton')
  tntElem.setAttribute(`disabled`, '')
}
if(cheese < alien.price){
  let alienElem = document.getElementById('alienButton')
  alienElem.setAttribute(`disabled`, '')
}
if(mothership.quantity == 1 || cheese < mothership.price){
  let mothershipElem = document.getElementById('mothershipButton')
  mothershipElem.setAttribute(`disabled`, '')
}
drawCheese()
drawUpgrades()
drawPick()
}

function buyTNT(){
  let tnt = clickUpgrades.find(object => object.name == 'tnt')
  if(cheese >= tnt.price){
    cheese -= tnt.price
    tnt.quantity += 1
    tnt.price += 1000
  }else{
    window.alert('You gotta up that cheddar, Big Cheese!')
}
if(cheese < mouse.price){
  let mouseElem = document.getElementById('mouseButton')
  mouseElem.setAttribute(`disabled`, '')
}
if(cheese < rover.price){
  let roverElem = document.getElementById('roverButton')
  roverElem.setAttribute(`disabled`, '')
}
if(cheese < drill.price){
  let drillElem = document.getElementById('drillButton')
  drillElem.setAttribute(`disabled`, '')
}
if(cheese < pickaxe.price){
  let pickaxeElem = document.getElementById('pickaxeButton')
  pickaxeElem.setAttribute(`disabled`, '')
}
if(cheese < tnt.price){
  let tntElem = document.getElementById('tntButton')
  tntElem.setAttribute(`disabled`, '')
}
if(cheese < alien.price){
  let alienElem = document.getElementById('alienButton')
  alienElem.setAttribute(`disabled`, '')
}
if(mothership.quantity == 1 || cheese < mothership.price){
  let mothershipElem = document.getElementById('mothershipButton')
  mothershipElem.setAttribute(`disabled`, '')
}
drawCheese()
drawUpgrades()
drawTNT()
}

function buyDrill(){
  let drill = clickUpgrades.find(object => object.name == 'drill')
  if(cheese >= drill.price){
    cheese -= drill.price
    drill.quantity += 1
    drill.price += 250
  }else{
    window.alert('You gotta up that cheddar, Big Cheese!')
  }
  if(cheese < mouse.price){
    let mouseElem = document.getElementById('mouseButton')
    mouseElem.setAttribute(`disabled`, '')
  }
  if(cheese < rover.price){
    let roverElem = document.getElementById('roverButton')
    roverElem.setAttribute(`disabled`, '')
  }
  if(cheese < drill.price){
    let drillElem = document.getElementById('drillButton')
    drillElem.setAttribute(`disabled`, '')
  }
  if(cheese < pickaxe.price){
    let pickaxeElem = document.getElementById('pickaxeButton')
    pickaxeElem.setAttribute(`disabled`, '')
  }
  if(cheese < tnt.price){
    let tntElem = document.getElementById('tntButton')
    tntElem.setAttribute(`disabled`, '')
  }
  if(cheese < alien.price){
    let alienElem = document.getElementById('alienButton')
    alienElem.setAttribute(`disabled`, '')
  }
  if(mothership.quantity == 1 || cheese < mothership.price){
    let mothershipElem = document.getElementById('mothershipButton')
    mothershipElem.setAttribute(`disabled`, '')
  }
  drawCheese()
  drawUpgrades()
  drawDrill()
}

let upgrades = 0

function buyMousetronaut(){
  let mousetronaut = automaticUpgrades.find(object => object.name == 'mousetronaut')
  if(cheese >= mousetronaut.price){
    cheese -= mousetronaut.price
    mousetronaut.quantity += 1
    upgrades += 1
    mouse.price += 100
  }else{
    window.alert('You gotta up that cheddar, Big Cheese!')
  }
  if(upgrades == 1){
    startInterval()
  }
  if(cheese < mouse.price){
    let mouseElem = document.getElementById('mouseButton')
    mouseElem.setAttribute(`disabled`, '')
  }
  if(cheese < rover.price){
    let roverElem = document.getElementById('roverButton')
    roverElem.setAttribute(`disabled`, '')
  }
  if(cheese < drill.price){
    let drillElem = document.getElementById('drillButton')
    drillElem.setAttribute(`disabled`, '')
  }
  if(cheese < pickaxe.price){
    let pickaxeElem = document.getElementById('pickaxeButton')
    pickaxeElem.setAttribute(`disabled`, '')
  }
  if(cheese < tnt.price){
    let tntElem = document.getElementById('tntButton')
    tntElem.setAttribute(`disabled`, '')
  }
  if(cheese < alien.price){
    let alienElem = document.getElementById('alienButton')
    alienElem.setAttribute(`disabled`, '')
  }
  if(mothership.quantity == 1 || cheese < mothership.price){
    let mothershipElem = document.getElementById('mothershipButton')
    mothershipElem.setAttribute(`disabled`, '')
  }
  drawCheese()
  drawUpgrades()
  drawMouse()
}

function buyRover(){
  let rover = automaticUpgrades.find(object => object.name == 'rover')
  if(cheese >= rover.price){
    cheese -= rover.price
    rover.quantity += 1
    upgrades += 1
    rover.price += 500
  }else{
    window.alert('You gotta up that cheddar, Big Cheese!')
  }
  if(upgrades == 1){
    startInterval()
  }
  if(cheese < mouse.price){
    let mouseElem = document.getElementById('mouseButton')
    mouseElem.setAttribute(`disabled`, '')
  }
  if(cheese < rover.price){
    let roverElem = document.getElementById('roverButton')
    roverElem.setAttribute(`disabled`, '')
  }
  if(cheese < drill.price){
    let drillElem = document.getElementById('drillButton')
    drillElem.setAttribute(`disabled`, '')
  }
  if(cheese < pickaxe.price){
    let pickaxeElem = document.getElementById('pickaxeButton')
    pickaxeElem.setAttribute(`disabled`, '')
  }
  if(cheese < tnt.price){
    let tntElem = document.getElementById('tntButton')
    tntElem.setAttribute(`disabled`, '')
  }
  if(cheese < alien.price){
    let alienElem = document.getElementById('alienButton')
    alienElem.setAttribute(`disabled`, '')
  }
  if(mothership.quantity == 1 || cheese < mothership.price){
    let mothershipElem = document.getElementById('mothershipButton')
    mothershipElem.setAttribute(`disabled`, '')
  }
  drawCheese()
  drawUpgrades()
  drawRover()
}

function buyAlien(){
  if(cheese >= alien.price){
    cheese -= alien.price
    alien.quantity++
  }else{
    window.alert('You gotta up that cheddar, Big Cheese!')
  }
  if(cheese < mouse.price){
    let mouseElem = document.getElementById('mouseButton')
    mouseElem.setAttribute(`disabled`, '')
  }
  if(cheese < rover.price){
    let roverElem = document.getElementById('roverButton')
    roverElem.setAttribute(`disabled`, '')
  }
  if(cheese < drill.price){
    let drillElem = document.getElementById('drillButton')
    drillElem.setAttribute(`disabled`, '')
  }
  if(cheese < pickaxe.price){
    let pickaxeElem = document.getElementById('pickaxeButton')
    pickaxeElem.setAttribute(`disabled`, '')
  }
  if(cheese < tnt.price){
    let tntElem = document.getElementById('tntButton')
    tntElem.setAttribute(`disabled`, '')
  }
  if(alien.quantity == 1){
    let alienElem = document.getElementById('alienButton')
    alienElem.setAttribute(`disabled`, '')
  }
  if(mothership.quantity == 1 || cheese < mothership.price){
    let mothershipElem = document.getElementById('mothershipButton')
    mothershipElem.setAttribute(`disabled`, '')
  }
  document.getElementById('alien').removeAttribute('hidden')
  playBogos()
  drawCheese()
  drawUpgrades()
  drawAlien()
}

function buyMothership(){
  if(cheese >= mothership.price){
    cheese -= mothership.price
    mothership.quantity++
    clearInterval(ID)
    setInterval(collectAutoUpgrades, 500)
  }
  if(cheese < mouse.price){
    let mouseElem = document.getElementById('mouseButton')
    mouseElem.setAttribute(`disabled`, '')
  }
  if(cheese < rover.price){
    let roverElem = document.getElementById('roverButton')
    roverElem.setAttribute(`disabled`, '')
  }
  if(cheese < drill.price){
    let drillElem = document.getElementById('drillButton')
    drillElem.setAttribute(`disabled`, '')
  }
  if(cheese < pickaxe.price){
    let pickaxeElem = document.getElementById('pickaxeButton')
    pickaxeElem.setAttribute(`disabled`, '')
  }
  if(cheese < tnt.price){
    let tntElem = document.getElementById('tntButton')
    tntElem.setAttribute(`disabled`, '')
  }
  if(cheese < alien.price){
    let alienElem = document.getElementById('alienButton')
    alienElem.setAttribute(`disabled`, '')
  }
  if(mothership.quantity == 1){
    let mothershipElem = document.getElementById('mothershipButton')
    mothershipElem.setAttribute(`disabled`, '')
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
    let pickaxeElem = document.getElementById('pickaxeButton')
    pickaxeElem.removeAttribute(`disabled`)
  } 
  if(cheese >= drill.price - autoTotal){
    let drillElem = document.getElementById('drillButton')
    drillElem.removeAttribute(`disabled`)
  } 
  if(cheese >= mouse.price - autoTotal){
    let mouseElem = document.getElementById('mouseButton')
    mouseElem.removeAttribute(`disabled`)
  } 
  if(cheese >= rover.price - autoTotal){
    let roverElem = document.getElementById('roverButton')
    roverElem.removeAttribute(`disabled`)
  }
  if(cheese >= tnt.price - autoTotal){
    let tntElem = document.getElementById('tntButton')
    tntElem.removeAttribute(`disabled`)
  }
  if((cheese >= alien.price - autoTotal) && alien.quantity == 0){
    let alienElem = document.getElementById('alienButton')
    alienElem.removeAttribute(`disabled`)
  }
  if((cheese >= mothership.price - autoTotal) && mothership.quantity == 0){
    let mothershipElem = document.getElementById('mothershipButton')
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
  setInterval(collectAutoUpgrades, 1000)
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
    document.getElementById('achieve1').removeAttribute('hidden')
    window.alert(`1,000 Total Cheese Mined!\nAchievement Unlocked: "I've seen feta."`)
  }
  if(totalCheese >= 7500 && document.getElementById('achieve2').hasAttribute('hidden')){
    document.getElementById('achieve2').removeAttribute('hidden')
    window.alert(`7,500 Total Cheese Mined!\nAchievement Unlocked: "I brie-lieve in you..."`)
  }
  if(totalCheese >= 50000 && document.getElementById('achieve3').hasAttribute('hidden')){
    document.getElementById('achieve3').removeAttribute('hidden')
    window.alert(`50,000 Total Cheese Mined!\nAchievement Unlocked: "Wow! Gouda Job!"`)
  }
  if(totalCheese >= 100000 && document.getElementById('achieve4').hasAttribute('hidden')){
    document.getElementById('achieve4').removeAttribute('hidden')
    window.alert(`100,000 Total Cheese Mined?!\nThat get's you the "I'm Blue (Da Ba Cheese Da Ba Mine)" Achievement! (Thank my girlfriend for that one)`)
  }
}

function drawUpgrades(){
  let mouseElem = document.getElementById('mouseButton')
  let roverElem = document.getElementById('roverButton')
  let pickaxeElem = document.getElementById('pickaxeButton')
  let drillElem = document.getElementById('drillButton')
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

  if(cheese >= 50){
    pickText.innerHTML = `<p class="nomb">Pickaxe!</p>
    <p class="nomb">Click Power +1</p>`
    pickaxeStats.innerHTML = `Pickaxes <i class="mdi mdi-arrow-right-bold"></i> ${pickaxe.quantity.toString()}`
  }
  if(cheese >= 100){
    mouseText.innerHTML = `<p class="nomb">Mousetronaut!</p>
    <p class="nomb">5 Cheese/s</p>`
    mouseStats.innerHTML = `Mousetronauts <i class="mdi mdi-arrow-right-bold"></i> ${mouse.quantity.toString()}`
  }
  if(cheese >= 250){
    drillText.innerHTML = `<p class="nomb">Drill!</p>
    <p class="nomb">Click Power +10</p>`
    drillStats.innerHTML = `Drills <i class="mdi mdi-arrow-right-bold"></i> ${drill.quantity.toString()}`
  }
  if(cheese >= 500){
    roverText.innerHTML = `<p class="nomb">Rover!</p>
    <p class="nomb">25 Cheese/s</p>`
    roverStats.innerHTML = `Rovers <i class="mdi mdi-arrow-right-bold"></i> ${rover.quantity.toString()}`
  }
  if(cheese >= 1000){
    tntText.innerHTML = `<p class="nomb">TNT!</p>
    <p class="nomb">Click Power +50</p>`
    tntStats.innerHTML = `TNT <i class="mdi mdi-arrow-right-bold"></i> ${tnt.quantity.toString()}`
  }
  if(cheese >= 25000 && alien.quantity == 0){
    alienText.innerHTML = `<p class="nomb">Alien!</p>
    <p class="nomb">Cheese/s * 2</p>`
    alienStats.innerHTML = `Alien?`
  }
  if(cheese >= 100000 && mothership.quantity == 0){
    mothershipText.innerHTML = `<p class="nomb">Mothership!</p>
    <p class="nomb">Get your cheese every HALF second!</p>`
  }


  mouseElem.innerHTML = `${mouse.price}<i class="mdi mdi-cheese"></i>`
  roverElem.innerHTML = `${rover.price}<i class="mdi mdi-cheese"></i>`
  pickaxeElem.innerHTML = `${pickaxe.price}<i class="mdi mdi-cheese"></i>`
  drillElem.innerHTML = `${drill.price}<i class="mdi mdi-cheese"></i>`
  tntElem.innerHTML = `${tnt.price}<i class="mdi mdi-cheese"></i>`
  
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
  }
  if(mothership.quantity == 1){
    autoTotal *= 2
  }
  
  autoElem.innerHTML = `Cheese / Sec <i class="mdi mdi-arrow-right-bold"></i> ${autoTotal.toString()}`
  clickElem.innerHTML = `Cheese / Click <i class="mdi mdi-arrow-right-bold"></i> ${mineAmount.toString()}`
}

function drawPick(){
  let pickaxeStats = document.getElementById('pickStats')
  pickaxeStats.innerHTML = `Pickaxes <i class="mdi mdi-arrow-right-bold"></i> ${pickaxe.quantity.toString()}`
}
function drawDrill(){
  let drillStats = document.getElementById('drillStats')
  drillStats.innerHTML = `Drills <i class="mdi mdi-arrow-right-bold"></i> ${drill.quantity.toString()}`
}
function drawTNT(){
  let tntStats = document.getElementById('tntStats')
  tntStats.innerHTML = `TNT <i class="mdi mdi-arrow-right-bold"></i> ${tnt.quantity.toString()}`
}
function drawMouse(){
  let mouseStats = document.getElementById('mouseStats')
  mouseStats.innerHTML = `Mousetronauts <i class="mdi mdi-arrow-right-bold"></i> ${mouse.quantity.toString()}`
}
function drawRover(){
  let roverStats = document.getElementById('roverStats')
  roverStats.innerHTML = `Rovers <i class="mdi mdi-arrow-right-bold"></i> ${rover.quantity.toString()}`
}
function drawAlien(){
  let alienStats = document.getElementById('alienStats')
  // @ts-ignore
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

drawCheese()
drawUpgrades()
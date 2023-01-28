let cheese = 0
let timerInterval

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

function mine(){
  let mineAmount = 1
  clickUpgrades.forEach(upgrade => {
    let amount = upgrade.quantity * upgrade.multiplier
    mineAmount += amount
  })
  cheese += mineAmount
  drawCheese()
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
drawCheese()
drawUpgrades()
drawStats()
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
  drawCheese()
  drawUpgrades()
  drawStats()
}

let upgrades = 0

function buyMousetronaut(){
  let mousetronaut = automaticUpgrades.find(object => object.name == 'mousetronaut')
  if(cheese >= mousetronaut.price){
    cheese -= mousetronaut.price
    mousetronaut.quantity += 1
    upgrades += 1
    mousetronaut.price += 100
  }else{
    window.alert('You gotta up that cheddar, Big Cheese!')
  }
  if(upgrades == 1){
    startInterval()
  }
  drawCheese()
  drawUpgrades()
  drawStats()
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
  drawCheese()
  drawUpgrades()
  drawStats()
}

function collectAutoUpgrades(){
  let autoTotal = 0
  automaticUpgrades.forEach(upgrade => {
    let auto = upgrade.quantity * upgrade.multiplier
    autoTotal += auto
  })
  cheese += autoTotal
  drawCheese()
  drawStats()
}

function startInterval(){
  setInterval(collectAutoUpgrades, 2000)
}

function drawCheese(){
  let cheeseElem = document.getElementById('cheese')
  cheeseElem.innerHTML = `
  <i class="mdi mdi-cheese"></i>: ${cheese}
  `
}

function drawUpgrades(){
  let mouseElem = document.getElementById('mouseButton')
  let roverElem = document.getElementById('roverButton')
  let pickaxeElem = document.getElementById('pickaxeButton')
  let drillElem = document.getElementById('drillButton')
  let mouse = automaticUpgrades.find(object => object.name == 'mousetronaut')
  let rover = automaticUpgrades.find(object => object.name == 'rover')
  let pickaxe = clickUpgrades.find(object => object.name == 'pickaxe')
  let drill = clickUpgrades.find(object => object.name == 'drill')

  mouseElem.innerHTML = `${mouse.price}<i class="mdi mdi-cheese"></i>`
  roverElem.innerHTML = `${rover.price}<i class="mdi mdi-cheese"></i>`
  pickaxeElem.innerHTML = `${pickaxe.price}<i class="mdi mdi-cheese"></i>`
  drillElem.innerHTML = `${drill.price}<i class="mdi mdi-cheese"></i>`
}

function drawStats(){
  let mouseElem = document.getElementById('mouseStats')
  let roverElem = document.getElementById('roverStats')
  let pickaxeElem = document.getElementById('pickStats')
  let drillElem = document.getElementById('drillStats')
  let mouse = automaticUpgrades.find(object => object.name == 'mousetronaut')
  let rover = automaticUpgrades.find(object => object.name == 'rover')
  let pickaxe = clickUpgrades.find(object => object.name == 'pickaxe')
  let drill = clickUpgrades.find(object => object.name == 'drill')
  let autoElem = document.getElementById('autoCheese')
  let clickElem = document.getElementById('clickCheese')
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
  
  mouseElem.innerText = `Mousetronauts: ${mouse.quantity.toString()}`
  roverElem.innerText = `Rovers: ${rover.quantity.toString()}`
  pickaxeElem.innerText = `Pickaxes: ${pickaxe.quantity.toString()}`
  drillElem.innerText = `Drills: ${drill.quantity.toString()}`
  autoElem.innerText = `Cheese / 2s: ${autoTotal.toString()}`
  clickElem.innerText = `Cheese / Click: ${mineAmount.toString()}`
}

drawCheese()
drawUpgrades()
drawStats()
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
  multiplier: 5
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
  }else{
    window.alert('You gotta up that cheddar, Big Cheese!')
}
drawCheese()
}

function buyDrill(){
  let drill = clickUpgrades.find(object => object.name == 'drill')
  if(cheese >= drill.price){
    cheese -= drill.price
    drill.quantity += 1
  }else{
    window.alert('You gotta up that cheddar, Big Cheese!')
  }
  drawCheese()
}

let upgrades = 0

function buyMousetronaut(){
  let mousetronaut = automaticUpgrades.find(object => object.name == 'mousetronaut')
  if(cheese >= mousetronaut.price){
    cheese -= mousetronaut.price
    mousetronaut.quantity += 1
    upgrades += 1
  }else{
    window.alert('You gotta up that cheddar, Big Cheese!')
  }
  if(upgrades == 1){
    startInterval()
  }
  drawCheese()
}

function buyRover(){
  let rover = automaticUpgrades.find(object => object.name == 'rover')
  if(cheese >= rover.price){
    cheese -= rover.price
    rover.quantity += 1
    upgrades += 1
  }else{
    window.alert('You gotta up that cheddar, Big Cheese!')
  }
  if(upgrades == 1){
    startInterval()
  }
  drawCheese()
}

function collectAutoUpgrades(){
  let autoTotal = 0
  automaticUpgrades.forEach(upgrade => {
    let auto = upgrade.quantity * upgrade.multiplier
    autoTotal += auto
  })
  cheese += autoTotal
  drawCheese()
}

function startInterval(){
  setInterval(collectAutoUpgrades, 3000)
}

function drawCheese(){
  let cheeseElem = document.getElementById('cheese')
  cheeseElem.innerHTML = `
  <i class="mdi mdi-cheese"></i>: ${cheese}
  `
}

drawCheese()
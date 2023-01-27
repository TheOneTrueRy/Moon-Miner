let cheese = 0

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
}

function buyPickaxe(){
  let pickaxe = clickUpgrades.find(object => object.name == 'pickaxe')
  pickaxe.quantity += 1
}

function buyDrill(){
  let drill = clickUpgrades.find(object => object.name == 'drill')
  drill.quantity += 1
}

function buyMousetronaut(){
  let mousetronaut = automaticUpgrades.find(object => object.name == 'mousetronaut')
  mousetronaut.quantity += 1
}

function buyRover(){
  let rover = automaticUpgrades.find(object => object.name == 'rover')
  rover.quantity += 1
}

function collectAutoUpgrades(){
  let autoTotal = 0
  automaticUpgrades.forEach(upgrade => {
    let auto = upgrade.quantity * upgrade.multiplier
    autoTotal += auto
  })
  cheese += autoTotal
}

function startInterval(){
  setInterval(collectAutoUpgrades, 3000)
}
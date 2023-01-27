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
  name: 'mouse',
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
  cheese += 1
}

function buyPickaxe(){

}

function buyDrill(){

}

function buyMouse(){

}

function buyRover(){

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

if(automaticUpgrades.length == 1){
  startInterval()
}
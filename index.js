//let myAge = 18
//console.log(myAge)

//let firstBatch = 5
//let secondbatch = 7
//let count = firstBatch + secondbatch
//console.log(count)

/*let myAge = 18
let humanDogRatio = 7
let myDogAge = myAge * humanDogRatio
console.log(myDogAge)*/

/*let bonusPoints = 50
console.log(bonusPoints)
bonusPoints = bonusPoints + 50
console.log(bonusPoints)
bonusPoints = bonusPoints - 75
console.log(bonusPoints)
bonusPoints = bonusPoints + 45
console.log(bonusPoints)*/

//let count = 5 

/*function rauan(){
    console.log(42)
}
rauan()*/

/*let lap1 = 34
let lap2 = 33
let lap3 = 36

function logLapTime(){
    let totalTime = lap1+ lap2+lap3
    console.log(totalTime)
}
logLapTime()*/

/*let lapsCompleted = 0
function incrementLap(){
    lapsCompleted = lapsCompleted + 1
}
incrementLap()
incrementLap()
incrementLap()
console.log(lapsCompleted)*/

/*function increment() {
    console.log("The button was clicked")
}*/

/*let username = 'per'
let message = 'You have tree new notifications'
let mesageToUser = message + ', ' + username + '!'
console.log(mesageToUser)*/

/*let name = 42
let greeting = 'Hi,my name is '
let myGreeting = greeting + name
console.log(myGreeting)*/



let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0


function increment(){
    count += 1
    countEl.textContent = count
}
function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
save()
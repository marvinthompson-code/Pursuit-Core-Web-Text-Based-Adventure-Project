const readline = require('readline-sync')
let titleCard = readline.question("CAVE HERO!")
console.log(`${titleCard}`)
let nameInput = readline.question("Enter your name: ")
let overviewStatement = "We need your help. Our princess has been captured, and we need you to rescue her. Can we count on you?"
console.log(`Greetings ${nameInput}!`)
let caveEntrance = "You arrive at the entrance of a dimly lit cave aligned with torches. From the torchlight you see there are three tunnel entrances: One to the left, one to the right, and one to the center. Which tunnel will you enter?"
let tunnels = readline.question("Enter LEFT, CENTER, RIGHT: ")
tunnels = tunnels.toLowerCase()
let tunnelOutcomesArr = ["get attacked","You rescued her!","Nothing here. Go back?"]
let itemDropArr = ["SWORD", "SHIELD", "MEAT", "DOOR KEY",]
let randomOutcome = Math.floor(Math.random() * 10)
let missionStart = readline.question(`${overviewStatement} Type yes or no.`)
missionStart = missionStart.toLowerCase()
//


// 

if (missionStart === "yes") {
    console.log(caveEntrance)
} else {     
    console.log("Your cowardice shames us - Good day!")
}
    
// let tunnelChoice = []

// let tunnelOutcomes = 

// console.log(tunnelOutcomesArr)
let string = ""
let i = 0

if (randomOutcome > 6) {
    string = tunnelOutcomesArr[0];
} else if (randomOutcome > 3) {
    string = tunnelOutcomesArr[1]
} else {
    string = tunnelOutcomesArr[2]
}

 if (tunnels === "left") {
    console.log(string)
 } else if (tunnels === "center") {
      console.log(string)  
 } else if (tunnels === "right") {
        console.log(string)
 } else {
        console.log(string)
 }




const gameDiv = document.querySelector(".game")

const computerChoice = document.createElement("h1")
const userChoice = document.createElement("h1")
const result = document.createElement("h1")
const buttonDiv = document.createElement("div")

gameDiv.append(computerChoice, userChoice, result)


let computerChoiceDisplay
let userChoiceDisplay

// Creat choice buttons 

const choices = ["✊", "🖐", "✌"]
const buttonsHtml = choices.map(choice => `<button>${choice}</button>`).join(" ")

buttonDiv.innerHTML = buttonsHtml
gameDiv.appendChild(buttonDiv)

document.querySelectorAll("button").forEach(button => 
    button.addEventListener("click", (e)=>{
        userChoiceDisplay = e.target.innerHTML
        userChoice.innerHTML = `👧: ${userChoiceDisplay}`
        getComputerChoice()
        getResult()
    }) 
)


// Generate computer choice
const getComputerChoice = () =>{
    let randomNum = Math.floor(Math.random()*choices.length)
    computerChoiceDisplay = choices[randomNum]
    computerChoice.innerHTML = `👽: ${computerChoiceDisplay}`
}

// Generate result
const getResult =()=>{
    console.log(computerChoiceDisplay)
    console.log(userChoiceDisplay)

    switch (`${computerChoiceDisplay} ${userChoiceDisplay}`){
        case `✊ 🖐`:
        case `🖐 ✌`:
        case `✌ ✊`:
            result.innerHTML = `YOU WIN 🎉!!`
            break;
        case `✊ ✌`:
        case `🖐 ✊`:
        case `✌ 🖐`:
            result.innerHTML = `YOU LOST 😭!!`
            break;
        case `✊ ✊`:
        case `✌ ✌`:
        case `🖐 🖐`:
            result.innerHTML = `IT'S A DRAW 😀!!`
            break;
    }

}
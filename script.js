let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");



// draw game function
const drawgame = () => {
console.log("the game is draw")
}

const showwinnner = (userwin) => {
if(userwin){
    console.log("you wins!")
}else{
    console.log("you lose!")
}
}
// generates cmputer choices
const gencompchoice = () =>{
const options = ["Rock" , "paper" , "Scissor"];
const randidx =  Math.floor(Math.random()*3);
return options[randidx]
}

const playgame = (userchoice) =>{
    // pass user choice and pass it 
    console.log("user choice is :" , userchoice);
    // pass computer choice and prints it
const  compchoice =  gencompchoice();
console.log("comptuer choice is :" , compchoice);
if(userchoice == compchoice){
    drawgame();
}else{
    let userwin = true;
    if( userchoice == "rock" ){
     userwin = compchoice =="paper" ? false:true;
    }
    else if( userchoice = "paper"){
        userwin = compchoice == "scissor" ? false : true;
    }
    else{
        userwin = compchoice == "rock"?false :true;
    }
    showwinnner(userwin);
}
};

choices.forEach((choice) => {
choice.addEventListener("click" , () =>{
    const userchoice = choice.getAttribute("id")
playgame(userchoice)
});
});
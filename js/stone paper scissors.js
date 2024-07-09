playgame=confirm("are u interest to play stone paper scissors")
if(playgame=== true){
    playerchoice=prompt("please enter rock,paper or scissors");
    if(playerchoice){
        playerans=playerchoice.trim().toLowerCase();
        if(playerans== "rock" || playerans=="paper" || playerans=="scissors"){
            computerchoice=Math.floor(Math.random()*3+1);
            computerans=computerchoice===1?"rock":computerchoice===2?"paper":"scissors";
            if(playerans===computerans)
                result="tie"
            else if((playerans==="rock" && computerchoice=="paper") || (playerans==="paper" && computerans==="scissors") || (playerans==="scissors" && computerans==="rock"))
                result="player winnner";
            else
                result="computer winner";
            alert(result);
            
        }
        else{
            alert("please enter the correct value");
        }
    let playagain=confirm("play again?");
    playagain ? location.reload():alert("ok, thanks for playing the game with computer!!");
    }
    else  
        alert("i guess you changed the mind. may be nexttime")
}
else
    alert("ok,we will play next time");
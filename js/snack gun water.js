playgame=confirm("are u interested to play snack paper water!!");
if(playgame==true){
    while(playgame){
        playerchoice=prompt("please choice anyone snack gun water");
        playerans=playerchoice.trim().toLowerCase();
        computerchoice=Math.floor(Math.random()*3+1);
        computerans=computerchoice===1?"snack": computerchoice===2?"gun":"water"
        if(playerchoice==="snack" || playerchoice==="gun" || playerchoice==="water"){
            if(computerans===playerans)
                ans="match tie"
            else if((playerans==="snack" && computerans==="water") || (playerans==="water" && computerans==="gun") || (playerans==="gun" && computerans==="snack"))
                ans="player win the match";
            else{
                ans="computer win the match";
            }
               

        result="computer choice-> "+computerans +"\n"+ "player choice->" +playerans +"\n"+ "result->"+ans;
        }
        else{
            result="please enter above mention values";
        }
        alert(result);
        playgame=confirm("are u play again?");
        if(playerchoice)
            playerchoice=1;
        else
            alert("thanks for playing!!");

    }
}
else{
    alert("ok , we will play next time!!")
}
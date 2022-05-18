var playerName = window.prompt("what is your robots name?");
var playerHealth = 100;
var playerAttack = 10;


var enemyName = "roberto"; 
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(){
    window.alert("welcome to Robot Gladiators!");
    enemyHealth = enemyHealth - playerAttack;
    console.log(playerName + "attacked" + enemyName + "." + enemyName + "now has" + enemyHealth + "health remaining");
    playerHealth = playerHealth - playerAttack;
    console.log(enemyName + "attacked" +playerName + "." + playerName + "now has " + playerHealth + "health remaining.");
    
};
fight();


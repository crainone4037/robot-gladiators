var playerName = window.prompt("what is your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["Roberto", "Amy Android", "robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var randomNumber = function(min,max){
  var value = Math.floor(math.random()* (max-min + 1) + min);
  return value;

}

var fight = function(enemyName){
  //fight function
  while (playerHealth > 0 && enemyHealth > 0){
    var promptFight = window.prompt ('would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose. ');

    //if player choses to skip
    if (promptFight === "skip" || promptFight === "SKIP"){
      var confirmSkip = window.confirm("are you sure youd like to skip?");

      if (confirmSkip) {
        window.alert (playerName + ' has decided to skip this fight. Goodbye!');
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;

      }
    }

  


   
    
  

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = math.max(0,enemyHealth - playerAttack);
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");

      playerMoney = playerMoney + 20;
      break;
    }else{ 
        window.alert (enemyName + ' still has ' + enemyHealth + ' health left.' ); 

      }


    

  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = math.max(0,playerHealth - enemyAttack);
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    //end of while loop
  }
    // end of fight function 
  };

  //loop that will allow me to fight each enemy
  for (var i =0; i < enemyNames.length; i++){
    if (playerHealth > 0){
      window.alert('welcome to Robot Gladiators round ' + ( i + 1));
      var pickedEnemyName = enemyNames[i];
      enemyHealth = 50;

      fight(pickedEnemyName);

    }else {
      window.alert ('you have lost your robot in battle! game over');
    }
  }
  



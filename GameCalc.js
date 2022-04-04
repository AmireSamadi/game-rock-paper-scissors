class Game {
  constructor() {
    this.playerScore = 0;
    this.computerScore = 0;
  }

  //The value selected by the computer
  selectComputer() {
    let mode = ["r", "p", "s"];
    let randomComputer = Math.round(Math.random() * 2);
    return mode[randomComputer];
  }

  //types of gameMode
  gameMode(user) {
    let selectComputer = this.selectComputer();
    switch (user + selectComputer) {
      //The state that the user wins
      case "rs":
      case "pr":
      case "sp":
        this.win(user, selectComputer);
        break;

      //The state that the computer wins
      case "rp":
      case "ps":
      case "sr":
        this.Loser(user, selectComputer);
        break;
      //The state in which the game was tied
      case "ss":
      case "pp":
      case "rr":
        this.Equal(user, selectComputer);
        break;

      default:
        break;
    }
  }
  //Convert values Play
  convertParameter(parameter) {
    if (parameter == "r") {
    return  parameter = "rock";
    } else if (parameter == "p") {
     return parameter = "paper";
    } else if (parameter == "s") {
     return parameter = "scissors";
    }
  }
//The method is executed when the user wins
  win(user, selectComputer) {
    this.playerScore++;

    document.querySelector("#user-score").innerHTML = this.playerScore;
    //send message
    ui.printMassage(
      `(( you win )) you selected ${this.convertParameter(
        user
      )} and computer selected ${this.convertParameter(selectComputer)}  `
    );
    //Change the border color by user selection
    ui.chosen(user, "green");
  }
//The method is executed when the user loser
  Loser(user, selectComputer) {
    this.computerScore++;
    document.querySelector("#comp-score").innerHTML = this.computerScore;
    //send message
    ui.printMassage(
      `(( you loser )) you selected ${this.convertParameter(
        user
      )} and computer selected ${this.convertParameter(selectComputer)}`
    );
    //Change the border color by user selection
    ui.chosen(user, "red");
  }
//The method is executed when the user Equal
  Equal(user, selectComputer) {
    //send message
    ui.printMassage(
      `(( The game equalised )) you selected ${this.convertParameter(
        user
      )} and computer selected ${this.convertParameter(selectComputer)}`
    );
    //Change the border color by user selection
    ui.chosen(user, "gray");
  }
}

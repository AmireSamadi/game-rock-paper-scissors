//class
let gameCalc = new Game();
let ui=new Ui()
//listener
listener();
function listener() {
  //event for rock
  document.querySelector("#r").addEventListener("click", function () {
    gameCalc.gameMode("r");
  });
  //event for paper
  document.querySelector("#p").addEventListener("click", function () {
    gameCalc.gameMode("p");
  });
  //event for scissor
  document.querySelector("#s").addEventListener("click", function () {
    gameCalc.gameMode("s");
   
  });
}




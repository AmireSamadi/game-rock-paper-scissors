class Ui {
  constructor() {}
  //show Message
  printMassage(massage) {
    let p = document.querySelector(".result p");
    p.innerHTML = massage;
    setTimeout(() => {
      this.removeMessage();
    }, 3000);
  }
  //delete message
  removeMessage() {
    //get tag p
    let p = document.querySelector(".result p");
    p.innerHTML = "";
  }

  //Add color to selected section
  chosen(user, color) {
    //get tags selected
    let getSelect = document.getElementById(user);

    //adding class
    getSelect.classList.add(color);

    //remove class
    setTimeout(() => {
      getSelect.classList.remove(color);
    }, 800);
  }
}

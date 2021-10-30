class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  setElementsPosition() {
    this.titleImg.position(120, 160);
    this.input.position(width / 2 - 250, height / 2 - 5);
    this.playButton.position(width / 2 - 50, height / 2 - 2);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  setElementsStyle() {
    this.titleImg.class("gameTitle");
   
  }

  //BP
  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  //BP
  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
      Hello ${this.input.value()}
      </br>wait for another player to join...`;
      this.greeting.html(message);
      playerCount+=1
      player.name=this.input.value()
      player.index=playerCount
      player.updateCount (playerCount)
      //player.addPlayer();
     // player.getDistance(); //BP
    });
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}
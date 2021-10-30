class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }
  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", function(data) {
      playerCount = data.val();
    });
  }
  //BP
  updateCount(Count) {
    database.ref("/").update({
      playerCount:Count
    });
  }
 }


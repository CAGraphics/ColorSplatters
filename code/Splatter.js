class Splatter {
  /* Constructor definition */
  constructor(position, hue) {
    this.position = position;

    this.hue = hue;
    this.capacity = 60;
    this.drops = [];
  }

  /* Function definition */
  animate() {
    if (this.drops) {
      var utility = new Utility();
      if (this.drops.length < this.capacity) {
        this.drops.push(utility.getNewDrop(this.hue));
      }
    }
  }

  render() {
    if (this.drops) {
      push();
      translate(this.position.x, this.position.y);

      for (var drop of this.drops) {
        drop.render();
      }
      pop();
    }
  }
}

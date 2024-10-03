class Drop {
  /* Constructor definition */
  constructor(position, radius, hue) {
    this.position = position;
    this.radius = radius;
    this.hue = hue;
  }

  /* Function definition */
  render() {
    push();
    translate(this.position.x, this.position.y);

    noStroke();
    fill(this.hue, 150, 210);
    circle(0, 0, 2 * this.radius);
    pop();
  }
}

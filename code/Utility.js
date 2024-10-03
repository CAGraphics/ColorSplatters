class Utility {
  /* Constructor definition */
  constructor() {}

  /* Function definition */
  getNewDrop(hue) {
    var randValue = random(0, 1);
    var theta = map(randValue, 0, 1, 0, TAU);

    var scalar = Math.pow(PI, 2);
    var normal = this.getNormal(PI, PI / 99, 0.15);
    var dr = scalar * normal;
    var posX = dr * sin(theta);
    var posY = dr * cos(theta);
    var position = createVector(posX, posY);

    normal = this.getNormal(0.3 * PI, PI / 123, 0.3);
    scalar = Math.pow(PI, 0.45);
    var radius = scalar * normal;

    return new Drop(position, radius, hue);
  }

  getNormal(step, mean, freq) {
    var normal = Math.abs(randomGaussian());
    var factor = random(0, 1) < freq ? step : 1.2;
    var deviation = factor * PI;

    return deviation * normal + mean;
  }
}

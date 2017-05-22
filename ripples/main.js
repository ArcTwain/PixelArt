var circles = 12, delta = 0, frames = 100;

function setup() {
	createCanvas(450, 450);
}

function draw() {
	background(50);
	stroke(0, 200, 200);
	noFill();

	for (var i = 0; i < circles; i++) {
		var size = i * 35;
		var weight = map(sin(delta + TWO_PI / circles * i), -1, 1, 1, 16);
		strokeWeight(weight);
		ellipse(width / 2, height / 2, size, size);
	}
	delta += TWO_PI / frames;
}

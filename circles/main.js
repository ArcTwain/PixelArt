
var i, p = 0.75, numCirc = 15;

function setup() {
	createCanvas(400, 400);
	ellipseMode(CENTER);
}

function draw() {
	background(0);
	translate(width / 2, height / 2);
	noStroke();
	i = 0;
	drawCirc(numCirc, 350);
}

function drawCirc(depth, size) {
	if (depth == 0) {
		return;
	}

	switch (i % 3) {
		case 0:
			fill(1, 171, 170);
			break;
		case 1:
			fill(254, 220, 61);
			break;
		default:
			fill(254, 166, 128);
	}

	if (i > 0) {
		rotate(millis() / 3000.0 * (numCirc / 2 - i));
		translate(size / p / 2 - size / 2, 0);
	}

	i++;
	ellipse(0, 0, size, size);
	drawCirc(depth - 1, size * p);
}

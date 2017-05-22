var x, y, size, theta = 0, num = 10;

function setup() {
	createCanvas(275, 275);
	background(0);
	fill(200);
	strokeWeight(2);
	stroke(0);
}

function draw() {
	var x = width / 2, y = height / 2;
	var angle = 0;
	var radius = 30;

	for (var i = 0; i < 2 * num; i += 0.05) {
		x = width / 2 + sin(angle) * radius;
		y = height / 2 + cos(angle) * radius;

		var size = map(sin(theta + TWO_PI / num * i * 20), -1, 1, 0, 50);
		var scal = 0.5 + 1.0 / num * 2 * i;
		ellipse(x, y, size * scal, size * scal);
		angle += radians(5);
		radius += 0.5;
	}

	theta -= 0.025;
}

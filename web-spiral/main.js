var x, y, size, theta = 0, num = 1000;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	stroke(255, 150);
	fill(0);
}

function draw() {
	background(0);

	var x = width / 2, y = height / 2;
	var angle = 0;
	var radius = 30;

	for (var i = 0; i < num; i++) {
		x = width / 2 + sin(angle) * radius;
		y = height / 2 + cos(angle) * radius;
		var size = map(sin(theta + TWO_PI / num * i * 20), -1, 1, 0, 50);
		var scal = 0.5 + 1.0 / num * 2 * i;

		if (i % 9 === 0) {
			strokeWeight(3);
			stroke(255, 0, 0);
		} else {
			strokeWeight(2);
			//stroke(10,100,100);
			stroke(255);
			//stroke(255,200);
		}

		ellipse(x, y, size * scal, size * scal);
		angle += radians(5);
		radius += 0.5;
	}

	theta -= 0.025;
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

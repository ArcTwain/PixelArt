var angle = 0;

function setup() {
	createCanvas(600, 600);
	background(15, 15, 15);
	strokeWeight(30);
	stroke(15, 15, 15);
}

function draw() {
	translate(width / 2, height / 2);
	for (var i = 0; i < 200; i++) {
		rotate(angle);
		scale(0.95);

		if (i % 2 == 0) fill(255);
		else if (i % 3 == 0) fill(255, 0, 255);
		else fill(255, 0, 0);

		rectMode(CENTER);
		rect(0, 0, 400, 400);
	}
	angle += 0.002;
}

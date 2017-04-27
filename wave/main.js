var canvas = undefined, ctx = undefined;

var count = undefined,
	w = undefined,
	h = undefined,
	hh = undefined,
	o = undefined;

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	ctx = canvas.drawingContext;
}

function draw() {
	background(0);

	strokeWeight(10);
	stroke(64, 128, 255);
	noFill();

	count = 180;
	h = 300;
	// w = max(h, width / 8 * 7);
	w = max(h, width);
	hh = h / 2;
	o = Date.now() / 60;

	translate(width / 2, height / 2);

	beginShape();

	vertex(-width / 2, 0);

	var oR = 0.05;
	var wOR = w * oR;
	var wOR2 = w * (1 - oR * 2);

	for (var i = 0; i < count; i++) {
		if (window.CP.shouldStopExecution(1)) {
			break;
		}
		var t = i / (count - 1);
		var x = t * wOR2 + wOR;
		var y_ = sin(t * PI + PI);
		y_ *= y_ * y_;
		var y = cos(t * TAU * 4 + o) * y_ * hh;

		vertex(x - w / 2, y);
	}
	window.CP.exitedLoop(1);

	vertex(width / 2, 0);

	endShape();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

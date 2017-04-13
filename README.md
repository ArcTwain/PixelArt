These three demos are based on the same program to render a pixel drawing on canvas.

_BUTTERFLY_ ([demo](https://codepen.io/TWAIN/full/960fc34052f2664c214be13b0a160c45/)) is the simplest of the three: Input the information for each "pixel" on the canvas as an array. With this demo, I used 0 and 1 in addition to a random color generator. If you want a static canvas, be sure to put noLoop(); in your function setup() to stop p5.js from continuously executing the code within function draw().


_WORLDMAP_ ([demo](https://codepen.io/TWAIN/full/dvdQgx/)) is similar to the canvas above, but I added the option to input the data as a string, which in turn is converted to an array. 

_RUNTIME_ ([demo](https://codepen.io/TWAIN/full/00e89cbe39489e7f088be9a91a6ed413/)) takes three arrays (more can be added), and runs them in a loop for a brief animation.

The accompanying css is for demo purposes only.

Refer to [p5.js reference](https://p5js.org/reference/) for general documentation. A p5 canvas sketch is added to the end of the web page. To add styling or a parent container please refer to this [wiki](https://github.com/processing/p5.js/wiki/Positioning-your-canvas). 


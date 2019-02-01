//WebGL Javascript File

"use strict"
// I created a global variable that is referenceing the WebGL context
var gGL = null;

function initializeGL() {
    // I'm retriving a reference to the GLCanvas
    var canvas = document.getElementById('GLCanvas');

    gGL = cavas.getContext("webgl") || canvas.getContext("experimental-webgl");

    //I'm resetting the canvas to my preferred color. 
    if (gGL !== null) {
        gGL.clearColor(0.0, 0.8, 0.0, 1.0);// Set the color to be cleared
    } else {
        document.write("<br><b>WebGL is not supported!</br>");
    }
}

// Creating a function that'll clear my canvas
function clearCanvas() {
    gGL.clear(gGL.COLOR_BUFFER_BIT); // cleare to the color previously set
}

// The doGLDraw() function will initialize the GLCanvas and clear the canvas area
function doGLDraw() {
    initializeGL();
    clearCanvas();
}
//Salesman's Tackle v2 by Alpharou. draw.js

function draw() {

  //Draw background with cartesian lines and canvas rectangle.
  strokeWeight(1);
  background(colour.background);
  stroke(colour.mscllns);
  line(width/2, 0, width/2, height);
  line(0, height/2, width, height/2);
  noFill();
  rect(0, 0, width -1, height -1);

  if (tackleWorking) {

    strokeWeight(24);
    stroke(colour.red);
    noFill();
    rect(0, 0, width, height);
    strokeWeight(1);
    stroke(colour.mscllns);

  };

  //Trace line between two points if drawConnections == true.
  if (drawConnections == true) {

    for (var i = 0; i < cities.length-1; i++) {

      stroke(colour.points);
      strokeWeight(1);
      line(cities[i].x, cities[i].y, cities[i+1].x, cities[i+1].y);

    };

  };

  for (var i = 0; i < cities.length; i++) {

    //Make the outer ring.
    fill(colour.background);
    stroke(colour.points);
    ellipse(cities[i].x, cities[i].y, screenScale.val*30, screenScale.val*30);

    //Print the order of that point if it is already sorted.
    switch (drawConnections) {

      default:

        //Make the outer ring.
        fill(colour.background);
        stroke(colour.points);
        ellipse(cities[i].x, cities[i].y, screenScale.val*30, screenScale.val*30);

        noStroke();
        fill(colour.points);
        ellipse(cities[i].x, cities[i].y, screenScale.val*20, screenScale.val*20);

        break;

        case true:

        //Make the outer ring.
        fill(colour.background);
        strokeWeight(1);
        stroke(colour.points);
        ellipse(cities[i].x, cities[i].y, screenScale.val*30, screenScale.val*30);

        noStroke();
        fill(colour.points);
        textAlign(CENTER, CENTER);
        textSize(screenScale.val*20);
        text(i + 1, cities[i].x, cities[i].y);

        break;

    };

  };

  if (drawMouseCoords == true) {

    switch (screenScale.mob) {

      default:

        fill(colour.mscllns);
        noStroke();
        ellipse(mouseX, mouseY, screenScale.val*8, screenScale.val*8);
        textSize(screenScale.val*15);
        text(floor(cartesianTransform(mouseX, 'x'))
        + ", "
        + floor(cartesianTransform(mouseY, 'y')),
        mouseX + screenScale.val*10 + 10,
        mouseY + screenScale.val*10 + 10);

        break;

      case true:

        var lastMouseX = mouseX
        var lastMouseY = mouseY

        noFill();
        stroke(colour.mscllns);
        ellipse(lastMouseX, lastMouseY, screenScale.val*30, screenScale.val*30);

        fill(colour.mscllns);
        noStroke();
        textSize(screenScale.val*15);
        text(floor(cartesianTransform(lastMouseX, 'x'))
        + ", "
        + floor(cartesianTransform(lastMouseY, 'y')),
        0 + screenScale.val*10,
        height - screenScale.val*10);

        break;

    };

  };

};

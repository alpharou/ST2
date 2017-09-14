//Salesman's Tackle v2 by Alpharou. functions.js

//CREATE BOUNDARY
function calcBoundary() {

  boundary.x1 = 1/screenScale.val*100 + 60;
  boundary.y1 = 1/screenScale.val*90 + 30;
  boundary.x2 = width - 1/screenScale.val*100;
  boundary.y2 = height - 1/screenScale.val*90;

  return true;

};

//RANDOM VECTOR GENERATOR
function createRandomVect() {

  //make the random vectorX between given parameters.
  var vx = map(random(width), 0, width, boundary.x1, boundary.x2);

  //make the random vectorY between given parameters.
  var vy = map(random(height), 0, height, boundary.y1, boundary.y2);

  //Floor the properties.
  var randomV = createVector(floor(vx), floor(vy));

  return randomV;

};

//CALC AVG CITY
function calcAvgCity() {

  var sumX = 0;
  var sumY = 0;

  for (var i = 0; i < cities.length; i++) {

    sumX = sumX + cities[i].x;
    sumY = sumY + cities[i].y;

  };

  avgX = sumX / cities.length;
  avgY = sumY / cities.length;
  avgCity = {x: avgX, y: avgY};

  return true;

};

//Y INVERTER
//Little function to invert the height value.
//Only for display purposes.
function invertY(realHeight) {

  var invertedHeight = map(realHeight, height, 0, 0, height);

  return invertedHeight;

};

//CARTESIAN TRANSFORM
//Transforms pixel coordinates into cartesian centered at the middle of the screen.
//Only for display purposes.
function cartesianTransform(topLeftValue, axis) {

  if (axis == 'x') {

    cartesianTransformed = map(topLeftValue, 0, width, -width/2, width/2);

    return cartesianTransformed;

  } else if (axis == 'y') {

    cartesianTransformed = map(topLeftValue, 0, height, height/2, -height/2);

    return cartesianTransformed;

  } else {return undefined;};

};

//CALCULATE SCALE
function calculateScale() {

  if (width >= height) {

    var _screenScale = (width + height)/2000;
    screenScale.val = _screenScale;
    screenScale.mob = false;
    console.log("ScreenScale: " + screenScale.val + " Mobile: " + screenScale.mob);

    return true;

  } else if (width < height) {

    var _screenScale = (width + height)/600;
    screenScale.val = _screenScale;
    screenScale.mob = true;
    console.log("ScreenScale: " + screenScale.val + " Mobile: " + screenScale.mob);

    return true;

  } else {return false;};

};

//CITIES POPULATOR EV:
//Populate cities[] with given number of objects using createRandomVect().
//The points will be distributed evenly if there are too many.
function populateCitiesEv() {

  //Reset the vars.
  drawConnections = false;
  cities.length = 0;
  avgCity = {x: undefined, y: undefined};
  citiesXYBest = [];
  minDist = Infinity;

  console.clear();

  for (var i = 0; i < numberOfCities; i++) {

    function iterateVector() {

      var iterCount = 0;

      //Iterate given times.
      while (iterCount < numberOfCities*10) {

        var leastDist = Infinity;
        var newVect = createRandomVect();

        //Go through all the existing points and get minimum distance for the newVect.
        for (var _i = 0; _i < cities.length; _i++) {

          var distance = newVect.dist(cities[_i]);

          if (leastDist > distance) {leastDist = distance};

        };

        //If the minimum distance is met, add the newVect to the array.
        //Every iteration the required distance diminishes.
        if (leastDist >= (screenScale.val+1000)/(iterCount+1)) {

          console.log("Created new Optimal Vector with tolerance: "
          + floor(iterCount*10/numberOfCities) + "%.");

          return newVect;

        };

        iterCount++;

      };

      console.log("Tolerance: 100%: Created Random Vector.");

      return createRandomVect();

    };

    var selectedVector = iterateVector();
    cities[i] = selectedVector;

    //Debug.
    console.log("Added point cities[" + i + "] = ("
    + floor(cartesianTransform(cities[i].x, 'x'))
    + ", " + floor(cartesianTransform(cities[i].y, 'y'))
    + ").");

  };

  return true;

};

//CITIES POPULATOR RND:
function populateCities() {

  //Reset the vars.
  drawConnections = false;
  cities.length = 0;
  avgCity = {x: undefined, y: undefined};

  console.clear();

  for (var i = 0; i < numberOfCities; i++) {

    cities[i] = createRandomVect();

    //Debug.
    console.log("Added point cities[" + i + "] = ("
    + floor(cartesianTransform(cities[i].x, 'x'))
    + ", " + floor(cartesianTransform(cities[i].y, 'y'))
    + ").");

  };

  return true;

};

//DRAW MOUSE COORDS TOGGLER
function toggleDrawMouseCoords() {

  switch (drawMouseCoords) {

    case true: {drawMouseCoords = false;break;};

    case false: {drawMouseCoords = true;break;};

    default: {break;};

  };

  return drawMouseCoords;

};

//SORT CITIES DISTANCE TO AVGCITY
//Get sorted cities[] distances to AvgCity.
function sortCitiesDistance() {

  calcAvgCity();

  for (var i = 0; i < cities.length; i++) {

    cities[i].distAvgCity = dist(avgCity.x, avgCity.y, cities[i].x, cities[i].y);

  };

  cities.sort(function(a, b) {return b.distAvgCity - a.distAvgCity;});

  //Set to draw Connections.
  drawConnections = true;

  return true;

};

//CITIESXY CREATOR
//Get  citiesXY = [x1,y1,x2,y2,x3...] from cities[].
function doCitiesXY() {

  citiesXY.length = 0;

  for (var i = 0; i < cities.length; i++) {

    citiesXY[2*i] = cities[i].x;
    citiesXY[2*i + 1] = cities[i].y;

  };

  return true;

};

//CITIES OBJECT PARSER
//Assign x and y values to cities[] objs from citiesXY[]
function doCities() {

  if (cities.length == citiesXY.length/2){

    for (var i = 0; i < cities.length; i++) {

      cities[i].x = citiesXY[i*2];
      cities[i].y = citiesXY[i*2 +1];

    };

    return true;

  } else {return "not relatable";};

};

//RANDOMIZE CITIESXY
function randomizeCities() {

  doCitiesXY();

  var i = citiesXY.length/2;
  var tempPointX;
  var tempPointY;
  var randomIndex = undefined;

  while (i != 0) {

    randomIndex = floor(i*random(0, 1));
    i--;
    tempPointX = citiesXY[i*2];
    tempPointY = citiesXY[i*2+1];
    citiesXY.splice(i*2, 1, citiesXY[randomIndex*2]);
    citiesXY.splice(i*2+1, 1, citiesXY[randomIndex*2+1]);
    citiesXY.splice(randomIndex*2, 1, tempPointX);
    citiesXY.splice(randomIndex*2+1, 1, tempPointY);

  };

  doCities();
  drawConnections = true;

  return true;

};

//SUM PATH IN ARRAYXY OF POINTS
function sumPathXY(arr) {

  var distPath = 0;

  if (arr.length >= 4) {

    for (var i = 0; i < arr.length/2 -1; i++) {

      distPath = distPath + sqrt(
        pow(arr[i*2] - arr[(i+1)*2], 2)
        + pow(arr[i*2+1] - arr[(i+1)*2+1], 2)

      );

    };

    //Add the distance to close the loop when set that way in getLoop.
    if (getLoop) {
      distPath = distPath + sqrt(pow(arr[0] - arr[arr.length-2], 2) + pow(arr[1] - arr[arr.length-1], 2))
    };
    
  };

  return distPath;

};

//Iterate through the array and spit the optimal position to insert the point.
function getOptimalPosition(pointX, pointY) {

  var tempCitiesXY2 = [];
  var leastDist = Infinity;
  var tempDist = Infinity;
  var bestPos = undefined;
  tempCitiesXY2.length = 0;
  arrayCopy(tempCitiesXY, tempCitiesXY2);

  for (var i = tempCitiesXY2.length/2; i >= 0; i--) {

    tempCitiesXY2.length = 0;
    arrayCopy(tempCitiesXY, tempCitiesXY2);
    tempCitiesXY2.splice(i*2, 0, pointY);
    tempCitiesXY2.splice(i*2, 0, pointX);
    tempDist = sumPathXY(tempCitiesXY2);

    if (tempDist <= leastDist) {

      leastDist = tempDist;

      bestPos = i;

    };

  };

  tempCitiesXY2.length = 0;
  return bestPos;

};

//TACKLE ONCE. IS ORDER SENTITIVE!!! Maybe bad sign?
function salesmanTackleOnce() {

  doCitiesXY();
  tempCitiesXY.length = 0;
  var cityX = undefined;
  var cityY = undefined;
  var cityPos = 0;

  //Insert points one by one in the index that results in the minimum path NOT GLOBALLY.
  for (var i = 0; i < citiesXY.length/2; i++) {

    cityX = citiesXY[i*2];
    cityY = citiesXY[i*2+1];
    cityPos = getOptimalPosition(cityX, cityY);

    tempCitiesXY.splice(cityPos*2, 0, cityY);
    tempCitiesXY.splice(cityPos*2, 0, cityX);

  };

  citiesXY.length = 0;
  arrayCopy(tempCitiesXY, citiesXY);
  doCities();

  drawConnections = true;

  return true;

};

//Load the algorithm to make some visual changes happen.
function salesmanTackleLoad() {

  //Only load if there's something to do.
  if (tackleWorking == false && cities.length != 0) {

    tackleWorking = true;

    setTimeout(salesmanTackle, 10);

  };

  return true;

};

//FULL BLOWN SALESMAN'S TACKLE V2.
function salesmanTackle() {

  var breakCounter1 = 0;
  var iterCount1 = 0;
  const fallback = floor(sqrt(numberOfCities));
  doCitiesXY();
  citiesXYBest.length = 0;
  arrayCopy(citiesXY, citiesXYBest);

  while (true) {

    var breakCounter2 = 0;
    var iterCount2 = 0;
    iterCount1++;

    randomizeCities();

    while (true) {

      iterCount2++;
      salesmanTackleOnce();

      //IMPORTANT INNER BREAKER!
      if (sumPathXY(citiesXY) < sumPathXY(citiesXYBest)) {

        breakCounter2 = 0;
        citiesXYBest.length = 0;
        arrayCopy(citiesXY, citiesXYBest);

      } else if (breakCounter2 == fallback) {

        console.log("breaked from inner loop. Made "
        + (iterCount2 - fallback) + " + "
        + fallback + " Iterations");

        break;

      } else {breakCounter2++;};

    };

    //IMPORTANT EXTERIOR BREAKER!
    if (sumPathXY(citiesXY) < sumPathXY(citiesXYBest)) {

      breakCounter1 = 0;

    } else if (breakCounter1 == fallback) {

      console.log("Breaked from exterior loop. Made " +
      (iterCount1 - fallback) + " + "
      + fallback + " Iterations");

      break;

    } else {breakCounter1++};
  };

  citiesXY.length = 0;
  arrayCopy(citiesXYBest, citiesXY);
  doCities();

  tackleWorking = false;

  return true;

};

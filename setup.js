//Salesman's Tackle v2 by Alpharou. setup.js

//Main setup function.
function setup() {

  console.clear();

  //Create Initial Canvas with window dimensions. Won't change until f5.
  createCanvas(windowWidth, windowHeight);

  //Init the screenScale by calculating it.
  calculateScale();

  //Rework the boundary.
  calcBoundary();
  
  //Initialize the GUI with given Type. The type can be changed from the inside.
  GUI(GUIType);
  
  //Reset the vars.
  cities.length = 0;
  inputCitiesI.value(25);
  avgCity = {x: undefined, y: undefined};
  drawMouseCoords = false;
  drawConnections = false;
  getLoop = true;
  getLoopB.elt.textContent = "LOOP";

};

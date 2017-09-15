//Salesman's Tackle v2 by Alpharou. vars.js

//GUI vars
var GUIType = 1;
var InitializedGUI = false;
var inputCitiesI;
var findAvgB;
var toggleDMCB;
var populateEvB;
var populateB;
var resetB;
var calcDistB;
var salesmanTackleOnceB;
var salesmanTackleB;
var tackleWorking = false;
let getLoopB;
let getLoop = true;

//setup vars
var numberOfCities = 25;
var cities = [];
var citiesXY = [];
var citiesXYBest = [];
var tempCitiesXY = [];
var avgCity = {x: undefined, y: undefined};
var screenScale = {val: undefined, mob: undefined};
var boundary = {
  x1: 0,
  y1: 0,
  x2: 1,
  y2: 1,
};

//draw vars
var drawConnections = false;
var drawMouseCoords = false;
var colour = {
  black: "rgb(0, 0, 0)",
  darkGray: "rgb(40, 40, 40)",
  lightGray: "rgb(180, 180, 180)",
  white: "rgb(255, 255, 255)",
  darkPurple: "rgb(40, 0, 40)",
  lightPurple: "rgb(204, 0, 204)",
  red: "rgb(150, 0, 0)",
  background: "rgb(255, 255, 255)",
  avgCity: "rgb(204, 0, 204)",
  points: "rgb(40, 40, 40)",
  mscllns: "rgb(180, 180, 180)"
};

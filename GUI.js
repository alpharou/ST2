//Salesman's Tackle v2 by Alpharou. GUI.js

function GUI(mode) {

  //Initialize once if not reset.
  if (InitializedGUI == false) {

    inputCitiesI = createInput(numberOfCities, "number");
    inputCitiesI.input(inputCitiesIEvent);

    function inputCitiesIEvent() {
      numberOfCities = abs(this.value());
    };

    findAvgB = createButton("RANDOMIZE CONNECTIONS");
    findAvgB.mousePressed(randomizeCities);

    toggleDMCB = createButton("COORDS");
    toggleDMCB.mousePressed(toggleDrawMouseCoords);

    populateEvB = createButton("POPULATE EVENLY");
    populateEvB.mousePressed(populateCitiesEv);

    populateB = createButton("POPULATE");
    populateB.mousePressed(populateCities);

    getLoopB = createButton("LOOP");
    getLoopB.mousePressed(toggleLineLoop);

    resetB = createButton("REINITIALIZE");
    resetB.mousePressed(setup);

    calcDistB = createButton("SORT DISTANCE");
    calcDistB.mousePressed(sortCitiesDistance);

    salesmanTackleOnceB = createButton("TACKLE ONCE");
    salesmanTackleOnceB.mousePressed(salesmanTackleOnce);

    salesmanTackleB = createButton("TACKLE");
    salesmanTackleB.mousePressed(salesmanTackleLoad);

    InitializedGUI = true;

  };

  switch (mode) {

    //Update positions and sizes.
    default:

      //Input for selecting number of cities.
      inputCitiesI.size(screenScale.val*30+10);
      inputCitiesI.position(screenScale.val*10, screenScale.val*10);

      //Button for calculate AvgCity.
      findAvgB.position(screenScale.val*10, screenScale.val*10 + 24);

      //Button for Mouse toggle.
      toggleDMCB.position(screenScale.val*10, height - screenScale.val*30 - 24);

      //Buttons to populate.
      populateEvB.position(screenScale.val*40 + 16, screenScale.val*10);

      populateB.position(screenScale.val*40 + 160, screenScale.val*10);

      //Reset Button.
      resetB.position(screenScale.val*10, height - screenScale.val*30);

      //GetLoop Reactive Button.
      getLoopB.position(screenScale.val*10, screenScale.val*10 + 120);

      //Sort cities[] button.
      calcDistB.position(screenScale.val*10, screenScale.val*10 + 48);

      //Calculate tackle once. Salesman's tackle v2.
      salesmanTackleOnceB.position(screenScale.val*10, screenScale.val*10 + 72);

      //Do the entire algorithm. May overflow memory, but it´s not common.
      salesmanTackleB.position(screenScale.val*10, screenScale.val*10 + 96);

      break;

    case 2:

      break;

  };

  redraw();
  return true;

};

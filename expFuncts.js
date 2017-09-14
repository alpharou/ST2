//Salesman's Tackle v2 by Alpharou. expFuncts.js

//Toggle getLoop and update the button's text.
function toggleLineLoop() {

    if (getLoop) {getLoop = false; this.elt.textContent = "LINE"}

    else {getLoop = true; this.elt.textContent = "LOOP"}

    return true;

};
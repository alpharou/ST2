# ST2 (Salesman's Tackle v2) https://alpharou.github.io/ST2/
A web based JavaScript Script that provides an example of the Salesman's Tackle v2 Algorithm.

Using p5.js libraries (https://p5js.org/)

# USAGE

--> GENERATE THE POINTS:

- Set the number of points to generate by entering a natural number in the first input field. It accepts concrete numbers like (0, 1, 45...). Negative figures will be replaced by it's positive counterpart.

- To generate the points there are two methods available:
  POPULATE creates n points from random two-dimensional vector values.
  POPULATE EVENLY tries to spread the n points across the workspace in a uniform fashion increasing the tolerance in every unsuccessful iteration. (Simplified, poorly written adapted concept of Poisson-disc Sampling).

--> MANIPULATE THE CONNECTIONS:

- RANDOMIZE CONNECTIONS shuffles the order of the path's connections. Inspired by Fisher-Yates' (aka Knuth) Shuffle.

- SORT DISTANCE sets the order depending of the distance between each point and the average. In this manner, point 1 would be the farthest one, and point n would be the nearest.

--> APPLYING THE ALGORITHM:

- TACKLE ONCE applies one iteration of the ST2 algorithm. It's order of input dependent, so it's not 100% reliable, and it's a matter of luck for it to find the best solution from the pseudo-random input order implemented. It'll however find plausible candidates very often.

- TACKLE integrates loop nests that try to find the best solution amongst all the individual tackle iterations. Again, it's not 100% reliable given the variability dependency of the prior state, but it tends to find paths around the 90% (vague figure) accuracy mark in sqrt(n) single algorithm executions. It can be reapplied, and it'll try to find a better solution.

- LOOP/LINE toggles between closed and open connections, LOOP meaning that it'll have into account the final connection from the last to the fist point. LINE will try to find the best point to start and end the connections. LOOP is less expensive in term of computing time since its nature doesn't require to find fitting START/END point combinations.

--> MISC:

- COORDS shows the 2D Cartesian coordinates of the current position of the mouse.

- REINITIALIZE reboots the Script and resets values without having to reloading the page.

# LICENSE

This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License as stated here https://alpharou.github.io/ST2/CCLicense/.
To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.

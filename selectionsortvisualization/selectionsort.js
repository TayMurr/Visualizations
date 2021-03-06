/* Author: Taylor Murray
*/
var heights = [];
var resetHeights = [];
var i = 0;
var x;
var min;
var temp;
var mark;

/*var selectionSort = "Selection Sort Description:    Selection sort traverses the unsorted portion of the array looking for the minimum." +
                    "When the minimum is found it is swapped with the topmost unsorted bar." +
                    "This minimum then becomes a part of the sorted portion of the array." +
                    "The algorithm that implements the sort employs two nested for loops, so in the worst case" +
                    "this algorithm has O(n^2) time complexity as well as in the best case." +
                    "Its space complexity is O(1) since it is an inplace sort.";*/
var selectionSort = "Selection Sort";
function setup() {
  textSize(70);
  createCanvas(windowWidth, windowHeight);
  frameRate(5);
  stroke(205, 227, 229);
  for (var ix = 0; ix < 50; ix++) {
      heights[ix] =  random(windowWidth * 0.5);
      resetHeights[ix] = heights[ix];
  }
}

function draw() {

  frame(); // draw one iteration
  selection(); // sort one iteration

  if (i < heights.length - 1) {
    i++;
  }

}
/*
Take the current list of heights and draw them
spaced 25 pix apart
*/
function frame() {
  background(0);
  fill(color(color(178, 255, 102)));
  text(selectionSort, 10, 30);
  x = 50;

  for (var j = 0; j < heights.length; j++) {
    fill(color(178, 255, 102));
    rect(150, x, heights[j], 10);
    x = x + 10;
  }
}
/* One iteration of the sort
*/
function selection() {
  min = i;
  for (var j = i + 1; j < heights.length; j++) {
    if ( heights[j] < heights[min]) {
      min = j;

      background(0);
      fill(color(color(178, 255, 102)));
      text(selectionSort, 10, 30);
      x = 50;
      for (var jx = 0; jx < heights.length; jx++) {

        if (jx == min) {
          fill(color('red'));
        } else {
          fill(color(color(178, 255, 102)));
        }
        rect(150, x, heights[jx], 10);
        x = x + 10;
      }

    }
  }


  if (min != i) {
    temp = heights[min];
    heights[min] = heights[i];
    heights[i] = temp;
  }

}

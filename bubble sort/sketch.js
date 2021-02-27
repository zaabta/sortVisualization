var size = 600;
var w = 10;
var i ,j;
let values = [];
var count;
var h;
var comparisons = 0;
var arrayAccess = 0;
let delay = 1.5;

function setup() {
  createCanvas(size, size);
  count = floor(width / w);
  h = height;
  for(var k = 0; k < count; k++){
    values[k] = h;
    h -= w;
  }
  shuffle(values, true);
  i = 0;
  j = 0;
  textSize(10);
}

function draw() {
  if (frameCount % delay === 0){
  background(0);
  fill(255);
  stroke(0);

  for(var k = 0; k < count; k++){
    if(k === j)
      fill(255, 0, 0);
    else
    fill(255);

    rect(k*w, height - values[k], w, values[k]);
  }

  if(i < values.length - 1){
    if(j < values.length - i - 1){
      comparisons++;
      if(values[j] > values[j+1]){
        swap(values, j, j+1);
      }
    }else{
      j = -1;
      i += 1;
    }
  }else{
    //TO check
    let sortValues = sort(values);
    for(var k = 0; k < sortValues.length; k++){
      if(sortValues[k] === values[k])
        fill(0, 255, 0);
      else
        fill(255, 0, 0);
      rect(k*w, height - sortValues[k], w, sortValues[k]);
    }
    noLoop();
    console.log('Done !');
  }
  j += 1;
  fill(255);
  textSize(10);
  text('bubble sort - ' + comparisons+' comparisons, '+arrayAccess+' array access, ' + delay+' ms delay', 1, 15);
  }
}

function swap(values, i, j){
  let temp = values[i];
  values[i] = values[j];
  values[j] = temp;
  arrayAccess++;
}

/*
function bubleSort(values){
  for(var i = 0; i < values.length -1;i++){
    for(var j = 0; j < values.length - i - 1;j++){
      if(values[j] < values[j+1]){
        swap(values,j,j+1);
    }
  }
}
*/

let values;
var n, gap, i;
var delay = 0.5;
var comparisions = 0, arrayAccesses = 0;
var amp = 0, freq = 0;
function setup() {
  colorMode(HSB);
  createCanvas(600, 600);
  n = width;
  gap = floor(n / 2);
  i = gap;
  values = new Array(n);
  for(var i = 0; i < height; i++){
    values[i] = i;
  }
  shuffle(values, true);
  osc = new p5.Oscillator('triangle');
  playOscillator();
}

function draw() {

  if(frameCount % delay == 0){
    background(0);
    noFill();
  //draw values
  for(var k = 0 ; k < values.length; k++){
    if(k === i){
      fill(0);
      strokeWeight(10);
      stroke(0,255);
      freq = constrain(map(values[i], 0, height, 150, 500), 150, 500);
      amp = constrain(map(values[i], 0, height, 1, 0), 1, 0);
    }else if(k === gap){
      fill(0);
      strokeWeight(10);
      stroke(0,255);
      freq = constrain(map(values[gap], 0, height, 150, 500), 150, 500);
      amp = constrain(map(values[gap], 0, height, 1, 0), 1, 0);
    }
    else{
      noFill();
      strokeWeight(1);
      stroke(map(values[k],0,height,255,0),map(values[k],0,height,255,100), 100);
      }
    line(k, height, k, height - values[k]);
  }

  if(gap > 0){
    if(i < n){
      var temp =  values[i];
      for(var j = i; j >= gap && values[j - gap] > temp; j -= gap){
        values[j] = values[j - gap];
        comparisions++;
      }
      values[j] = temp;
      i += 1;

      arrayAccesses++;
    }else{
      gap  = floor(gap/2);
      i = gap;
    }
  }else{
    stopOscillator();
    noLoop();
    console.log('done!');
  }
  fill(255);
  noStroke();
  text('Shell Sort - Comparisions : '+comparisions+', Array Accesses: '+arrayAccesses+', Delay : '+ delay, 10, 20);
  if (playing) {
    // smooth the transitions by 0.1 seconds
    osc.freq(freq, 0.1);
    osc.amp(amp, 0.1);
  }
}

}

function playOscillator() {
  // starting an oscillator on a user gesture will enable audio
  // in browsers that have a strict autoplay policy.
  // See also: userStartAudio();
  osc.start();
  playing = true;
}

function stopOscillator() {
  // ramp amplitude to 0 over 0.5 seconds
  osc.amp(0, 0.5);
  playing = false;
}

/*
function shell sort(values){
  var n = values.lenght;
  for(var gap = n/2; gap > 0; gap /=2){
    for(var i = gap; gap < n ; i++){
      var tamp = values[i];
      var j ;
      var j;
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)
        values[j] = values[j - gap];
      values[j] = temp;
    }
  }
}
*/

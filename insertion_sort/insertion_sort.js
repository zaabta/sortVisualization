let values = [];
let i, j, n, w, l;
var comparisons = 0;
var arrayAccess = 0;

function setup() {
  frameRate(10);
  createCanvas(800, 600);
  w = 8;
  values = new Array(width/w);
  l = floor(width/w);
  for(let k = 0; k < l; k++){
    values[k] = floor(random(height));
  }
  i = 1;
  j = 0;
  n = values.length;
}


function draw() {
  
  if(i < n){
    let key = values[i];
    let j = i - 1;
    while (j >= 0 && values[j] > key) { 
        values[j + 1] = values[j];
        j = j - 1;
        comparisons++;
    }
    values[j + 1] = key;
    arrayAccess++;
  }else{
    noLoop();
  }
  i++;
  
  background(0);

  //draw the vals
  for(let k = 0; k < l; k+=1){
    stroke(0);
    fill(255);
    strokeWeight(3);
    if(i-1 == k)
      fill(255, 0, 0);
    
    rect(k*w, height - values[k], w, values[k]);
  }
  fill(255);
  text('Insertion sort- '+comparisons+' comparisons, '+arrayAccess+' arrayaccess 1ms delay', 10, 20);
}

function swap(arr,i, j){
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


/*
void Insertion Sort(int arr[]){
       int n = arr.length;
       for (int i = 1; i < n; ++i) {
           int key = arr[i];
           int j = i - 1;
           while (j >= 0 && arr[j] > key) {
               arr[j + 1] = arr[j];
               j = j - 1;
           }
           arr[j + 1] = key;
       }
   }
*/

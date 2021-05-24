
let values = [];
let n, comparisons, arrayAcess;
let states = [];


function setup() {
  values = new Array(width);
  createCanvas(800, 600);
  for(let i = 0; i < width;i++){
    values[i] = floor(random(height));
    states [i] = -1;
  }
  n = values.length;
  quickSort(values, 0 ,n - 1);
  arrayAcess = 0;
  comparisons = 0;

  textSize(20);
  textStyle(NORMAL);
}

async function quickSort(arr, start, end){
  if(start >= end){
      return;
  }
  let index = await partition(arr, start, end);
  states[index] = -1;
  await Promise.all([
    quickSort(arr, start, index - 1),
    quickSort(arr, index + 1 , end)
  ]);
}

async function partition(arr, start ,end){

for(let i = start; i < end; i++)
  states[i] = 1;

  let pivotIndex = start;
  let pivotValue = arr[end];
  states[pivotIndex] = 0;
  for(let i = start; i < end; i++){
    comparisons++;
    if(arr[i] < pivotValue){
      await swap(arr, i, pivotIndex);
      states[pivotIndex] = -1;
      pivotIndex++;
      states[pivotIndex] = 0;
    }
  }
  await swap(arr, pivotIndex ,end);
  for(let i = start; i < end; i++)
    states[i] = -1;
  return pivotIndex;
}

function draw() {
  background(0);
    fill(255);
  text('Quick sort - '+comparisons+' comparisons, '+arrayAcess+' array acess'+' 1 ms delay', 10,30);

  //draw the vals
  for(let k = 0; k <= width; k++){
    strokeWeight(2);
    if(states[k] == 0)
      stroke(255, 0, 0);
    else if(states[k] == 1)
      stroke(0, 255, 0,255);
    else if(states[k] == -1)
      stroke(255)
     line(width-k, height, width-k, values[k]);
  }
  

}

async function swap(arr,i, j){
  await sleep(10);
  // SWEP
  arrayAcess++;
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

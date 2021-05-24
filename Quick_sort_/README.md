# Quick sort 

Like Merge Sort, QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways. 

Always pick first element as pivot.
Always pick last element as pivot (implemented below)
Pick a random element as pivot.
Pick median as pivot.
The key process in quickSort is partition(). Target of partitions is, given an array and an element x of array as pivot, put x at its correct position in sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x. All this should be done in linear time.

```js
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
```

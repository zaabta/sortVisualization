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

<img src = "https://www.geeksforgeeks.org/wp-content/uploads/gq/2014/01/QuickSort2.png">

### Partition Algorithm 
There can be many ways to do partition, following pseudo code adopts the method given in CLRS book. The logic is simple, we start from the leftmost element and keep track of index of smaller (or equal to) elements as i. While traversing, if we find a smaller element, we swap current element with arr[i]. Otherwise we ignore current element. 

#### Analysis of QuickSort 
Time taken by QuickSort, in general, can be written as following. 
```
 T(n) = T(k) + T(n-k-1) + \theta(n)
 ```
The first two terms are for two recursive calls, the last term is for the partition process. k is the number of elements which are smaller than pivot. 
The time taken by QuickSort depends upon the input array and partition strategy. Following are three cases.

Worst Case: The worst case occurs when the partition process always picks greatest or smallest element as pivot. If we consider above partition strategy where last element is always picked as pivot, the worst case would occur when the array is already sorted in increasing or decreasing order. Following is recurrence for worst case. 
```
 T(n) = T(0) + T(n-1) + \theta(n)
which is equivalent to  
T(n) = T(n-1) + \theta(n)
The solution of above recurrence is  \theta        (n2).
```

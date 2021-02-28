# Selection Sort 

The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.

1) The subarray which is already sorted.
2) Remaining subarray which is unsorted.

In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray.



<img src="https://imgur.com/yZ3y5hI.gif">


```
arr[] = 64 25 12 22 11

 Find the minimum element in arr[0...4]
 and place it at beginning
 
11 25 12 22 64

 Find the minimum element in arr[1...4] 
 and place it at beginning of arr[1...4]
 
11 12 25 22 64

Find the minimum element in arr[2...4]
and place it at beginning of arr[2...4]

11 12 22 25 64

Find the minimum element in arr[3...4]
and place it at beginning
of arr[3...4]

11 12 22 25 64 

```

<img src="https://www.includehelp.com/algorithms/images/insertion-sort-flowchart.jpg">




```javascript
function selectionSort(values){
  for(var i = 0; i < values.length -1; i++){
    let min_idx = i;
    for(var j = i+1; j < values.length; j++){
      if(values[j] < values[min_idx]){
        min_idx = j
        swap(values, min_idx, i);
    }
  }
}
```



#### Time Complexity: O(n^2) as there are two nested loops.

#### Auxiliary Space: O(1)
> Note: `The good thing about selection sort is:`it never makes more than O(n) swaps and can be useful when memory write is a costly operation.


### Reference

https://www.geeksforgeeks.org/selection-sort</br>
https://en.wikipedia.org/wiki/Selection_sort


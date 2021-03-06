# Bubble Sort

Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.



<img src="https://i.imgur.com/3tBdp0R.gif">




Example:
First Pass:
( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1.
( 1 5 4 2 8 ) –>  ( 1 4 5 2 8 ), Swap since 5 > 4
( 1 4 5 2 8 ) –>  ( 1 4 2 5 8 ), Swap since 5 > 2
( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), algorithm does not swap them.

Second Pass:
( 1 4 2 5 8 ) –> ( 1 4 2 5 8 )
( 1 4 2 5 8 ) –> ( 1 2 4 5 8 ), Swap since 4 > 2
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
( 1 2 4 5 8 ) –>  ( 1 2 4 5 8 )
Now, the array is already sorted, but our algorithm does not know if it is completed. The algorithm needs one whole pass without any swap to know it is sorted.

Third Pass:
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )


<img src="https://www.includehelp.com/algorithms/images/bubble-sort.PNG">


```javascript
function bubbleSort(values){
  for(var i = 0; i < values.length-1; i++){
    for(var j = 0; j < values.length - i - 1; j++){
      if(values[j+1] < values[j])
        swap(values, j+1, j);
    }
  }
}

```


> Note: `Worst and Average Case Time Complexity:` O(n*n). Worst case occurs when array is reverse sorted.</br>`Best Case Time Complexity:` O(n). Best case occurs when array is already sorted.</br>`Auxiliary Space`: O(1)</br>`Boundary Cases`: Bubble sort takes minimum time (Order of n) when elements are already sorted.
> 

#### Reference
https://www.includehelp.com/algorithms/bubble-sort-algorithm-flow-chart-and-cpp-code.aspx




# Shell Sort

ShellSort is mainly a variation of Insertion Sort. In insertion sort, we move elements only one position ahead. When an element has to be moved far ahead, many movements are involved. The idea of shellSort is to allow exchange of far items. In shellSort, we make the array h-sorted for a large value of h. We keep reducing the value of h until it becomes 1. An array is said to be h-sorted if all sublists of every th element is sorted.

<img src="https://i.imgur.com/UMa22U4.gif" width="600" height="600">


```javascript
function shellSort(values){
  var n = values.length;
  for(var gap = n/2; gap > 0; gap /=2){
    for(var i = gap; gap < n ; i++){
      var tamp = values[i];
      var j;
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)
        values[j] = values[j - gap];
      values[j] = temp;
    }
  }
}

```



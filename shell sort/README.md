# Shell Sort

ShellSort is mainly a variation of Insertion Sort. In insertion sort, we move elements only one position ahead. When an element has to be moved far ahead, many movements are involved. The idea of shellSort is to allow exchange of far items. In shellSort, we make the array h-sorted for a large value of h. We keep reducing the value of h until it becomes 1. An array is said to be h-sorted if all sublists of every h’th element is sorted.</br>


<img src="https://imgur.com/UMa22U4.gif">

<img src="https://i.imgur.com/3tBdp0R.gif">


```javascript
function shell sort(values){
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
</br>


<img src="shell sort/Screen Shot 2021-03-01 at 2.21.50 AM.png">

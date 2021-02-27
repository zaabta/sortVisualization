# Selection Sort 

The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.

1) The subarray which is already sorted.
2) Remaining subarray which is unsorted.

In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray.

'''
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
'''

<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fonline.visual-paradigm.com%2Fdiagrams%2Ftemplates%2Fflowchart%2Fcrossing-traffic%2F&psig=AOvVaw3Zp5-HsNo-23LLXOhuFhXT&ust=1614554017503000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDQotmYi-8CFQAAAAAdAAAAABAD"/>

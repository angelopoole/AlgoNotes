this pattern invilves crating a window which can either benan array or number from one position to another

depending on a certain condition, the window either increases or closes (and a new window is created!)

very useful for keeping track of a subset of data in an array/string etc..

# ex:

write a functino called maxSubarraySum which accepts an array of integers and a number called n. the function should calculate the max sum of n consecutive elements in the array.

eg maxSubarraySum([1,2,5,8,1,5], 2) //10
maxSubarraySum([1,2,5,2,8,1,5], 4) //17

/////////////////////////
given an array of integers of size ‘n’;
our aim is to calculate the maximum sum possible for the ‘k’ consecutive elements in the array!

input : arr[] = {100,200,300,400};
k=2
output: 700

// brute force: iterate through all windows of size k

for(int i=1; i < n-k+1; i++){
int current_sum = 0;
for(int j = 0; j < k; j++){
current_sum = current_sum + arr[i+j];
}
max_sum = max(current_sum, max_sum); //pick maxsum
}
/////////////////////////////////////

int max_sum = 0, window_sum = 0;
/_ calculate sum of 1st window _/
for (int i = 0; i < k; i++) window_sum += arr[i];
/_ slide window from start to end in array. _/

for (int i = k; i < n; i++){
window_sum += arr[i] - arr[i-k]; // saving re-computation
max_sum = max(max_sum, window_sum);
}

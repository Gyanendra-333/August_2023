function linearSearch(arr, n, x) {
    for (let i = 0; i < n; i++) {
        if (arr[i] == x) return i;
    }
    return -1;

}
let arr = [10, 30, 95, 20, 40];
let n = arr.length;
let x = 20;

let result = linearSearch(arr, n, x);
(result == -1 ? console.log("not found") : console.log("found index : " + result));
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
(result == -1 ? console.log("not found : ") : console.log("index found : ") + result);


// Javascript code to linearly search x in arr[].

// function search(arr, n, x) {
//     for (let i = 0; i < n; i++)
//         if (arr[i] == x)
//             return i;
//     return -1;
// }


// let arr = [2, 3, 4, 10, 40];
// let x = 2;
// let n = arr.length;

// // Function call
// let result = search(arr, n, x);
// (result == x)
//     ? console.log("Element is not present in array")
//     : console.log("Element is present at index " + result);


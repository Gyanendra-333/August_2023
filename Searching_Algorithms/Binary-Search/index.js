
// function binarySearch(arr, x) {
//     let l = 0;
//     let r = arr.length - 1;
//     let mid;
//     while (r >= l) {
//         mid = l + Math.floor((r - l) / 2);

//         if (arr[mid] == x)
//             return mid;

//         if (arr[mid] > x)
//             r = mid - 1;

//         else
//             l = mid + 1;
//     }
//     return -1;
// }

// arr = new Array(2, 3, 4, 10, 40);
// x = 10;
// n = arr.length;
// result = binarySearch(arr, x);

// (result == -1) ? console.log("Element is not present in array")
//     : console.log("Element is present at index " + result);




function binarySearch(arr, l, r, x) {
    if (r >= l) {
        let mid = l + Math.floor((r - l) / 2);


        if (arr[mid] == x)
            return mid;


        if (arr[mid] > x)
            return binarySearch(arr, l, mid - 1, x);


        return binarySearch(arr, mid + 1, r, x);
    }

    // We reach here when element is not
    // present in array
    return -1;
}

let arr = [2, 3, 4, 10, 40];
let x = 10;
let n = arr.length
let result = binarySearch(arr, 0, n - 1, x);
(result == -1) ? console.log("Element is not present in array")
    : console.log("Element is present at index " + result);

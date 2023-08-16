
function binarySearch(arr, l, r, x) {
    if (r >= l) {
        mid = l + Math.floor((r - l) / 2);

        if (arr[mid] == x) return mid;

        if (arr[mid] > x)
            return binarySearch(arr, l, mid - 1, x);

        return binarySearch(arr, mid + 1, r, x);
    }
    return -1;
}
let arr = [2, 3, 5, 6, 7, 9];
let x = 7;
let n = arr.length;
let result = binarySearch(arr, 0, n - 1, x);

(result == x) ? console.log("Not Found index") : console.log("Found index is : " + result);
// let t = -1;
// let MAX = 1000;
// let a = Array(MAX).fill(0);

// function isEmpty() {
//     return (t < 0);
// }
// function push(x) {
//     if (t >= (MAX - 1)) {
//         console.log("Stack Overflow ");
//         return false;
//     }
//     else {
//         t += 1;
//         a[t] = x;
//         console.log(x + " Pushed into Stack ");
//         return true;
//     }
// }
// function pop() {
//     if (t < 0) {
//         console.log("Stack Underflow");
//         return 0;
//     } else {
//         let x = a[t];
//         t -= 1;
//         return x;
//     }
// }
// function peek() {
//     if (t < 0) {
//         console.log("Stack Underflow");
//         return 0;
//     } else {
//         let x = a[t];
//         return x;
//     }

// }
// function print() {
//     for (let i = t; i > -1; i--) {
//         console.log(" " + a[i]);
//     }
// }
// push(10);
// push(20);
// push(30);
// push(40);
// push(50);
// console.log(pop() + " popped from stack");
// console.log("Top element is : " + peek());
// console.log("Elements present in stack : ");
// print()
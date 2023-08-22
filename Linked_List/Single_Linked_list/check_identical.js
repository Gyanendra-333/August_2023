
// A recursive javascript method to check if two linked
// lists are identical or not

function areIdenticalRecur(a, b) {
    if (a == null && b == null)
        return true;

    if (a != null && b != null)
        return (a.data == b.data) &&
            areIdenticalRecur(a.next, b.next);

    return false;
}
function areIdentical(listb) {
    return areIdenticalRecur(this.head, listb.head);
}
let a = [1, 2, 3, 4];
let b = [1, 2, 3, 4];
console.log(areIdenticalRecur(a, b));
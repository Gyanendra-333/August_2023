
// // An iterative javascript program to check if two linked lists
// // are identical or not
// class LinkedList {
//     constructor() {
//         this.head = null; // head of list
//     }
// }
// /* Linked list Node */
// class Node {

//     constructor(d) {
//         this.data = d;
//         this.next = null;
//     }
// }

// /*
// * Returns true if linked lists a and b are identical, otherwise false
// */
// function areIdentical(a, b) {

//     while (a != null && b != null) {
//         if (a.data != b.data)
//             return false;

//         /*
//         * If we reach here, then a and b are not null and their data is same, so move
//         * to next nodes in both lists
//         */
//         a = a.next;
//         b = b.next;
//     }

//     // If linked lists are identical, then 'a' and 'b' must
//     // be null at this point.
//     return (a == null && b == null);
// }

// /* UTILITY FUNCTIONS TO TEST fun1() and fun2() */
// /*
// * Given a reference (pointer to pointer) to the head of a list and an int, push
// * a new node on the front of the list.
// */

// function push(root, new_data) {
//     /*
// * 1 & 2: Allocate the Node & Put in the data
// */
//     var new_node = new Node(new_data);

//     /* 3. Make next of new Node as head */
//     new_node.next = root;

//     /* 4. Move the head to point to new Node */
//     root = new_node;
//     return root;
// }


// var llist1 = new LinkedList();
// var llist2 = new LinkedList();

// /*
// * The constructed linked lists are : llist1: 3->2->1 llist2: 3->2->1
// */

// llist1 = push(llist1, 1);
// llist1 = push(llist1, 2);
// llist1 = push(llist1, 3);

// llist2 = push(llist2, 1);
// llist2 = push(llist2, 2);
// llist2 = push(llist2, 3);

// if (areIdentical(llist1, llist2) == true)
//     console.log("Identical ");
// else
//     console.log("Not identical ");


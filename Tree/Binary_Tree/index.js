// class Node {
//     constructor(item) {
//         this.key = item;
//         this.left = this.right = null;
//     }
// }





// /* Class containing left and right child of current

//     node and key value*/
// class Node {

//     constructor(val) {
//         this.key = val;
//         this.left = null;
//         this.right = null;
//     }

// }
// // A javascript program to introduce Binary Tree
// // Root of Binary Tree

// var root = null;

// /*create root*/

// root = new Node(1);

// /* following is the tree after above statement
// 1
// / \
// null null */

// root.left = new Node(2);

// root.right = new Node(3);

// /* 2 and 3 become left and right children of 1
// 1
// / \
// 2 3
// / \ / \
// null null null null */

// root.left.left = new Node(4);

// /* 4 becomes left child of 2
// 1
// / \
// 2 3
// / \ / \
// 4 null null null
// / \
// null null
// */







// javascript program to insert a node
// in a BST

// Given Node
class Node {

    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }

}


// Function to insert a new node with
// given key in BST
function insert(node, key) {

    // If the tree is empty, return a new node
    if (node == null)
        return new Node(key);

    // Otherwise, recur down the tree
    if (key < node.key) {
        node.left = insert(node.left, key);
    }
    else if (key > node.key) {
        node.right = insert(node.right, key);
    }

    // Return the node pointer
    return node;
}

// Function to do inorder traversal of BST
function inorder(root) {
    if (root != null) {
        inorder(root.left);
        document.write(root.key + " ");
        inorder(root.right);
    }
}


/* Let us create following BST
        50
    /	 \
    30	 70
    / \ / \
20 40 60 80
*/
let root = null;

// Inserting value 50
root = insert(root, 50);

// Inserting value 30
root = insert(root, 30);

// Inserting value 20
root = insert(root, 20);

// Inserting value 40
root = insert(root, 40);

// Inserting value 70
root = insert(root, 70);

// Inserting value 60
root = insert(root, 60);

// Inserting value 80
root = insert(root, 80);

// Print the BST
inorder(root);


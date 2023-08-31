
class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}
function insert(node, key) {
    if (node == null)
        return new Node(key);

    if (key < node.key) {
        node.left = insert(node.left, key);
    }
    else if (key > node.key) {
        node.right = insert(node.right, key);
    }
    return node;
}
function inorder(root) {
    if (root != null) {
        inorder(root.left);
        console.log(root.key + " ");
        inorder(root.right);
    }
}
let root = null;
root = insert(root, 50);
root = insert(root, 40);
root = insert(root, 30);
root = insert(root, 20);
root = insert(root, 10);
root = insert(root, 60);
inorder(root);
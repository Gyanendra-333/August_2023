function insert(new_data) {

    let new_node = new Node(new_data);

    new_node.next = head;

    head = new_node;
}
(insert(4));
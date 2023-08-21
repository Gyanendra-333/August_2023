function insert_in_front(pre_node, new_data) {

    if (pre_node == null) {
        console.log("node can not be null");
        return;
    }
    let new_node = new Node(new_data);
    new_node.next = pre_node.next;
    pre_node.next = new_node;
}
insert_in_front(pre_node, new_data);
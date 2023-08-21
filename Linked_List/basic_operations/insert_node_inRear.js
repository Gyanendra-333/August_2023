function append(new_data) {

    let new_node = new Node(new_data);

    if (head == null) {
        head = new Node(new_data);
        return;
    }
    new_node.next = null;

    let last = head;
    while (last.next != null)
        last = last.next;

    last.next = new_node;
    return;
}
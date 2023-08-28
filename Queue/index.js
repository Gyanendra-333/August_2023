class Queue {

    constructor() {
        this.items = [];
    }
    isEmpty() {
        return this.items.length == 0;
    }
    enqueue(element) {
        this.items.push(element);
        console.log(element + " enqueue to queue ");
    }
    dequeue() {
        if (this.isEmpty())
            return "Underflow"
        return this.items.shift();
    }
    front() {
        if (this.isEmpty())
            return "no elements in Queue";
        return this.items[0];
    }
    rear() {
        if (this.isEmpty())
            return "No elements in Queue";
        return this.items[this.items.length - 1];
    }
}
let queue = new Queue();

queue.enqueue(12);
queue.enqueue(14);
queue.enqueue(16);
queue.enqueue(18);

console.log(queue.dequeue() + " dequeue from queue");

console.log("Front item is : " + queue.front() + " ");

console.log("Rear item is : " + queue.rear() + " ");
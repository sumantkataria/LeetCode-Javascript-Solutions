class Node {
    constructor(val) {
        this.val = val;
        this.next = val
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0
    }
    //Push to tail
    enqueue (val) {
        let newNode = new Node(val);
        if(this.size === 0) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        ++this.size
        return this
    }

    //Remove from head
    dequeue () {
        if(this.size === 0) return null
        let node = this.first
        if(this.size === 1) {
            this.first = null
            this.last = null
        } else {
            this.first = node.next
            node.next = null
        }
        --this.size
        return node
    }
}

let list = new Queue()
list.enqueue(1)
list.enqueue(10)
list.enqueue(100)
list.enqueue(2)
list.dequeue()
list.dequeue()
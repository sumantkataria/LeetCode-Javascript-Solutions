/**
 * Initialize your data structure here.
 */
 var Node = function(val) {
    this.next = null;
    this.prev = null;
    this.val = val;
}
var MyLinkedList = function() {
    this.head = null
    this.tail = null
    this.length = 0
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index < 0 || index >= this.length) return -1
    // Check for iterating from head
        else if(index*2 < this.length) {
            let currentNode = this.head, count = 0
            while(currentNode.next) {
                if(index === count) {
                    return currentNode.val
                } else {
                    currentNode = currentNode.next;count++
                }
            }
        }
        // Check for iterating from tail
        else {
            let currentNode = this.tail, count = this.length-1
            while(currentNode) {
                if(index === count) {
                    return currentNode.val
                } else {
                    currentNode = currentNode.prev; count--
                }
            }
        }
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new Node(val)
    if(this.length === 0) {
        this.head = newNode
        this.tail = newNode
    } else {
        this.head.prev = newNode
        newNode.next = this.head
        this.head = newNode
    }
    this.length++
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let newNode = new Node(val)
    if(this.length === 0) {
        this.head = newNode
        this.tail = newNode
    } else {
        this.tail.next = newNode;
        newNode.prev = this.tail
        this.tail = newNode
    }
    this.length++
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index < 0 || index > this.length) return;
    if(index === 0 && this.length === 0) {
        let newNode = new Node(val)
		this.head = newNode
        this.tail = newNode
    } else if(index === 0) {
        this.addAtHead(val)
    } else if(index === this.length) {
        this.addAtTail(val)
    } else {
        let newNode = new Node(val)
        if(index*2 < this.length) {
                let currentNode = this.head, count = 1
                while(currentNode.next) {
                    if(index === count) {
                        newNode.next = currentNode.next
                        currentNode.next.prev = newNode
                        currentNode.next = newNode
                        newNode.prev = currentNode
                        break;
                    } else {
                        currentNode = currentNode.next; count++
                    }
                }
            } else {
                let currentNode = this.tail, count = this.length-1
                while(currentNode.prev) {
                    if(index === count) {
                        newNode.prev = currentNode.prev
                        currentNode.prev.next = newNode
                        currentNode.prev = newNode
                        newNode.next = currentNode
                        break;
                    } else {
                        currentNode = currentNode.prev; count--
                    }
                }
            }
    }
    this.length++
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index < 0 || index >= this.length || this.length === 0) return
        let removedNode
        // Remove from Head
        if(index === 0 && this.length === 1) {
            this.head = null
            this.tail = null
        }
        // Remove from Head
        else if(index === 0) {
            removedNode = this.head
            this.head = removedNode.next
            removedNode.next = null
            this.head.prev = null
        }
        // Remove at tail
        else if(index === this.length-1) {
            removedNode = this.tail
            this.tail = removedNode.prev
            removedNode.prev = null
            this.tail.next = null
        }
        // Remove at any node
        else {
            if(index*2 < this.length) {
                let currentNode = this.head, count = 1
                while(currentNode.next) {
                    if(index === count) {
                        removedNode = currentNode.next
                        currentNode.next = removedNode.next
                        removedNode.next.prev = currentNode
                        removedNode.next = null
                        removedNode.prev = null
                        break;
                    } else {
                        currentNode = currentNode.next; count++
                    }
                }
            } else {
                let currentNode = this.tail, count = this.length-2
                while(currentNode.prev) {
                    if(index === count) {
                        removedNode = currentNode.prev
                        removedNode.prev.next = currentNode
                        currentNode.prev = removedNode.prev
                        removedNode.next = null
                        removedNode.prev = null
                        break;
                    } else {
                        currentNode = currentNode.prev; count--
                    }
                }
            }
        }
        this.length--
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
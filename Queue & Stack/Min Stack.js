/**
 * initialize your data structure here.
 */
 var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

function last(stack) {
    return stack[stack.length - 1]
}

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.minStack.length === 0 || val <= last(this.minStack)) {
        this.minStack.push(val)
    }
    this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(last(this.stack) === last(this.minStack)) {
        this.minStack.pop()
    }
    return this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return last(this.stack)
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return last(this.minStack)
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
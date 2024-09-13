class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        // adds a new node containing value to the end of the list
        const node = new Node(value);
        if (this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.nextNode = node;
            this.tail = node;
        }
        this.length++;
    }

    prepend(value) {
        // adds a new node containing value to the start of the list
        const node = new Node(value);
        if (this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            node.nextNode = this.head;
            this.head = node;
        }
        this.length++;
    }

    size() {
        // returns the total number of nodes in list
        return this.length;
    }

    head() {
        // returns the first node in the list
        return this.head;
    }

    tail() {
        // return the last node in the list
        return this.tail;
    }

    at(index) {
        // returns the node at the given index
        let nodeCopy = this.head;

        for (let i = 0; i < index; i++) {
            nodeCopy = nodeCopy.nextNode;
        }
        return nodeCopy;
    }

    contains(value) {
        // returns true if the passed in value is in the list, otherwise false
        let nodeCopy = this.head;

        while (nodeCopy !== null) {
            if (nodeCopy.value === value) {
                return true;
            }
            nodeCopy = nodeCopy.nextNode;
        }

        return false;
    }

    find(value) {
        // returns the index of the node containing value, or null if not found
        let nodeCopy = this.head;
        let index = 0;

        while (nodeCopy !== null) {
            if (nodeCopy.value === value) {
                return index;
            }
            nodeCopy = nodeCopy.nextNode;
            index++;
        }

        return null;
    }

    toString() {
        // represents your LinkedList objects as strings so you can print them out and preview them in the console
        let listString = "";
        let nodeCopy = this.head;

        while (nodeCopy !== null) {
            listString += `( ${nodeCopy.value} ) -> `;
            nodeCopy = nodeCopy.nextNode;
        }

        listString += "null"; // Add the final "null" at the end
        return listString;
    }

    insertAt(value, index) {
        const node = new Node(value);
    
        if (index == 0) {
            node.nextNode = this.head;
            this.head = node;
            if (this.length === 0) {
                this.tail = node;
            }
        } else if (index == this.length) {
            this.tail.nextNode = node;
            this.tail = node;
        } else {
            let copyNode = this.head;
            for (let i = 1; i < index; i++) {
                copyNode = copyNode.nextNode;
            }
            node.nextNode = copyNode.nextNode;
            copyNode.nextNode = node;
        }
    
        this.length++;
    }

    removeAt(index) {
        if (index == 0) {
            this.head = this.head.nextNode;
            if (this.length === 1) {
                this.tail = null;
            }
        } else {
            let prevNode = this.at(index - 1);
            if (index == this.length - 1) {
                this.tail = prevNode;
                prevNode.nextNode = null;
            } else {
                prevNode.nextNode = prevNode.nextNode.nextNode;
            }
        }
    
        this.length--;
    }
}

export { LinkedList };

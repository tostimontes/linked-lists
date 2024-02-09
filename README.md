# Linked Lists Project

This is my implementation of a linked list data structure as part of the Computer Science section in The Odin Project's JavaScript curriculum. The linked list is a fundamental data structure in computer science, often used for its efficiency in certain types of operations. In this project, a linked list is implemented in JavaScript, providing a basic understanding of how linked lists function and how they can be manipulated through various methods.

## Usage

To use this linked list implementation, first include the linked list module in your JavaScript file:

```javascript
const createLinkedList = require('./path-to-linked-list-module');
```

Then, you can create a new linked list instance:

```javascript
let myList = createLinkedList();
```

### Methods

The linked list supports several operations, which are described below:

- `append(value)`: Adds a new node with the specified value to the end of the list.
- `prepend(value)`: Inserts a new node with the specified value at the beginning of the list.
- `tail()`: Returns the last node in the list.
- `size()`: Returns the total number of nodes in the list.
- `at(index)`: Retrieves the node at the specified index.
- `pop()`: Removes the last node from the list and returns it.
- `contains(value)`: Checks if a node with the specified value exists in the list.
- `find(value)`: Returns the index of the node with the specified value, or `null` if not found.
- `toString()`: Returns a string representation of the list.
- `insertAt(value, index)`: Inserts a node with the specified value at the given index.
- `removeAt(index)`: Removes the node at the specified index and returns it.

### Example

```javascript
myList.append(10);
myList.prepend(5);
console.log(myList.size()); // Output: 2
console.log(myList.toString()); // Output: (5) -> (10) -> null
```

## Additional Information

- This implementation of a linked list uses a factory function approach, which helps encapsulate and manage the state of the list.
- The `append` and `prepend` methods dynamically add nodes to the list, either at the end or the beginning, respectively.
- The `pop`, `insertAt`, and `removeAt` methods provide flexibility in managing the list's elements.

Remember, this implementation serves as a learning tool and may not cover all edge cases or performance optimizations found in production-ready linked list libraries.

// append(value) adds a new node containing value to the end of the list
// prepend(value) adds a new node containing value to the start of the list
// size returns the total number of nodes in the list
// head returns the first node in the list
// tail returns the last node in the list
// at(index) returns the node at the given index
// pop removes the last element from the list
// contains(value) returns true if the passed in value is in the list and otherwise returns false.
// find(value) returns the index of the node containing value, or null if not found.
// toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
const { createNewNode } = require('./nodeFactory');

function createLinkedList() {
  const list = { head: null };
  list.append = (value) => {
    const newNode = createNewNode(value);
    let obj = list.head;
    if (obj === null) {
      list.head = newNode;
    }
    while (obj.next) {
      obj = obj.next;
    }
    obj.next = newNode;
  };
  list.prepend = (value) => {
    const newNode = createNewNode(value, list.head);
    list.head = newNode;
  };
  list.tail = () => {
    while (Object.includes('next')) {}
  };
  list.size = () => {
    return Object.keys(list).length;
  };
  list.at = (index) => {};
  list.pop = () => {};
  list.contains = (value) => {};
  list.find = (value) => {};
  list.toString = () => {};
  return list;
}

const linkedList = createLinkedList();

linkedList.prepend('newaps');
linkedList.size();
linkedList.append('testappend');
console.log(linkedList);

const { createNewNode } = require('./nodeFactory');

function createLinkedList() {
  const list = { head: null };
  let total = 0;
  list.append = (value) => {
    const newNode = createNewNode(value);
    let obj = list.head;
    if (obj === null) {
      list.head = newNode;
      total += 1;
      return;
    }
    while (obj.next) {
      obj = obj.next;
    }
    obj.next = newNode;
    total += 1;
  };
  list.prepend = (value) => {
    const newNode = createNewNode(value, list.head);
    list.head = newNode;
    total += 1;
  };

  list.tail = () => {
    let obj = list.head;
    if (obj === null) {
      return list;
    }
    while (obj.next) {
      obj = obj.next;
    }
    return obj;
  };
  list.size = () => {
    return total;
  };

  list.at = (index) => {
    let obj = list.head;
    if (obj === null) {
      return 'The list is empty';
    }
    for (let i = 0; i < index; i++) {
      if (!obj) {
        return 'Index is out of bounds';
      }
      obj = obj.next;
    }
    return obj;
  };
  list.pop = () => {
    let obj = list.head;
    if (obj === null) {
      return;
    }
    let returnObject;
    if (!obj.next) {
      returnObject = obj;
      list.head = null;
      total -= 1;
      return returnObject;
    }
    while (obj.next) {
      if (obj.next.next === null) {
        returnObject = obj.next;
        obj.next = null;
        total -= 1;
        return returnObject;
      }
      obj = obj.next;
    }
  };
  list.contains = (value) => {
    let obj = list.head;
    if (obj === null) {
      return false;
    }
    while (obj.next) {
      if (obj.value === value) {
        return true;
      }
      obj = obj.next;
    }
    if (obj.value === value) {
      return true;
    }
    return false;
  };
  list.find = (value) => {
    let obj = list.head;
    let index = 0;
    if (obj === null) {
      return null;
    }
    while (obj.next) {
      if (obj.value === value) {
        return index;
      }
      index += 1;
      obj = obj.next;
    }
    if (obj.value === value) {
      return index;
    }
    return null;
  };
  list.toString = () => {
    let obj = list.head;
    let ojbString = '';
    if (obj === null) {
      return 'The list is empty';
    }
    while (obj.next) {
      ojbString += `(${obj.value}) -> `;
      obj = obj.next;
    }
    ojbString += `(${obj.value}) -> null`;
    return ojbString;
  };
  list.insertAt = (value, index) => {
    const insertionIndex = list.at(index - 1);
    if (!insertionIndex) {
      return 'Index is out of bounds';
    }
    const newNode = createNewNode(value, list.at(index));
    if (index === 0) {
      list.head = newNode;
      return newNode;
    }
    insertionIndex.next = newNode;
    total += 1;
    return newNode;
  };
  list.removeAt = (index) => {
    let returnObject;
    if (index === 0) {
      returnObject = list.head;
      list.head = list.head.next;
      total -= 1;
      return returnObject;
    }
    const previousObject = list.at(index - 1);
    if (typeof previousObject === 'string') {
      return previousObject;
    }
    const obj = list.head;
    if (obj === null) {
      return 'The list is empty';
    }
    if (!previousObject.next.next) {
      returnObject = previousObject.next;
      previousObject.next = null;
      total -= 1;
    } else {
      returnObject = previousObject.next;
      previousObject.next = previousObject.next.next;
      total -= 1;
    }
    return returnObject;
  };
  return list;
}

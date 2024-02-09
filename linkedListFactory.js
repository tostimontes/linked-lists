const { createNewNode } = require('./nodeFactory');

function createLinkedList() {
  const list = { head: null };
  let total = 0;
  list.append = (value) => {
    const newNode = createNewNode(value);
    let obj = list.head;
    if (obj === null) {
      list.head = newNode;
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
      obj = obj.next;
    }
    return obj;
  };
  list.pop = () => {
    let obj = list.head;
    if (obj === null) {
      return;
    }
    while (obj.next) {
      if (obj.next.next === null) {
        obj.next = null;
        return;
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
    const newNode = createNewNode(value, list.at(index));
    list.at(index - 1).next = newNode;
  };
  list.removeAt = (index) => {
    list.at(index - 1).next = list.at(index + 1);
  };
  return list;
}

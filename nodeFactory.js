// Node class / factory, containing a value property and a link to the nextNode, set both as null by default.

module.exports.createNewNode = function createNewNode(
  value = null,
  next = null
) {
  return { value, next };
};

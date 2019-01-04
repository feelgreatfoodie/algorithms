function BinaryTree(value) {
// Constructor
  this.value = value
  this.left = null
  this.right = null
}

BinaryTree.prototype.insert = function (value) {
  const tree = new BinaryTree(value)
  compareValues(tree, this)

  function compareValues(tree, root) {
    if (value < root.value) {
      if (root.left) return compareValues(tree, root.left)
      else {
        root.left = tree
      }
      return tree
    } else {
      if (root.right) return compareValues(tree, root.right)
      else root.right = tree
      return tree
    }
  }
  return tree
}

let myTree = new BinaryTree(2)
myTree.insert(5)
myTree.insert(1)
myTree.insert(8)
myTree.insert(42)
myTree.insert(3)

console.log(myTree)
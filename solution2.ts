export class TreeNode {
  private data: number | null;
  private leftNode: TreeNode | null;
  private rightNode: TreeNode | null;

  constructor(data: number | null) {
    this.data = data;
    this.leftNode = null;
    this.rightNode = null;
  }

  public get nodeData() {
    return this.data;
  }

  public get leftChild() {
    return this.leftNode;
  }

  public get rightChild() {
    return this.rightNode;
  }

  public setLeftChild(data: TreeNode | null) {
    this.leftNode = data;
  }

  public setRightChild(data: TreeNode | null) {
    this.rightNode = data;
  }
}

export class Tree {
  private arrayElement: (number | null)[];
  private numberOfNodes = 0;
  public root: TreeNode | null;

  constructor(elements: (number | null)[]) {
    this.arrayElement = elements;
    this.numberOfNodes = elements.length;

    this.root = this.constructTree(null, 0);
  }

  // construct a binary tree froma given array of values
  private constructTree(current: TreeNode | null, index: number) {
    // index is out of range, node does not exists (null)
    if (index >= this.numberOfNodes) return current;

    // create a new node with the value of the current array element
    const newNode = new TreeNode(this.arrayElement[index]);
    current = newNode;

    // recursively assign value for it's childs with the logic
    // the left child's index is always equal 2 times the index of its parent + 1 (if exists)
    current.setLeftChild(this.constructTree(current.leftChild, 2 * index + 1));
    // the tight child's index is always next to the left child (if exists)
    current.setRightChild(this.constructTree(current.leftChild, 2 * index + 2));

    return current;
  }

  public printData(current: TreeNode | null) {
    if (!current) return;

    this.printData(current.leftChild);
    console.log(current.nodeData);
    this.printData(current.rightChild);
  }

  // Time/Space: O(N)/O(H); N: number of nodes, H: tree's height
  public getSumOfNodesWithEvenGrandParent(
    current: TreeNode | null,
    parent: TreeNode | null,
    grandParent: TreeNode | null
  ): number {
    // get the value of the current node and return it

    if (!current) return 0; // if a node is null, it's value is 0

    const currentNodeData = // if a node's grandparent is not even, its value is also 0
      ((grandParent?.nodeData || 1) % 2 === 0 && current.nodeData) || 0;

    return (
      currentNodeData + // continue with the left child and the right child of the node
      this.getSumOfNodesWithEvenGrandParent(
        current.leftChild,
        current,
        parent
      ) +
      this.getSumOfNodesWithEvenGrandParent(current.rightChild, current, parent)
    );
  }
}

const arr: (number | null)[] = [
  6,
  7,
  8,
  2,
  7,
  1,
  3,
  9,
  null,
  1,
  4,
  null,
  null,
  null,
  5,
];

const runSecondSolution = () => {
  const tree = new Tree(arr);
  // tree.printData(tree.root); // test

  const result = tree.getSumOfNodesWithEvenGrandParent(tree.root, null, null);

  console.log(
    `The total sum of nodes with a even-valued grandpatent is ${result}`
  );

  /**
   *  - The time complexity for this approach is O(N) as it has ti traverse through every element of the tree
   *  - Recursion's space complexity is O(H) with H has the tree's height
   */
};

runSecondSolution();

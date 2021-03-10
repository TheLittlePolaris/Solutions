import { Tree } from "./solution2";

it("test case problem 2", () => {
  const givenArray: (number | null)[] = [
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

  const tree = new Tree(givenArray);
  const result = tree.getSumOfNodesWithEvenGrandParent(tree.root, null, null);
  expect(result).toBe(18)
});

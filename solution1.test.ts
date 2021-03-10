import { findUniqueInArray } from "./solution1";


// test for solution 1
it("test case 1", () => {
  const givenArray = [1, 1, 0, 1];
  const resultCaseOne = findUniqueInArray(givenArray);
  expect(resultCaseOne).toBe(0);
});

it("test case 2", () => {
  const givenArray = [3, 1, 3, 3, 5, 1, 1];
  const resultCaseTwo = findUniqueInArray(givenArray);
  expect(resultCaseTwo).toBe(5);
});

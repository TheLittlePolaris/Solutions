// https://www.notion.so/Coding-Assignment-fe2b18dcc30f4ebca7a9606fe18c216b
// Problem 1

const givenArray = [1, 1, 0, 1];

export const findUniqueInArray = (array: number[]): number => {
  const getSum = (a: number, b: number) => a + b;


  const sumArray = array.reduce(getSum, 0); // O(N) time
  const arraySet = [...new Set(array)]; // O(N) time, O(1) space
  const sumSet = arraySet.reduce(getSum, 0); // O(N) time
  // Total: O(3N) time, O(2) space => O(N) time, O(2) space


  /**
   * Idea: The sum of the Set array is about 1/3 that of the original array
   * 3 times it minus the sum of the original array will give us 2 times the value we need to find
   * so we can find the value by divide the result by 2
   */
  return (3 * sumSet - sumArray) / 2;
};

const runFirstSolution = () => {
  const result = findUniqueInArray(givenArray);
  console.log(
    `The element that only occur once in the given array is: ${result}`
  );
};

runFirstSolution();

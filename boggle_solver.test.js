const boggle_solver = require('/home/codio/workspace/Boggle_Testing/boggle_solver.js');

/** Lowercases a string array in-place. (Used for case-insensitive string array
 *  matching).
 * @param {string[]} stringArray - String array to be lowercase.
 */
function lowercaseStringArray(stringArray) {
  for (let i = 0; i < stringArray.length; i++)
    stringArray[i] = stringArray[i].toLowerCase();
}

describe('Boggle Solver tests suite:', () => {
  describe('Normal input', () => {
    let grid = [['A', 'B', 'C', 'D'],
                ['E', 'F', 'G', 'H'],
                ['I', 'J', 'K', 'L'],
                ['M', 'N', 'O', 'P']];
    let dictionary = ['jin','lob'];
    let expOutcome = ['jin','lob'];
    let solutions = boggle_solver.findAllSolutions(grid,dictionary);

    // Lowercasing for case-insensitive string array matching.
    lowercaseStringArray(solutions);
    lowercaseStringArray(expected);
    expect(solutions.sort()).toEqual(expected.sort());
  });


  
  describe('Problem contraints', () => {
    // Cases such as Qu
    test ('Length'), () => {
      let grid = [['A', 'W', 'V', 'R'],
                  ['E', 'N', 'P', 'S'],
                  ['Y', 'Z', 'Qu', 'T'],
                  ['O', 'N', 'T', 'A']];
      let dictionary = ['quart', 'quarter'];
      let expOutcome = ['quart', 'quarter'];

      let solutions = boggle_solver.findAllSolutions(grid,dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
  }
});

  
  describe('Input edge cases', () => {

    // Example Test using Jess
    test('Dictionary is empty', () => {
      // (Edge case) Since there are no possible solutiona, it should return an
      // empty list.
      let grid = [['A', 'B', 'C', 'D'],
                    ['E', 'F', 'G', 'H'],
                    ['I', 'J', 'K', 'L'],
                    ['M', 'N', 'O', 'P']];
      let dictionary = [];
      let expected = [];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });
    test('Empty Grid', () => {
      let grid = [];
      let dictionary = ["test"];
      let expOutcome = [];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    })
  });
});

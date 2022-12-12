const boggle_solver = require('/home/codio/workspace/Boggle_Testing/boggle_solver.js');

/** Lowercases a string array in-place. (Used for case-insensitive string array
 *  matching).
 * @param {string[]} stringArray - String array to be lowercase.
 */
/*function lowercaseStringArray(stringArray) {
  for (let i = 0; i < stringArray.length; i++)
    stringArray[i] = stringArray[i].toLowerCase();
} */

test('find words (2x2)', () => {
   const grid = [['A', 'B'],
                ['C', 'D']];
   const dictionary = ['A','B','AC','ACA','ACB','DE']
   expect(boggle_solver.findAllSolutions(grid, dictionary)).toStrictEqual(['acb'])
});

test('Find Words 4x4 ', () => {
  const grid = [["O","A","A","N"],
                ["E","T","A","E"],
                ["I","H","K","R"],
                ["I","F","L","V"]];
  const dictionary = ["PATH","TEA","EAT","RAIN"];
  expect(boggle_solver.findAllSolutions(grid, dictionary)).toStrictEqual(["eat","path"])
});
  
test('Find Valid Words, () => {
  const grid = [["C","O","L","G"],
                ["A","T","E","S"]];
  const dictionary = ["COLGATES"];
  expect(boggle_solver.findAllSolutions(grid, dictionary)).toStrictEqual(["colgate"])
});

test('Find non-adj Words', () => {
  const grid = [["A","B","C"],
                ["D","E","F"],
                ["G","H","I"]];
  const dictionary = ["AFI", "CDG", "FAB"];
  expect(boggle_solver.findAllSolutions(grid, dictionary)).toStrictEqual([])
});

test('Find Diagonal Words', () => {
  const grid = [["C","B","U","B","B","F","N","Y"],
                ["D","L","F","B","S","I","H","G"]];
  const dictionary = ["CLUBBING"];
  expect(boggle_solver.findAllSolutions(grid, dictionary)).toStrictEqual(["clubbing"])
});

// edge cases
test('Edge Case (empty)', () => {
  const grid = [];
  const dictionary = [];
  expect(boggle_solver.findAllSolutions(grid,dictionary)).toStrictEqual([])
});

test('Edge Case (short words)', () => {
  const grid = [["A","B"],
                ["C","D"]];
  const dictionary = ["AB","AD"];
  expect(boggle_solver.findAllSolutions(grid,dictionary)).toStrictEqual([])
});

test('Edge Case (dup letter)', () => {
  const grid = [["A","B"],
                ["C","D"]];
  const dictionary = ["ABBY"];
  expect(boggle_solver.findAllSolutions(grid,dictionary)).toStrictEqual([])
});

//Qu/St
test('Handle Qu', () => {
  const grid = [['T', 'N', 'Y', 'Z'],
                ['S', 'E', 'Qu', 'T'],
                ['G', 'Z', 'R', 'A']];
  const dictionary = ["AQUA", "QUARTER"];
  expect(boggle_solver.findAllSolutions(grid, dictionary)).toStrictEqual(['aqua','quarter'])
  
test('Handle St', () => {
  const grid = [['T', 'St', 'D', 'R'],
                ['P', 'N', 'A', 'T'],
                ['G', 'Z', 'A', 'R']];
  const dictionary = ["STRAND", "STRAP"];
  expect(boggle_solver.findAllSolutions(grid, dictionary)).toStrictEqual(['strap','strand'])

test('Trailing Q', () => {
  const grid = [['T', 'E', 'R', 'R'],
                ['E', 'A', 'Qu', 'T'],
                ['G', 'Z', 'A', 'R']];
  const dictionary = ["TARQ"];
  expect(boggle_solver.findAllSolutions(grid, dictionary)).toStrictEqual([])
});

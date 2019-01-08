import { validate } from './../src/sudoku';

it('should validate if an array does not contain duplicates', function () {
  let tempArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(validate(tempArr)).toEqual(true);
});

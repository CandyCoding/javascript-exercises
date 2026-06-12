const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Candy', () => {
    expect(values.firstName).toEqual('Candy');
  });
  test('lastName is Lopez', () => {
    expect(values.lastName).toEqual('Lopez');
  });
  test('thisYear is 2026', () => {
    expect(values.thisYear).toEqual(2026);
  });
  test('birthYear is 1993', () => {
    expect(values.birthYear).toEqual(1993);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Candy Lopez and I am 33 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Candy Lopez', () => {
    expect(values.fullName).toEqual('Candy Lopez');
  });
  test('age is 33', () => {
    expect(values.age).toEqual(33);
  });
});

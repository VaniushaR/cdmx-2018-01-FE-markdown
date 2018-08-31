//TDD
describe('', () => {
  test('debería ser una función', () => {
    assert.isFunction();
  });
  //Test 1: The type of file of the user should be just and only .md file
  describe('not.stringMatching', () => {
    it('matches if the actual string does not match the expected regex', () => {
      expect('.txt').toEqual(expect.not.stringMatching(userTypeFile));
    });
  });
  it('Should be a closed type variable for .md files', () => {
    expect(userTypeFile).toBe('.md');
  });

  //Test 2: The type of the
});

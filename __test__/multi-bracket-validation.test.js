'use strict';
let multiBracketValidation = require('../challenges/multiBracketValidation/multi-bracket-validation');

describe('Multi Bracket Test', () => {
  it('works with a single curly', () => {
    expect(multiBracketValidation('{}')).toBe(true);
  });
   
  it('works with multiple brackets', () => {
    let str = '{}(){}';
    expect(multiBracketValidation(str)).toBe(true);
  });
   
  it('works with extra character', () => {
    let str = '()[[Extra Characters]]';
    expect(multiBracketValidation(str)).toBe(true);
  });
   
  it('works with a mix of brackets', () => {
    let str = '(){}[[]]';
    expect(multiBracketValidation(str)).toBe(true);
  });
   
  it('works with many words', () => {
    let str = '{}{Code}[Fellows](())';
    expect(multiBracketValidation(str)).toBe(true);
  });
   
  it('fails correctly', () => {
    let str = '[({}]';
    expect(multiBracketValidation(str)).toBe(false);
  });
   
  it('fails correctly', () => {
    let str = '(](';
    expect(multiBracketValidation(str)).toBe(false);
  });
   
  it('fails correctly', () => {
    let str = '{(})';
    expect(multiBracketValidation(str)).toBe(false);
  });
   
  it('fails with only one bracket', () => {
    let str = '{';
    expect(multiBracketValidation(str)).toBe(false);
  });
});
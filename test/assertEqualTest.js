const assertEqual = require('../assertEqual');

describe('#assertEqual', () => {
    
  it('should return true for equal string value', () => {
    assertEqual("Lighthouse Labs", "Lighthouse Labs");
  });
  it('should return false for unequal string values', () => {
    assertEqual("Lighthouse Labs", "BootCamp");
  });

  it('should return true for equal number type values', () => {
    assertEqual(10, 10);
  });
  it('should return false for unequal number type values', () => {
    assertEqual(12, 1);
  });
});
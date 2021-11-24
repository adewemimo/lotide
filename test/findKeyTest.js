const findKey = require('../findKey');
const {expect} = require('chai');

describe('#findKey', () => {
  it('should return output as noma as per the callback function', () => {
    const result1 = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2);
    expect(result1).to.equal('noma');

  });
  it('should return output as "Red Notice" as per the callback function', () => {
    const output = findKey({
      "Red Notice": {ratings: 2},
      "Hustle":     {ratings: 3},
      "Alter Ego": {ratings: 4},
      "Squid Game": {ratings: 5}
    }, x => x.ratings < 4);
    expect(output).to.equal('Red Notice');
  });

  it('should return output as undefined as per the callback function', () => {
    const output = findKey({
      "Red Notice": {ratings: 2},
      "Hustle":     {ratings: 3},
      "Alter Ego": {ratings: 4},
      "Squid Game": {ratings: 5}
    }, x => x.ratings > 5);
    expect(output).to.equal(undefined);
  });

  it('should return output as undefined as per the callback function', () => {
    const output = findKey({
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    }, x => x === "Brooklyn");
    expect(output).to.equal(undefined);
  });

  it('should return output as "drama" as per the callback function', () => {
    const output = findKey({
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    }, x => x === "The Wire");
    expect(output).to.equal('drama');
  });
    
});


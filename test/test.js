var expect = require('chai').expect;
var Validator = require('../validator.js')

describe('Validating JS Objects', function(){

  it('The object has something to validate returns true', function(){
    var validator = new Validator()
    expect(validator.isValid({})).to.be.true


  })
  it('The object has nothing to validate returns false', function(){
    var validator = new Validator()
    expect(validator.isValid()).to.be.false


  })





})

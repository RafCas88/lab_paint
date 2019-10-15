// A paint can should:
//
// have a number of litres of paint
// be able to check if it is empty
// be able to empty itself of paint

const assert = require("assert");
const Paint = require("../paint.js");

describe("Paint", function(){

  let paint;

  beforeEach( function(){
    paint = new Paint();
  });


  it("should start with no litres of paint", function(){
    const actual = paint.litresOfPaint; //taxi this.passengers = []
    assert.deepStrictEqual(actual, [])
  });


  it("should be able to add litres of paint", function(){
    paint.addLitresOfPaint(100)
    const actual = paint.litresOfPaint;
    assert.deepStrictEqual(actual, [100])
  })


  it("should be able to check if it is empty", function(){
    const actual = paint.checkIfEmpty;
    assert.deepStrictEqual(actual, true);
  });

  it("should be able to empty itself of paint", function(){
    paint.addLitresOfPaint(100);
    paint.removeLitresOfPaint(1);
    const actual = paint.litresOfPaint;
    assert.deepStrictEqual(actual, [1])
  })







});

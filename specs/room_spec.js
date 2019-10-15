const assert = require("assert");
const Room = require("../room.js");

describe("Room", function(){

  let room;

  beforeEach( function(){
    room = new Room(50);
  });

  it("should have an area in square meters", function(){
    const actual = room.areaInSquareMeters; //Act actual === expected
    assert.strictEqual(actual, 50); //Assert
  });

  it("should start not painted", function(){
    const actual = room.notPainted; //Act actual === expected
    assert.deepStrictEqual(actual, true); //Assert
  });

  it("should be able to be painted", function(){
    const actual = room.bePainted;
    assert.deepStrictEqual(actual, true);
  });













});

// A paint can should:
//
// have a number of litres of paint
// be able to check if it is empty
// be able to empty itself of paint
const Paint = function(){
  this.litresOfPaint = [];
  this.checkIfEmpty = true;
  // this.bePainted = true;
};

Paint.prototype.addLitresOfPaint = function(litre){
  this.litresOfPaint.push(litre);
}

Paint.prototype.removeLitresOfPaint= function(litre){
  const indexOfLitre =
  this.litresOfPaint.indexOf(litre);
  this.litresOfPaint.splice(indexOfLitre, 1);
}

module.exports = Paint;

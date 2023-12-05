// Your code here


Array.prototype.uniq = function() {
  let uniqueArr = [];


  for (let i = 0; i < this.length; i++) {
    if (!uniqueArr.includes(this[i])) {
      uniqueArr.push(this[i]);
    };

  };
  return uniqueArr;
};


console.log([1,2,2,3,3,3].uniq())

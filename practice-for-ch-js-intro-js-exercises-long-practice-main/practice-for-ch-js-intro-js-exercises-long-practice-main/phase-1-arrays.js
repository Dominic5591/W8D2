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

// console.log([1,2,2,3,3,3].uniq())


// return nested arr of indices of nums that add to 0
Array.prototype.twoSum = function() {
    let indexSum = [];

    for (let i = 0; i < this.length; i++){
        for (let j = i + 1; j < this.length; j++){
            if (j > i) {
                if (this[i] + this[j] === 0) {
                        indexSum.push([i, j]);
                };
            };
        };
    };

    return indexSum;
}

// console.log([-1, 0, 2, -2, 1].twoSum());

Array.prototype.transpose = function() {
  let result = [];

  for (let col = 0; col < this[0].length; col++) {
    let transposed = [];
    for (let row = 0; row < this.length; row++) {
      transposed.push(this[row][col])
    }
    result.push(transposed)
  }

  return result;
};


console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose());

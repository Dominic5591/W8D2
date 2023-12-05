// Your code here

Array.prototype.myEach = function (callback) {
    let arr = [];
    for (let i = 0; i < this.length; i++){
        arr.push(callback(this[i]))
    }
    return arr
}

console.log([1,2,3,4,5].myEach(function(ele){
    console.log(ele)}));


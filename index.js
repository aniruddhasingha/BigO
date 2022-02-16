// O(n*n)
function printAllPairsOfArray(array) {
  for(let i=0; i<array.length;i++){
      for(let j=0; j<array.length;j++){
    console.log(array[i],array[j]);
  }
  }
}
let a = [1,2,3,4,5];

printAllPairsOfArray(a);

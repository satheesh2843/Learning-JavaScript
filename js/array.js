const array = [];
array[0]=1;
array[1]=2;
console.log(array[0])
console.log("insertion of  string")
array[2]="three"
array[3]=4
console.log("insertion element using push operation")
array.push("new")
array.push("del")
console.log(array);
console.log("adding element using push")

console.log(array);
console.log("adding element in array in \"unshift\" in 0th position ")
array.unshift("new");
console.log(array);

console.log("removing elelment using splice element in aray")
array.splice(1,2)
console.log(array);

console.log("adding element in array using splice")
array.splice(2,2 ,"new element adding using splice")
console.log(array);

console.log("slice is using to copy to another array from starting position to ending position")
const newarray=array.slice(1,3)
console.log(newarray);

console.log("\"join\" method used to convert total aray into single string")
const joinn=array.join()
console.log(joinn)

  
// let arr = ["aman", "amresh", "amandeep", "maheep", "suresh", "mahender"]
// let name = "am"
// let arr2 = arr.filter((elem)=>elem.substring(0, name.length) === name)
// console.log(arr2)

let winningPats = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
for(let i = 0; i<8; i++){
  const [x,y,z] = winningPats[i]; 
  console.log(x);
  console.log(y);
  console.log(z);
}

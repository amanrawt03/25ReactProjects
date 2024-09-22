let arr = ["aman", "amresh", "amandeep", "maheep", "suresh", "mahender"]
let name = "am"
let arr2 = arr.filter((elem)=>elem.substring(0, name.length) === name)
console.log(arr2)
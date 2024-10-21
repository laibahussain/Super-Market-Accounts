let p1 = parseInt(prompt("Enter price"))
let p2 = parseInt(prompt("Enter price"))
let p3 = parseInt(prompt("Enter price"))
let p4 = parseInt(prompt("Enter price"))
let p5 = parseInt(prompt("Enter price"))
let p6 = parseInt(prompt("Enter price"))
let p7 = parseInt(prompt("Enter price"))
let p8 = parseInt(prompt("Enter price"))
let p9 = parseInt(prompt("Enter price"))
let p10 = parseInt(prompt("Enter price"))
let sum = (p1+p2+p3+p4+p5+p6+p7+p8+p9+p10)
alert("Total: " + sum)
if(sum >= 1000 && sum < 2000){
  let discount = sum * 0.1
  let newamount = parseInt(sum - discount)
  alert("discounted price: " + "Rs" + newamount)
}
else if(sum >= 2000 && sum < 3000){
  let discount = sum * 0.2
  let newamount = parseInt(sum - discount)
  alert("discounted price = " + "Rs " + newamount)
}
else if(sum > 5000){
  let discount = sum * 0.5
  let newamount = parseInt(sum - discount)
  alert("discounted price = " + "Rs" + newamount)
}
else{
  alert("No discount applied on your purchase")
}
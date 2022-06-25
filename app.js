//number,  String, Object, Boolean, undefined, null
//var,let, const
//string
//var x = "    Hello   World world";
//var x = new String("hello world");
//var y = "webAcademy";
//let z = x.slice(-5)
//let a =x.substring(0,5);

//console.log(z);
//console.log(a);

//let z = x.replace(/world/g,"webAcadamy");
//let z = x.toUpperCase();
//let z = x.toLowerCase();
//let z = x.concat("",y);
//let z = x.trim();
//let z =x.split(", ")
//console.log(z);

//let str = "welcome to our webacademy,we are learing javascrpt on our webacademy";

//let str = "welcome to our webAcadamy";
//let searchResult= str.match(/webacademy/g);
//if(searchResult !=null){
    //console.log(searchResult);
//}else {
   // console.log("Not found");
//}
//console.log(str.includes("webacademy"))
//str.startsWith("wecome")
//console.log(str.startsWith("welcome"))
//endwith();
//console.log(str.endsWith("welcome"))
//Template literals
//let name = "Rashed";
//let x = 12;
//let y = 13;
//let text = `welcome to our webacadamy`;
//let text1 = `welcome 
//to 
//our
//webacadamy`;
//console.log(`The value of x is ${x} and y is ${y} and the sum is ${x+y}`);
//Array
//let x = [1,2,3,4,5];
//let y = new Array(6,7,8,9,10);

//console.log(x[1])
//console.log(`Lenght of array x is ${x.length}`);
//x.unshift(0);
//x.unshift("new element")
//x.shift();
//x.pop();
//x.push(6);
//x[1]= 11;
//delete x[1];
//let newArray =x.slice(2,4);
//x.splice(2,1);
//console.log(x);
//let x = [47,1,64,6,28,14,35,5];
//let y = ["Banana", "Orange", "Apple", "Mango"];
//y.sort();
//y.reverse();
//console.log(y);
//x.sort(function(a,b){
   // return a-b;
//});
//x.reverse();
//console.log(x);
//Iteration
//forEach()
//var names = ["Rashed","Rajib","Ripon","Sujon","Sohan"];
//names.forEach(function(x,y,z){
   // console.log("Hello" +  x + "your index is" + y + "and the array is" + z);
//});
//map()
//let x = [1,2,3,4,5,0];
//delete x [3]
//let newArray = x.map(function(x,y,z){
    //return`${x * 2} is at index ${y}`;
    //});

//console.log(newArray);
//let computer = {
  // brand:"Dell",
 //  model:"XPS",
  // price:30000,
   //features:["Graphics Card","HEMI","USB"],

//specs:{
  // mamory:"BGB",
  // processor:"i7",
   //Storage:"1T8"
//},
//details: function() {
//   console.log(`The computer is a ${this.brand} Brand`)
//}


//}
   

   


//computer.features.map(function(value){
  // return "Feature" + value
//})
//console.log(computer.model)
//console.log(computer.price)
//console.log(computer.details())
//let car = {
  // brand:"Toyota",
  // model:"Corolla",
   //price:30000000,
  // color:"White",
   //specifications: {
     // engine:"V6",
     // transmisson:"Autonatoc",
     // mileage:"10KHPL",
    //  fuel:"Petrol"
   //},
  // Comment:function(){
    //  console.log(`The car is a $(this.brand)Brind which milege is ${this.
       //  specifcations.mailge} is so coll`);
  // }
//}
//console.log(car["model"])
//funtion 2 types: user-defiend,build-in
//user-funtion
//function add(...x ) {
   //var sum = 0;
 //  x.forEach(function(x){
      //sum = sum + x;
   //})
   //console.log(sum);
  // x = 10;
  // y = 20;
  // return "The value of x is" + x;
   //console.log(x + y );
   //return x + y;
   
//}
//add(1,3,4);
//let a = add(15, 20);

// console.log(a);
//let add = function(...x){
  // var sum = 0;
   //x.forEach(function(x){
     // sum = sum + x;
   //})
   //console.log(sum);
//}
//add(1,3,7);
//let add = (...x)=>{
  //var sum =0;
  // x.forEach(function(x){
     // sum = sum + x;
  // })
  // console.log(sum);
//}
//add(1,2,4,5,6,78,9,10);
//let ourCustomFun = x=> {
   //console.log("Hello world" + x);
//}
//ourCustomFun("35");
//if else
//let x = 3;
//if(x < 10 && x >5){
   //alert("x is less than 10 and greater than 5");
//} else if(x ==11){
  // alert("x is equal to 11");
//} else {
//   alert("x is greater than 11 or less than 5");
//}
//if(x> 10){
  // alert("x is greater than 10");
//} else{
  //alert ("x is less than 10");

//}
//ternary oppration
//let x = 11; 
//x > 10 ? alert("x is greater than 10"): (x==10 ? alert("x is equal to 10"): alert("x is less than10"));
//return
//function add(...x){
   //var sum = 0;
   //x.forEach(function(x){
     // sum = sum + x;
   //})
   //return sum;
//}

//var total =add(1,3,4,5,6,7,8,9,10);
//Nul colscessing operator
//let x = 9;
//var y = x > 10 ?? "x is less than 10";
//if(y == true){
  // alert("x is greater than 10");
//}else{
   //alert("x is less than 10");
//}
//console.log(y);

//loop
//1-100 for
//for(i = 2; i <= 100; i = i++){
   //console.log(i);
//}
//alert("Loop stopped")

//i = 0;
//while(i<= 100){
  // console.log(i);
  // i= i + 2;
//}
//i = 1;
//do{
  // console.log(i);
  // i = i + 2;
//}while(i <= 10);
//Event :
var button = document.querySelector(".button");
button.addEventListener("click", function(){
   alert("Hello World");
});

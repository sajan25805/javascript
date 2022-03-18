//  Map just transform the whole set of arrays
// 1.Doubling the array without map.
let number=[1,2,3,4,5,6,7,8];
let output= number.map((x)=>{
    return x*2;
});
console.log(output);



//Transform the given array of decimal into hexa decimal.
digits=[10,11,12,13,14,15];
hexaDecimal= digits.map((x)=>{
return x.toString(16);
});
console.log(hexaDecimal);


// 3. Finding the Area of circle of given radius of circles;
let radius=[7,21,28,35];
Area= radius.map(function(x){
    return Math.PI*x**2;
});
console.log(Area);

//4.Convert the given array in to binary 
let decimal=[1,2,3,10,20,30];

binary=decimal.map((x)=>{
    return x.toString(2);
});
 console.log(binary);
  


 let users= [
     {firstName:"Sajan", lastName:"Mainali", age:19},
     {firstName:"Elon", lastName:"Musk", age:50},
     {firstName:"Seejan", lastName:"Mainali", age:25},
     {firstName:"Ram", lastName:"Mainali", age:25},
 ];

// 5. List of full name of all the users
// We should get something like [ 'Sajan Mainali', 'Elon Musk', 'Seejan Mainali', 'Ram Mainali' ]

fullName=users.map((x)=>{
   return x.firstName+" "+x.lastName; 
});
console.log(fullName);

// we can use two or more higher order function at once to get
// the desired result.

// Find the first name of the user whose age are less than 26.
//Firstly lets use filter to collect users whose age is less than 26.
//Later lets use map to display their firstname.

Name=users.filter((x)=>x.age<26).map((x)=>x.firstName);
console.log(Name);











//7.. Find the number of particular age in the array of an given objects.
// our result should be 
// { 19 : 1, 50 : 1,  25: 2 ,}
// Since we have to find number of particular age which means reduce.
// Reduce has two params accumulator and Current value.






age = users.reduce((acc,curr)=>{
 if(acc[curr.age]){
  acc[curr.age]=++acc[curr.age]
 }
 else{
      acc[curr.age]=1;
 }
  return acc;
}, {});
console.log(age);




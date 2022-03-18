// 1.Find the sum of all the elements in the array without using reduce.

// arr= [1,2,3,4,5,6,7,8,9];
// let output= function(arr)
// {
//     let sum=0;
//     for (let i = 0; i < arr.length; i++)
//      {
//         sum = sum + arr[i];
        
//     }
//     return sum;
// }
//  console.log(output(arr))


// 2.  FInd the sum of the element in the array using reduce
 let number= [1,2,3,4,5];
 output = number.reduce((acc,cur)=>
 {


 acc= acc + cur;
 return  acc;

}, 0 );
console.log(output);






// FInd the sum of the element in the array using arrow function

// arr=[1,2,3,4,5,6]

// let output= (arr)=>
// {
// let sum=0;

// for (let i = 0; i < arr.length; i++)
//  {
//     sum = sum +arr[i];
    
// }
//  return sum;
// }

// console.log(output(arr));

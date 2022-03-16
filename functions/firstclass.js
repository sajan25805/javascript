// Functions statement      // Function declaration

function a ()

{
   
    console.log("a is called");

}

a();   

// Function Expression A function which is used as a value.

let b= function ()

{

    console.log("b is called");

}

b();

// Annonymous functions  A function which doesn't have its name or let say is annonymous
//   function ()
//   {

//   }


// Named functions expression: It is a function expression which consists of name 

let c= function d ()
{

    console.log("c is called");

}

c();

// Difference between arguments and parameters

  function e (param1, param2)
     // Parameters are indentifier inside the function which received the value we assign to the arguments

  {
    return param1*param2;

  }
  
  e(4,5)

//   The value which we pass inside a function are called arguments.


// First class function The function inside a function are reffered as a first class function.
// The ability to use a function inside a function is called first class function.
function f (param1)

{
   return function() {

   }

}
console.log(f());


  
  
// Arrow functions
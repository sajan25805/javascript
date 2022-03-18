let people = ["Ram", "Shyam", "Hari"];

length=people.length;

console.log(people);

console.log(length);

for(i=0;i<people.length;i++)

{

    console.log(people[i]);

}

// Array fill()= fills specified element within the array 
// syntax array.fill(value,start,end)

fruits=["Apple", "Banana", "Beetroot","kiwi"];

console.log(fruits.fill("Dragon fruit",0,1));

/* concat()= joins two or more arrays
syntax= array1.concat(array2,array3) */

animals1= ["Monkey", "Lion","Dog","Cat"];

animals2= ["Elephant","Tiger","Jackal", "Fox", "Wolf"];

animals3= ["Rhinoceros","Duck", "kiwi"];

console.log(animals1.concat(animals2, animals3));



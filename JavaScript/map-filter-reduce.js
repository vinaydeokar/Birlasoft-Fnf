//////////////////////////////////////   Map   /////////////////////////////////////////////////

const arr = [1,2,3,4];

//to double the each element of array
function double(x){
    return x*2;
}
const output = arr.map(double);
console.log(output);

//to get binary of the each element of array
function binary(x){
    return x.toString(2);
}
const output1 = arr.map(binary);
console.log(output1);

//or
// const output1 = arr.map(function binary(x){
//     return x.toString(2);
// });
// console.log(output1);

//or using arrow function
// const output2 = arr.map((x)=> x.toString(2));
// console.log(output2);

//////////////////////////////////////   Filter   /////////////////////////////////////////////////
//to filter out odd elements
function isOdd(x){
    return x%2;
}
const output3 = arr.filter(isOdd); //we can directly pass and define a function here itself as shown above in Map
console.log(output3);

//to filter elements > 2
function isGreater(x){
    return x>2;
}
const output4 = arr.filter(isGreater);
console.log(output4);

//or using arrow function
//const output5= arr.filter((x)=>x>2);
//console.log(output5);

//////////////////////////////////////   Reduce   /////////////////////////////////////////////////
const arr1= [1,2,3,4,5];
//Example 1
//Regular sum function
function findSum(arr){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum=sum+arr[i];
    }
    return sum;
}
console.log("sum:" +findSum(arr1));

//Using reduce
const output6=arr1.reduce(function(acc,curr){
    acc=acc+curr;
    return acc;
},0);
console.log(output6);

//Example 2
//Finding maximum no. using regular method
function findMax(arr){
    let max=0;
    for(let i=0;i<arr1.length;i++){
 \
        if(arr1[i]>max){
            max=arr1[i];
        }
    }
    return max;
}
console.log(findMax(arr1));
//Finding maximum no. using reduce function
const output7= arr1.reduce(function(max,curr){
    if(curr>max){
        max=curr;
    }
    return max;
},0)
console.log(output7);

///////////////////////////// tricky map, reduce, filter and their chaining  /////////////////////////////////
const users= [                  // suppose we got this list/array of objects from an API
    {firstName: "Vinay", lastName: "Deokar", age: 25},
    {firstName: "Sayali", lastName: "Deokar", age: 23},
    {firstName: "Sanjay", lastName: "Deokar", age: 50},
    {firstName: "Rekha", lastName: "Deokar", age: 50}
];
//Map-list of full names
const output8= users.map((x)=> x.firstName +" "+x.lastName);  // x will iterate through each object in the list
console.log(output8);

//Reduce- How many users are of a particular age
//output: {25: 1, 23: 1, 50:2}
const output11= users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age]= ++acc[curr.age];
    }else{
        acc[curr.age]=1;
    }
    return acc;
},{});  //Initial value of our accumulator will be this empty object
console.log(output11);

//chaining filter & map- first name of all the person whose age is < 30
const output9=users.filter((x)=> x.age<30).map((x)=>x.firstName);
console.log(output9);

//same upper functionality using reduce
const output10 = users.reduce(function(acc1, curr1){
    if (curr1.age < 30){
        acc1.push(curr1.firstName);
    }
    return acc1;
}, [ ])
console.log(output10);

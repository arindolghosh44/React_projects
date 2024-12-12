// Spread operator

// Copying data from one object to another
/*
var obj1 = {
    pid : 100,
    pname : 'TUHIN',
    phno : '1234567891',
}


var obj2 = {
    ...obj1,
    phno : '9876543211' ,
}

console.log(obj1);
console.log(obj2);


// Rest Parameter
function fn1(x, y,...data){
      console.log(x, y, data[1]);
}
fn1(10.20,30.40,67,90);
*/

// let vs var vs const
/*
function fn1 (){
    if(true){
        var a = 34;
        console.log(a);
    }
    console.log(a);
}
fn1();



function fn1 (){
    if(true){
        let a = 34;
        console.log(a);
    }
    console.log(a);
}
fn1();*/
/*
function fn1 (){
    if(true){
        const a = 34;
        console.log(a);
        a=67;
    }
}
fn1();*/



// Arrow function
/*
function fn3(){
    console.log("Normal Function")
}
fn3();*/

/*
 const fn3=(x,y)=>{console.log("Normal Function");


    console.log(x+y);
 };
 fn3(78,78);
*/

/*
 var arr=[100,200,300,400,500];
 arr.forEach(function(ele,index){
    console.log(ele, index);
})*/
/*
var arr=[100,200,300,400,500];

arr.forEach((ele,ind)=>
{
    console.log(ele, ind);
})
*/
// var arr=[100,200,300,400,500];

// var newArray2=arr.map((ele,ind)=>
// {
//     return ele*10;
    
// }
// );

// console.log(newArray2);
// newArray2.forEach((ele,ind)=>
//     {
//         console.log(ele, ind);
//     });

/*
var nwarr1 = arr.map(function(ele,idx){
    return ele*10;
    
})
var arr=[100,200,300,400,500];

var newArray3=arr.filter((ele,ind)=>
{
    return ele>200;
    
}
);

console.log(newArray3);
newArray3.forEach((ele,ind)=>
    {
        console.log(ele, ind);
    });
*/





    // Destructuring object
/*
var obj3 ={
    id : 1,
    name : 'anir',
    phno :'12344',
    email : 'abc@gmail.com'
}
var{name, email}=obj3;
console.log(name,email);*/
var promise=new Promise((resolve,reject)=>{
   var s1="tuhin";
   var s2="tuhin";
   if(s1==s2)
   {
    resolve();
   }
   else{
    reject();
   }


})
promise.then((res)=>{
 res="body equal";
 console.log(res);




})


.catch((error)=>{

error="both are not eqal";

console.log(error);



})
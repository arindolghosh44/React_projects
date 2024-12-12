// //NORMAL FUNCTION
// function fun(n){
//     console.log(n);
//     console.log (typeof(n));
// }
// fun('34');


//FUNCTIONwith return statement



// function tuhin(x, y){
//     return x+y+"binoy";
// }
// var j=tuhin(12, 34);
// console.log(j);


//[Function (anonymous)]


// function fg(na){
//     console.log(na);
//     na();
// }

// fg(function(){
//     var city = 'kol';
//     console.log(city);
// })



//higher order 


// function print(){
//     console.log(print);
// }
// function fn5(f){
//     console.log(f);
//     f();
// }
// fn5(print);


// it's return a function himself
// var auto = function fg(){
//     dist = "asdf";
//     console.log(dist);
// }
// console.log(auto);


var res = function (){
    var dist = "asdf";
    console.log(dist);
}
res();
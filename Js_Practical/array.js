var arr = [1, 2, 3,4, 5];
console.log(arr);
arr.push(6);
console.log(arr.length);
console.log(arr);
arr.pop();
console.log(arr);
console.log(arr.length);
arr.unshift(12);
console.log(arr);
arr.shift();
console.log(arr);
// remove the element from specific position in array

arr.splice(3,1);
console.log(arr);

//add the element into the specific position 
arr.splice(2,0,678);
console.log(arr);

// find range 
var nwArr = arr.slice(2,4);
console.log(nwArr);


arr.forEach(function(ele,index){
    console.log(ele, index);
})

// Map

var nwarr1 = arr.map(function(ele,idx){
    return ele*10;
    
})
console.log(nwarr1);

// Filter 

var nwarr2 = arr.filter(function(ele,idx){
    return ele>20;
    
})
console.log(nwarr2);
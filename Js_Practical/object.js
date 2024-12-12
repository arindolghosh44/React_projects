/*var product = {
    pid : '12',
    pname : 'Amlan',
    pqty : 2,
    price : 300,
}
console.log(product);
console.log(product.pname, product.price);

// adding attribute in existing object

product.company = 'samsung';
console.log(product);


// update existing value in  object
product.price= 2300;
console.log(product);

delete product.company;
console.log(product);

*/
// Nested Object

var employee = {
    pid : 100,
    pname : 'TUHIN',
    post : 'Manager',
    add :{
   plotno:"101",
   state:"berlin",
   pincode:"38494we",

   area:{

     p1:"BHUDWAN",
     dist:"Jaipur"

   }


    }
}
console.log(employee);
console.log(employee.pid,employee.add.area.p1);
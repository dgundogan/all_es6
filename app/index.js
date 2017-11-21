// array helper methods

var colors = ['red','blue','gree'];
///////////////////////
//forEach//////////////
///////////////////////

//classic way
/*for(var i=0; i < colors.length; i++){
  console.log(colors[i]);
}*/

//ie6
colors.forEach(function(color){
  //console.log(color);
})

//create an array of numbers
var numbers = [1,2,3,4,5];
//create a variable to hold the sum
var sum = 0;

function adder(number){
  sum += number;
}

//loop over the array , incrementing the sum variable
numbers.forEach(adder);
/*numbers.forEach(function(number){
  sum += number;
});*/
//print the sum variable
//console.log("sum:"+sum);


///////////////////
////map////////////
///////////////////

var doubledNumbers = [];
/*
for(var i=0; i<numbers.length; i++){
  doubledNumbers.push(numbers[i] * 2);
}
*/

var doubled = numbers.map(function(number){
  return number * 2;
})

//console.log(doubled);

var cars = [
  { model: 'Buick', price: 'CHEAP'},
  { model: 'Camaro', price: 'expensive'}
];

var prices = cars.map(function(car) {
  return car.price;
});

//console.log(prices);

////////////////////////////
//////find//////////////////
////////////////////////////
var products = [
  { name: 'cucumber', type: 'vegetable', quantity:1, price:1},
  { name: 'banana', type: 'fruit', quantity:10, price:15},
  { name: 'celery', type: 'vegetable', quantity:30, price:13},
  { name: 'orange', type: 'fruit', quantity:4, price:5}
];
/*
var filteredProducts = [];

for(var i= 0; i < products.length; i++){
  if(products[i].type == 'fruit'){
    filteredProducts.push(products[i]);
  }
}
*/
/*
products.filter(function(product){
  return product.type === 'fruit';
})
*/

//Type is 'vegetable', quantity is greater than 0, price is less than 10

var filteredProducts = products.filter(function(product){
  return product.type === 'vegetable'
      && product.quantity > 0
      && product.price < 10;
})

//console.log(filteredProducts);


var post = {id: 4, title: 'New Post'};
var comments = [
  {postId: 4, content: 'awesome post'},
  {postId: 3, content: 'it was ok'},
  {postId: 4, content: 'neat'}
];

function commentsForPost(post, comments){
  return comments.filter(function(comment){
    return comment.postId === post.id;
  })
}

//console.log(commentsForPost(post,comments));



var users = [
  {name: 'Jill'},
  {name: 'Alex'},
  {name: 'Bill'}
];
/*
var user;
for(var i=0; i < users.length; i++){
  if(users[i].name === 'Alex')
    user =users[i];
}
*/

var user = users.find(function(user){
    return user.name === 'Alex';
});

//console.log(user);


var computers = [
  {name: 'Apple', ram: 24},
  {name: 'Compaq', ram: 4},
  {name: 'Acer', ram: 32}
];
/*
var allComputerCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for(var i=0; i < computers.length; i++){
  var computer = computers[i];

  if(computer.ram < 16){
    allComputerCanRunProgram = false;
  } else {
    onlySomeComputersCanRunProgram = true;
  }
}
*/

var allComputerCanRunProgram = computers.every(function(computer){
  return computer.ram > 16;
});

var onlySomeComputersCanRunProgram = computers.some(function(computer){
  return computer.ram > 16;
});

//console.log("allComputerCanRunProgram: "+allComputerCanRunProgram);
//console.log("onlySomeComputersCanRunProgram: "+onlySomeComputersCanRunProgram);

//////////////////////////
/////reduce///////////////
//////////////////////////


var numbers = [10, 20, 30];
/*var sum = 0;

for(var i=0; i<numbers.length; i++){
  sum += numbers[i];
}
*/

var sum = numbers.reduce(function(sum, number) {
    return sum + number;
},0);

//console.log(sum);


var primaryColors = [
  {color: 'red'},
  {color: 'yellow'},
  {color: 'blue'}
];

var newPrimatyColors = primaryColors.reduce(function(previous, primaryColor){
    if(primaryColor.color.length>4)
      previous.push(primaryColor.color);

    return previous;
}, []);


//console.log(newPrimatyColors);



function balancedParens(string){
  return !string.split("").reduce(function(previous,char){
    if(previous < 0) {return previous;}
    if(char=="("){ return ++previous;}
    if(char==")"){ return --previous;}

    return previous;
  },0);
}


//console.log(balancedParens("((())"));




////////////////////////////////
///////arrow function///////////
////////////////////////////////

const add =  (a,b) => {
  return a+b;
}

//console.log(add(1,2));


function addNumbers(...numbers){
  return numbers.reduce((sum,number)=>{
    return sum + number;
  },0);
}


//console.log(addNumbers(1,2,3,4,5,6,7,8,9,10));



function validateShoppingList(...items){
  if(items.indexOf('milk')<0){
    return ['milk',...items];
  }

    return items;
}


//console.log(validateShoppingList('orange','bread','eggs','milk'));

//////////////////////
///////class//////////
//////////////////////
function Car(options){
  this.title = options.title;
}

//method of Class
Car.prototype.drive = function() {
  return 'vroom';
}
//create constructor with new
const car = new Car({title: "Focus"});

//console.log(car.drive());

//inheritance
function Toyota(options){
  Car.call(this,options);
  this.color = options.color;
}


//console.log(toyota);

//create inheritance method
Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor  = Toyota;

Toyota.prototype.honk = function(){
  return "beep";
}


const toyota = new Toyota({color: "red", title:"Daily"})

//console.log(toyota.drive());
//console.log(toyota.honk());


//////////////////
////iterator//////
//////////////////

const colorxs = ['red','green','blue'];

for(let color of colorxs){
  //console.log(color);
}


///////////////////
/////generators////
///////////////////




///////////////////
/////promise///////
///////////////////

promise = new Promise((resolve,reject)=>{
  var request = new XHTMLRequest()
  //make request
  request.onload = () => {
    reject();
  }
});

promise
    .then(()=> console.log("finally finished"))
    .then(()=>console.log("i was also ran!!!"))
    .catch(()=>console.log("uh oh!!"));

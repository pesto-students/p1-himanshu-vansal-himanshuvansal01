Exercise 3.1

Create a memoize function that remembers previous inputs and stores them in cache so that it won’t have to compute the same inputs more than once.
The function will take an unspecified number of integer inputs and a reducer method.


const memoize = (fn) => {
  let cache = {};
  let n = fn;
  return (...args) => {
      let a = args[0];
      let b = args[1];

    if (a === cache[a]) {
        if(b === cache[b]){
            console.log("Fetching From cache")
            return cache[a] + cache[b];
        }
    }
    else {
      let number1 = a;
      let number2 = b;
      cache[a] = number1;
      cache[b] = number2
      console.log(cache[a] + cache[b])
      return cache[a] + cache[b];
    }
  }
}

function add(a,b)
{
    return a+b
}
const memoizeAdd=memoize(add);//then calling...
console.time("First call");
memoizeAdd(100,100);
console.timeEnd("First call");

console.time("First call");
memoizeAdd(100,100);
console.timeEnd("First call");





Exercise 3.2

Create 3 simple functions where call, bind and apply are used.
The intention of this exercise is to understand how they work and their differences.

Bind:

function sum(a,b){
    return this.a * this.b;
}


const sum1 = sum.bind(
    {
        a: 30,
        b: 40
    }
    )
console.log(sum1())

Call:

const fullName = {
    firstName: 'Himanshu',
    lastName: 'vansal',
    name: function(){
        return this.firstName + " last name is: " + this.lastName;
    }
}

const Person = {
    firstName: 'Ankit',
    lastName: 'Rawat'
}


console.log(fullName.name.call(Person))

Apply:

const fullName = {
    firstName: 'Himanshu',
    lastName: 'vansal',
    name: function(city, country){
        return this.firstName + " last name is " + this.lastName + " and he live in " + city;
    }
}

const Person = {
    firstName: 'Ankit',
    lastName: 'Rawat'

}



console.log(fullName.name.apply(Person, ["Delhi"] ))
console.log(Math.max.apply(null, [1.2,3,4,5,6,7]))






Excercise 3.3

What is the output of the below problem and why:[30min]

function createIncrement()

function createIncrement()
{
    let count=0;
    function increment()
    {

         count++;


    }
    let message=`Count is${count}`;

    function log()
    {
        console.log(message);

    }
    return[increment,log];

}
const[increment,log] = createIncrement();
increment();
increment();
increment();
log();// What is logged?

Answer:
Logged message is Count is 0, because createIncrement is called first and count is initilzed to 0,
where as if message has been inside the log function than the result would be `Count is 3`.


Excercise 3.4:
Refactor the above stack implementation, using the concept of closure, such that there is noway to access items array outside of createStack() function scope: (2-3 hours)functioncreateStack() {return{items:[],push(item) {this.items.push(item);},pop() {returnthis.items.pop();}};}conststack=createStack();stack.push(10);stack.push(5);stack.pop();// => 5stack.items;// => [10]stack.items= [10,100,1000];// Encapsulationbroken!functioncreateStack() {// Write your code here...}conststack=createStack();stack.push(10);stack.push(5);stack.pop();// => 5stack.items;// => undefined



function createStack() {
    // Write your code here...}


    const array  = [];

    return {
        items : array,
        push : function(item){
             this.items.push(item);
         },
        pop : function(item){
            return this.items.pop();
            }
            }
    }



    const stack=createStack();
    stack.push(10);
    stack.push(5);
    stack.pop(); //=>5
    console.log(stack.items);// => undefined




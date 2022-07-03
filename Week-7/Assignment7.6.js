class queue{
    constructor(){
       this.s1 = [];
       this.s2 = [];
    }
    push(value){
       this.s1.push(value);
    }
    pop(){
       let ans;
       for(let count = 0;count <= this.s1.length; count++){
           this.s2.push(this.s1.pop());   
       }
       ans = this.s2.pop();
       for(let count2 = 0; count2 < this.s2.length; count2++){
           this.s1.push(this.s2.pop());}
       return ans;
    }}

let queue1 = new queue();
queue1.push(1);
queue1.push(2);
queue1.push(3);
queue1.pop();
console.log("pop element:" + queue1.pop());
queue1.push(5);
console.log("Queue with 2 stacks:", queue1);





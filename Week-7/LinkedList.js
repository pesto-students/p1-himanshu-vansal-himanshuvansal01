class Node {

    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {

    constructor(){
        this.head = null;
        this.size = 0;
    }
    insertFirst(data){
        this.head = new Node(data, this.head);
        this.size++;
    }
    insertLast(data){
        let node = new Node(data);
        let current;

        if(!this.head){
            this.head = node;
        }else{
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
        //PrintFirst
        printListData(){
            let currentValue = this.head;
            let result = [];
            while(currentValue){
                result.push(currentValue.data);
                currentValue = currentValue.next;
            }
            console.log(result);
            return result;
        }

    reverse(){
        let current = this.head;
        let previous = null;
        let next = null;

        let result = [];

        if(!current){
            current = this.head;
        }
        while(current !== null){
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        
        while(previous){
            result.push(previous.data)
            previous = previous.next; 
 
        }
        this.size--;
        console.log(result);
        return result;
    }
}

const list = new LinkedList();


list.insertLast(1);
list.insertLast(2);
list.insertLast(3);
list.insertFirst(5);
list.insertFirst(6); 

list.printListData(); // [6,5,1,2,3]

list.reverse(); // [3,2,1,5,6]
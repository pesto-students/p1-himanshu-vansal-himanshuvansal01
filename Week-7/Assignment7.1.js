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


        //PrintFirst
        printListData(){
            let currentValue = this.head;
            while(currentValue){
                console.log(currentValue.data);
                currentValue = currentValue.next;
            }
        }

    reverse(){

        let current = this.head;
        let previous = null;
        let next = null;

        if(!current){
            current = this.head;
        }


        while(current !== null){
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;

        }

        return previous;


    }

}

const list = new LinkedList();

list.insertFirst(10);
list.insertFirst(20);
list.insertFirst(30);
list.insertFirst(40);


list.printListData();

list.reverse();
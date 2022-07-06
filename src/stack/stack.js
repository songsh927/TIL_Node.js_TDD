class Stack{
    constructor(){
        this.arr = [];
        this.length = 0;
    }
    
    push(data){
        this.arr.push(data);
        this.length++;
    }

    pop(){
        if(this.length == 0){
            return 'stack is empty! push first'
        }
        this.arr.pop(this.length-1);
    }

    print(){
        return this.arr;
    }

    size(){
        return this.arr.length;
    }

}

module.exports = Stack;
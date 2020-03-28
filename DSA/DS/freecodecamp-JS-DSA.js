//Stacks
//We can use array as a stack in js
//Function: push, pop, peek, length
/*
var letters = []; //this is our stack
var word = "racecar";
var rword = "";

//put letters of word into stack
for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
}
//console.log(letters);

//pop of the stack in reverse order
for (let i = 0; i < word.length; i++) {
    rword = rword + letters.pop();
}
//console.log(rword);

if (rword === word) {
    console.log('palindrome');
} else {
    console.log('not palindrom');
}*/
//UNderstanding stack better injs

//Creates a stack
/*var Stack = function() {
    this.count = 0;
    this.storage = {};

    //Adds a value at the end of the stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    //Removes and returns the value at the end of the stack
    this.pop = function() {
        if(this.count === 0) {
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = function() {
        return this.count;
    }

    //returns the value at the end of the stack
    this.peek = function() {
        return this.storage[this.count-1];
    }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.storage);
myStack.push('amey');
myStack.push('aruna');
console.log(myStack.storage);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());*/

//Sets

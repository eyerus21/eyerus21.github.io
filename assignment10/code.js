// Q2:- Define a filter function on the String object
String.prototype.filter = function(...bannedwords){
    return bannedwords.reduce((acc,e)=> {
        return acc = acc.indexOf(e)>0 ? acc.replace(e,""):acc},this);   
};


// Q2:- Write a BubbleSort algorithm on the Array object
Array.prototype.bubbleSort = function(){
    for(var i = 0; i < this.length; i++){        
        for(var j = 0; j < ( this.length - i -1 ); j++){
          if(this[j] > this[j+1]){
            var temp = this[j];
            this[j] = this[j + 1];
            this[j+1] = temp;
          }
        }
      } 
    return this; 
};

// Q3:- create the class Teacher and a method teach
var Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

// TODO: create the class Teacher and a method teach

var Teacher = function() {};

Teacher.prototype = new Person();

Teacher.prototype.teach = function(subject){
    return this.name + " is now teaching " + subject;
}

var him = new Teacher();

him.initialize("Adam", 45);


/* ===== Loggin to the Console =======  */
console.log("/*=======  Logging to the Console  ======*/");

console.log("Q1:- This is not and never don't nice house".filter("not ", 'never ', 'don\'t '));

console.log("Q2:- Sorted array = "+[6,4,0, 3,-2,1].bubbleSort()); //[-2, 0, 1, 3, 4, 6]

console.log("Q3:- "+him.teach("Inheritance"));
Footer

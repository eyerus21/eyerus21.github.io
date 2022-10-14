// chai has a lot of stuff, let's make assert global

let assert = chai.assert;

//Q1: Test the filter() method
describe("Removing banned words from sentence",()=>{
    it("should filter out all banned words",()=>{
        assert.deepEqual("This is not and never don't nice house".filter("not ", 'never ', 'don\'t '), "This is and nice house");
    });
});

//Q2: Test the bubbleSort() method
describe("Sort an array using the BubbleSort algorithm",()=>{
    it("should sort the number elements in the array",()=>{
        assert.deepEqual([6,4,0, 3,-2,1].bubbleSort(), [-2, 0, 1, 3, 4, 6]);
    });
});

//Q3: Test the teach() method of Teacher's object
describe("Display 'Adam is now teaching Inheritance' from teacher's object",()=>{
    var him = new Teacher();
    him.initialize("Adam", 45);
    it("should pass subject as @param and display teacher's name and what he is teaching",()=>{
        assert.deepEqual(him.teach("Inheritance"), "Adam is now teaching Inheritance");
    });
});
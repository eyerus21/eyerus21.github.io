/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }
  
  /*Q1: Define a function max() that takes two numbers as arguments and 
        returns the largest of them. Use the if-then-else construct available in Javascript.
    Ans:-> max returns the maximum of 2 arguments 
    */
  function max(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    };
  }
  console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
  
  /* Q2: Define a function maxOfThree() that takes three numbers as arguments 
         and returns the largest of them.
      -> maxOfThree takes 3 numbers as arguments and returns the largest 
    */
  function maxOfThree(a, b, c) {
    return max(max(a, b), c);
  
  }
 /* Q3: Write a function isVowel() that takes a character (i.e. a string of length 1) 
        and returns true if it is a vowel, false otherwise. 
    -> function checkVowel takes one string argument and returns boolean
    */
  const checkVowel = vowel =>{
    if(vowel == null || vowel == undefined) return false;
    if(vowel.length > 1) return false;

    if(vowel === 'a'|| vowel === 'A'|| vowel === 'e'||vowel === 'E'|| 
            vowel === 'o'|| vowel === 'O'|| vowel === 'u'||vowel === 'U'||
            vowel === 'v'|| vowel === 'V') return true;
    else{
        return false;
    }
  }
 /* Q4. Define a function sum() and a function multiply() that sums and multiplies (respectively)
        all the numbers in an array of numbers. 
        For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) 
        should return 24.
      a) Sum of elements in array: 
      -> function sum takes an array as its rguments and returns the sum of the elements
    */
  const sum = (arr) => {
    return arr.reduce((summation, elem) => summation + elem,0);
  };

  /* Q4. b. Product of elements in array 
    -> function product takes array as its arg and returns product of all the elements
  */
  const product = (arr) => {
    return arr.reduce((product, elem) => product * elem,1);
  };

  /* Q5: Define a function reverse() that computes the reversal of a string. 
        For example, reverse("jag testar") should return the string "ratset gaj".
      -> function reverse takes string as its arg and returns reversed form it
      */
  const reverse = text => {
      let reversed='';
      let size = text.length;

      for(let i=size-1; i>=0; i--){
        reversed += text[i];
      }
      return reversed;
  };
    const findLongestWord = arrayOfWords => {
      if(arrayOfWords==null || arrayOfWords.length===0 || arrayOfWords==undefined)
        return 0;

      let lengthOflongestWord = arrayOfWords[0].length;
      arrayOfWords.forEach(element => {
        if(element.length > lengthOflongestWord){
          lengthOflongestWord = element.length;
        }
      });
      return lengthOflongestWord;
    };

    const filterLongWords = (words,key) =>{
      const filteredArray = words.filter((elt, i, arr) =>{
          return elt.length > key;
        });
        return filteredArray;
    };


    const multiplyBy10 = (list,key) =>{
      const result = list.map(function(elem, i, array) {
            return elem * key;
          });
          return result;
    }

    const elementsEqualTo = (list,key) =>{
        const equalTo = list.filter(function(elem, i, array) {
          return elem === key;
        });
        return equalTo;
    }


    const productOfAllElements = (list) =>{
      const productAll = list.reduce((product, elt) => {
        return product * elt;
        },1);
      return productAll;
    };


  console.log(`Expected output of maxOfThree(5,4,44) is 44  ${myFunctionTest(44, maxOfThree(5, 4, 44))}`);
  console.log(`Expected output of maxOfThree(55,4,44) is 55  ${ myFunctionTest(55, maxOfThree(55, 4, 44))}`);  
  console.log(`Expected output of maxOfThree(55,4,44) is 55  ${myFunctionTest( 4, maxOfThree(55, 4, 44))}`);

  console.log(`Expected output of checkVowel('a') is true  ${ myFunctionTest(true, checkVowel('a'))}`);
  console.log(`Expected output of checkVowel('b') is false  ${ myFunctionTest(false, checkVowel('b'))}`);

  console.log(`Expected output of product([1,2,3,4,5]) is 120  ${ myFunctionTest(120, product([1,2,3,4,5]))}`);
  console.log(`Expected output of product([1,2,3,4,5,6]) is 120  ${ myFunctionTest(520, product([1,2,3,4,5,6]))}`);

  console.log(`Expected output of reverse('Java Script') is <tpircS avaJ> ${myFunctionTest('tpircS avaJ', reverse('Java Script'))}`);
  console.log(`Expected output of reverse('Functions in JS') is <sj ni snoitcnuf>  ${ myFunctionTest('<sj ni snoitcnuf>', reverse('Functions in JS'))}`);
  console.log(`Expected output of findLongestWord(['ab','abc','abcd','abcde']) is 5 ${myFunctionTest(5, findLongestWord(['ab','abc','abcd','abcde']))}`);
  console.log(`Expected output of findLongestWord(['ab11','abc112278','abcd34','abcde52']) is 7  ${ myFunctionTest(7, findLongestWord(['ab11','abc112278','abcd34','abcde52']))}`);
  console.log(`Expected output of filterLongWords(['ab','abc','abcd','abcde']) is ['abcd','abcde'] ${myFunctionTest('abcd,abcde', filterLongWords(['ab','abc','abcd','abcde'], 3).toString())}`);
  console.log(`Expected output of filterLongWords(['ab','abc1','abcd1','abcde1']) is ['abc1','abcd1','abcde1'] ${myFunctionTest(['abcd1','abcde1'], filterLongWords(['ab','abc1','abcd1','abcde1'], 3))}`);
  console.log(`Expected output of multiplyBy10([1,3,5,3,3],10) is [10,30,50,30,30] ${myFunctionTest([10,30,50,30,30].toString(), multiplyBy10([1,3,5,3,3],10).toString())}`);
  console.log(`Expected output of multiplyBy10([1,3,5,3,3],10) is [1,30,50,30,30] ${myFunctionTest([1,30,50,30,30], multiplyBy10([1,3,5,3,3],10))}`);
  console.log(`Expected output of elementsEqualTo([1,3,5,3,3],3) is [3,3,3] ${myFunctionTest([3,3,3].toString(), elementsEqualTo([1,3,5,3,3],3).toString())}`);
  console.log(`Expected output of elementsEqualTo([1,3,5,3,3],3) is [5,3,1] ${myFunctionTest([5,3,1], elementsEqualTo([1,3,5,3,3],3))}`);
  console.log(`Expected output of productOfAllElements([1,3,5,3,3]) is [135] ${myFunctionTest(135, productOfAllElements([1,3,5,3,3]))}`);
  console.log(`Expected output of productOfAllElements([1,3,5,3,3]) is [140] ${myFunctionTest(140, productOfAllElements([1,3,5,3,3]))}`);

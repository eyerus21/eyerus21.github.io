const multiply=(arr)=>{    
    return arr.reduce((mult,element)=>mult*element,1);;
}
const sum=(arr)=>{
    return arr.reduce((sum,element)=>sum+element,0);
}
const reverse=(str)=>{
    return str.split('').reverse().join('');
}

const filterLongWords = (words,key) =>{
    const filteredArray = words.filter((elt, i, arr) =>{
        return elt.length > key;
      });
      return filteredArray;
  };
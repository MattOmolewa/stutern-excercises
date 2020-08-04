
//QUESTION 1

var nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
        primeNumbers: [2,3,5,7,11],
        fibonnaci: [1,1,2,3,5,8,13]
    },
    addSnack: function(snack){
        this.snacks.push(snack);
        return this;
    }
  }
};

//Using a for loop, console.log all of the numbers in the primeNumbers array.
for(var i=0; i<nestedData.innerData.numberData.primeNumbers.length; i++){
    console.log(nestedData.innerData.numberData.primeNumbers[i]);
}

//Using a for loop, console.log all of the even Fibonnaci numbers.
var fibArray = nestedData.innerData.numberData.fibonnaci

for (var i = 0; i < fibArray.length; i++) {
    if(fibArray[i] % 2 === 0){
        console.log(fibArray[i])
    }
}

//Console.log the value "second" inside the order array.
console.log(nestedData.innerData.order[1])


//Invoke the addSnack function and add the snack "chocolate".
nestedData.innerData.addSnack("Chocolate")

       /*The keyword "this" refers to where a value lives in(context) or what object it lives in. In, this exercise the 
       "this" returned in the addSnack method refers to the innerData object which is the object context where addSnack lives.
       */

// QUESTION 2

var nestedObject = {
  speakers: [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 8000000,
          },
        },
      },
    },
    languages: {
      spanish: {
        hello: "Hola",
      },
      french: {
        hello: "Bonjour",
      },
    },
  },
};

addSpeaker = (name) => {
  nestedObject.speakers.push({ name: name });
};
addSpeaker("mary");

addLanguages = (lang, helloInLang) => {
  nestedObject.data.languages[lang] = { hello: helloInLang };
};
addLanguages("pidgin", "howfar");

addCountry = (countryInEuropeName, capital, population) => {
  nestedObject.data.continents.europe.countries[countryInEuropeName] = {
    capital: capital,
    population: population,
  };
};
addCountry("poland", "warsaw", 38000000);

//QUESTION 3

function rotate(arr,count){
  for(let i =0; i < count; i+=1){
    arr.unshift(arr.pop());
  };
  return arr;
}
console.log(rotate([1,2,3],2));


//QUESTION 4

function makeGrid(row, column){
let arr = []

for (let i = 0; i < row; i++){
  let subarray = []
  
  for (let j = 0; j < column; j++){
    if(subarray[j - 1] == 'X'){
      subarray.push('O')
    }else{
      subarray.push('X')
    }  
  }
  arr.push(subarray)
}
  console.log(arr)
}

makeGrid(3,4)
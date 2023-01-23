//1.Solving problems using array functions on the rest countries' data (https://restcountries.com/v3.1/all).
//a.Get all the countries from the Asia continent /region using the Filter function
  
let request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v2/all");

request.send();

request.onload=function(){
let countriesData=JSON.parse(request.response);
let Asia = countriesData .filter((element) =>{
    if(element.region === "Asia"){
        return element.name;
    }
})
  console.log(Asia);
}

//b.Get all the countries with a population of less than 2 lakhs using Filter function

let request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v2/all");

request.send();

request.onload=function(){
let populationData=JSON.parse(request.response);
let population = populationData .filter((element) =>{

    return element.population < 200000;
      
})
  console.log(population);
}

//c.Print the following details name, capital, flag using forEach function

let request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v2/all");

request.send();

request.onload=function(){
let countriesData=JSON.parse(request.response);

 countriesData.forEach((element )=> {
    
    console.log (element.name,element.capital,element.flag);
})
 
}

//d.Print the total population of countries using reduce function

let request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v2/all");

request.send();

request.onload = function(){
    let countriesData = JSON.parse(request.response);
    let population = countriesData.reduce((acc , element) => acc + element.population ,0);

    console.log(population);
}

//e.Print the country which uses US Dollars as currency.

let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload = function () {
       
        let Dollar=JSON.parse(request.response);
   let currency = Dollar.filter((element) => {
     for(let key in element.currencies){
        if(element.currencies[key].code === "USD"){
            return element;
        }
     }
   })
        console.log(currency);
    }
  
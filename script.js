var arr = [12,13,14,15]
var res = arr.map((ele)=>ele*2)
console.log(res);

var arr1 =["apple", "orange","mangoe"] 
var res1 = arr1.map((ele)=>ele+"s")
console.log(res1);

//xmlhttp request for map (print the names)
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
 request.onload=function(){
    var data = request.response
    var result = JSON.parse(data)
     var res2=result.map((element)=>{console.log(element.name.common)})
    
    }
  
 //filter function :-
 var arr= [12,13,14,15]
  var res= arr.filter((ele)=>ele%2===0)
  console.log(res);   


//example using map and filter function.
//xmlhttp request(find the countries population which is less than 3 lakhs)
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
 request.onload=function(){
    var data = request.response
    var result = JSON.parse(data)
     var res = result.filter((ele)=>ele.population<300000)
     //to display the filtered result countries
     var res1 = res.map((ele)=>`${ele.population}: ${ele.name.common}`)
     console.log(res1)
    }

    //using map to get two values
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
 request.onload=function(){
    var data = request.response
    var result = JSON.parse(data)
     var res = result.map((ele)=>`${ele.name.common} : ${ele.region} : ${ele.population}`);
     console.log(res);
          
    }

//reduce function using xml httprequest
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
 request.onload=function(){
    var data = request.response
    var result = JSON.parse(data)
    var res = result.reduce((acc,cv)=>acc+cv.population,0)
    console.log(res)
    }
   
//foreach xmlhttprequest
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
 request.onload=function(){
    var data = request.response
    var result = JSON.parse(data)
    var res = result.forEach((ele)=>{console.log(`${ele.name.common} ${ele.capital} ${ele.region}`)})
    }

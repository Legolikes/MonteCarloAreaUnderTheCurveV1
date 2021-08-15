

function inputFunction(x){
var mainFunction = x*(Math.sin(x));
x = mainFunction;
  
 return x;
}

var startPoint = 0;
var endPoint = 10;

var bottomPoint = -10;
var topPoint = 10;

// use "inputFunction(endPoint);" for topPoint when: as x -> infinity, f(x) -> infinity

var randomX = 0;
var randomY = 0;

var pointsUnderCurve = 0;

var randomPointsAmount = 10000000;

// topPoint can also just be set to a high number, ex: 100

for(let i = 0; i < randomPointsAmount; i++){
  
randomX = (Math.random()*(endPoint-startPoint))+startPoint;
randomY = (Math.random()*(topPoint-bottomPoint))+bottomPoint;

//console.log(randomX);
//console.log(randomY);
 if(randomY > 0){
 
  if(randomY < inputFunction(randomX)){
  pointsUnderCurve++;
  //console.log("topPoint!");
  }
 
 }
 
 
 if(randomY < 0){
   
  if(randomY > inputFunction(randomX)){
  pointsUnderCurve--;
  //console.log("bottomPoint!");
  }
  
 }
  
}

var areaUnderCurve = (pointsUnderCurve / randomPointsAmount)*(endPoint - startPoint)*(topPoint - bottomPoint);

console.log("Your final answer:");
console.log(areaUnderCurve);

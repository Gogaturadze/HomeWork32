function convert(){
    let inputNumber=document.getElementById("inputNumber").value
    let uppercase=inputNumber.toUpperCase()

    let arabNumber=document.getElementById("arabNumber")
    arabNumber.innerText=romanToInt(uppercase)   
}

function romanToInt(rom) {
const romanNumber={
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

let result=0;
let preValue=0;

for(let i=rom.length-1;i>=0; i--){
const curentNumber=romanNumber[rom[i]];

if(curentNumber<preValue){
    result -=curentNumber

}
else{
    result +=curentNumber   
}
preValue=curentNumber
}
   
return result
}



/////////
const s = "anagram";
const t = "nagaram";


function isAnagram(s, t) {
let wordOne=s.split("").sort().join("")
let wordTwo=t.split("").sort().join("")

if(wordOne===wordTwo){
    return true
}else{
   return false
}
}

console.log(isAnagram(s, t));
//////
function fizzBuzz(n){
    let arrayOfNumbers=[]
    for(let i=1;i<=n;i++){
        if(i%3==0 & i%5==0){
            arrayOfNumbers.push("fizzBuzz")  
            
        }else if(i%3==0){
            arrayOfNumbers.push("fizz")   
        }
        else if(i%5==0){
            arrayOfNumbers.push("buzz")
        }
        else{
            arrayOfNumbers.push(i)
        }


    }
return arrayOfNumbers
}

console.log(fizzBuzz(15))
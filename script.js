let btn = document.querySelector('.btn');
btn.addEventListener('click', function generate () {
    document.getElementById('randomNumbers').innerHTML = "";
    document.getElementById('max').innerHTML = "";
    document.getElementById('min').innerHTML = "";
    document.getElementById('average').innerHTML = "";
    document.getElementById('sum').innerHTML = "";
    document.getElementById('multiply').innerHTML = "";
    
    let numbersArr = [];

    function randomizer (min, max){
    num = Math.round(min - 0.5 + Math.random() * (max - min + 1));
    return num;
    }

    for(cycle = 0;cycle=10;cycle++)  {
    randomizer(-10 , 10);
    numbersArr.push(num);
    } 
    document.getElementById('randomNumbers').innerHTML += numbersArr;
    


let min = Math.min(...numbersArr);
document.getElementById('min').innerHTML += min;

let max = Math.max(...numbersArr);
document.getElementById('max').innerHTML += max;

let sum = numbersArr.reduce((previousNumber, currentNumber) => previousNumber + currentNumber);

document.getElementById('sum').innerHTML += sum;
document.getElementById('average').innerHTML += sum/10;

let multiply = numbersArr.reduce((previousNumber, currentNumber) => previousNumber * currentNumber, 1);
document.getElementById('multiply').innerHTML += multiply;
})
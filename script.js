let btn = document.querySelector('.btn');
btn.addEventListener('click', function generate () {
    document.getElementById('randomNumbers').innerHTML = "";
    document.getElementById('max').innerHTML = "";
    document.getElementById('min').innerHTML = "";
    document.getElementById('average').innerHTML = "";
    document.getElementById('sum').innerHTML = "";
    document.getElementById('multiply').innerHTML = "";
    
    let numbersArr = [];
    for (let cycle = 0; cycle < 10; cycle++ ){
        numbersArr.push(Math.floor(Math.random() * (10 - -10 + 1)) + -10);
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

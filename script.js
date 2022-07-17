let btn = document.querySelector('.btn');
btn.addEventListener('click', function generate () {
    document.getElementById('randomNumbers').innerHTML = "";
    document.getElementById('max').innerHTML = "";
    document.getElementById('min').innerHTML = "";
    document.getElementById('average').innerHTML = "";
    document.getElementById('sum').innerHTML = "";
    document.getElementById('multiply').innerHTML = "";
    let numbersArr = [];

    for (let i = -10; i<=10; i++) {
    numbersArr.push(i);
    console.log(numbersArr);
    }
    for(cycle = 0;cycle<=10;cycle++){
    numbersArr.splice(Math.random()*numbersArr.length, 1)[0];
    }
    document.getElementById('randomNumbers').innerHTML += numbersArr;

let min = Math.min.apply(null, numbersArr);
document.getElementById('min').innerHTML += min;

let max = Math.max.apply(null, numbersArr);
document.getElementById('max').innerHTML += max;

let sum = 0;
for(let i = 0; i < numbersArr.length; i++){
        sum += numbersArr[i];
        }
document.getElementById('sum').innerHTML += sum;
document.getElementById('average').innerHTML += sum/10;

let multiply=1;
for(let i = 0; i < numbersArr.length; i++){
    multiply *= numbersArr[i];
    }
document.getElementById('multiply').innerHTML += multiply;
})
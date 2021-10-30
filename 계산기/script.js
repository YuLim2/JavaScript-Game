var numOne = '';
var operator = '';
var numTwo = '';
var button = [];
var $operator = document.querySelector('#operator');
var $result = document.querySelector('#result');

var onClickNumber = (event) => {  //숫자를 눌렀을 때
    if(operator){
        numTwo += event.target.textContent;     //event.target.textContent 태그 안에 내용을 가져옴
    } else{
        numOne += event.target.textContent;
    }
    $result.value += event.target.textContent;
};

var onClickOperator = (op) => () => {   //연산을 눌렀을 때
    if(numOne){
        operator = op;  
        $operator.value = op;   //operator.value == operator
    } else {
        alert('숫자를 입력하고 눌러라!!!');
    }
};

document.querySelector('#num-0').addEventListener('click', onClickNumber);
document.querySelector('#num-1').addEventListener('click', onClickNumber);
document.querySelector('#num-2').addEventListener('click', onClickNumber);
document.querySelector('#num-3').addEventListener('click', onClickNumber);
document.querySelector('#num-4').addEventListener('click', onClickNumber);
document.querySelector('#num-5').addEventListener('click', onClickNumber);
document.querySelector('#num-6').addEventListener('click', onClickNumber);
document.querySelector('#num-7').addEventListener('click', onClickNumber);
document.querySelector('#num-8').addEventListener('click', onClickNumber);
document.querySelector('#num-9').addEventListener('click', onClickNumber);
document.querySelector('#plus').addEventListener('click', onClickOperator('+'));
document.querySelector('#minus').addEventListener('click', onClickOperator('-'));
document.querySelector('#divide').addEventListener('click', onClickOperator('/'));
document.querySelector('#multiply').addEventListener('click', onClickOperator('*'));
document.querySelector('#calculate').addEventListener('click', () => {});
document.querySelector('#clear').addEventListener('click', () => {});

var numOne = '';
var operator = '';
var numTwo = '';
var $operator = document.querySelector('#operator');
var $result = document.querySelector('#result');
var starOoperator = () => {
    if(numTwo){
        $result.value = eval(numOne + operator + numTwo);   //eval함수는 보안성으로는 약함
        // 위의 문장에서 eval함수를 쓰지 않을 때 방법
        // switch(operator){
        //     case '+':   //+는 문자열을 더하는 의미로도 적용되니 정수형 변환 후 계산
        //         $result.value = parseInt(numOne) + parseInt(numTwo);
        //         break;
        //     case '-':
        //          $result.value = numOne - numTwo;
        //         break;
        //     case '*':
        //         $result.value = numOne * numTwo;
        //         break;
        //     case '/':
        //         $result.value = numOne / numTwo;
        //         break;
        //     default:
        //         break;
        // }
    } else{
        alert("입력을 해야 계산을 하던가 하지...")
    }
};
    var onClickNumber = (event) => {  //숫자를 눌렀을 때, 중첩if문 사용 X
    if(!operator){
        numOne += event.target.textContent;     //event.target.textContent 태그 안에 내용을 가져옴
        $result.value += event.target.textContent;
        return;
    }
    if(!numTwo){    //아래로는 operator가 존재하는 상황, numTwo를 입력해야 하는 상황
        $result.value = ' ';
    }
    // if(numTwo){     //연이어 계산을 구현하려고 했지만 결과값에서 오류가 생김
    //    numOne = eval(numOne + operator + numTwo);
    // }
    numTwo += event.target.textContent;
    $result.value += event.target.textContent;
};

var onClickOperator = (op) => () => {   //연산을 눌렀을 때
    if(numOne){
        operator = op;  
        $operator.value = op;   //operator.value == operator
    } else if(numTwo){
        operator = op;  
        $operator.value = op;   //operator.value == operator
    }
    else {
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
document.querySelector('#calculate').addEventListener('click', starOoperator);
document.querySelector('#clear').addEventListener('click', () => {  //초기화    하지만 초기화 후 실행이 안 됨
    numOne = ' ';
    numTwo = ' ';
    operator = ' ';
    $operator.value = ' ';
    $result.value = ' ';
    //모든 값을 리셋했지만 클리어 버튼 누를 때 다시 연산이 안 됨
});
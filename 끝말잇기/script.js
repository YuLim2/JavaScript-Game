
    var number = Number(prompt("몇 명이 참가함?")); // number형식으로 바꿈
        var yesOrNo = confirm("참가 인원 " + number + "명 맞음?")
        var $button = document.querySelector('button');
        var $input = document.querySelector('input');
        var $word = document.querySelector('#word');
        var $order = document.querySelector('#order');
        var word;   //제시어
        var newWord;    //새 단어
        var data = [];  //값을 저장할 배열 생성

        var onClickButton = () => { // onClickButton이라는 함수 생성
            if(!word || word[word.length - 1] === newWord[0]){  //word에 값이 없으면
                if (data.includes(word) != true){ //
                    alert("이거 햇자나");
                    $input.value = '';
                    $input.focus();
                }
                word = newWord;
                console.log(data.includes(word));
                data.push(word);
                console.log(data);
                $word.textContent = word;   //화면에 표시
                var order = Number($order.textContent);
                if(order + 1 > number){
                    $order.textContent = 1;
                } else{
                    $order.textContent = order + 1;
                }
                $input.value = '';
                $input.focus();
            }else{
                    alert("틀렸는뎀 ㅋ?");
                    $input.value = '';
                    $input.focus();
                }
        };
        var onInput = (event) => {  // onInput이라는 함수 생성
            newWord = event.target.value;   //입력한 단어의 값을 현재 단어로
        };
        function printName()  {
            const word = document.getElementById('input').value;
            document.getElementById("result").innerText = word;
          }
        $button.addEventListener("click", onClickButton);   //button에 함수 추가
        $input.addEventListener("input", onInput)   //input에 함수 추가
        for(var i = 0; i < data.length; i++){
            document.write(data[i]);
        }

const inputText = "개발자";
const inputNum = "-3";


console.log(typeof Boolean(0));
console.log(typeof 'false');

if(Boolean(0)=="false"){
    console.log("hihi");
}

if(inputText===""){
    console.log("값이 비어있습니다.")
}else if(inputNum===""){
    console.log("숫자가 비어있습니다.")
}else if(inputNum>=25 || inputNum<=0){ // 이렇게 쓸수도 있다
    console.log("하루는 24시간 입니다.")
}else{
    console.log("실행");
}
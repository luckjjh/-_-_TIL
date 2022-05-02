# 🔖LikeLion_FrontEndSchool_TIL 5월 2일 (월)

## 이호준 강사님 강의

### JavaScript

#### String
> 문자들이 이룬 배열(문자열)로 JavaScript의 경우 일반 정수와 String끼리 연산도 가능하므로 주의해야한다.
#### JavaScript의 문제점들
> JavaScript의 경우 아래와 같이 논리적으로 맞지 않는 현상이 자주 발생한다.

* 문제점
    ```js
    document.write(`8. ${0 == ''}<br>`); // 주의
    document.write(`9. ${false == ''}<br>`); // 주의
    document.write(`10. ${false == null}<br>`); // 주의
    document.write(`11. ${false == undefined}<br>`); // 주의
    document.write(`12. ${NaN == NaN}<br>`); // false 주의
    document.write(`13. ${NaN === NaN}<br>`); // false 주의
    document.write(`14. ${isNaN(undefined)}<br>`); // true 주의
    document.write(`15. ${isNaN(null)}<br>`); // false 주의
    document.write(`16. ${isNaN(NaN)}<br>`); // true 주의
    document.write(`17. ${Number.isNaN(undefined)}<br>`); // true 주의
    document.write(`18. ${Number.isNaN(null)}<br>`); // true 주의
    document.write(`19. ${Number.isNaN(NaN)}<br>`); // true 주의
    document.write(`20. ${![]}<br>`); // false 주의
    document.write(`21. ${!{}}<br>`); // false 주의
    ```
    ![image](https://user-images.githubusercontent.com/68142773/166205553-307cfbcf-e418-4eef-b925-1e10a0c50c50.png)

    

* 해결 방법

    이러한 현상은 JavaScript 언어 자체적인 문제이므로 주의해야하고, 만약 사용해야하는 경우가 있는 경우 '!!' 논리연산자를 통해 전처리를 해줘야한다.
    ```js
    console.log('----------------');
    console.log(`1 ${!!undefined}`);
    console.log(`2 ${!!null}`);
    console.log(`3 ${!!NaN}`);
    console.log(`4 ${!!Infinity}`);
    console.log(`5 ${!![]}`); // 주의
    console.log(`6 ${!!{}}`); // 주의
    console.log(`7 ${!!''}`); // 주의
    console.log(`8 ${!!0}`);
    console.log(`9 ${!!'hello world'}`);
    console.log(`10 ${!!-100}`);
    ```
    ![image](https://user-images.githubusercontent.com/68142773/166205847-b7ea2167-4979-4d10-98d8-f0fad1a90030.png)

    '!!' 논리연산자를 사용하게 되면 연산자 우선순위에 의해 가장 먼저 값들을 의도한대로 boolean 형태로 바꾸기 때문에 이런한 문제를 해결하는 것이 가능하다.
#### Object
> JavaScript 자료형 중 하나로 다양한 키 모음 및 더 복잡한 값들을 저장하는데 사용된다.

* Example
    ```js
    let person={
        name:'jh',
        age:26,
        height: 30,
        weight:40,
        이력:{'첫직장':'하나', '두번째 직장':'둘'},
        기능:sum
    }
    ```
    
key의 값으로 다시 Object를 생성해 복잡한 구조를 생성하는 것도 가능하다.

#### Array
> 프로그래밍 언어들의 배열과 같은 형태이지만, 한 배열 안에 여러가지 자료형들을 저장할 수 있다. 이러한 경우는 배열의 목적과 상반되기 때문에 지양해야 한다.
# 🔖LikeLion_FrontEndSchool_TIL 4월 28일 (목)

## 한재현 강사님 강의

### 웹의 역사
> 어떤 기술이라도 바로 튀어나온 기술은 없다!

### JavaScript

#### 자료형
  * 원시자료형
    
    Number, String, Boolean, undefined, Symbol, null이 존재하고 변수에 다른 변수를 복사할 때 참조하는 것이 아닌 값을 복사함.

  * 객체자료형
    
    원시자료형 외의 모든 자료형을 객체 자료형이라 함.

  * 퀴즈
    
    Math 라이브러리의 random 함수를 이용해 a~b까지의 범위의 무작위 수를 출력하기
    ```js
    function getRandomNum(start, end) {
        return Math.floor(Math.random() * (end - start + 1) + start);
    }

    for (let i = 0; i < 100; i++) {
        console.log(getRandomNum(5, 15));
    }
    ```
# 🔖LikeLion_FrontEndSchool_TIL 4월 06일 (수)

## 이호준 강사님 강의

1.  과제 리뷰

    ![image](https://user-images.githubusercontent.com/68142773/161928922-83c42c5c-e302-4491-9075-453b813f4bbd.png)

    1. Body의 child는 몇개일까?

       > Body의 child의 개수는 `<h1>`, `<ul>`, `<div.wrap>`, `<span>` 이렇게 4개 이다.

       > cf. 개발자 도구 console에 document.body.childnodes 명령어를 입력하면 html 문서를 작성할 때 자연스럽게 들어가게 되는 newline 또한 child로 판단해 Body의 child 개수가 다르게 나온다.
       > ![image](https://user-images.githubusercontent.com/68142773/161933315-8cfdcaa5-553a-4543-b06d-bdd632578713.png)

    2. ul의 child는 몇개일까?

       > `<li>` 2개가 자식요소로 존재하므로 child의 개수는 총 3개이다.

    3. ul의 decendent는 몇개일까?

       > decendent는 해당 요소의 모든 하위 요소들을 말한다. ul의 decendent는 총 3개이다.

    4. div tag중 3번째 child인 요소는 몇개일까?

       > div tag 중 `<div.wrap>`가 body의 3번째 자식요소로 존재하고, `<div.box>`가 `<div.wrap>`의 3번째 자식요소로 존재하므로 div tag중 3번째 child인 요소는 2개이다.

    5. ul의 형제 요소 개수는?
       > ul의 형제 요소는 `<h1>`, `<div.wrap>`, `<span>` 3개이다.
    6. `div:nth-child(3) {color:red}` 하면 몇개의 tag가 빨간 글씨가 될까?
       > nth-child(n)는 n번째 자식요소를 선택하는 가상 class이다. 위의 CSS 코드는 3번째 자식요소로 존재하는 div 요소를 선택하는 selector이므로 `<div.wrap>`와 3번째 `<div.wrap>` 2개가 선택되고 `<div.wrap>`이 `color:red` 속성을 받게되면 하위 요소들도 이를 상속받기 때문에 3개의 3개의 tag가 빨간 글씨가 된다.
    7. `body > span {color:blue}` 하면 몇개의 span tag가 파란 글씨가 될까?
       > '>'는 왼쪽 요소의 자식요소로 존재하는 `<span>`을 선택하는 selector이므로 4번째 자식으로 존재하는 `<span>` 1개만 파란 글씨가 된다.

2.  CSS

    > CSS는 기본적인 구조로 Selector, Property, Value가 존재한다.
    > ![image](https://user-images.githubusercontent.com/68142773/161936103-8772c1f9-82b2-4955-879a-586b6aae46e9.png)

    - RESET CSS

      > 브라우저마다 각각 제공하는 기본 요소 스타일이 모두 달라 CSS를 활용해서 개발을 해도 브라우저마다 보이는 모습이 달라지는 문제점이 발생해 브라우저의 모든 기본적인 스타일 속성을 완전히 초기화 시키기위해 만들어진 CSS파일이다.
      > 대표적인 RESET CSS로 에릭 마이어의 RESET CSS가 있다.

    - Vendor-Prefix

      > Vendor(브라우저 제조사)와 Prefix(접두어)의 합성어로 아직 비표준이거나 실험적인 CSS 속성을 특정 브라우저에서 실행 가능하도록 CSS 속성 앞에 브라우저 제조사 만의 접두어를 붙이는 문법이다.</br>
      > VSCode의 경우 autoprefixer를 사용해 쉽게 적용 가능하다.
      >
      > ```css
      > /* autoprefixer 적용한 경우 */
      > p {
      >   display: -webkit-box;
      >   display: -ms-flexbox;
      >   display: flex;
      > }
      > /* autoprefixer 적용안한 경우 */
      > span {
      >   display: flex;
      > }
      > ```

    - CSS selector

      - Universal selector

        html 문서에 있는 모든 요소에 대해 스타일을 적용한다.

        ```css
        * {
          color: red;
        }
        ```

      * Type selector

        지정한 tag에 대한 스타일을 적용하고 `,`를 사용해 동시에 여러개 지정 가능하다.

        cf. 해당 tag를 갖는 모든 요소에 속성이 적용되기 때문에 초기화용도 외에는 사용을 지양하는 것이 좋다.

        ```css
        h1,
        h2 {
          color: blue;
        }
        ```

      * Class selector

        `.` 다음에 나오는 이름을 갖는 요소에 스타일을 적용한다.

        cf. class 속성은 id 속성과 달리 중복이 허용된다.

        ```css
        .one {
          color: aqua;
        }
        ```

      * ID selector

        `#` 다음에 나오는 이름을 갖는 요소에 스타일을 적용한다.

        cf. id 속성은 페이지에 있는 해당 요소를 유일하게 식별하는데 사용되기 때문에 id를 중복으로 사용하면 안된다.

        ```css
        #two {
          color: blueviolet;
        }
        ```

    - selector 우선순위

      > CSS에는 적용 우선순위가 존재하기 때문에 CSS문서를 작성하고 style을 적용시킬때 우선순위를 고려해야한다.

      - 우선순위 3가지 원칙

        1.  후자 우선의 원칙

            동일한 selector가 연속으로 사용되는 경우 후자가 우선시 됨.

        2.  구체성의 원칙

            같은 우선순위에 놓인 selector가 두개 존재한다면 둘 중 더 구체적으로 작성된 selector가 우선시 됨.

            - 가중치
              selector의 구체성을 판단하기 위해 가중치라는 개념이 활용된다.
              | inline-style | id selector | class, 가상 class, 속성 selector | type, 가상요소 selector | Universal selector|
              |--------------|-------------|---------------------------------|------------------|-------------------|
              |1000점|100점|10점|1점|0점|

              > ![image](https://user-images.githubusercontent.com/68142773/162151421-58f00eec-1bcc-40f4-a572-65ff34869f04.png)</br>
              > 점수표에 따라 해당 selector는 112점의 가중치를 갖게된다.

              이때 type selector 10개 이상를 중첩시켜 class selector 보다 점수가 높아져도 해당 점수는 금메달, 은메달, 동메달 개념을 갖고있어 class selector가 우선시 된다.

        3.  중요성의 원칙

            다른 속성보다 반드시 우선시 되야하는 스타일 속성이 존재한다면 `!important`를 속성값 뒤에 추가한다. `!important`가 추가된 속성값은 무조건적인 우선순위를 갖음.

    - CSS Box Model

      > 모든 html 요소들은 브라우저에서 렌더링 될 때 CSS 박스 모델에 따라 네모난 박스로 표현이 된다.

      - 박스의 구성

        ![image](https://user-images.githubusercontent.com/68142773/162151885-236b4b13-021b-4e4d-ac96-5742c13ed334.png)

        1.  Content: 요소의 content가 표시되는 영역으로 width, height를 통해 크기 조절이 가능하다.
        2.  Padding: 박스의 테두리와 content 사이의 공간으로 padding 속성으로 조절이 가능하다.
        3.  Border: 박스의 테두리영역으로 border 속성으로 조절이 가능하다.
        4.  margin: border 바깥 쪽 영역으로 요소와 요소 사이의 공백 역할을 하며 margin 속성으로 조절이 가능하다.

      - 박스의 유형
        > 대표적으로 inline, block 박스가 존재하고, display 속성을 통해 유형을 지정하는 것이 가능하다.

    - CSS Units

      - 절대 길이 단위
        > px: Pixel의 약자로 디바이스 화면에서 이미지를 표현하는 가장 작은 단위.
        > 절대 길이 단위로 사용자가 선언한 고정된 크기 그대로를 화면에 그리기 때문에 직관적이다.
      - 상대 길이 단위
        > ![image](https://user-images.githubusercontent.com/68142773/162153263-e85d4b7c-0a83-4933-aaae-67a19afc20f9.png)

## 과제

1. [margin 병합현상 bloging 링크](https://velog.io/@luckjjh/%EB%A7%88%EC%A7%84-%EB%B3%91%ED%95%A9%EA%B2%B9%EC%B9%A8-%ED%98%84%EC%83%81%EC%97%90-%EB%8C%80%ED%95%B4)

2. [inline/block 요소 bloging 링크](https://velog.io/@luckjjh/block-level-%EC%9A%94%EC%86%8C-inline-level-%EC%9A%94%EC%86%8C)

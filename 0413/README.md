# 🔖LikeLion_FrontEndSchool_TIL 4월 12일 (화)

## 이호준 강사님 강의

### CSS

1. CSS Selector 심화

   1. 속성 선택자

      > tag의 이름, class 이름, id 이름 외에 여러 속성을 활용해 접근을 가능하게 하는 선택자

      1. `tag[속성이름]`

         EX) `div[class]{ ... }` div tag이면서 class 속성을 갖는 모든 요소를 선택한다.

      2. `tag[속성이름="value"]`

         EX) `div[class="red"]{ ... }` div tag이면서 class 속성의 값이 정확하게 "red"인 요소를 **모두** 선택한다. (완벽하게 일치해야 함)

      3. `tag[속성이름~="value"]`

         EX) `div[class~="red"]{ ... }` div tag이면서 class 속성의 값이 "red"인 요소를 **모두** 선택한다.(단어 단위로 일치함을 확인)

      4. `tag[속성이름*="value"]`

         EX) `div[class*="red"]{ ... }` div tag이면서 class 속성의 값이 "red" 문자열을 포함하는 요소를 **모두** 선택한다.(문자열 단위로 일치함 확인)

      5. `tag[속성이름^="value"]`

         EX) `div[class^="sky"]{ ... }` div tag이면서 class 속성의 값이 "sky"로 시작하는 요소를 **모두** 선택한다.

      6. `tag[속성이름$="value"]`

         EX) `div[class$="pink"]{ ... }` div tag이면서 class 속성의 값이 "pink"로 끝나는 요소를 **모두** 선택한다.

      7. `tag[속성이름|=value]`

         EX) `div[class|="pink"]{ ... }` div tag이면서 class 속성의 값이 "pink"이거나 "pink"로 시작하는 요소를 **모두** 선택한다.

   2. 가상 클래스 선택자

      > `:hover`, `p:nth-child(1)`와 같이 실제로 html에 존재하지 않는 클래스지만 마치 클래스가 존재하는 것처럼 작동하는 선택자.

      - 상호작용을 위한 가상 클래스

        1. `:hover`: 사용자가 요소에 마우스를 올렸을 때 적용되는 클래스.

        2. `:active`: 사용자가 요소를 실행할 때 적용되는 클래스.

        3. `:focus`: 요소에 포커스가 있을 때 적용되는 클래스. 클릭이 가능한 요소나 input, select와 같이 상호 작용 할 수 있는 모든 요소에는 포커스가 가능.

   3. 가상 요소 선택자

      > 마크업이 없는 요소를 삽입하는 선택자로 `::after`와 `::before`를 가장 많이 사용한다.

      - 가상 요소 선택자와 가상 클래스 선택자의 차이점
        1. 가상 요소 선택자는 ':'이 2개(가상 클래스 선택자는 1개)
        2. 가상 요소 선택자는 마크업 없는 요소를 삽입(가상 클래스 선택자는 클래스 없는 요소에 클래스 삽입)

2. CSS Combinator

   > 선택자와 선택자를 결합해 사용하는 선택자를 Combinator라 한다.

   1. 자손 Combinator
      ```css
      section ul {
        text-shadow: none;
      }
      ```
      앞 요소의 자손인 뒤 요소를 선택하는 Combinator로 공백으로 표시하고 예제의 경우 section의 자손으로 존재하는 모든 ul을 선택한다.
   2. 자식 Combinator

      ```css
      section > ul {
        text-shadow: none;
      }
      ```

      앞 요소의 바로 아래 자식 요소를 선택하는 Combinator로 '>'으로 표시하고 예제의 경우 section의 바로 아래 자식 요소로 존재하는 ul을 선택한다.

   3. 인접 형제 Combinator

      ```css
      h1 + ul {
        color: red;
      }
      ```

      '+'를 기준으로 전방 선택자 직후에 나오는 후방 형제 선택자를 선택하고 예제의 경우 h1 바로 뒤에 오는 형제 요소 ul 요소를 선택한다.

   4. 일반 형제 Combinator

      전방 선택자 기준으로 뒤에 나오는 모든 후방 형제 선택자를 선택한다.

      ```html
         <style>
            h1 ~ ul {
                  color:red;
            }
         </style>
      </head>
      <body>
         <ul>
            <li>hello world</li>
            <li>hello world</li>
            <li>hello world</li>
         </ul>
         <h1>hello world</h1>
         <ul>
            <li>hello world</li>
            <li>hello world</li>
            <li>hello world</li>
         </ul>
         <ul>
            <li>hello world</li>
            <li>hello world</li>
            <li>hello world</li>
         </ul>
         <h2>hello world</h2>
         <ul>
            <li>hello world</li>
            <li>hello world</li>
            <li>hello world</li>
         </ul>
         <div>
            <ul>
                  <li>hello world</li>
                  <li>hello world</li>
                  <li>hello world</li>
            </ul>
         </div>
      ```

      > ![image](https://user-images.githubusercontent.com/68142773/163215440-d9fd9f91-664c-42c5-9c60-61a97b96af9c.png)<br>
      > h1 뒤에 위치하는 형제 요소중 tag가 ul인 요소를 모두 선택하는 것을 확인할 수 있다.

3. Flex

   > Content를 정렬하거나 공간을 나눌 수 있는 CSS 속성의 집합.

   1. Flex의 속성들

      - flex-direction

        > 정렬 방향을 결정하는 속성

        ```css
        .container {
          display: flex;
          flex-direction: value;
          /* value: row, column, row-reverse, column-reverse */
        }
        ```

        - row
          > ![image](https://user-images.githubusercontent.com/68142773/163234172-2b5a0f3b-2375-47b8-a7fb-07156043f0ba.png) > `.contatiner` 안의 요소들이 행 방향으로 정렬된다.
        - row-reverse
          > ![image](https://user-images.githubusercontent.com/68142773/163234305-9edd9366-65b4-45fc-ba63-1e41e8cc1823.png) > `.contatiner` 안의 요소들이 행 역순 방향으로 정렬된다.
        - column
          > ![image](https://user-images.githubusercontent.com/68142773/163234403-70ba9c42-e2ca-48aa-b7ef-ea1812f13c44.png) > `.contatiner` 안의 요소들이 열 방향으로 정렬된다.
        - column-reverse
          > ![image](https://user-images.githubusercontent.com/68142773/163234465-335cfb31-3153-4d73-983b-d976f40f657b.png) > `.contatiner` 안의 요소들이 열 역순 방향으로 정렬된다.

      - justyfy-content
        > 축을 기준으로 배열의 위치를 조종하거나 아이템 간의 간격을 설절할 수 있는 속성으로 축을 기준으로 하기 때문에 flex-direction에 지정한 값에 따라 결과 값이 다르게 나올 수 있다.
        ```css
        .container {
          display: flex;
          /* justify-content: flex-start; */
          /* justify-content: flex-end; */
          /* justify-content: center; */
          /* justify-content: space-between; */
          /* justify-content: space-around; */
        }
        ```
        - flex-start
          > 축 시작 기준으로 정렬 (row의 경우 왼쪽)
        - flex-end
          > 축 끝 기준으로 정렬 (row의 경우 오른쪽)
        - center
          > 축 기준 중앙 정렬
        - space-between
          > 축 기준 요소들 사이 동일한 간격을 주며 정렬
        - space-around
          > 축 기준 요소들 주위에 동일한 간격을 주며 정렬
      - Axis와 Cross-Axis
        > flex에는 axis와 짝을 이루는 cross-axis가 존재한다. axis가 row 상태라면 cross-axis는 column 이고, axis 가 column 이면 cross-axis는 row 이다.
        > ![image](https://user-images.githubusercontent.com/68142773/163236891-1586650e-5dcf-420c-abd2-b24a0d4ae8a4.png)
      - align-items
        > align-items: cross-axis 기준으로 이동
        ```css
        .container {
          display: flex;
          /* align-items: stretch; (기본값) */
          /* align-items: center; */
          /* align-items: flex-start; */
          /* align-items: flex-end; */
        }
        ```

      * align-content
        > align-content: flex-container 의 cross-axis 축의 아이템들이 여러 줄일 때 사용 가능(flex-wrap:wrap인 상태에서 사용해야함)

      - flex-wrap
        > 자식요소가 넘칠때 어떤 식으로 감싸줄 지에 대한 속성.
        ```
        .container {
           display: flex;
           flex-direction: column;
           justify-content: space-between;
           /* flex-wrap: wrap; */
           /* flex-wrap: nowrap; */
           /* flex-wrap: wrap-reverse; */
        }
        ```

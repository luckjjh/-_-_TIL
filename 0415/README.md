# 🔖LikeLion_FrontEndSchool_TIL 4월 15일 (금)

## Code Lion 강의

### 일단 만드는 JavaScript

1. 로또 번호 추첨기

   > ![image](https://user-images.githubusercontent.com/68142773/163807191-915f9bb0-298b-4399-ac01-56d58b10c1a2.png)</br>
   > 1~45까지의 random하고 중복되지 않는 수를 6개 출력한다.

   - code

     ```js
     let ball = [];
     while (ball.length < 6) {
       let num = parseInt(Math.random() * 45 + 1);
       if (ball.indexOf(num) == -1) {
         //배열에 num 없으면 -1 반환 되는 함수
         ball.push(num);
       }
     }
     ball.sort((a, b) => a - b);
     /* (a, b) => a - b 수식 입력 안하면 앞자리 수부터 비교해서 정렬함 */
     document.write("<div class='container'>");
     for (let i = 1; i <= 6; i++) {
       document.write(
         "<div class='ball ball" + i + "'>" + ball[i - 1] + "</div>"
       );
     }
     document.write("</div>");
     ```

     - `parseInt(Math.random() * 45 + 1)`

       `Math.random()` 함수는 0~1까지의 random한 수를 반환하는 함수로 1~45까지의 수를 얻기 위해 45를 곱하고 1을 더해준 뒤 `parseInt` 함수를 활용해 random한 수를 정수 형태로 반환한다.

     - `ball.indexOf(num)`

       `indexOf()` 함수는 함수를 호출한 배열에서 parameter 값이 있는 경우 해당 index를 반환하고 없는 경우 -1을 반환한다. 중복되지 않는 6개의 수를 배열에 저장해야하므로 해당 함수를 활용해 -1이 반환되는 경우에만 배열에 수를 입력한다.

     - `ball.sort((a, b) => a - b);`

       parameter를 void로하고 함수를 호출하는 경우 수의 앞자리부터 비교해 사전 순으로 수를 정렬하게되므로 `(a, b) => a - b` 화살표 함수를 parameter로 넣어 오름차순으로 배열이 정렬되게 한다.

2. 글자수 계산기

   > ![chrome-capture-2022-3-18](https://user-images.githubusercontent.com/68142773/163808482-a269b75d-6176-4817-a12e-713b1ef585c3.gif)</br>
   > textarea에 입력되는 글자수를 세준다.

   - code

     ```js
     countText();
     function countText() {
       let content = document.getElementById("jasosoel").value;
       if (content.length > 200) {
         content = content.substring(0, 200);
         document.getElementById("jasosoel").value = content;
       }
       document.getElementById("count").innerHTML =
         "(" + content.length + "/200)";
     }
     ```

     - `content.substring(0, 200)`
       최대 글자수를 제한하기 위해 content의 length가 200이 넘는 경우 `substring()` 함수를 활용해 입력을 해도 입력한 텍스트가 사라지게 한다.
     - `onkeydown="countText()"`
       textarea의 onkeydown 속성을 `countText()` 함수로 지정해 키보드가 눌릴 때마다 글자수를 세 반영하도록 한다.

3. jQuery 기초 & jQuery 활용 간단한 StarCraft 게임

   - jQuery 기본 문법

     `$("element's name(class, id)").function()`

   > ![chrome-capture-2022-3-18 (1)](https://user-images.githubusercontent.com/68142773/163809443-e24c6320-a359-4c55-90a1-e1580bfbe4d1.gif)</br>
   > 드론 이미지를 클릭하면 벙커에 공격을 하며 HP가 줄어든다.

   - code

     ```js
     let hp = 3;
     $("#drone").click(function () {
       $("#spit").fadeIn();
       $("#spit").animate({
         left: "+=250",
       });
       $("#spit").fadeOut(function () {
         //callback 함수 활용
         hp--;
         $("#hp").text("HP: " + hp);
         if (hp == 0) {
           $("#bunker").fadeOut();
         }
       });
       $("#spit").css({
         left: "150px",
       });
     });
     ```

     - `$("#drone").click()`

       id가 `drone`인 요소를 클릭하면 동작하는 query로 `click()` 함수 내부에 익명 함수를 선언해 클릭됐을 때의 동작을 제어할 수 있다.

     - `fadeout()`, `fadeIn()`

       이미지를 나타내거나 사라지게하는 함수

### 실검에 오르는 세렝게티 동물 테스트 만들기

🚀[Repository Link](https://github.com/luckjjh/MBTI-test-web)

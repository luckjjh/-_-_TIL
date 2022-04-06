# 🔖LikeLion_FrontEndSchool_TIL 4월 05일 (화)

## 한재현 강사님 강의

1.  과제 리뷰
    - 구현 화면
      ![127 0 0 1_5500_%EC%8B%A4%EC%8A%B5_index html](https://user-images.githubusercontent.com/68142773/161545863-0a093390-ad82-4f1f-931f-04de7124079d.png)
    - 코드
      ```html
      <header class="header">
        <h1 class="title">나와 잘 맞는 회사는?</h1>
        <p>가고 싶은 회사에 대한 호감도를 조사합니다. 아이고 의미 없다.</p>
      </header>
      <main class="main">
        <section class="form-wrapper">
          <form action="">
            <fieldset class="fieldset">
              <legend class="invisible">질문 1</legend>
              <p>다음 문자중에 왠지 마음에 드는 것을 하나 고르세요.</p>
              <label class="input-box">
                <input
                  type="radio"
                  name="user-want"
                  id="naver"
                  value="naver"
                  required
                />
                네
              </label>
              ...
              <fieldset class="fieldset">
              <legend class="invisible">질문 7</legend>
              <p>업무를 시작 하기에 가장 적당한 시간을 고르세요.</p>
              <input type="time" class="time-box" required />
            </fieldset>
            <div class="footer-wrapper">
              <button class="btn">제출</button>
              <a href="index.html" class="erase-btn"> 양식 지우기 </a>
            </div>
          </form>
        </section>
      </main>
      ```
    - 피드백
      - [Web Validation](https://validator.w3.org/) 웹사이트에서 코드에 문제점이 없는지 항상 확인하기
        > ![image](https://user-images.githubusercontent.com/68142773/161741867-587f165a-9156-4210-9810-52abe43d7bdd.png)
        > 확인 결과 `<section>` tag에 heading이 없다는 경고 말고는 별다른 문제는 없었다.
      - `<fieldset>` tag는 `<form>`의 내용이 방대할 때 같은 내용을 묶는 용도로 사용된다.
        > 각 문항마다 `<fieldset>`을 사용해 묶어 올바르지 않은 방식으로 구현한 것 같다. `<fieldset>` > `<ul>` > `<li>` 요소를 사용해 문항들을 분리했으면 더 이상적인 코드가 됐을 것 같다.
2.  Table

    > 테이블(표)을 생성할 때 사용하는 요소. 컨테이너 요소로 여러가지 다른 요소들을 묶어주는 요소이다.
    > ![image](https://user-images.githubusercontent.com/68142773/161917835-addf7cff-c311-40f1-9751-368da0deaa76.png)
    > 요소 내부에는 `<caption>`, `<tr>`, `<col>`, `<td>`, `<th>` 등의 요소들이 사용될 수 있다.

    - `<caption>`

      테이블의 제목이나 설명을 의미하고 반드시 첫번째 자식 요소로 사용되야한다.

    - `<thead>`, `<tbody>`, `<tfoot>`

      각각 머리글, 본문, 바닥을 의미한다. 테이블의 내용이 많을 때 구역을 나누는 요소로 사용된다.(필수요소는 아님)

    * `<tr>`, `<th>`, `<td>`

      `<tr>`은 테이블의 행을 나눌 때 사용한다.

      `<td>`는 `<tr>`로 나뉜 행에서 셀을 분리할 때 사용한다.

      `<th>`는 행, 열의 머리말(해당 행,열의 의미)을 나타내는 데 사용한다.

    * `<rowspan>`, `<colspan>`
      `<td>`나 `<th>`요소를 행/열 병합하기 위한 요소.
      ![image](https://user-images.githubusercontent.com/68142773/161919477-454007a8-56c6-4b0d-ad10-8b29baa0f296.png)

      > 기존 table

      ![image](https://user-images.githubusercontent.com/68142773/161919251-072e9c53-5c96-4cb9-8cd5-a778d187318b.png)

      > 오른쪽 끝 행 병합하는 코드를 작성한 결과

      ```html
      <table>
        <caption>
          이달의 책 판매량
        </caption>
        <thead>
          <tr>
            <th>구분</th>
            <th>이름</th>
            <th>판매량</th>
            <!-- 열간 병합 -->
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>해리포터</td>
            <td rowspan="2">100</td>
          </tr>
          <tr>
            <td>1</td>
            <td>해리포터2</td>
          </tr>
        </tbody>
        <tfoot></tfoot>
      </table>
      ```

    * `<colgroup>`과 `<col>`

      `<colgroup>`의 자식요소로 쓰이는 `<col>`요소를 통해 특정 열에 공통적인 스타일을 주는 것이 가능하다.

    * `scope`

      `<th>`요소에 `scope` 속성을 사용해 `<td>`와의 연결관계를 표현할 수 있다. 웹 접근성에 필요한 요소이다.

    * `<table>` 활용 실습 - 2022 카타르 월드컵 조 추첨 결과 구현하기
      ![image](https://user-images.githubusercontent.com/68142773/161921111-4cf642e2-d824-4ee8-b8db-a2054ce06761.png)

      ```html
      <h1>2022 카타르 월드컵</h1>
      <table>
        <caption>
          본선 조 추첨 결과
        </caption>
        <tr>
          <th scope="col">GROUP A</th>
          <th scope="col">GROUP B</th>
          <th scope="col">GROUP C</th>
          <th scope="col">GROUP D</th>
        </tr>
        <tr>
          <td>카타르</td>
          <td>잉글랜드</td>
          <td>아르헨티나</td>
          <td>프랑스</td>
        </tr>
        ...
        <tr>
          <th scope="col">GROUP E</th>
          <th scope="col">GROUP F</th>
          <th scope="col">GROUP G</th>
          <th scope="col">GROUP H</th>
        </tr>
        <tr>
          <td>스페인</td>
          <td>벨기에</td>
          <td>브라질</td>
          <td>포르투갈</td>
        </tr>
        ...
      </table>
      ```

      > `<table>`을 하나 생성하고 `<th>`를 2번 나눠 사용해 구현해야 하는 화면과 같은 표를 표현했다.

## 이호준 강사님 강의

1. block & inline
   ![image](https://user-images.githubusercontent.com/68142773/161922937-a2a5ad37-80dc-4dc7-b5b2-5a3dd1447a57.png)

   - block level 요소

     브라우저 화면의 가로폭을 모두 차지한다. 너비, 높이 조절이 가능하다.

   - inline level 요소

     컨텐츠 자신의 크기만큼 영역을 가지는 요소. 한줄을 다 차지하지 않기 때문에 가로 정렬이 가능하지만, 너비, 높이 조절이 불가능하다.

   - inline-block

     컨텐츠 자신의 크기만큼 영역을 갖으면서 block level 요소의 특성도 갖고있어 너비, 높이 조절이 가능하다.

2. `<table>`을 활용해 달력 구현하기
   ![image](https://user-images.githubusercontent.com/68142773/161923873-25e189ac-c473-470d-aedd-962bde961572.png)

   ```html
   <main>
     <h2></h2>
     <ol class="season-box">
       <li class="month-box">
         <table>
           <caption class="month">
             1
           </caption>
           <tbody>
             <tr>
               <th scope="col" class="weekend">SUN</th>
               <th scope="col">MON</th>
               <th scope="col">TUE</th>
               <th scope="col">WED</th>
               <th scope="col">THU</th>
               <th scope="col">FRI</th>
               <th scope="col">SAT</th>
             </tr>
             ...
           </tbody>
         </table>
       </li>
     </ol>
   </main>
   ```

   > 각 월을 하나의 `<table>`요소로 생각했고, 순서대로 배열되는 요소이기 때문에 `<ol>` > `<li>`를 사용해 `<table>`들을 묶어주었다.

   ```css
   .month-box td:first-child {
     color: #ee595a;
   }
   ```

   > 일요일을 나타내는 날짜 글씨색을 붉은색으로 표현하기 위해 항상 row의 첫번째 자식요소임을 이용해 가상 class인 first-child를 사용했다.

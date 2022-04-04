# 🔖LikeLion_FrontEndSchool_TIL 4월 04일 (월)

## 임동준 강사님 워크샵

### 1부: 피드백의 중요성

게임도 레벨, 경험치가 없으면 성장체감이 사라져서 하기 싫어지듯이 공부를 하는 것도 이와 마찬가지이다. 하지만, 피드백을 더 자주, 더 빨리, 더 꾸준히 하게 되면 공부를 하는 데도 성장체감을 느낄 수 있고 목표를 이루는데 좋은 과정이 될 것이다.

### 2부: 목표 설정 및 재조정

구글 스프레드 시트로 각자의 목표와 목표를 달성하는데 어떤 방식으로 피드백을 해야하는지에 대해 생각해봄.

### 3부: 회고 팀원들과 피드백 어떤 방식으로 할지 상의

각자 블로그에 TIL을 작성하면 서로 읽어보고 피드백을 하기로 했다.

github 그룹을 생성해서 과제나 프로젝트 코드를 공유하고 서로 코드리뷰를 하며 작성한 코드에대해 피드백을 하기로 했다.

## 한재현 강사님 html 강의

### 강의 내용

- 이전 시간 과제 Review

  네이버, 삼성, 동물의 숲 웹페이지를 보고 tag를 분류하는 과제였다.

  - 삼성 웹페이지 tag 분류(내가 한 과제)
    ![Notes_220404_142433_2 (2)](https://user-images.githubusercontent.com/68142773/161539817-6843335a-f616-431f-858c-428572cd5b3d.jpg)

    > 다른 수강생분들이 피드백을 받는 것을 보고 tag를 어떻게 하면 적절히 사용할 수 있을 지, 내가 사용한 tag가 해당 content에 적절한 tag인지에 대해 복기할 수 있었다.

    - 피드백을 통해 새로 배우거나 복기한 내용

      1. `<h1>`tag는 한번만 사용하는 것이 바람직하다.
      2. `<article>`은 어떤 페이지에 넣어도 어색하지 않은 요소 EX) 위젯, 광고화면, 캐러셀
      3. `<article>`은 작은 html 문서로 생각하는 것도 가능하기 때문에 `<article>`의 자식요소로 `<header>`, `<footer>` 다시 선언 가능. (cf. `<main>` tag는 body 안에 한번만 선언되어야 함.)
      4. `<section>`: 주제별로 구획을 나누는 것
      5. `<address>`: 가까운 HTML 요소의 사람, 단체, 조직 등에 대한 연락처 정보를 나타내는 tag.
         삼성 웹페이지 최하단 연락처가 적힌 요소에 사용을 했다.
      6. `<a>` 와 `<button>`</br>
         기획에 따라 사용하는 것이 다름, `<a>`는 다른 페이지로 넘어가는 동작을 수행할 때, `<button>`은 다른 페이지로 넘어가지 않으면서 페이지 안에서 기능을 수행할때.
      7. `<small>`: 덧붙임 글요소. copyright나 footer에 있는 요소 등의 작은 텍스트를 나타냄.
      8. `<time>`: 날짜나 시간을 나타내는 요소.
      9. `<aside>`: 본문 영역 옆이나 광고를 나타내는 요소. `<article>`과 비슷한 맥락.

- Forms

  - input type을 다르게 하는 이유

    모바일 환경에서 input box를 터치했을 때 나오는 키보드 UI가 달라져서, 올바른 데이터 입력을 요구하기 위해서.

  1.  `<select>`

      드롭다운 리스트 박스를 생성하는 요소. 요소의 아이템은 `<option>` tag를 사용.

      ```html
      <label for="select-list">현재 사용 중인 핸드폰 제조사는? </label>
      <select name="" id="select-list" size="1" required>
        <!-- 속성명과 속성 값이 같으면 속성 값 생략 가능 -->
        <option value="">선택</option>
        <!-- default로 출력할 text 선택으로 설정할 때 -->
        <option value="iphone">아이폰</option>
        <option value="galaxy">갤럭시</option>
        <option value="ThinQ">LG</option>
        <!-- server로 값이 전달될 때는 value 값이 전달 됨 -->
        <!-- selected 속성 부여해서 기본 선택 값 지정 가능 -->
      </select>
      ```

      ![image](https://user-images.githubusercontent.com/68142773/161543074-463e0c04-d63a-4c18-be94-8a9016a0c331.png)

  2.  `<fieldset>`

      폼 컨트롤들을 그룹화 하는 요소. 폼 내용이 방대해서 구역별로 나눠야 하는 경우 사용.
      `<section>`와 같은 맥락.

  3.  `<legend>`

       `<fieldset>` tag 바로 뒤에 위치하며 폼 그룹의 목적을 나타내는 제목을 표현한 요소. 반드시 `<fieldset>`의 첫번째 자식요소여야 함. 접근성을 위해서 항상 작성하는 것이 좋다.

      ```html
      <!-- <fieldset> section과 같은 용도 input 내용을 그룹화 -->
      <form action="">
        <fieldset>
          <legend>개인정보</legend>
          <!-- field의 제목 : form 그룹의 목적을 나타내는 제목 -->
          <label for="myName">이름</label>
          <input type="text" name="name" id="myName" />
          <label for="myTel">전화번호</label>
          <input type="tel" name="tel" id="myTel" />
          <label for="myEmail">이메일</label>
          <input type="email" name="email" id="myEmail" />
        </fieldset>
      </form>
      ```

      ![image](https://user-images.githubusercontent.com/68142773/161543940-7eb6d12e-7411-40b3-a154-6f7b273f58c9.png)

      > `<fieldset>`의 제목으로 `<legend>`에 입력한 "개인 정보"가 form 상단에 위치하는 것 확인 가능.

  4.  `<button>`

      클릭 가능한 버튼을 나타내는 요소. 버튼의 모습 다양하게 제어하고 버튼 내부 다른 자식요소 추가하고 싶을 때 사용. default type 값은 submit.

      - `<input type="submit">`과 `<button>`
        `<input>` tag는 닫는 tag가 없기 때문에 value 특성에 텍스트 값 밖에 지정할 수 없지만, `<button>`은 내부에 여러 자식 요소를 추가할 수 있고 가상 요소를 활용하는 것도 가능하기 때문에 디자인적인 면이나 기술적인 면에서 `<button>`을 사용하는 것이 좋음.

  5.  `<textarea>`

      여러 줄의 text를 입력받을 수 있는 요소

      ```html
      <fieldset>
        <legend>개인정보 제공 동의</legend>
        <label for="checkAgree">개인정보 제공에 동의하십니까?</label>
        <input type="checkbox" name="agree" id="checkAgree" />
        <textarea
          name=""
          id=""
          cols="40"
          rows="10"
          maxlength="10"
          minlength="5"
        ></textarea>
      </fieldset>
      ```

      > cols, rows 속성 값을 지정해 textarea가 보여줄 문자의 너비, 높이를 지정가능하고, max/minlength 속성 값을 통해 최대/최소 글자 수 제한 가능. 게시판을 구현할 때 사용될 수 있는 tag같다.

  6.  `<datalist>`

      `<select>`요소와 비슷하지만, 사용자에게 입력할 수 있는 선택권을 주는 요소. 회원가입 이메일 입력할 때를 생각하면 될 것 같다. 자동완성 기능이 있어 `<input>`에 아무런 텍스트가 없어야 지정한 `<option>`들이 보인다.

      ```html
      <label for="solasystem">원하는 행성을 선택하세요 : </label>
      <input type="text" id="solasystem" list="planets" name="planets" />
      <datalist id="planets">
        <option value="수성">수성</option>
        <option value="금성">금성</option>
        <option value="지구">지구</option>
        <option value="화성">화성</option>
      </datalist>
      ```

      ![image](https://user-images.githubusercontent.com/68142773/161545588-dec34a0c-77f3-417c-84df-62ec670c9fb5.png)

- 실습: 구글 Form `<form>` tag 활용해서 구현하기

  [코드링크](https://github.com/luckjjh/LikeLion_FrontEndSchool_TIL/tree/main/0404/%EC%8B%A4%EC%8A%B5)

  - 구현 화면
    ![127 0 0 1_5500_%EC%8B%A4%EC%8A%B5_index html](https://user-images.githubusercontent.com/68142773/161545863-0a093390-ad82-4f1f-931f-04de7124079d.png)

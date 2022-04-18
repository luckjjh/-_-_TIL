# 🔖LikeLion_FrontEndSchool_TIL 4월 18일 (월)

## 한재현 강사님 강의

### CSS

#### CSS 설계 기법

1.  OOCSS (Object Oriented CSS)

    > CSS의 여러 요소들을 모듈로 만들어 조합하도록 하는 방법론

    - 구조

      width, height, padding, margin 등 레이아웃에 영향을 미치는 속성을 구조에 해당하는 CSS 요소로 분류한다.

    - skin

      font, color, background, border 등 레이아웃에 영향을 미치지 않지만, 시각적인 영향을 주는 속성을 skin에 해당하는 CSS 요소로 분류한다.

      > cf. 요소의 스타일이 container(부모요소)에 종속되지 않도록 해야한다. 즉, 컨텐츠 스타일 선택자에 container의 class를 배제 시킨다.

    - Example

      ```css
      .btn {
        width: 200px;
        height: 80px;
        font-size: 30px;
      }

      .btn-close {
        background: black;
        color: #fff;
        border: 3px dotted #fff;
      }
      ```

      ```html
      <button type="button" class="btn"></button>
      <button type="button" class="btn btn-close"></button>
      ```

2.  SMACSS (Scalable and Modular Architecture for CSS)

    > 유연하고 모듈식 구조를 갖고있는 CSS 방법론으로 CSS 코드를 역할에 따라 분리한다.

    - 베이스
      프로젝트의 표준 스타일을 정의
    - 레이아웃

      헤더, 메인, 푸터, 사이드바와 같은 웹 사이트에서 큰 틀 구성하는 모듈에 관한 규칙을 정의한다. 몇개 없기 때문에 id 선택자 사용하기도 함.

    - 모듈

      레이아웃 내에 배치되는 모든 요소를 의미 반복되는 요소를 주로 지정하기 때문에 ID 선택자 사용 안한다.
      비슷한 모듈안에서도 모양 조금씩 다를경우 서브클래스 생성

    - 스테이트

      기존 스타일에 덮어쓰거나 확장시키는데 사용한다. JS를 활용해 넣었다 뺐다 할 수 있는 스타일.

    - 테마

      `background-image`, `background-color`, `color` 등 사용자에게 사이트의 느낌 전달하는 이미지들을 의미

3.  BEM (Block, Element, Modifier)

    > 3가지 큰 구분으로 나뉘는 CSS 방법론으로 Block, Element, Modifier 로 나뉜다. 기본적으로 id 선택자와 요소 선택자를 권장하지 않는다.

    - Block

      어디서나 재사용 가능한 부품을 의미로 class 네이밍 목적을 명확히 해야함.

    - Element

      블록을 구성하는 요소들로 block에 종속된다. block의 class 이름을 상속받고 element의 class 이름을 뒤에 쓰는 방식으로 class 네이밍을 한다.

    - Modifier

      block이나 element의 모습이나 상태 또는 움직임을 정의할 때 사용된다. 단독으로 사용되지 않고 두번째 class 이름으로 사용된다.

### 위니브 modal 로그인 페이지 code review

1. 모든 input tag에는 `label` 달기
2. 요소를 포장하는 요소는 웬만하면 높이 지정하지 말고 내부 요소들로 높이 조절해 반응형으로 만들기
3. 반복되는 요소들을 모듈 형태로 만들어 작업하기
4. 버튼에 이미지만 들어가는 경우 alt 값 넣어주기

- 🚀[weniv-login-page-with-modal 링크](https://github.com/luckjjh/weniv-login-page-modal)

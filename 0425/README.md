# 🔖LikeLion_FrontEndSchool_TIL 4월 25일 (월)

## 이호준 강사님 강의

### SASS / SCSS
> 스타일시트가 점점 더 커지고 복잡해질수록 유지보수가 어려워지는데 일반 프로그래밍 언어와 같은 문법들을 제공해 CSS를 편리하게 작성하게 해주는 스타일 시트 확장 언어. CSS로 컴파일이 된다.
    
  * 주요 문법
    
    * Nesting

        중첩이라는 뜻을 가진 단어로 Nesting을 사용해 html의 시각적 계층 방식과 동일하게 CSS를 중첨해서 작성하는 것이 가능하다. CSS가 구조화되어 가독성이 높아지며, 유지보수가 편리해진다.

        Example
        > 
        ```css
        .add-icon {
            background : {
                image: url("./assets/arrow-right-solid.svg");
                position: center center;
                repeat: no-repeat;
                size: 14px 14px;
            }
        }
        ```

    * 부모선택자 &

        "&"는 상위에 있는 부모선택자를 지정하는 명령어로 &를 이용해 after, hover 등의 가상 요소나 가상 클래스를 생성하는 것이 가능하다.

        Example
        > 
        ```css
        .box {
            height: 100px;
            width: 100px;
            background-color: red;
            transition: all 0.5s;
            &:hover {
                background-color: green;
            }
        }
        ```

    * 변수 선언

        값이 두 번 이상 반복되거나 기존의 값을 한번에 변경해야 하는 경우 해당 값을 변수로 사용한다. list나 map 형식으로 사용하는 것도 가능하다.

        Example
        >
        ```css
        //색상
        $red: #ee4444;
        $black: #222;
        $bg-color: #3e5e9e;
        $link-color: red;
        $p-color: #282a36;

        //폰트사이즈
        $font-p: 13px;
        $font-h1: 28px;

        //폰트
        $base-font: "Noto Sans KR", sans-serif;

        body {
        background-color: $bg-color;
        font-size: $font-p;
        font-family: $base-font;
        }

        h1 {
        font-size: $font-h1;
        color: $black;
        }

        p {
        font-size: $font-p;
        color: $black;
        }

        a {
        color: $link-color;
        }
        ```


    * Mixin

        코드를 재사용하기 위해 만들어진 기능으로 선택자들 사이에서 반복되고 있는 코드를 mixin을 사용해 코드의 반복을 줄여준다.
        ```scss
        @mixin 이름(매개변수) //생성
        @include 이름(인수)  //사용
        ```

        Example
        >
        ```scss
        @mixin center-xy {
            display: flex;
            justify-content: center;
            align-items: center;
            }

            .card {
            @include center-xy; // 정의한 center-xy mixin을 사용하여 코드 한줄이면 끝!
            }

            .aside {
            @include center-xy;
        }
        ```

    * 조건문, 반복문
        기존 프로그래밍 언어들에서 사용되는 조건문, 반복문을 사용해 코드의 재사용을 줄이는 것이 가능하다.

        Example
        > 조건문
        ```scss
        @mixin button($color) {
            @if $color == black {
                font-size: 32px;
                color: $color;
                background-color: white;
            } @else if $color == white {
                font-size: 24px;
                background-color: black;
                color: $color;
            } @else {
                font-size: 16px;
                background-color: blue;
                color: $color;
            }
        }

        .btn-1 {
            @include button(black);
        }

        .btn-2 {
            @include button(red);
        }

        .btn-3 {
            @include button(white);
        }
        ```
        > 반복문
        ```scss
        @for $hojun from 1 through 7 {
            .photo-box:nth-child(#{$hojun}) {
                background-image: url("../assets/phoster#{$hojun}.png");
            }
        }
        ```

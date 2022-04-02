# 🔖LikeLion_FrontEndSchool_TIL 4월 01일 (금)

## 이종찬 강사님 CSS 특강

### 강의 내용

1. CSS 이론

   - CSS 구조 설계 프로세스
     ![image](https://user-images.githubusercontent.com/68142773/161249479-14277839-fd7d-407a-841f-588c6da6a281.png)

     1. 설계할 웹의 전체적인 덩어리 나누기

     2. 구분을 위해 시각적으로 백그라운드 컬러주기
     3. 기본(레이아웃 관련) 스타일만 작성해 tag 안에 내용물 추가할 공간 마련
     4. CSS 파일 상단에 초기화 코드 작성해 각 tag들 raw한 상태로 만들기
     5. class 사용해 속성 부여하고 요소 배치하면서 섬세한 작업 시작

   * type selector <br>
     가장 기본적인 선택자로 HTML 태그의 속성을 지정하는 선택자<br>
     브라우저마다 기본 사용자 에이전트 스타일 시트(MDN에서 확인 가능)가 다르기 때문에 초기값을 지정해 태그를 다루기 쉽게 만들어야함
     ![image](https://user-images.githubusercontent.com/68142773/161250251-416a215f-45a4-42e0-b4c7-ff80490a19a4.png)

     ```css
     body,
     p,
     ul {
       margin: 0;
       padding: 0;
     }

     h1,
     h2 {
       margin: 0;
       font-size: inherit;
       font-weight: inherit;
     }
     ```

     > type selector를 활용해 값을 초기화한 모습
     > type selector는 html 문서에 사용되는 모든 tag의 속성을 다루기 때문에 위험함 => 초기화 하는데만 사용

     - initial과 inherit

       tag의 사용자 에이전트 스타일을 초기화할 때 initial로 초기화 하는 경우 상위(부모) 요소의 속성 값보다 초기화한 요소의 우선순위가 더 높기 때문에 부모의 속성을 상속받지 못함. 이를 해결하기 위해 inherit를 사용해 부모의 속성을 상속 받도록 함.
       cf. "해당 속성은 부모에게 상속 받을거다" 라는 의미

   * 공백에 따라 달라지는 selector
     - `div.abc{ property }`
       class 이름이 abc인 div tag를 선택함.
     - `div abc{ property }`
       div tag의 하위에 있는 요소들 중 class 이름이 abc인 요소 선택함.
     - ` div > p{ property }`
       div tag의 자식 요소 중 p를 선택함.
   * margin 중첩 현상

     어떤 두 개 이상 블록 요소의 상하 마진이 겹칠 때 어느 한 쪽의 값만 적용하는 브라우저 렌더링 규칙. 더 큰 마진이 작은 마진을 상쇄 시킨다.

   * 다중 class
     HTML요소에 두가지 이상의 class를 적용할 수 있음.

     ```html
     <div class="footer">
       <a class="icon github" href="">GitHub</a>
       <a class="icon facebook" href="">Facebook</a>
       <a class="icon contact" href="">Contact</a>
     </div>
     ```

     > a tag에 icon과 각 tag에 맞는 class가 추가되어 있다.

     ```css
     .icon {
       /*a tag는 inline element => inline element는 width와 height의 개념 존재하지 않음*/
       width: 48px;
       height: 48px;
       display: inline-block; /* 텍스트의 baseline 기준점으로 텍스트의 크키만큼 w,h로 요소 배치함. 
       left, center, right 표현 가능*/
       /* element를 다른 style로 표현하고 싶을때 사용 */
       border-radius: 30px;
       margin: 10px 0;
       border: 2px solid #ddd;
       color: white;
       background-image: url(images/icons.png);
       text-indent: -9999px;
       background-size: 144px 96px;
     }

     .icon.github {
       background-color: black;
       background-position: left top;
     }
     .icon.facebook {
       background-color: dodgerblue;
       background-position: center top;
     }
     .icon.contact {
       background-color: orangered;
       background-position: right top;
     }

     /* pseudo class */
     .icon:hover {
       background-position-y: bottom;
     }
     ```

     > 공통적인 특징은 icon class에서 property를 지정하고 세부적인 특징은 각 class에서 따로 지정함으로써 코드를 효율성 있게 작성이 가능함.

   * block, inline, inline-block

     - block

       크기를 지정할 수 있고 세로 나열 요소로 요소 사이에 공백이 없다. => margin이 중첩 안됨

     - inline

       가로 나열 요소로 요소 사이에 공간이 없고 크기를 지정하는 것이 불가.

     - inline-block

       inline의 단점을 보완하여 적용한 요소로 block을 크기가 조절 가능하면서 가로 나열 요소이다.

   * 이미지 스프라이트 기법

     ![image](https://user-images.githubusercontent.com/68142773/161387308-f49a1071-b48e-4406-bb21-fab6fcbd5e25.png)

     > 여러 이미지들을 하나의 이미지로 만들어 background-position 속성으로 이미지 좌표 값을 이용하여 사용하는 기법이다.

     - 장점

       - 새롭게 로딩되는 경우 깜박임 현상 없고 이미지가 실제로 사용되기 전 까지 렌더링 되지 않는다.
       - HTTP 요청 횟수를 줄여 로딩 시간 절약 가능
       - 모듈 형태로 모아서 관리가 가능

     - 단점
       - 이미지 용량이 크면 로딩시 매우 오래걸리게 됨.
       - 이미지를 불러오기 위해서 해당 이미지의 position을 알아야함.

   * width:100%와 width:auto

     - width:100%

       부모가 갖고있는 사용 가능한 크기만큼 가득 채움

     - width:auto
       부모가 갖고있는 사용 가능한 크기를 자동으로 채움
       > margin을 요소에 부여할 때 auto는 자동으로 margin을 포함해 계산하지만, 100%는 width를 100% 그대로 유지하기 때문에 auto가 좀더 유연하면서 무조건 좋은 개념이다.

   * box-sizing

     > CSS의 테두리 영역의 크기를 결정하는 속성. content-box와 border-box가 값으로 존재.

     - content-box (default)

       지정한 CSS width 및 height를 컨텐츠 영역에만 적용해 border, margin, padding에 따라 전체 영역이 커질 수 있음.

     - border-box

       지정한 CSS width 및 height를 전체 영역에 적용해 width에 영향 주지 않고 padding 부여 가능하다.

   * text-align:center와 margin:0 auto
   * text-align:center

     tag 내의 text가 가운데로 배치된 것. tag는 그대로이다.

   * margin:0 auto

     tag 자체를 가운데 정렬한 것.

   * CSS selector 우선순위

     > 더 구체적인 selector 일수록 우선순위가 높다.
     > 우선순위가 같고 같은 selector라면 뒤쪽에 나온 selector가 요소의 style을 덮어씌움

     ![image](https://user-images.githubusercontent.com/68142773/161387774-ab120806-fd1a-41cb-a6a6-84b2da207784.png)

   * background 요소
     ![image](https://user-images.githubusercontent.com/68142773/161387833-b5a62e1e-c63d-4eae-a937-c7a9b26c7505.png)

2. PROFILE 구현 실습
   ![127 0 0 1_5500_allday-css_profile_index html](https://user-images.githubusercontent.com/68142773/161387896-667ba801-203e-4951-9850-d88f413eb90f.png)

   - 개선점
     - CSS 요소 추가 EX) 호박
     - sementic html 사용

3. Bukket List 구현 실습
   ![127 0 0 1_5500_allday-css_challenges_challenge01_index html](https://user-images.githubusercontent.com/68142773/161387956-cea3674e-6e3d-4eec-9da5-81b6e55d9d16.png)
   - 개선점
     - sementic html 사용
     - hover 효과 정리
     - CSS 문서 정리
     - CSS 요소 추가

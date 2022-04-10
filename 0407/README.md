# 🔖LikeLion_FrontEndSchool_TIL 4월 07일 (목)

## 이호준 강사님 강의

1. 과제 리뷰

   아래 코드에서 어떤 li가 빨간 배경이고 어떤 li가 글자크기가 변경되는지에 대해 설명하세요.

   ```html
   <!DOCTYPE html>
   <html lang="ko">
     <head>
       <title></title>
       <style>
         h1 + p + p + p {
           color: red;
         }
         .a + li {
           background: red;
         }
         li + li + li {
           font-size: 30px;
         }
       </style>
     </head>
     <body>
       <h1>hello world</h1>
       <p>hello world</p>
       <p>hello world</p>
       <p>hello world</p>
       <p>hello world</p>
       <p>hello world</p>
       <ul>
         <li>Apple</li>
         <li class="a">Mango</li>
         <li class="a">Banana</li>
         <li>Melon</li>
         <li>Strawberry</li>
       </ul>
     </body>
   </html>
   ```

   > selector 사이에 존재하는 `+`는 인접 형제 Selector라 한다.
   > selectorA + selectorB 형태로 작성하고 selectorA 바로 뒤에 위치하는 selector B를 선택한다.
   > EX) `.a + li ` 의 경우 class="a"인 요소 뒤에 있는 li를 선택하므로 위 코드에서는 Banana와 Melon이 선택된다.

2. CSS

   - vmin/vmax

     > viewport min/max의 약어로 브라우저의 너비와 높이 중 크거나 작은 것 기준으로 단위를 측정한다. 주로 모바일에서 많이 사용된다.
     > EX) 1vmin이면 너비, 높이 중 작은 것을 고르고 100을 기준으로 잡아 100중 1을 의미

     ```html
     <style>
       body {
         margin: 0;
         background-color: palevioletred;
       }
       div {
         width: 50vmax;
         height: 50vmin;
         background-color: white;
       }
     </style>
     <body>
       <div></div>
     </body>
     ```

     ![image](https://user-images.githubusercontent.com/68142773/162620257-566fbb0d-afed-4caf-bff8-3856aebcf990.png)

     > 해당 브라우저 화면은 너비가 상대적으로 크고 노ㅠ이가 상대적으로 작다. `div`의 width는 50vmax 단위로 지정했음으로 상대적으로 큰 너비 기준 50만큼의 width를 갖게되고 height는 50vmin 단위로 지정했음으로 상대적으로 작은 너비 기준 50 만큼의 height를 갖게된다.

   - overflow

     > 요소내의 컨텐츠가 요소보다 커서 넘치는 경우 그것을 어떻게 보일지 지정하는 속성이다.

     - values
       - visible: default 값으로 넘칠경우 컨텐츠가 요소 밖으로 보임
       - hidden: 넘치는 부분을 잘라서 숨김
       - scroll: 넘치는 부분을 스크롤바를 통해 볼 수 있게함
       - auto: 컨텐츠 양에 따라 스크롤바를 추가할지 자동으로 결정.

     > overflow-x, overflow-y 속성을 통해 x,y축을 각각 제어하는 것도 가능하다.

   - background

     > 요소의 배경을 지정하는 속성이다. background-size, background-repeat 등을 통해 세부적인 제어가 가능하다.

     ```html
       <style>
         div {
           width: 800px;
           height: 300px;
           background-image: url("https://www.tvn-2.com/nacionales/Imagen-ilustrativa-gato-medio-bosque_18585331.jpg");
           background-size: cover;
           background-repeat: no-repeat;
         }
       </style>
     </head>
     <body>
       <div></div>
       <img
         src="https://www.tvn-2.com/nacionales/Imagen-ilustrativa-gato-medio-bosque_18585331.jpg"
         alt=""
       />
     </body>
     ```

     ![image](https://user-images.githubusercontent.com/68142773/162620613-c834b3b4-9644-4032-84d2-f440dbaf813b.png)

     > 위 사진은 `div`의 background로 지정된 image, 아래 사진은 `img` 요소로 지정한 image

   - line height

     > 글자의 높이를 지정하는 속성

     - value
       - normal: 폰트의 font-family에 따른 글자의 기본 높이(사용하는 font에 따라 기본 값이 다르다.)
       - number: 숫자로 값을 설정할 수 있다. 1은 font-size 만큼의 line-height를 의미.
         line-height:1은 text의 leading 영역을 없애 폰트 높이에 텍스트가 딱 붙게 된다.
       - px,em,%: 해당 unit에 맞춰 글자의 높이가 설정된다. 부적절한 UI가 구현되는 상황이 많아 권장되지 않는다.

   - letter spacing

     > 글자 사이 간격을 조정하는 속성

     ```html
       <style>
         p {
           /* default 값은 1 */
           letter-spacing: 1.6px;
         }
       </style>
     </head>
     <body>
       <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dicta
         eum deserunt perspiciatis neque dolor dolorem id consequatur ut ratione
         non maiores aliquam est eius sed veniam, doloribus rerum earum?
       </p>
     </body>
     ```

     ![image](https://user-images.githubusercontent.com/68142773/162621005-f313a4f1-1f09-44c1-8d52-678fb9804cc2.png)

   - vertiacl align

     > 요소의 수직 정렬을 지정하는 속성. 인라인 레벨요소에 적용이 가능하다.

     - value
       - baseline: default 값으로 소문자 x를 기준으로 하단 라인을 의미. 부모 요소의 기준 선에 맞춘다.
       - sub: 부모 아래 첨자 기준 정렬
       - super 부모 위 첨자 기준 정렬

     ```html
     <style>
       .container {
         border: 1px solid black;
         line-height: 1;
       }
       .one {
         border: 1px solid red;
         vertical-align: baseline;
         /*vertical-align: top; 
             */
         font-size: 40px;
       }
       .two {
         border: 1px solid red;
         vertical-align: sub;
         font-size: 40px;
       }
       .three {
         border: 1px solid red;
         vertical-align: super;
         font-size: 40px;
       }
       img {
         /* 하단에 여백 생기는 경우 사용할만한 방법 */
         vertical-align: top;
       }
     </style>
     ...
     <div class="container">
       <sapn class="one">Lorem ipsum</sapn>
       <sapn class="two">dolor sit amet</sapn>
       <sapn class="three">consectetur adipisicing</sapn>
     </div>
     <div class="container">
       <img
         width="100px"
         src="https://www.tvn-2.com/nacionales/Imagen-ilustrativa-gato-medio-bosque_18585331.jpg"
         alt=""
       />
     </div>
     ```

     ![image](https://user-images.githubusercontent.com/68142773/162621195-3f2abfd2-f771-4551-a1b1-de8d36a4cffd.png)

   - text align

     > 텍스트 정렬을 하는데 사용되는 속성

     ```html
     <style>
       .content {
         width: 100px;
         height: 70px;
         background-color: blueviolet;
       }
       .text_left {
         text-align: left;
       }
       .text_right {
         text-align: right;
       }
       .text_center {
         text-align: center;
       }
       .one {
         margin-left: 50%;
         transform: translateX(-50%);
       }
     </style>
     ...
     <div class="one">
       <div class="content one"></div>
     </div>
     <div class="text_left">
       <span>왼쪽정렬</span>
     </div>
     <div class="text_right">
       <span>오른쪽정렬</span>
     </div>
     <div class="text_center">
       <span>중앙정렬</span>
     </div>
     ```

     ![image](https://user-images.githubusercontent.com/68142773/162621285-0c3ada4c-c9f8-4ba8-a450-8d1a7f8cb520.png)

   - CSS 중앙 정렬

     [CSS 중앙 정렬 링크]()

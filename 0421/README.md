# 🔖LikeLion_FrontEndSchool_TIL 4월 21일 (목)

## 이호준 강사님 강의

### CSS

#### Media Query

> 특정 조건(단말기의 유형, 화면 해상도, 뷰포트의 너비)에서 특정 스타일만 적용되도록 만들어주는 기능

![image](https://user-images.githubusercontent.com/68142773/164896395-e41f9827-8aa5-4ca0-af74-38280f0a1cd5.png)

> 각 디바이스의 너비마다 다른 UI를 구성한다. (모바일 (390px), PC(1920px, 1440px), 태블릿(834px))

- Example

  ```css
  body {
    background-color: tomato;
  }
  @media screen and (max-width: 1000px) {
    body {
      background-color: green;
    }
  }
  @media screen and (max-width: 500px) {
    body {
      background-color: violet;
    }
  }
  ```

  > 지정한 `max-width`보다 스크린의 크기가 작아지면 해당 스타일들이 적용된다.

  - `max-width`와 `min-width` 구별 방법

    > `max-width`는 많아도 이정도보다 크면 안된다. `min-width`는 적어도 이정도보다 작으면 안된다.
    > ![image](https://user-images.githubusercontent.com/68142773/164896903-f0e7b8ad-fdff-4ada-aaab-828fe138db6f.png)

- Bootstrap
  > Bootstrap을 활용해 보다 편리하게 반응형 웹을 디자인 가능하다.
  - Example
    ```html
    <div class="item col-lg-4 col-md-6 col-sm-12">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt sunt
      consequatur illo placeat nisi delectus, porro pariatur excepturi esse
      recusandae laboriosam omnis doloribus commodi nihil nulla architecto
      aperiam possimus non?
    </div>
    ```
    > Bootstrap의 container는 12개의 col을 갖고 있어 이를 활용해 요소를 배치하는 것이 가능하다. 그래서 `div`요소에 있는 각 class 값은 해당 요소가 lg에 해당할 때 col을 4개 차지, 해당 요소가 md에 해당할 때 col을 6개 차지, 해당 요소가 sm에 해당할 때 col을 12개 차지함을 뜻한다. 각 break point는 아래 이미지와 같다.
    > ![image](https://user-images.githubusercontent.com/68142773/164898589-26dd131a-3fc5-41a8-a1b1-62b07d94afff.png)

* 실습

  > ![image](https://user-images.githubusercontent.com/68142773/164900181-ca3db28d-38b4-4c76-8334-3035e2112bfa.png) 해당 반응형 웹 media query 활용해서 구현하기

  - 주요 코드

  ```css
  /* 태블릿 */
  @media (max-width: 768px) {
    .wrap {
      margin-top: 10rem;
      flex-direction: column;
    }
    .section-text p {
      font-size: 1.8rem;
    }
    .section-field {
      flex-basis: max-content;
    }
    .section-field ul {
      flex-direction: row;
      margin-top: 6rem;
    }
    .section-field ul li a {
      font-size: 2.4rem;
    }
    .section-field .field-title {
      top: 3rem;
      left: 3rem;
    }
    .section-field .field-go {
      bottom: 2rem;
      right: 2rem;
    }
  }

  /* 모바일 */
  @media (max-width: 500px) {
    .wrap {
      max-width: calc(100% - 3.4rem);
    }
    .section-text h1 {
      font-size: 3.6rem;
    }

    .section-text p {
      margin-top: 1.4rem;
      font-size: 1.4rem;
    }
    .section-field ul {
      flex-direction: column;
      margin-top: 4rem;
    }
  }
  ```

  - 결과

    1. 원본
       ![127 0 0 1_5500_ll_0421_responsive_web_using_media_query_assgin_index html](https://user-images.githubusercontent.com/68142773/164902669-2cc94f5b-8704-4cbf-8f77-3278c583e6d6.png)
    2. 768px 이하 일때
       ![127 0 0 1_5500_ll_0421_responsive_web_using_media_query_assgin_index html (1)](https://user-images.githubusercontent.com/68142773/164902638-590c3ff3-7a14-46c5-9a9d-c8f93d555ef2.png)
    3. 500px 이하 일때
       ![127 0 0 1_5500_ll_0421_responsive_web_using_media_query_assgin_index html (2)](https://user-images.githubusercontent.com/68142773/164902681-4120ae7f-6ab8-42f3-9011-92762630db71.png)

#### SVG

> 확장 가능한 벡터 그래픽으로 XML 기반의 2차원 그래픽이다. HTML 태그의 집합으로 이루어져 있어 css와 JavaScript로 제어 가능하다.

- 사용 방법

  1. img 태그로 사용하기

     ```html
     <img src="frog.svg" alt="" />
     ```

  2. css background로 사용하기

     ```css
     .cont-svg {
       width: 100vw;
       height: 100vh;
       background: url(frog.svg) no-repeat 0 0;
       background-size: contain;
     }
     ```

  3. 인라인으로 구현하기

     ```html
     <svg
       width="624"
       height="465"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
     >
       <path
         d="m446.529 308.502 79.386-37.479c-37.824-34.863-111.48-58.521-196.146-58.521-123.264 0-223.191 50.142-223.191 112.002 0 61.857 99.927 112.002 223.191 112.002 94.674 0 175.575-29.586 208.011-71.334l-91.251-56.67Z"
         fill="#00A249"
       />

       .. 중략 ...

       <path
         d="M383 129c0 16.016-13.208 29-29.5 29S324 145.016 324 129s13.208-29 29.5-29 29.5 12.984 29.5 29Z"
         stroke="#000"
       />
       <ellipse
         class="eye-right"
         cx="353.5"
         cy="129"
         rx="12.5"
         ry="12"
         fill="#000"
       />
     </svg>
     ```

  4. object 태그 사용하기
     ```html
     <object data="./image.svg" type="image/svg+xml"></object>
     ```

  > 3, 4 번 방식으로 svg를 사용하는 경우 css, JavaScript를 활용해 각 svg를 구성하는 요소들을 제어하는 것이 가능하지만, 1, 2번 방식은 불가능하다. 이를 인지하고 알맞은 방식으로 svg를 사용해야 한다.

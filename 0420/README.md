# 🔖LikeLion_FrontEndSchool_TIL 4월 20일 (수)

## 한재현 강사님 강의

### CSS

#### CSS 실무 테크닉

1. 반응형 컨텐츠 만들기

   - 반응형 이미지

     1. `width:100%`
     2. `max-width:100%`
        `max-width` 속성은 지정한 값까지 너비가 커질 수 있다는 의미 (이미지의 최대 너비)

   - 반응형 백그라운드 이미지

     1. `cover`: 중앙 비율 유지
     2. `contain`: 원본 비율 유지

        > `contain`의 경우 이미지 전체가 보여지도록 설정이 돼서 container의 크기에 따라 이미지가 전체에 꽉 차지 못하는 경우가 생긴다. `cover`의 경우 container의 영역안에 이미지가 빈 틈 없이 매워지지만 이미지 일부가 잘리게된다.

   - 반응형 동영상

     > 대부분의 동영상은 16:9 비율을 갖기 때문에 이 비율을 유지하면서 동영상이 반응형으로 크기가 조절되어야 한다. 이를 위해 사용된 개념이 `padding-top`이다.

     - `padding-top`: padding 값은 요소의 width 값을 참조하기 때문에 width가 100px 일때 padding이 20%면 width는 20px가 된다. 이를 활용해 너비에 따라 높이까지 함께 조절되는 요소를 만들 수 있다.

       ```css
       .cont-video {
         position: relative;
         padding-top: 56.25%;
         /* padding-top, padding-bottom 속성의 % 값은 부모 요소의 넓이에 비례합니다. */
         /* 예를 들어 부모의 넚이가 1200px 이라면 padding-top=50% 의 값은 600px 과 같습니다. */
       }

       .video-next-level {
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
       }
       ```

       > 일반적으로 padding 값은 content 영역과 별개이기 때문에 `.cont-video` 요소에 `video-next-level`을 넣게 되면 padding 값 만큼 아래로 밀려날 것 같지만, 이를 방지하기 위해 `position: absolute;`를 사용한다.

2. vending-machine code review
   - 업데이트가 빈번한 이미지는 img 태그가 좋고, 업데이트가 거의 없는 이미지는 background로 지정해 html tag를 최대한 적게 쓰는 것이 좋다,
   - media query를 활용해 사용자 디스플레이 크기에 따라 반응하는 반응형 웹을 디자인 하는 것이 가능하다.
   - flex, grid, float 요소를 적절히 섞어 사용하면 html 요소들을 배치할 때 편리
   - 중복되는 요소들은 모듈 형태로 만들어 관리하는 것이 좋다.

# 🔖LikeLion_FrontEndSchool_TIL 4월 14일 (목)

## 이호준 강사님 강의

### CSS

#### Flex

> 컨텐츠를 정렬하거나 공간을 나눌 수 있는 CSS 속성 집합으로 주로 1차원 형태의 요소들을 배치할 때 편리하다.

1. flex-basis

   > flex 아이템의 기본 크기를 설정하는 요소.
   > flex-direction에 따라 설정되는 크기가 달라진다. (row일 때는 너비 col일 때는 높이)

   ```css
   .item {
     flex-basis: auto; /* 기본값 */
     /* flex-basis: 0; */
     /* flex-basis: 50%; */
     /* flex-basis: 300px; */
     /* flex-basis: 10rem; */
     /* flex-basis: content; */
   }
   ```

2. flex-grow
   > flex 아이템이 flex-basis 값보다 커질 수 있는지를 결정하는 속성으로 0보다 큰 값이 지정되면 해당 아이템이 flexible box로 변해 원래 크기보다 커지면서 빈 공간을 채운다.
   ```css
   .item {
     flex-grow: 1; /* 빈공간을 채우게 됨 */
     /* flex-grow: 0; */ /* 기본값 */
   }
   ```
   > 각 자식요소들에게 값을 일일이 부여해 비율로 빈 공간을 채우는 것이 가능하다.
3. flex-shrink
   > flex-grow와 쌍을 이루는 속성으로, 아이템이 flex-basis 값보다 작아질 수 있는지를 결정하는 속성이다. 0보다 큰 값이 지정되면 해당 아이템이 flexible box로 변해 원래 크기보다 작아지게 된다. (default value가 1이라 따로 설정할 필요는 없다.)
   ```css
   .item {
     flex-basis: 150px;
     flex-shrink: 1; /* 기본값 */
   }
   ```
   > 각 자식요소들에게 값을 일일이 부여해 부모요소의 공간에 따라 줄어드는 속도를 조절하는 것이 가능하다.
4. order
   > flex item들의 순서를 결정하는 요소로 수가 작을 수록 더 앞에 위치하게 된다. (default value는 0 => 0 기준으로 0보다 작으면 앞으로 크면 뒤로 위치)

#### Grid

> 컨텐츠를 정렬하거나 공간을 나눌 수 있는 CSS 속성 집합으로 주로 2차원 배열 형태의 요소들을 배치할 때 편리하다.
> ![image](https://user-images.githubusercontent.com/68142773/163781272-122cc88d-675a-41c4-915b-01c3630d0a1c.png)

1.  Grid row / column

    > Grid의 행과 열 크기를 지정하는 속성

    ```css
    .container {
      grid-template-columns: 200px 200px 500px;
      /* grid-template-columns: 1fr 1fr 1fr */
      /* grid-template-columns: repeat(3, 1fr) */
      /* grid-template-columns: 200px 1fr */
      /* grid-template-columns: 100px 200px auto */

      grid-template-rows: 200px 200px 500px;
      /* grid-template-rows: 1fr 1fr 1fr */
      /* grid-template-rows: repeat(3, 1fr) */
      /* grid-template-rows: 200px 1fr */
      /* grid-template-rows: 100px 200px auto */
    }
    ```

    > repeat(), 1fr, px 와 같은 값들로 행과 열의 크기를 설정 가능하다.

2.  Gap
    > Grid 트랙 간의 간격을 지정하는 속성
    ```css
    .container {
      row-gap: 10px;
      /* row의 간격을 10px로 */
      column-gap: 20px;
      /* column의 간격을 20px로 */
    }
    ```
    > 행과 열의 간격을 각각 지정 가능하다.
3.  각 셀의 영역 지정

    > `grid-column-start`, `grid-column-end`, `grid-column`, `grid-row-start`, `grid-row-end`, `grid-row` 등의 속성을 활용해 각 셀의 영역을 지정(병합)할 수 있다.

    - Example
      ![image](https://user-images.githubusercontent.com/68142773/163804163-d7cbd9dd-030c-49c9-96f2-d215a765aa14.png)

      > 기존 gird

          ```css
          .item:nth-child(1) {
              /* 분수가 아니고, 1번부터 3번까지 공간 차지 */
              grid-column: 1 / 4;
          }
          ```
          ![image](https://user-images.githubusercontent.com/68142773/163804309-aa4337d0-ea77-4067-8780-079ffa7559e1.png)
          > 스타일 적용 후 grid. 1번 라인부터 4번 라인 까지로 영역이 확장된 것을 확인 가능하다.

    - cf. 각 grid 트랙 기준이 아닌 선 기준임을 유의해야 한다.

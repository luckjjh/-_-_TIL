# 🔖LikeLion_FrontEndSchool_TIL 4월 12일 (화)

## 한재현 강사님 강의

### BFC

> 브라우저에 요소를 렌더링하는 로직이다. 쉽게 말하면 BFC가 생성이 된다면, BFC 하위 요소들은 BFC를 html요소로 생각하고 랜더링을 하게 된다.

- 생성 조건
  1. 문서의 root element인 경우 (`<html>`)
  2. value가 none이 아닌 float 요소
  3. 요소의 position이 absolute이거나 fixed인 경우
  4. `display: inline-block` 인 경우
  5. value가 visible이 아닌 overflow 요소 (주로 `overflow:hidden`)
  6. display가 flex / inline-flex 인 경우

이 외에도 많은 생성 조건이 있지만, 잘 사용되지 않는 경우이므로 생략하겠다.

BFC는 하위 요소들이 BFC를 html 요소로 인식하기 때문에 여러 방면에서 활용이 가능하다.

- 활용 예시

  1. 마진 병합 현상

  2. 부모요소가 float 요소들 포함하기

  3. float된 요소를 감싸는 텍스트를 분리하기

### CSS

1.  float

    > 다양한 객체를 띄워서 정렬하는 속성이다.

    - block 박스 태그와 float 속성 태그

      블록 박스 태그는 아래 사진과 같이 가로폭 전체 높이를 가지는 속성을 갖는다.
      ![image](https://user-images.githubusercontent.com/68142773/163196545-20bca64c-f94c-4350-a48c-3dfcec57798e.png)

      1번째 박스에 `float:left` 속성을 적용하게 되면 다음과 같아진다.

      ![image](https://user-images.githubusercontent.com/68142773/163196721-04b03b5f-53da-43a1-87ed-04ed08aaa8b9.png)

      1번째 박스가 inline-block과 같이 content 만큼의 공간을 차지하게 되고 다른 요소에 대해 왼쪽에 배치된다.

    * float의 문제점

      아래 코드와 같이 부모요소의 자식요소가 모두 float 요소인 경우 부모요소가 자식요소들을 인식하지 못해 자식 요소의 높이를 반영하지 못하는 문제점이 있다.

      ```html
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            .wrap {
              border: 4px solid blue;
            }
            .content {
              float: left;
              margin: 5px;
              height: 20px;
              border: 2px solid green;
            }
          </style>
        </head>
        <body>
          <div class="wrap">
            <div class="content">내용1</div>
            <div class="content">내용2</div>
          </div>
        </body>
      </html>
      ```

      ![image](https://user-images.githubusercontent.com/68142773/163197715-7a810e44-e06a-4bdc-82cd-653ad8b5ae23.png)

      > **이러한 현상이 일어나는 이유는?**</br>![image](https://user-images.githubusercontent.com/68142773/163198039-9d78e51a-e753-46fc-b5c2-1abeabd6fc39.png)</br> 브라우저는 요소들을 화면에 어떻게 보여줄지 결정하는 여러가지 방법이 있는데 그 중 대표적인 세 가지가 position, float, normal flow이다. 대부분의 요소들은 normal flow에 따라 레이아웃이 결정되지만, float, position(absolute, fixed)의 방법을 사용하게 되면 요소가 normal flow를 벗어나면서 normal flow에 속한 요소들이 float, postion 속성이 적용된 요소들을 인식하지 못한다.

      - 해결방법

        1. BFC 사용
           > 부모요소에 `overflow:hidden`과 같은 속성을 적용해 BFC를 사용하게 되면 BFC 하위요소들이 BFC를 html 요소로 인식을 하게 되므로 해당 BFC 기준으로 normal flow에 속하게 되어 문제점을 해결할 수 있다.
        2. 부모 요소의 값을 직접 지정

           > 자식 요소들의 크기만큼 강제로 부모요소의 높이를 직접 지정해 주는 방법이다. 자식 요소의 높이가 변경되는 경우 문제점이 발생하기 때문에 바람직한 방법이 아니다.

        3. clear 속성 사용

           > float된 요소의 바로 다음 형제 요소에 clear 속성을 사용한다.

        4. clear-fix 방법
           > CSS의 가상요소인 `::after`를 활용해 부모요소의 가상으로 마지막 child 요소를 추가해 부모요소가 자식 요소들을 알아보게 하는 방법이다. 반드시 float된 요소 뒤에 위치해야한다.
           ```css
           .wrap::after {
             content: "";
             display: block;
             clear: both;
           }
           ```

    * login page 구현

      > figma를 참고해 login page를 구현하는 과제

      ![image](https://user-images.githubusercontent.com/68142773/163200378-b8648084-47f1-4d7d-91d8-aa712b22a770.png)

      > 초기에 figma의 속성들을 그대로 사용해서 `position:absolute`를 부여하고 top, left로 요소를 이동시가는 방법으로 login page를 구현했는데 이러한 방법보다 margin, padding과 float와 같은 속성을 이용해 다양한 브라우저의 환경에 적응할 수 있도록 구현해야 된다.

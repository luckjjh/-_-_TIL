# 🔖LikeLion_FrontEndSchool_TIL 4월 19일 (화)

## 한재현 강사님 강의

### CSS

#### CSS 실무 테크닉

1.  커스텀 input, select 박스

    > 꾸미기 힘든 input 요소를 화면에서 숨기고 label 요소를 연결해 label요소에 스타일을 적용시켜

2.  IR 테크닉

    > 디자인적으로 보이지 않지만, 스크린 리더나 브라우저를 위해 정보를 전달하는 텍스트를 html 곳곳에 숨겨두는 방법

    1. PC용 사용된 이미재내 의미있는 텍스트의 대체텍스트를 제공할 때 EX) background image의 alt 값 용도로 사용
       ```css
       .ir_pm {
         display: block;
         overflow: hidden;
         font-size: 1px;
         line-height: 0;
         text-indent: -9999px;
       }
       ```
    2. 스크린리더가 읽을 필요 없지만, 마크업 구조상 필요한 경우
       ```css
       .screen_out {
         overflow: hidden;
         position: absolute;
         width: 0;
         height: 0;
         line-height: 0;
         text-indent: -9999px;
       }
       ```
    3. 중요한 이미지 대체텍스트로 이미지가 로드되지 않아도 텍스트를 보이고자 할때
       ```css
       .ir_wa {
         display: block;
         overflow: hidden;
         position: relative;
         z-index: -1;
         width: 100%;
         height: 100%;
       }
       ```

3.  CSS Sprite 기법
    여러가지의 이미지를 하나의 이미지 파링 안에 배치하여 이미지로드 부담을 줄이는 방법

    [이미지 Sprite tool 링크](https://www.toptal.com/developers/css/sprite-generator/)

4.  레티나 디스플레이 대응

    > 레티나랑 일반 모니터보다 높은 화소밀도를 가진 디스플레이 기존 px 단위 사용한 이미지를 넣게 되면 이미지가 흐려지게 됨.

    > 그리고자 하는 사이즈의 2배 되는 이미지를 준비해 업로드하면 해결 가능

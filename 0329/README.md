# 🔖LikeLion_FrontEndSchool_TIL 3월 29일(화) 

## 제주코딩베이스캠프 이호준 강사님의 강의
### 프론트엔드 로드맵(전체 로드맵 중 배울과목, 추천과목만 기입함)
  * 프론트엔드
    * 언어
      * HTML/CSS
      * JavaScript
    * 프레임워크 및 라이브러리
      * Bootstrap
      * jQuery
      * React.js
      * SASS
      * Vue.js
      * next.js
  * 백엔드
    * 언어
      * JavaScript
    * 프레임 워크
      * Express(Node.js)
    * 인프라
      * AWS
      * firebase
    * Database
      * MySQL
      * MongoDB
    * 가상화 구축
      * Docker
  * 형상관리
    * github
  * 정보보안
    * 웹 해킹
    * 네트워크 해킹
      * DoS
    * 법
      * 개인정보보호법
      * 정보통신망법
  * 그 외 알아야 할 지식
    * 웹 접근성
    * 알고리즘 & 코테
    * SEO
    * HTTP/HTTPS
    * 리눅스
    * TDD
    * 웹팩
    * IDE

<hr/>

### 강의 내용 
**1. HTML의 기초**
* HTML의 정의
  * Hyper Text Markup Language의 약자로 링크로 연결된 텍스트와 태그와 같은 기호를 이용해 문서를 작성하도록 도와주는 언어를 의미
* CSS의 정의
  * Cascading Style Sheets의 약자로 웹의 전반적인 스타일 작성해 저장하는 파일 의미
* HTML(뼈대) + CSS(살) + JavaScript(근육)

**2. URL, IP, PORT**

| www.naver.com | 도메인, URL | 이름 |
|---------------|-------------|-----|
| 105.209.222.141 | IP | 주소 |
| 22, 23, 80, 433 ... | Port | 문 |

* URL
  * 웹상의 문서, 이미지, 동영상 등의 **자원들의 위치를 나타내는 주소**</br>
  EX) 네이버 URL => https://www.naver.com/
  * 프로토콜 종류, 자원이 있는 IP 주소, 도메인 주소, 포트 주소, 자원 위치로 구성되어 있어 </br>
  "프로토콜// IP주소 or 도메인 주소 or 포트 주소 / 자원 위치" 형식을 갖음
* IP
  * 컴퓨터 네트워크 상에서 각 장치들의 고유 번호를 의미
  * IP 주소는 외우거나 구별하기 어려워 DNS를 통해 구별하기 쉬운 도메인 주소로 변환됨
  * 택시를 타고 기사님에게 제주코딩베이스캠프로 가달라하면 네비에 검색해 정확한 주소를 얻어 해당 주소로 가는 것과 같은 원리로 URL과 함께 동작
* 포트
  * 포트는 소프트웨어에서 네트워크 서비스나 특정 프로세스를 식별하는 논리 단위
  * 번호로 구별되어 포트 번호라 불리고 IP 주소와 함께 쓰여 해당하는 프로토콜에 의해 사용 </br>
  EX) 105.209.222.141:80
  
**3. HTML Living Standard**
  HTML 문법 등을 규정한 표준.
  * XHTML과 HTML living standard </br>
  XHTML은 웹페이지를 제작하기 위해 사용되는 HTML4를 XML에 맞도록 재정의한 언어라 할 수 있다. </br>
  HTML5보다 조금 더 구조화된 형식과 엄격한 문법을 갖고 있다.
  ![image](https://user-images.githubusercontent.com/68142773/160562093-f3751f2e-c956-4977-a88b-e3820f407cf5.png)
  
  * HTML 문법
    * HTML 요소는 HTML 태그와 속성으로 구성
    * 보통 여는 태그와 닫는 태그 한쌍으로 구성 </br>
    ```HTML
    <!-- 여는 태그 Contents 닫는태그 -->
    <p>Hello World!</p>
    ```
    * 일부 태그는 한쌍 </br>
    EX) br, hr
    * 속성은 항상 여는 태그에 삽입
    * Sementic HTML </br>
    요소에 고유한 의미를 지정해 웹 접근성에 도움을 줄 수 있음
  
  * HTML Tag
    * document element & metadata
      * ``` <!DOCTYPE html> ``` </br>
      문서 타입에 대한 정보를 제공하는 tag. 만약 제거하면 브라우저는 쿼크 모드로 html을 렌더링하게 되어 브라우저마다 다르게 동작할 가능성이 있어 반드시 문서 최상단에 선언
      * ``` <html> ``` </br>
      HTML 문서의 최상위 요소. lang 속성을 통해 문서의 주 언어가 무엇인지 설정 가능함.
      * ``` <head> ``` </br>
      문서에 적용되는 메타데이터의 집합</br>
      cf. 메타데이터: 데이터에 대한 데이터.
      * ``` <title> ``` </br> 
      문서의 제목을 의미. 반드시 한번만 사용되어야 함.
      * ``` <link> ``` </br>
      외부의 자원을 문서와 연결하는 역할함. CSS, JavaScript 파일 같은 자원 연결.
      * ``` <meta> ``` </br>
      해당 문서의 메타데이터를 나타내는 요소
        * ``` charset ```: 문서의 문자 인코딩 상태 의미, 보통 UTF-8로 설정
        * ``` name="author" ```: 페이지 작성한 개발자의 이름
        * ``` name="description" ```: 페이지에 대한 설명 정보를 나타냄. 검색엔진이 사용자에게 결과 화면 출력할 때 중요한 고려 요소.
        * ``` name="viewport" ```: 모바일 장치에서 사용자 화면의 사이즈에 대한 값 설정.
        * ``` http-equiv="X-UA-Compatible” ```: 프리그마 지시문. 브라우저에게 어떤 행동을 지시하려는 목적으로 사용.
    * section </br>
    주제별로 그룹화 된 콘텐츠를 나타내는 tag들.
      ![image](https://user-images.githubusercontent.com/68142773/160566560-8f472cd9-d09d-41f8-910c-65668b5c4a2c.png)
      * ``` <body> ``` </br>
      실제 사용자에게 보여지는 문서 컨텐츠 나타내는 요소.
      * ``` <article> ``` </br>
      독립적으로 구분하거나 재사용할 수 있는 구획을 나타냄. </br>
      요소를 다른 서비스에 가져다 놔도 이상하지 않은 거를 article tag로 지정.
      * ``` <section> ``` </br>
      일반적으로 연관성 있는 문서의 구획을 나누고자 할 때 사용하는 요소. </br>
      요소를 다른 서비스에 가져다 놓으면 이상한 거를 section tag로 지정.
      ```
      <article> vs <section>
      문서의 흐름과 상태에 따라 적절하게 배치해야함.
      ```
      
      * ``` <header> ``` </br> 
      특정 컨텐츠의 시작 부분을 나타내는 요소. 일반적으로 구역의 제목을 포함.
      
      * ``` <h1> ... <h6> ``` </br>
      제목을 지정하기 위해 사용. 1~6까지 중요도에 따라 사용되며 단순히 글자의 크기나 굵기를 조절하기 위해 사용되지 않음 </br>
      ``` <h1> ``` 요소는 페이지당 한 번만 사용되야함.
      
      * ``` <nav> ``` </br> 
      네비게이션, 탐색 요소. 보통 메뉴, 네비게이션바에 사용됨.
      
       * ``` <aside> ``` </br> 
      해당 콘텐츠와 별개 콘텐츠를 나타낼 때 사용. 보통 사이드바, 광고 영역으로 활용.
      
       * ``` <footer> ``` </br> 
      작성자 정보, 저작권, 관련 링크 등의 내용을 담는 요소.
      
      * ``` <address> ``` </br> 
      가장 가까운 부모 article이나 body 요소의 연락처 정보를 나타냄.
      
    * Grouping content </br>
    콘텐츠를 묶어서 관리할 수 있도록 사용하는 tag들
      * ``` <ol>, <ul>, <li> ``` </br>
      각각 ordered list, unordered list, list item의 약자로 정렬된 배열, 정렬되지 않은 배열, 배열의 아이템을 뜻함. </br>
      ``` <li> ```는 ```<ol>```, ```<ul>```요소 안에서만 사용되어야함. </br>
      ``` 
      <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </ul>
      <ol type="I">
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </ol>
      <p>type : a, A, i, I</p>
      ``` 
      
      ![image](https://user-images.githubusercontent.com/68142773/160571365-e3c73922-2c5f-4c17-a8e6-effb81a795a1.png)

      ``` <ol> ```의 type으로 a, A, i, I를 사용해 다른 방식으로 표현 가능함.
      * ``` <dl>, <dt>, <dd> ``` </br>
      목록을 정의할 때 사용되는 tag로 사전처럼 어떠한 것을 정의할 때 쓰이는 목록. </br>
      definition list, definition term, definition description의 약자로 CSS 속성을 부여해 dt를 보이지 않게 하고, dd에 용어 설명을 넣어 웹 접근성을 준수하는데 사용된다.
      
      ```
      <dl>
        <dt>HTML</dt>
        <dd>마크업 언어 입니다.</dd>
      </dl>
      ```
      ![image](https://user-images.githubusercontent.com/68142773/160572341-3aebdf2b-b379-4ce5-9984-0ad5c6593fcc.png)

      * ``` <div> ``` </br>
      레이아웃을 나눌때 사용하는 태그. 컨텐츠의 형태를 변형시키지는 않지만 하위에 있는 여러 요소를 묶어 스타일 변경 가능. </br>
      ``` <section> ```, ```<article>```, ```<header>```, 등의 tag들은 ``` <div> ```와 같은 역할을 하지만, 태그에 의미를 부여한 것이기 때문에 의미가 부여된 태그를 먼저 사용하고 대용할 태그가 없을 때 ``` <div> ```를 사용하는 것이 바람직함.
      
      * ``` <figure>, <figcaption> ``` </br>
      이미지에 자막을 연결되도록 하는 tag.
      ```
      <figure>
        <img src="imgs/facebook.png" alt="페이스북" />
        <figcaption>페이스북 로고</figcaption>
      </figure>
      ```
      
      ![image](https://user-images.githubusercontent.com/68142773/160574087-1692bb15-5f61-4088-b417-310602d0ca6c.png)
      
      * ``` <p> ``` </br>
      단락을 표시하는 tag. 하나의 완결된 문단을 의미하기 때문에 p tag 안에 자식으로 p를 사용하거나 줄바꿈의 용도로 사용해서 안됨.
      
      * ``` <pre> ``` </br>
      HTML에 작성한 내용 그대로 화면에 표현하는 tag. 주로 코드를 표현할 때 사용.
      ```
      <pre>
        <code>
            let val = 1;
            function myFunc(value){
                return value;
            }
            myFunc(val);
         </code>
      </pre>
      ```
      ![image](https://user-images.githubusercontent.com/68142773/160574994-bd292183-c496-4177-ba94-08c8e715a9ae.png)
      
      * ``` <blockquote> ``` </br>
      인용블록으로 q는 인용구를 나타냄.
      ```
      <blockquote>
        <p>제발 그만해.. 이러다가 다~~ 죽어!</p>
        <cite>오징어게임 오일남</cite>
      </blockquote>
      <p><q>제발 그만해.. 이러다 다~~ 죽어!</q>라고 오일남이 소리쳤습니다.</p>
      ```
      ![image](https://user-images.githubusercontent.com/68142773/160575318-25c4d3b7-d4c4-4ae1-a748-eb6db8c047a9.png)
      
      * ``` <main> ``` </br>
      HTML 문서의 주요 콘텐츠를 나타내는 tag. </br>
      주요 콘텐츠 영역은 문서의 핵심 주제나 웹 어플리케이션의 핵심 기능에 직접적으로 연결되어 있는 부분을 뜻하기 때문에 메인 요소 안에 들어가는 내용은 문서의 유일한 내용이어야 함.
      
      ![image](https://user-images.githubusercontent.com/68142773/160577058-f07647a7-4525-4492-afb1-9a8254e15200.png)
      github도 main tag안에 사이트의 메인 컨텐츠를 담아두고 있다.
      
      * ``` <hr> ``` </br>
      이야기에서 장면 전환 혹은 문단 안에서 주제가 변경되었을 때 그 구별을 위해 사용됨.
      ```
      <blockquote>
        <p>제발 그만해.. 이러다가 다~~ 죽어!</p>
        <cite>오징어게임 오일남</cite>
      </blockquote>
      <hr />
      <p><q>제발 그만해.. 이러다 다~~ 죽어!</q>라고 오일남이 소리쳤습니다.</p>
      ```
      ![image](https://user-images.githubusercontent.com/68142773/160577767-4c55b756-500a-46fd-9cd2-709033da0c36.png)
      
      
      

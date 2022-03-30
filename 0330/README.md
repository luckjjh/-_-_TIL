# 🔖LikeLion_FrontEndSchool_TIL 3월 30일 (화)
## 제주코딩베이스캠프 한재현 강사님의 강의
### 과제
1. 주어진 웹페이지 구조 그리기
</hr>

### 강의 내용

1. Text-level semantics
	* ```<br>```, ```<wbr>```
  	두 tag 모두 줄바꿈을 위한 tag. ```<wbr>```의 경우 텍스트 박스 안에서 텍스트가 한줄로 표시 안될때 줄바꿈을 함.
    cf. 텍스트가 입력되는 tag에 style white-space를 부여해 줄바꿈을 언제 할지 지정 가능
    
    ``` html
        <p style="white-space: normal">
        <!-- white-space: normal => 공백 만나면 줄바꿈 해라 -->
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Numquam ut,
        aperiam qui culpa quibusdam nam excepturi ipsam esse deserunt fugiat
        debitis explicabo quidem odio quis mollitia ullam quod ab architecto!
      	</p>

        <!-- <wbr tag 텍스트 박스에서  한줄로 표시 안될때 줄바꿈 -->
        <p style="white-space: nowrap">
          <!-- white-space: nowrap => 공백 만나도 줄바꿈 안하고 계속 이어짐 -->
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <wbr />Numquam
          ut, aperiam qui culpa quibusdam nam excepturi ipsam esse deserunt fugiat
          debitis explicabo quidem odio quis mollitia ullam quod ab architecto!
        </p>
        <!-- 한글은 단어 단위로 나뉘어지지 않음 -->
        <!-- 웹브라우저 랜딩할때 한글 영어 차이 있기 때문 -->
        <!-- word-break: keep-all style 부여해서 단어 단위로 줄바꿈 가능 -->
        <p style="word-break: keep-all">
          풀밭에 같지 전인 노년에게서 청춘의청춘의청춘의<wbr /> 방지. 전인 열락의
          풀이 것이다.
        </p>
    ```
    
    
    * ```<a href="path">``` tag
    ```<a>``` tag는 hyper text를 만들때 사용함. ```<a>``` tag 안에 가르키고 있는 링크가 반드시 포함되어 있어야 함.
      ```target=_blank``` 스타일을 추가해 새로운 창으로 링크를 연결해 주는 것도 가능.
      
      ``` html
      <a href="https://www.naver.com" target="_blank">네이버</a>
      ```
      
    html 파일을 연결해 해당 파일로 이동하거나, ```#id```를 href로 지정해 목차 형태로 사용 가능함.
    
      ``` html
      <a href="#one">click1</a>
      <a href="#two">click2</a>
      <a href="#three">click3</a>
      <section id="one" style="height: 100px">section 1</section>

      <section id="two" style="height: 100px">section 2</section>

      <section id="three" style="height: 100px">section 3</section>
      ```
      ```download``` 속성을 부여해 링크된 문서를 다운로드 받는 것도 가능함.
      ``` html
      <!-- 연결된 link 다운로드 -->
      <a href="./index.html" download>click</a>
      <!-- 이름 지정 가능 -->
      <a href="./hello.hwp" download="a.hwp">hwp download click</a>
      ```
      
    * ```<b>```, ```<strong>```
    	글씨를 bold하게 표현할 때 사용하는 tag. ```<strong>``` tag의 경우 bold하게 표현함과 동시에 중요도를 강조할 때 사용.
        ```
        <p><strong>hello</strong> adipisicing <b>elit</b></p>
        ```
        ![image](https://user-images.githubusercontent.com/68142773/160790806-c585f315-75be-46ea-8b37-f4706095e7a7.png)

    * ```<i>```, ```<em>```
    	글씨를 기울여서 표현할 때 사용하는 tag. ```<em>``` tag의 경우 기울여서 표현함과 동시에 중요도를 강조할 때 사용. 주로 문단 주 언어와 다른 언어로 표현된 부분, 소설의 등장인문 생각이 표기되어 있는 부분, 주위와 구분해야 하는 부분을 표현하는 데 사용.
        ```
        <p>시장안은 사람들의 활기로 가득차 있었다.</p>
        <p>
          상인 : 이 상품은 현재 <em>30%</em> 할인중입니다! 나 : 아하 그렇군요!
          <i> '흠.. 왜 하필 지금 할인하는걸까?!' </i> 좀 더 구경하고 올게요!
        </p>
        <p>나는 상인의 의도를 의심할 수 밖에 없었다.</p>
        ```
        ![image](https://user-images.githubusercontent.com/68142773/160790915-b2626d0e-1051-402e-8220-29c3739e966f.png)
     
    * ```<dfn>```
    	현재 문맥에서 정의하고 있는 것을 나타내는 tag.
        ``` html
        <p>
          <dfn>Lorem</dfn>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, illo?
          Voluptate, molestias labore! Rerum accusantium quisquam magni, itaque quia
          nulla corrupti, maiores doloribus natus laborum id necessitatibus, aut
          deserunt cum.
        </p>

        ```
        ![image](https://user-images.githubusercontent.com/68142773/160791751-ea6b68b0-f21a-453f-b012-e4ab38d74a8d.png)
       
    * ```<abbr>```
    	약자를 나타내고 싶을 때 사용하는 tag.
        ``` html
        <dl>
          <dt>WWW</dt>
          <dd>
            <!-- title을 부여해 마우스 호버하면 title 나오게 함 -->
            <dfn><abbr title="World Wide Web">WWW</abbr></dfn>
            는 인터넷에 연결된 컴퓨터를 통해 사람들이 정보를 공유할 수 있는 전
            세계적인 정보 공간을 말한다. - 위키백과
          </dd>
      </dl>
        ```
        ![image](https://user-images.githubusercontent.com/68142773/160792147-8b357d76-ab3b-4fc2-8dd2-e3ca5be8204d.png)
    * ```<sup>```, ```<sub>```
    	위 첨자, 아래 첨자를 나타내는 tag. 보통 화학기호나 수학 공식등 첨자 기호를 사용해야하는 곳에서만 사용.
        ``` html
        <p>H<sub>2</sub>0</p>
        <p>x<sup>2</sup>=4</p> 
        ```
        ![image](https://user-images.githubusercontent.com/68142773/160793493-b8f1049b-f63f-4c72-9097-094f55075b87.png)
    * ```<span>```
    	별다른 의미 없이 줄 바꿈 없이 영역을 묶는 용도로 사용.
        여러 요소를 묶어 컨트롤하기 위한 영역으로 id, class를 사용.
        div와 마찬가지로 적합한 tag가 없을 때 최후 수단으로 사용.
        ``` html
        <p>
          <span id="명언">제발 그만해.. 이러다 다~~ 죽어!</span>라고 오일남이
          소리쳤습니다.
       </p>
        ```
        ![image](https://user-images.githubusercontent.com/68142773/160794203-746f7791-4894-4fa5-9983-637c4ead21f7.png)
        id에 ```color: red;``` 속성을 부여해 ```<span>```으로 감싸진 영역만 붉은색 글씨색을 보임.

2. Emvedded content
	* ```<img>```
    	html 페이지에 이미지를 삽입할 때 사용하는 tag. 
        따로 닫는 tag가 없어 안에 contents를 넣거나 자식요소를 추가하는 것이 불가.
        alt 속성을 활용해 웹 접근성과 SEO에 도움을 줄 수 있다.
        cf. alt 속성은 되도록 구체적으로 기입하는 것이 좋고 장식, 디자인을 위한 요소는 alt 값을 비워 스크린 리더가 해당 요소를 읽지 않게 하는 것이 좋음.
        ``` html
        <img src="/images/peng.png" alt="" title="펭귄" />
        ```
        * 반응형 이미지를 위한 srcset
        	 srcset 속성을 사용해 여러 해상도에 대응하여 브라우저가 최상의 이미지를 로딩하는데 도움을 줄 수 있음. 다양한 크기를 가지는 **동일** 이미지를 최소 2개 이상 사용할 때 사용하고 브라우저에게 이미지 선택권을 위임하는 속성.
             cf. srcset은 explore에서 동작하지 않음으로 src를 입력해야함. 원하는 tag나 속성이 브라우저에서 동작하는지 안하는지를 확인하기 위해 https://caniuse.com/ 를 활용하는 것이 좋음.
             * x, w, size 속성
             	x서술자는 화소의 밀도(한 px에 몇 화소가 들어갈 수 있는지)를 나타냄. 디바이스 화소 밀도에 따라 이미지를 로딩하도록 브라우저에게 알림.
              
                ``` html
                <img
                  width="200px"
                  srcset="/images/peng.png 2x, /images/peng.png 3x"
                  src="/images/peng.png"
                  alt="test"
               />
                ```
                
                1px에 2개의 화소가 들어갈 때, 1px에 3개의 화소가 들어갈 때에 따라 다른 이미지를 보임.
                w서술자는 이미지 넓이에 따라 브라우저가 띄울 이미지를 알려줌.
                이때, w서술자와 x서술자는 동시 사용 불가.
                size 속성은 뷰포트 조건에 따라 이미지가 UI안에서 차지하게 될 사이즈를 브라우저에게 알림.
                
               ``` html
               <img
                srcset="
                  images/rabbit_500.png 500w,
                  images/rabbit_300.png 300w,
                  images/rabbit_150.png 150w
                "
                sizes="(min-width:960px) 500px,
                      (min-width:640px) 300px,
                      900px"
                src="images/rabbit_150.png"
                alt="rabbit"
               />
               ```
               ![image](https://user-images.githubusercontent.com/68142773/160861754-503ee3eb-c0f1-4b25-b0e9-8a03121cf61f.png) </br>
               브라우저의 너비가 960px 이상일 때 500px의 토끼 사진이 웹에 보임.</br>
               ![image](https://user-images.githubusercontent.com/68142773/160862183-2269ca3c-5565-4bb3-8544-ef5c7b03249f.png) </br>
               브라우저의 너비가 960px 이하 640px 이상일 때 300px의 토끼 사진이 웹에 보임.</br>
               ![image](https://user-images.githubusercontent.com/68142773/160862028-7125a9aa-3809-4bfc-b153-6fa177a3fcea.png) </br>
               브라우저의 너비가 300px 이하일 때 900px의 토끼 사진이 웹에 보임.</br>
               cf. CSS 스타일과 충돌할 수 있음. 이때 CSS 스타일이 sizes 속성보다 우선순위 높음.
	* ```<picture>```
        source요소와 img 요소를 통해 각기 다른 디스플레이, 디바이스에 따라 조건에 맞는 이미지를 보여주는 요소. img 요소의 srcset의 경우 이미지의 크기만 조절 가능하다면 picture을 이미지 포맷 자체를 변경하는 것이 가능.
        ``` html
        <picture>
          <source srcset="images/rabbit_500.png" media="(min-width:960px)" />
          <source srcset="images/rabbit_300.png" media="(min-width:620px)" />
          <img src="images/rabbit_150.png" alt="귀여운 아기 팽귄들" />
      </picture>
      ```
      * media 속성
      ```<source>``` tag 안에 media 속성이 존재해 조건에 알맞는 이미지를 정해줌. 이미지를 표현하는 tag는 ```<img>``` tag뿐이므로 이를 반드시 작성해야함.
      * type 속성
      	이미지의 포맷 타입을 브라우저에게 알려줌. 위에서부터 차례대로 브라우저가 지원하는 포맷인지 탐색하며 지원하지 않는 포맷이면 다음 ```<source>```로 넘어감. default는 ```<img>```요소의 이미지.
        이처럼 크로스브라우징을 위해 ```<picture>``` 와 같은 tag를 활용하는 방법을 **점진적 향상기법**이라함.
      * 점진적 향상기법
        예전 기술 환경에서 동작할 수 있는 기능을 구현하고, 최신 기술을 사용할 수 있는 환경에서 최신 기술을 제공해 더 나은 UX를 제공하는 
        
	* 이미지 포맷의 종류
      * GIF(Graphics Interchange Format): 256색의 컬러만 표현 가능. 선명하지는 않지만, 용량이 적게 듦. 가장 큰 특징은 애니메이션 처리가 가능한 것.
      * JPG/JPEG (Joint Photographic Expert Group image): 화소 매우 높고 용량 적지만, 투명처리 불가.
      * PNG (Portable Network Graphics): 웬만한 컬러는 모두 표현 가능, 투명 영역 처리 가능하지만, 용량이 큼.
      * SVG (Scalable Vector Graphics): 벡터 이미지로 손실이나 품질 저하 없이 모든 크기에서 렌더링이 가능하지만, 이미지가 복잡할 수록 용량이 커짐.
      * WebP (Web Picture Format): 용량이 JPEG보다 70% 낮고, 더 뛰어난 색상을 지원하며, 투명, 애니메이션 표현이 가능한 포맷.
      * AVIF (AV1 Image File Format): WebP보다 더 뛰어난 차세대 이미지 포맷이지만, 아직 지원하지 않는 브라우저가 많음.

3. 실습-해당 페이지 구현해보기

	![image](https://user-images.githubusercontent.com/68142773/160866546-f2238d06-8b93-4ccf-a436-0892c2b93416.png)
  
    ``` html
    <!DOCTYPE html>
    <html lang="ko">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          h1 {
            margin-left: 10px;
            padding-left: 10px;
          }
          img {
            margin-left: 10px;
            padding-left: 10px;
          }
          li {
            font-weight: bold;
            font-size: 20px;
            word-break: keep-all;
            padding-bottom: 25px;
          }
        </style>
        <title>Pizza Recipe</title>
      </head>
      <body>
        <section>
          <h1>피자 만들기</h1>
          <picture>
            <source srcset="images/pizza_700.png" media="(min-width:960px)" />
            <source srcset="images/pizza_500.png" media="(min-width:640px)" />
            <img src="images/pizza_300.png" alt="피자 사진" />
          </picture>
          <ol>
            <li>양파와 피망, 버섯을 채 썰어 준비해주세요</li>
            <li>
              빵에 토마토소스를 바르고 피망, 버섯, 베이컨, 치즈 순으로 넉넉히 토핑해
              주세요
            </li>
            <li>예열된 오븐에 넣고 230도 10~15분간 구워주세요</li>
          </ol>
        </section>
        <footer>
          <p>
            참고 :
            <a href="http://www.10000recipe.com/recipe/6210322"
              >http://www.10000recipe.com/recipe/6210322</a
            >
          </p>
        </footer>
      </body>
    </html>
    ```
    
* 각 tag를 사용한 이유
  * ```<h1>```
  	해당 html파일의 대제목이 '피자 만들기'라 생각해 ```<h1>``` tag를 사용.
  * ```<section>```
  	제목부터 피자 사진, 피자를 만드는 방법이 하나로 묶여야한다 생각해 ```<section>``` tag를 사용했고, 해당 html파일을 어디에 놔도 어색하지 않겠다 생각해 ```<section>```을 사용함.
  * ```<picture>```
  	```<picture>``` tag를 활용해 웹 브라우저의 너비에 따라 반응형으로 이미지가 변경되게 함.
  * ```<ol>```, ```<li>```
  	피자를 만드는 순서는 순서에 따라 진행되는 contents이므로 정렬된 배열인 ```<ol>```을 사용.
  * ```<footer>```
  	저작권이 ```<footer>``` tag에 작성되는 것을 생각해 출처를 ```<footer>```에 작성함.
  * ```<a>```
  	사용자 편의성을 위해 출처의 링크를 연결하기 위해 ```<a>``` tag 사용.
    
  ![image](https://user-images.githubusercontent.com/68142773/160868986-baa5b8a0-b0ba-4130-b9dd-3f8e4ee42e85.png)

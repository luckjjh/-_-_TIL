# 🔖LikeLion_FrontEndSchool_TIL 3월 31일 (목)
## 제주코딩베이스캠프 이호준 강사님의 강의
### 과제
1. git과 github에 대해 배운 것 정리
2. 회원가입 form 만들기

### 강의내용
1. Git과 GitHub
	 Git: **버전 관리 도구**
     GitHub: **Git을 클라우드 환경에서 사용**할 수 있게 제공하는 공간.
	* git의 주요 명령어 </br>
    ![image](https://user-images.githubusercontent.com/68142773/161069167-d5422806-fa0b-47d3-a06a-7ab1eab6db64.png)
	  * pull: 현재 작업하는 repository에 다른 사람이 작업한 내용을 추가.
      * add: 작업한 코드를 대기 시키는 과정 ```git add . ```을 통해 모든 파일을 대기 시킬 수 있음.
      * commit: 대기하고 있는 코드 보낼 준비를 완료한 과정.
      * push: 준비를 완료한 코드를 repository에 업로드.
      
      
	* GitHub의 장점
      * 유지보수
      * 저장용량
      * 언제 코드가 수정되었는 지 확인
      * 코드 공유
      * 버전 관리
    * .gitignore 파일
    	무시할 파일을 기입해 해당 파일을 버전 관리에서 제외함. 주로 node_module 같이 큰 파일들을 제외시킴.
    
2. Embedded content
   * ```<iframe>```
    html페이지에서 또다른 html 페이지를 보여주고 싶을 때 사용. width, height 속성으로 크기 조절(default 150px, 300px).
    src 속성으로 불러올 HTML 링크를 설정할 수 있으며 보통 youtube 영상을 불러올 때 많이 사용.
      * youtube 영상 업로드
      ```html
      <iframe
        width="894"
        height="503"
        src="https://www.youtube.com/embed/POJ5S2aUizA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      ```
      ![image](https://user-images.githubusercontent.com/68142773/161072214-b918f172-a1d6-4298-b50a-16bcfbd6c7af.png)
    	
        * frameborder: 테두리를 그릴 지(0 or 1) 결정하는 속성.
        * allow: iframe에서 허용할 기능 지정.
        * allowfullscreen: 전체화면 지원.
        * autoplay: 자동 재생 기능. 일부 모바일 브라우저에서 작동하지 않고 의도하지 않은 트래픽을 유발하고 접근성 측면(시각장애인이 갑작스러운 소리 때문에 놀람)에서 좋지 않을 수 있어 mute 속성과 함께 사용되야 함.
      * Web 화면 보이기
      ``` html
     <!-- 출력 됨 -->
      <iframe
	     width="1000px"
	     height="500px"
	     src="http://paullab.co.kr/"
	     frameborder="0"
	  ></iframe>
	 <!-- 출력 안됨 -->
	  <iframe
	      width="300px"
	      height="300px"
	      src="http://www.naver.com/"
	      frameborder="0"
	  ></iframe>
      ```
      
      보안상 이유로 ```<iframe>```을 막아놓는 웹 사이트가 있음. 서버 이전을 해야하는 경우 최후의 수단으로 원하는 페이지만 따오는 방식으로 사용 가능. 
    * ``` <audio> ```
    	음악 컨텐츠 재생하기 위한 태그. src 속성에 파일의 위치, 파일명을 작성해야함.
        ```html
        <!-- 속성 순서대로 -->
        <!-- 오디오 컨트롤러/ 자동재생/ 반복 -->
        <audio controls autoplay loop class="bgm">
      <!-- src에 들어간 경로가 절대 경로라 audio 파일이 따로 없어도 재생이 됨 -->
          <source
            src="https://drive.google.com/uc?export=download&id=1xbevC0q-fNUDuoFCSLUdot0OIO81LgpE"
            type="audio/mp3"
        />
        ```
        ![image](https://user-images.githubusercontent.com/68142773/161074389-9576b7de-e5d4-4a0c-8cdd-526d3b77b385.png)
    * ``` <video> ```
    	동영상 파일을 재생하기 위한 태그.
        * src: 브라우저에게 비디오 파일의 위치, 파일명을 알림.
        * controls: 영상 파일을 재생하는데 필요한 컨트롤러 불러옴.
        * autoplay: 로딩이 완료되면 자동으로 영상 파일 재생
        * loop: 영상 반복
      ```html
      <video controls width="250">
            <source
              src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
              type="video/webm"
            />

            <source
              src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
              type="video/mp4"
            />

            Sorry, your browser doesn't support embedded videos.
      </video>
      ```
      위와 같은 코드로 크로스브라우징과, 좀 더 사용자 친화적인 비디오 구현 가능.</br>
      ![image](https://user-images.githubusercontent.com/68142773/161074587-f201a3fb-9db6-41f9-85f6-0734c8238f7e.png)
      
   cf. 절대경로와 상대경로
   	절대경로는 처음부터 시작해 목적지까지의 절대적인 경로를 말함. 시작지점부터 끝까지 경로가 명확하기 때문에 어떤 문서에서도 절대경로에 있는 파일에 접근 가능.
    상대경로는 현재 위치를 기준으로 해 목적지까지의 상대적인 경로를 말함. 시작지점이 명확하지 않아 누가 어디서 경로를 따라가는지에 따라 도착지가 달라지고 접근을 못 할수도 있음.
    
    | None | 절대경로 | 상대경로 |
    | ---- | ------- | ------ |
    | 컴파일 속도 | 느림 | 빠름 |
    | 해당 소스 위치 변환시 | 경로 다시 지정 | 기준 폴더가 그대로인 이상 경로 지정 필요 없음 |
    | 분실 가능성 | 낮음 | 높음 |
    | 사용용도 | 타 개발자 소스 링크시 | 개발팀 내 소스 링크시 |
    

3. forms
> 정보를 입력하는 영역으로 로그인 화면에서 ID, PW를 입력하는 것, 회원 가입시 정보를 입력하는 양식 등에 폼이 이용된다. 폼에 입력 후 submit을 통해 데이터를 서버로 전송이 가능하다.

   ![image](https://user-images.githubusercontent.com/68142773/161077043-a3d714b9-da09-425e-a58a-55c941b11a4f.png)
   * 폼 동작 방식
    	1. 웹 페이지에 있는 form에 데이터를 입력
        2. 웹 페이지 내 액션이 일어나게 되면 데이터는 웹서버로 이동하게 됨
        3. 웹 서버를 데이터 처리를 위해 APP을 호출
        4. 필요에 따라 APP이 DB로 데이터 전송
        5. DB에서 CRUD(Create, Read, Update, Delete)작업 일어나고 결과를 APP -> Web 순으로 전송
        6. 웹 서버는 받은 결과를 Client 브라우저에게 보냄
        7. 브라우저가 결과를 랜더링해 사용자에게 보임
    
   * ```<form>```의 속성
      * action: 입력 값을 전송할 페이지 나타냄.
      * method: 데이터를 전송할 방법을 정의. get과 post가 존재. get은 웹 서버에 데이터를 요청할 때, post는 파일이나 보안이 필요한 데이터를 전송할 때 사용.
      cf. get은 주소에 데이터를 입력하는 query string 방식이기 때문에 정보가 URL에 노출됨.
      post는 body에 데이터를 입력하는 방식이기 때문에 정보가 노출되지 않음.
      
 * ```<input>```
    사용자가 다양하게 폼 태그에 입력할 수 있는 공간을 만들어 주고, 사용자에게 정보를 입력받음.
    
    * ```<label>```
    ```<input>``` tag를 설명하는 텍스트를 붙여 무엇을 입력하는지 설명. semantic한 label을 사용해 접근성을 올려야함.
    
    * form 요소들을 활용한 예제
    
    ```html
    <!-- get => URL로써 요청을 보낸다. -->
    <form action="/form.html" method="get">
      <input type="text" name="userId" />
      <input type="password" name="userPw" />
      <!-- button의 submit 속성 default 값은 submit -->
      <button type="submit">로그인</button>
    </form>
    <!-- => http://127.0.0.1:5500/form.html?userId=%EC%95%84%EC%9D%B4%EB%94%94&userPw=qlalfqjsgh
    쿼리 스트링-->

    <form action="/form.html" method="post">
      <input type="text" name="userId" />
      <input type="password" name="userPw" />
      <!-- button의 submit 속성 default 값은 submit -->
      <button type="submit">로그인</button>
    </form>
    <!-- post => URL이 아닌 body값으로 요청을 보냄 -->
    ```
    
    ![image](https://user-images.githubusercontent.com/68142773/161080598-40c734d4-cdf4-4b8a-90f3-9257589bd1d5.png)
    
    ```html
    <form action="">
      <input type="text" name="userId" /></form><br>
      <input type="password" name="userPw" /><br>
      <input type="checkbox" name="" id="" /><br>
      <!-- checkbox = 중복 선택 -->
      <label for="men">남</label>
      <!-- input 창을 설명하는 tag -->
      <input type="radio" name="성별" id="man" />
      <label for="female">여</label>
      <input type="radio" name="성별" id="female" /><br>
      <!-- radiobox = 단일 선택 -->
      <input type="color" name="" id="" /><br>
      <input type="date" name="" id="" /><br>
      <input type="datetime" name="" id="" /><br>
      <input type="email" name="" id="" /><br>
      <input type="hidden" name="" id="" /><br>
      <!-- hidden에 입력된 정보를 저장하고 전송해야 하는 경우가 생김 -->
      <input type="range" name="" id="" /><br>
      <input type="number" name="" id="" /><br>
      <input type="url" name="" id="" /><br>
      <input type="file" name="" id="" /><br>
      <button type="submit">로그인</button>
    </form>
    ```
    
    ![image](https://user-images.githubusercontent.com/68142773/161080694-072d4b44-3c68-4e29-b78d-fcc585f07dd0.png)
    
   * 과제 회원가입 페이지 구현
    
    ```html
   <!DOCTYPE html>
	<html lang="ko">
	  <head>
	    <meta charset="UTF-8" />
	    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <style>
	      @import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap");
	      * {
		font-family: "NanumGothic";
	      }
	      h1 {
		margin: 0px;
		padding: 10px;
		background-color: black;
		color: white;
	      }
	      input {
		margin: 5px;
	      }
	      fieldset {
		font-size: 23px;
		margin-bottom: 10px;
	      }
	      .signupBtn {
		color: white;
		background-color: black;
		width: 20%;
		height: 40px;
		font-size: 20px;
	      }
	      label {
		font-size: 20px;
	      }
	    </style>
	    <title>회원가입</title>
	  </head>
	  <body>
	    <header>
	      <h1>회원가입</h1>
	      <hr />
	    </header>
	    <main>
	      <section>
		<form action="#" method="post">
		  <fieldset>
		    <legend>로그인 정보</legend>
		    <label for="userID">아이디</label><br />
		    <input type="text" name="아이디" id="userID" /><br />
		    <label for="userPW">비밀번호</label><br />
		    <input type="password" name="비밀번호" id="userPW" /><br />
		    <label for="userPWConfirm">비밀번호 확인</label><br />
		    <input type="password" name="비밀번호확인" id="userPWConfirm" />
		  </fieldset>
		  <fieldset>
		    <legend>회원 정보</legend>
		    <label for="userName">이름</label><br />
		    <input type="text" name="이름" id="userName" /><br />
		    <label for="userBirth">생년월일</label><br />
		    <input type="date" name="생년월일" id="userBirth" /><br />
		    <label for="userSex">성별</label><br />
		    <input type="radio" name="성별" id="userSex" value="male" />남
		    <input
		      type="radio"
		      name="성별"
		      id="userSex"
		      value="female"
		    />여<br />
		    <label for="userEmail">이메일</label><br />
		    <input type="email" name="이메일" id="userEmail" /><br />
		    <label for="userPhone">휴대전화</label><br />
		    <input type="tel" name="휴대전화" id="userPhone" /><br />
		  </fieldset>
		  <fieldset>
		    <legend>개인정보 제공 동의</legend>
		    <p>
		      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
		      exercitationem beatae totam porro officia amet pariatur. Unde
		      neque, nostrum sunt facere itaque repellendus voluptatum fugit
		      obcaecati eius nemo nulla explicabo?
		    </p>
		    <label for="checkAgree">개인정보 제공에 동의합니다.</label>
		    <input type="checkbox" name="동의박스" id="checkAgree" />
		  </fieldset>
		  <button class="signupBtn">회원가입</button>
		</form>
	      </section>
	    </main>
	    <footer></footer>
	  </body>
	</html>
    ```
    ![image](https://user-images.githubusercontent.com/68142773/161082811-e48bb1f5-5d8c-4301-a0ae-83914fc5f1a0.png)
    

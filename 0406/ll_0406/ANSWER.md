1. Body의 child는 몇개일 까요?
   `<h1>`, `<ul>`, `<div.wrap>`, `<span>` 요소 외에 코드를 작성하며 포함된 newline 도 자식으로 포함됨 => 7개
   =>![image](https://user-images.githubusercontent.com/68142773/161871849-09d43a86-e0be-43f0-990c-9e279a457c2c.png)

2. ul의 child는 몇개일 까요?
   => 2개

3. UL의 Decendent는?
   => 3개

4. div tag중 3번째 child 요소는?
   => div.box{box3}

5. UL의 Siblings는 몇개?
   => 3개

6. 아래 style로 몇개의 div가 빨간 글씨가 될지

```css
div:nth-child(3) {
  color: red;
}
```

=>n번째 자식을 선택하는 가상 class

div.wrap도 3번째 자식이기 때문에 다 red됨.
3개

7.  아래 style로 몇개의 span이 파란글씨 될지

```css
body > span {
  color: blue;
}
```

=> 1개

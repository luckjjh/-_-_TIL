# 🔖LikeLion_FrontEndSchool_TIL 5월 4일 (수)

## 이호준 강사님 강의

### JavaScript

#### Array

* Array Method
  > `Array.prototype.func()`인 경우 생성한 배열 객체에 함수가 있어 바로 호출 가능하고 `Array.func()`인 경우 Array 객체의 함수를 사용하고 인자로 배열을 전달해준다.


  1) `Array.prototype.indexOf()`

        인자로 전달한 값을 배열에서 찾아 해당 요소의 인덱스를 반환하는 method로 전달한 값이 배열에 없다면 `-1`을 출력한다.

        ```js
        const cafe = ['coffee', 'cake', 'tea', 'cookie']

        cafe.indexOf('tea')
        //expected output: 2

        cafe.indexOf('coffe', 1)
        //expected output: -1

        cafe.indexOf('bread')
        //expected output: -1
        ```

  2) `Array.isArray()`

        함수의 인자로 전달되는 값이 배열인지 아닌지 판단해 boolean 값으로 반환하는 method.

        ```js
        Array.isArray('coffee');
        //expected output: false

        Array.isArray(false);
        //expected output: false

        Array.isArray([1]);
        //expected output: true
        ```

  3) `Array.prototype.join()`

        배열 내 원소들을 연결해 하나의 srting으로 반환하는(원본배열 수정 x) method로 인자에 값을 전달하게 되면 연결되는 요소들 사이사이에 인자 값이 위치한다.

        ```js
        const cafe = ['coffee', 'cake', 'tea', 'cookie']
        cafe.join('/')
        //expected output: 'coffee/cake/tea/cookie'
        cafe.join('')
        //expected output: 'coffeecaketeacookie'

        const example = ['coffee', null, undefined, 'cake']
        example.join('')
        //expected output: 'coffeecake'
        ```

  4) `Array.prototype.fill()`

        배열을 인자로 전달한 값으로 채워주는 method. 배열 자체를 변경하기 때문에 배열을 초기화할 필요가 있는 경우에 사용하면 좋을 것 같다.
        ```js
        const cafe = ['coffee', 'cake', 'tea', 'cookie']

        cafe.fill('bread')
        //expected output: ['bread', 'bread', 'bread', 'bread']
        ```
        cf. 두번째 매개변수를 입력한다면 어느 부분부터 배열을 채울 지를 지정하는 것이 가능하다.
    
  5) `Array.prototype.flat()`

        배열이 2차원 이상의 차원을 갖을 때 인자로 전달한 숫자만큼 차원을 낮춰주는 method.
        ```js
        let arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, [10, 11]]]]
        arr.flat();
        //(9) [1, 2, 3, 4, 5, 6, 7, 8, Array(2)]
        arr.flat(2);
        //(10) [1, 2, 3, 4, 5, 6, 7, 8, 9, Array(2)]
        arr.flat(3);
        //(11) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        ```

  6) `Array.prototype.includes()`

        인자로 전달한 값이 배열에 포함되어 있는지를 확인해주는 method로 인자가 string인 경우 대소문자를 구분해 탐색한다. 두번째 인자의 경우 탐색을 시작할 인덱스를 의미한다.
        ```js
        const cafe = ['coffee', 'cake', 'tea', 'cookie']

        cafe.includes('bread');
        //expected output: false

        cafe.includes('cake');
        //expected output: true

        //음수도 인덱스로 사용 가능
        cafe.includes('cake', -3);
        //expected output: true
        
        cafe.includes('cake', -2);
        //expected output: false
        ```

  7) `Array.prototype.find()`

        배열에서 특정 조건에 부합하는 1개의 값을 찾아 반환하는 method. 단 하나의 요소만 찾고, 조건에 맞는 값이 여러개 있는 경우 제일 앞에 있는 요소를 반환한다. 조건에 맞는 값이 없다면 undefined를 반환한다.
        ```js
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        arr.find(i => i > 5);
        //expected output: 6
        ```
  8) `Array.prototype.filter()`

        배열에서 특정 조건에 부합하는 값을 찾고 그 값들로 이루어진 새로운 배열을 만들어 반환하는 method. 조건에 맞는 값이 없다면 빈 배열을 반환한다. 콜백함수를 활용해 조건문을 작성하고 반환 값이 ture인 값만 배열에 넣고 false인 값은 제외하는 방식으로 사용이 가능하다.
        ```js
        let arr = [{
            'name' : '안녕1',
            'contents' : 'contents1',
            'dataNum' : 1
        }, {
            'name' : '안녕2',
            'contents' : 'contents2',
            'dataNum' : 2
        }, {
            'name' : 'title3',
            'contents' : 'contents3',
            'dataNum' : 3
        }, {
            'name' : 'title4',
            'contents' : 'contents4',
            'dataNum' : 4
        }, {
            'name' : 'title5',
            'contents' : 'contents5',
            'dataNum' : 5
        }];
        //(5) [{…}, {…}, {…}, {…}, {…}]
        arr.filter(i => i.name.includes('tit'))
        //0: {name:'title3', ...}
        //1: {name:'title4', ...}
        //2: {name:'title5', ...}
        arr.filter(i => i.name.includes('안녕'))
        //0: {name:'안녕1', ...}
        //1: {name:'안녕2', ...}
        ```

  9) `Array.prototype.findIndex()`

        인자로 주어진 조건에 부합하는 배열의 첫번째 요소의 인덱스를 반환하는 method. `find()`는 조건에 맞는 첫번째 요소의 값을 반환하고 `findIndex()`는 조건에 맞는 첫번째 요소의 인덱스를 반환한다는 차이점이 있다.

        ```js
        let cafe = [{
            'item' : 'coffee',
            'amount' : 5
        },{
            'item' : 'cake',
            'amount' : 4
        },{
            'item' : 'tea',
            'amount' : 7
        },{
            'item' : 'cookie',
            'amount' : 3
        }];

        let index = cafe.findIndex(obj => obj.item.length <= 3)
        //index = 2
        ```

  10) `Array.prototype.map()`

        배열의 각 요소에 오름차순으로 접근해 주어진 callback함수를 호출한 결과를 모아 새로운 배열을 반환하는 method. 기존의 값을 재정의하거나 새로운 형태의 값을 정의하는 것이 가능하다. 주로 객체나 json 형태의 데이터를 탐색하는 용도로 사용되어 해당 과정에서 새로운 형태의 값을 정의하는 경우가 많다.

        ```js
        let arr = [{
            'name' : 'title1',
            'contents' : 'contents1',
            'dataNum' : 1,
            '지역과날짜' : [
                '한국',
                [22, 5, 4]
            ]
        }, {
            'name' : 'title2',
            'contents' : 'contents2',
            'dataNum' : 2,
            '지역과날짜' : [
                '한국',
                [22, 5, 4]
            ]
        }, {
            'name' : 'title3',
            'contents' : 'contents3',
            'dataNum' : 3,
            '지역과날짜' : [
                '한국',
                [23, 5, 4]
            ]
        }, {
            'name' : 'title4',
            'contents' : 'contents4',
            'dataNum' : 4,
            '지역과날짜' : [
                '한국',
                [23, 5, 4]
            ]
        }, {
            'name' : 'title5',
            'contents' : 'contents5',
            'dataNum' : 5,
            '지역과날짜' : [
                '한국',
                [22, 5, 4]
            ]
        }];

        arr.map(i => i.지역과날짜[1][0]).filter(val => val===22);
        //arr에서 22만 추출하기
        ```

  11) `Array.prototype.forEach()`

        배열 각 요소들을 순회하며 지정한 동작을 수행해주는 method로 map과 다르게 배열을 반환하지 않고 배열을 순회만 한다.

        ```js
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        arr.forEach(i => console.log(i));
        // expected output: 1
        // expected output: 2
        // expected output: 3
        // expected output: 4
        // expected output: 5
        // expected output: 6
        // expected output: 7
        // expected output: 8
        // expected output: 9
        // expected output: 10
        ```
  12) `Array.prototype.reduce()`

        배열을 순회하며 반환되는 값을 누적하며 실행해 주는 method로 바로 직전 실행된 함수의 반환값을 저장하는 누적값, 순회를 도는 현재 값, 현재 요소의 index, array 전체 값 이렇게 4개의 매개변수를 갖는다. 보통 index와 array는 생략한다.

        ```js
        arr.reduce((누적값, 현재값, index, array) => {
            console.log(누적값);
            console.log(현재값);
            console.log(index);
            console.table(array);
            return 누적값+현재값;
        });
        ```

        구간 합을 구하거나, 최대/최소값을 구할 때 사용할 수 있을 것 같다.

  13) `Array.from()`

        배열, 문자열 처럼 반복이 가능한 객체(유사배열)를 받아 새로운 배열 객체로 만들어주는 method. 여러 객체를 배열로 만들때 사용하고 객체 내 모든 요소를 얕은 복사하기 때문에 원본 객체가 변화하지는 않는다.

        ```js
        Array.from('hello world');
        //expected output: ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

        Array.from([1, 2, 3], x => x ** 2);
        //expected output: [1, 4, 9]

        Array.from([{'value':100}, {'value':200}, {'value':300}], x => x.value);
        //expected output: [100, 200, 300]
        ```

  14) `Array.prototype.concat()`

        인자로 주어진 값, 배열을 기존배열에 추가하는 method로 한번에 여러개의 값을 입력하는 것이 가능하다.

        ```js
        const cafe = ['coffee'];

        cafe.concat(['cake']);
        //expected output: ['coffee', 'cake']

        cafe.concat(['tea'], 'cookie');
        //expected output: ['coffee', 'tea', 'cookie']
        ```

  15) `Array.prototype.some()`

        인자로 주어진 조건에 맞는 요소가 배열에 한개라도 존재할 경우 `true`를 반환하는 method.

        ```js
        const cafe = [{
            'item' : 'coffee',
            'amount' : 5
        },{
            'item' : 'cake',
            'amount' : 4
        },{
            'item' : 'tea',
            'amount' : 7
        },{
            'item' : 'cookie',
            'amount' : 3
        }];

        const order = cafe.some ( i => {
            return i.amount >= 5
        });

        order
        //expected output: true
        ```


  16) `Array.prototype.every()`

        모든 배열의 요소가 인자로 전달된 조건에 맞아야 `true`를 반환하는 method.
        
        ```js
        const cafe = ['coffee', 'cake', 'tea', 'cookie']

        const cafe = [{
            'item' : 'coffee',
            'amount' : 5
        },{
            'item' : 'cake',
            'amount' : 4
        },{
            'item' : 'tea',
            'amount' : 7
        },{
            'item' : 'cookie',
            'amount' : 3
        }];

        const order = cafe.every( i => i.amount >= 3)

        order
        //expected output: true
        ```

#### 조건문

  * 삼항연산자
      > `조건식 ? 참일경우 실행 : 거짓일경우 실행`

      * Example

        ```js
        let item = true ? console.log('true') : console.log('false');
        console.log(item);
        //true 출력
        ```

      * 중첩 사용

        ```js
        let price = 5000;

        let message = (price>6000) ? '비싸요!' : 
                      (price<3000) ? '엄청싸요!' : '적당해요!';

        // 위의 코드는 아래와 같다.
        let price = 5000;
        let message = '';

        if (price > 6000) {
                message = '비싸요!';
        } else if (price < 3000) {
                message = '엄청싸요!';
        } else {
                message = '적당해요!';
        }
        ```
# 🔖LikeLion_FrontEndSchool_TIL 5월 3일 (화)

## 한재현 강사님 강의

### JavaScript

#### Array
> 데이터의 집합으로 여러개의 값을 하나의 이름으로 묶어 사용할 수 있게 도와준다.

* 생성
  * `let arr = new Array()`
    
    '( )'안에 정수를 넣어 해당 정수만큼의 길이를 갖는 배열을 생성한다. 숫자를 한개만 넣으면 배열의 길이로, 여러개의 숫자는 배열의 원소로 인식한다.
  * `let arr = []`

    `[ ]`안에 정수를 넣어 해당 정수만큼의 길이를 갖는 배열을 생성한다. 숫자를 한개만 넣으면 배열의 길이로, 여러개의 숫자는 배열의 원소로 인식한다.
  * literal

    `[1, 3, 4, 11]` 이렇게 literal로 배열을 생성하는 것도 가능하다. 선언한 당시에는 접근할 수 있지만, 어떠한 변수에 값을 지정하지 않았음으로 이후에는 접근이 불가능하다.

* 접근
  > 각괄호 + 인덱스를 통해 각 원소에 접근 할 수 있으며, 원소에 값을 저장 할 수도 있다. 심지어 존재하지 않는 원소에도 접근이 가능하다. 이 경우 `undefined`를 출력한다.
  
  * length
    배열의 크기를 알 수 있는 property이다.

* Method
  * 추가/제거
    
    1) arr.push(items)
        
        배열 맨 뒤에 items 요소를 추가한다. 새로운 배열의 길이를 반환한다.
    2) arr.pop(items)
    
        배열 맨 뒤에 items 요소를 반환하고 제거한다.
    3) arr.shift(items)
    
        배열 맨 앞에 items 요소를 반환하고 제거한다.
    4) arr.unshift(items)
    
        배열 맨 앞에 items 요소를 추가한다. 새로운 배열의 길이를 반환한다.

  * splice / slice
    
    1) splice
        > 배열에 요소를 삭제, 교체, 추가할 수 있게 해주는 method. index, count, items 순서로 인자를 전달한다. index의 값으로 음수를 전달하는 것이 가능하다.

        * Example
            ```js
            var avengers = ['spiderman', 'ironman', 'hulk', 'thor'];
            // splice() : 기존의 요소를 삭제하거나, 교체하거나, 새 요소를 추가합니다. 인덱스, 카운트, 아이템 순서로 인자를 전달합니다.
            // 아이템 삭제. 
            avengers.splice(3, 1); // 3번 인덱스 요소 하나만 삭제
            avengers.splice(3); // 3번 인덱스부터 전부 삭제
            // 아이템 추가
            avengers.splice(3, 0, 'blackwidow');
            // 아이템 교체
            avengers.splice(1, 1, 'hulk');
            // 여러개의 아이템을 한번에 추가할 수 있다.
            ```

    2) slice
        > 두 개의 인자를 전달하여 배열안에 있는 요소를 새로운 배열로 반환한다. 원본 요소가 바뀌지 않는다. 특히 두 번째 인자에 해당하는 인덱스의 아이템은 포함하지 않고 음수 인덱스를 사용하는 것이 가능하다.

        * Example
            ```js
            var avengers = ['spiderman', 'ironman', 'hulk', 'thor'];
            avengers.slice(0);
            //배열 처음부터 끝까지 반환
            avengers.slice(1, 4); 
            //배열 1~3 index 값을 반환
            ```
  * sort
    > 배열의 요소를 정렬한 후 그 배열을 반환하는 함수. 배열을 직접적으로 변경하고 숫자형 데이터 정렬의 단점을 해결하기 위해 비교 함수(compareFunction)를 사용할 수 있다.

    * Example
        ```js
        var arrNum2 = [13, 9, 10, 2];
        arrNum2.sort(function (a, b) {
            if (a > b) {
                return 1
            } else if (b > a) {
                return -1;
            } else {
                return 0;
            }
        });//오름차순 정렬
        ```
        숫자의 경우 아래와 같은 방식도 가능하다.
        ```js
        arrNum2.sort((a, b) => a - b);
        ```

        Object의 값을 하나 정해 정렬하는 것도 가능하다.
        ```js
        var studentList = [
            {
                id: 1, product: '연필', stock: 10
            },
            {
                id: 2, product: '색종이', stock: 33
            },
            {
                id: 3, product: '체육복', stock: 2
            },
            {
                id: 4, product: '만연필', stock: 0
            }
        ]

        studentList.sort(function (a, b) {
            if (a.product > b.product) {
                return 1;
            } else if (b.product > a.product) {
                return -1;
            } else {
                return 0;
            }
        });//각 object의 product를 기준으로 오름차순 정렬
        ```

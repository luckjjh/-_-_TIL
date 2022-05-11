class a{
    constructor(b,c){
        this.b = b;
        this.c = c;
    }
}

let test = new a(1,2);

console.log(test.b +' '+test.c);

let myObj = {
    val1:100,
    val2:100,
    func: function(val1,val2){
        this.val1 = val1;
        this.val2 = val2;
    }
}
myObj.func(200,300);
console.log(myObj.val1+' '+myObj.val2);

function sayName(){
    console.log(this.name);
  }
  
  var bruce = {
    name: 'bruce',
    show : sayName
  }
  
  var peter = {
    name : 'peter',
    show : sayName.bind(bruce)
  }
  
  peter.show();
  bruce.show();

  var peter = {
    name : 'Peter Parker',
    sayName : function(is, is2){    
          console.log(this.name+ ' is '+ is + ' or ' + is2);
      }
  }
  
  var bruce = {
    name : 'Bruce Wayne',
  }
  
  peter.sayName.apply(bruce, ['batman', 'richman']);

// 경력이 10년차인 사람만 연봉을 올리고 싶은 경우
function updatePay(){
    this.pay+=300;
}

let 정현 = {
    name:'정현',
    pay:400,
    year:1,
}
let 호준 = {
    name:'호준',
    pay:1000,
    year:10,
}

let employee = [];
employee.push(정현);
employee.push(호준);

let updatePay10year = updatePay.bind(호준);

updatePay10year();

console.log(정현);
console.log(호준);
let dataset = [
    {img:"./img/cola-red.png", text:"Original_Cola", cost:"1000원"},
    {img:"./img/cola-purple.png", text:"Violet_Cola", cost:"1000원"},
    {img:"./img/cola-yellow.png", text:"Yellow_Cola", cost:"1000원"},
    {img:"./img/cola-blue.png", text:"Cool_Cola", cost:"1000원"},
    {img:"./img/cola-green.png", text:"Green_Cola", cost:"1000원"},
    {img:"./img/cola-orange.png", text:"Orange_Cola", cost:"1000원"}, 
];


let sellingItems = document.querySelectorAll('.item-box li');
let returnCoinBtn = document.querySelector('.return-coin-btn');
let insertCoinBtn = document.querySelector('.insert-coin-btn');
let getBtn = document.querySelector('.get-btn');

let leftCoinDisplay = document.querySelector('.left-coin-display');
let myMoneyDisplay = document.querySelector('.user-money-display');
let curStuffCost = document.querySelector('total-cost');

let userStuffList = document.querySelector('.user-stuff-list');



class User{
    constructor(startMoney){
        this.money = startMoney;
        this.spendMoney = 0;
    }
}

// (()=>{
//     prompt("초기 자본을 입력해주세요");
    
// })

console.log(sellingItems);

sellingItems.forEach(i=>{
    i.addEventListener("click",(e)=>{
        // if(e.target.nodeName==="DIV"){
        //     console.log("품절쓰");
        // }else{
        //     console.log("hi");
        // }
        console.log(i);
        
    });
});

returnCoinBtn.addEventListener("click",()=>{
    let returnCoin = leftCoinDisplay.innerHTML;
    leftCoinDisplay.innerHTML = 0;
    myMoneyDisplay.innerHTML += returnCoin;
});

insertCoinBtn.addEventListener("click",()=>{

});

getBtn.addEventListener("click",()=>{

});
function sayHello(){
    return new Promise((resolve,reject)=>{
        resolve("hello")
    });
}

async function test(){
    const hello1 = await sayHello();//sayHello 실행되기 전까지 기다림
    console.log(hello1);
}

test();
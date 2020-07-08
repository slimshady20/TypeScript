

export default function loop() {
    whileLoop() //0 es5
    doWhileLoop() //1 es5
    forLoop() //2 es5
    forInLoop() // 3
    forOfArrayLoop() //4
    forInObjectLoop() //5
    forOfMapLoop() //6
    forOfSetLoop() // 7
    forOfStringLoop() //8
    symbolIterator() //9

}
export function whileLoop() {
    console.log(`----0.while-loop----`)
    let sum=0
    let i=0
    while(i<=100){
        sum += i;
        i++
    }
    console.log(`1부터 100까지 합: ${sum}`)
}
export function doWhileLoop() {
    console.log(`----1.do-while-loop----`)
    let count: number=0
    let sum:number=0
    do{
        count++
        sum += count
    }while (count != 100)
    console.log(`1부터 100까지 합: ${sum}`)
}


export function forLoop() {
    console.log(`----2.for-loop----`)
    let i = 1
    let sum =0
    for(;i<=100;i++){
       sum += i
    }
    console.log(`1부터 100까지 합: ${sum}`)
}

function forInLoop() {

}

function forOfArrayLoop() {

}

function forInObjectLoop() {

}

function forOfMapLoop() {

}

function forOfSetLoop() {

}

function forOfStringLoop() {

}

function symbolIterator() {

}

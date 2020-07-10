

export default function loop() {
    whileLoop() //0 es5
    doWhileLoop() //1 es5
    forLoop() //2 es5
    forInArrayLoop() // 3
 //   forOfArrayLoop() //4
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

function forInArrayLoop() {
    console.log(`----3.forInArrayLoop----`)
    let arr:object = ["a","b","c","d"]
    for(let i in arr){
        console.log(i,arr[i])
    }
}

function forInObjectLoop() {
    console.log(`----4.forInObjectLoop----`)
    let fruits= {"a":"apple","b":"banana","c":"cherry"}
    for(let i in fruits){
        console.log(i,fruits[i])
    }
}

function forOfMapLoop() {
    console.log(`----5.forOfMapLoop----`)
    let map = new Map([["a",1],["b",2]])
    map.set("a",3)
    // for(let i of map){
    //     console.log(i)
    // }
}

function forOfSetLoop() {
    console.log(`----6.forOfMapLoop----`)
}

function forOfStringLoop() {
    console.log(`----8.forOfStringLoop----`)
    for(let i of "Hellop"){
        console.log(i


        )
    }
}

function symbolIterator() {
    console.log(`----9.symbolIterator----`)
    let arr = [1,2]
    let obj = arr[Symbol.iterator]()
    console.log(`1.${typeof obj}`)
    console.log(`2.${obj.next()}`)
    console.log(`3.${obj.next()}`)
    console.log(`4.${obj.next()}`)
}

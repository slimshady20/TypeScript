import hello, {birthday, calculator} from "./hello";
import jsType, {tsTypes} from "./jsTypes";
import operator, {destructure, spread} from "./operator";
import {doWhileLoop, forLoop, whileLoop} from "./loop";
let menu:number= 5
let name:string=""
switch (menu) {
    case 0:
        name ="홍길동"
        console.log(hello(name))
        break
    case 1:
        name = "김유신"
        let year:number = 2002
        let profile = JSON.stringify(birthday(name,year))
        console.log(profile)
        //   console.log(`${birthday(name,year)}`)
        break
    case 2:
        let num1 = 35
        let num2 = 55
        console.log(`첫번째 수: ${num1} + 두번째 수${num2} =  ${calculator(num1,num2)}`)
    case 3: //자바스크립트 타입 출력
        //jsType()
        tsTypes()
        break
    case 4:
        /*operator()*/
        destructure()
        spread()
        break
    case 5:
        whileLoop()
        doWhileLoop()
        forLoop()
        break

}
/*
case 0:
name = "홍길동"
const message = goodbye(name)
console.log(message)
break
case 1:
name = "김유신"
let year:number = 2002
profile = birthday(name,year)
console.log(profile)
break
case 2:
let num1:number = 10
let num2:number = 30
let addResult: number = add(num1, num2)
console.log(`덧셈결과:  ${addResult}`)
break
default :
console.log("존재하지 않는 케이스입니다.")
break*/

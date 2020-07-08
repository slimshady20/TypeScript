import {type} from "os";
import {number} from "prop-types";

export default function operator() {
    console.log(`1. 산술연산자`)
    console.log(`10 **3=${10**3}`)
}
export function destructure() {
    console.log(`---1. 객체 구조 분해----`)
    let {a,b,...c} ={a:10, b:20,c:30, d:40}
    console.log(`${a}`)
    console.log(`${b}`)
    console.log(`${c}`)
    console.log(`---2. 배열 구조 분해----`)
    let numbers =["a","b","c","d","e"]
    let [num1,num2] =numbers
    console.log(`[num1, num2] ==> ${num1}, ${num2}`)
    let [,, num3, num4,] = numbers

    console.log(`[,,num3,num4]==> ${num3},${num4}`)
  //  [num4 num3] = [num3,num4]
    console.log(`[num4,num3]= [num3,num4]==>${num3},${num4}`)
    console.log(`[,,num3,num4] =-> ${num3},${num4}`)
    console.log(`---3.함수 배열 구조 분해----`)
    fn([100, "Hello"])
    function fn([a, b]: [number, string]){
        console.log(`함수배열 내부 ${a}`)
        console.log(`함수배열 내부 ${b}`)
    }
    printProfile({name:"홍길동"}) // 국적은 korea default값으로 적용
    printProfile({name:"유관순",nation:"USA"}) 
    // printProfile({nation:"USA"}) default 값이 없으면 생략이 불가능
    
    console.log(`---4. 함수 객체 구조 분해----`)
    // printProfile 함수 객체 선언 그냥 객체는 JSON이니까 함수객체라는 용어를 사용한다.
    function printProfile({name, nation="korea"}={name:""}){
        console.log(name,nation)
    }
    console.log(`---5. 사용자 타입 객체 구조 분해----`)
    // let custom ={} JSON타입
    type Custom = {a: string, b: number}
    function fruit({a,b}:Custom):void {
        console.log(a,b)
    }
    fruit({a:"사과",b:1000})
}
export function spread() {
    console.log(`---1.스프레드 연산자---`)
    // 배열 합치기
    let arr: number[] = [1,2]
    let arr2: number[] = [...arr,3,4]
    console.log(`배열 1번 형태 ${arr2}`)
    // 배열 destructing
    let [a, ...rest]: [number,number,number,number] = [1,2,3,4]
    console.log(`배열 2번 형태 ${a}`)
    console.log(`배열 3번 형태 ${rest}`)
    console.log(`배열 4번 형태 ${rest[0]}`)
}

import {array, string} from "prop-types";

export default function jsType():void {
    console.log("----------Javascript Types------")
/*    Types: boolean, string, undefined,null,JSON,array,function*/
    let myBoolean = true
    let MyNumber = 0
    let MyString = "string"
    let Myundefined;
    let MyNull = null
    let MyJson = JSON
    let MyArray = []
    let MyFunction = array

    console.log(`boolean: ${typeof myBoolean}`)
    console.log(`MyNumber: ${typeof MyNumber}`)
    console.log(`MyString: ${typeof MyString}`)
    console.log(`MyString: ${typeof Myundefined}`)
    console.log(`MyNull: ${typeof MyNull}`)
    console.log(`MyJson: ${typeof MyJson}`)
    console.log(`MyArray: ${typeof MyArray}`)
    console.log(`MyFunction: ${typeof MyFunction}`)

}
export function tsTypes():void {
    let basket: any = 10
    basket =true
    basket = "TV"
   // console.log(basket)
    let arr: string[] = ["a","b","c"]
    for(let i =0; i<arr.length; i++){
        /*console.log(`${arr[i]}\t`)*/
    }
    let arr2: Array<String> =["d","e","f"]
    for(let i=0; i<arr2.length;i++){
        console.log(`${arr2[i]}\t`)
    }
    console.log("-------enum type------")
    enum WeekDay {
        Mon, Tue, Wed, Thu= Tue + Wed
    }
    let thu2: number = 10 * 2
    enum WeekDay2{
        Mon = 10, Tue, Wed = 10 << 5, Thu = thu2
    }
    enum WeekDay3 {
        Mon="Monday", Tue = "Tuesday"
    }
    console.log(`1. ${JSON.stringify(WeekDay)}`)
    console.log(`2. ${JSON.stringify(WeekDay2)}`)
    console.log(`3. ${JSON.stringify(WeekDay3)}`)
    console.log(`4. Mon = ${WeekDay.Mon}, Tue = ${WeekDay["Tue"]}, Wed=${WeekDay.Wed}`)
    console.log(`5. 0 = ${WeekDay[0]}, 1 = ${WeekDay[1]}, 3=${WeekDay.Wed}`)
    console.log(`6. ${typeof WeekDay}`)
    console.log(`7. ${typeof WeekDay.Mon}, ${typeof WeekDay3.Mon}`)
    console.log(`8. ${typeof WeekDay[0]}, ${WeekDay[0]}`)

    let myDay: WeekDay = 50
    console.log(`9. ${typeof myDay}, ${myDay}`)
    let myDay2: WeekDay3 = WeekDay3.Mon
    console.log(`10. ${typeof myDay2}, ${myDay2}`)
}
export function symbolType(): void {
    const hello = Symbol("hello")
    const hello2 = Symbol("hello")
    // @ts-ignore
    console.log(hello === hello2)
    console.log(hello, hello2)
    console.log(typeof hello)

    console.log(`---- Symbol 2 ---`)
    const uniqueKey = Symbol()
    let obj = {}
    obj[uniqueKey] = 1234
    console.log(obj)
}
export function tupleType(): void {
    let x: [string, number]
    x = ["tuple", 100]
    console.log(typeof x, typeof x[0], typeof x[1])
    console.log(x[0].substr(0, 2), x[1].toFixed(2))

    let x2: [string, number, string, boolean] = ["tuple", 3, "tuple2", false]
    console.log(x2)
}
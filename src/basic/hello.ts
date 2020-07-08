export default function hello(name: string):string {
    return ` Hello ${name}`
}
/*export function birthday(name:string, year:number):string {
    return `이름: ${name} 나이: ${(new Date().getFullYear()-year)}`
}*/
export function calculator(num1:number, num2:number): number {
    return num1+ num2
}

 export function birthday(name: string, year: number): object {
     const profile :object = {
         name, age: (new Date().getFullYear()-year)
     }
     return profile
}

export default function hello(name: string): string {
    return `Hello ${name}`
}
export function goodbye(name:string): string {
    return `GoodBye ${name}`
}
export function birthday(name: string, year: number): string {
    const profile = {
        name, age: (new Date().getFullYear()-year)
    }
    return `이름  ${profile.name}, 나이: ${profile.age}`
}
export function add(num1: number, num2: number): number {
    return num1 + num2
}

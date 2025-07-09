
// const text: string = "Hello"

// interface Person {
//     name: string,
//     age: number
// }

// type Keys = {
//     key: string
// }

// interface Dogs extends Person {
//     name: string
    
// }

// type Animals = Keys & {
//     age: number,
//     name: string

// }

// type Status = "active" | "inactive"

// interface User { name: string; }
// interface User { age: number; }
// // Результат: { name: string; age: number; }

type Keys  = "name" | 10

type Person = {
    [key in Keys]: string
}
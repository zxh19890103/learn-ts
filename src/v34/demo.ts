function foo(arr: readonly string[]) {
    arr.slice();
}

let bar = 'Singhi' as const

// bar = 'Google' // Error

const o = {
    name: 'Singhi'
} as const

// o.from = 'China' // Error

console.log(globalThis)
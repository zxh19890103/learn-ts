import { Animal } from './animal'

Promise.resolve(true).then(t => {
    new Animal('Singhi').moal()
    console.log(true)
})


console.log(DISTANCE_FROM_COMPANY_TO_HOME)

type T = ReturnType<() => string>

type T1 = Pick<{ a: string, b: number }, "a" | "b">
type T2 = Exclude<{ a: string, b: string }, { b: string }>
type T3 = keyof { a: string, b: string }

/**
 * @param {string} [somebody] - Somebody's name.
 */
function sayHello(somebody) {
    if (!somebody) {
        somebody = 'John Doe';
    }
    console.log('Hello ' + somebody);
}

sayHello(8);

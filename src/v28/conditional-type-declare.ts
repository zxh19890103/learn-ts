/*
Exclude<T, U> – Exclude from T those types that are assignable to U.
Extract<T, U> – Extract from T those types that are assignable to U.
NonNullable<T> – Exclude null and undefined from T.
ReturnType<T> – Obtain the return type of a function type.
InstanceType<T> – Obtain the instance type of a constructor function type.
*/

export namespace scope {
    type T = (5 | 6 | 9) & (4 | 5)
    type U = 8
    type T0 = Exclude<T, U>

    export const y: T0 = 5
}
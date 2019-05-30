interface Person {
    name: string;
    age: number
}

type ET = Person | null

// declare means here just is a declaration
// but not a value.
// the value is defined somewhere else. 
declare const DISTANCE_FROM_COMPANY_TO_HOME: number

/**
 * Every value you want typed should be declared.
 * Or you can use a namespace wrapping them.
 */
declare namespace NasaSpace {
    let timeout: number;
}
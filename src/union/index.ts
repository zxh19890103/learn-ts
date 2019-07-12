declare namespace S {
    type T1 = 3 | 4 | 6
    type T2 = 5 | 7 | 0

    type T3 = T1 | T2
}

type Point = {
    x: number;
    y: number;
};

type Label = {
    name: string;
};

interface Shape {
    x: number
    y: number
}

type EnhancedShape<T> = T | Shape

type EnhancedShapeType = EnhancedShape<{ name: string, x: string }>

let s: EnhancedShapeType

const shape: EnhancedShapeType = {
    x: 9,
    y: 900,
    name: "d"
}

type budda = string & number

let mk: number = 90
let h: budda = mk
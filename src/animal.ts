class Animal {
    public name: string = 'Animal'
    constructor(name: string) {
        this.name = name
    }

    moal() {
        console.log(`I am ${this.name}`)
    }
}

const p: Person = {
    name: 'Singhi',
    age: 30
}

export {
    Animal,
    p
}
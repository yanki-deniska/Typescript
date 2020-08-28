class Typescript {
    version: string

    constructor(version: string) {
    this.version = version
    }

    info (name: string) {
        return `[${name}]: Typescript version is ${this.version}`
    }
}

class  Car {
    readonly numberofWheels: number =4
    constructor(readonly model: string) {
    }
}
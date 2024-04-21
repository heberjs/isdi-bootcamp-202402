function buildErrorClass(name) {
    return class extends Error {
        constructor(message) {
            super(message)

            this.name = name
        }
        //@ts-ignore
        static get name() {
            return name
        }
    }
}


const 
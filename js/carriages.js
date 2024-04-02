class Carriage {
    #weight
    #productUnits
    #maxProdUnits

    constructor(weight, productUnits, maxProdUnits) {
        this.setMaxProdUnits(maxProdUnits)
        this.setWeight(weight)
        this.setProdUnits(productUnits)
    }

    setMaxProdUnits = maxProdUnits => {
        if (typeof maxProdUnits === "number" && maxProdUnits > 0 && Number.isInteger(maxProdUnits)) {
            this.#maxProdUnits = maxProdUnits
        } else {
            throw new Error("Max product units must be positive integer! ")
        }
    }

    getMaxProdUnits = () => this.#maxProdUnits

    setWeight = weight => {
        if (typeof weight === "number" && weight > 0) {
            this.#weight = weight
        } else {
            throw new Error("Weight must be positive number! " + weight)
        }
    }

    getWeight = () => this.#weight

    setProdUnits = productUnits => {
        if (
            typeof productUnits !== "number"
            || productUnits < 0
        ) {
            throw new Error("Number of product units must be non-negative number! ")
        } else if (productUnits > this.getMaxProdUnits()) {
            throw new Error("Number of product units can't be more max allowed value!")
        } else {
            this.#productUnits = productUnits
        }
    }

    getProdUnits = () => this.#productUnits

    toString = () => `Вагон, вес: ${this.getWeight()} т, единиц товара: ${this.getProdUnits()}`

    printInfo = () => console.log(this.toString())
}

class CarCarriage extends Carriage {
    constructor(weight, carNumber, maxCarNumber) {
        super(weight, carNumber, maxCarNumber);
    }

    toString = () => `Вагон для перевозки машин, вес: ${this.getWeight()} т, машин: ${this.getProdUnits()}`
}

class Tank extends Carriage {
    constructor(weight, prodLitres, maxLitres) {
        super(weight, prodLitres, maxLitres);
    }

    toString = () => `Цистерна, вес: ${this.getWeight()} т, литров товара: ${this.getProdUnits()}`
}
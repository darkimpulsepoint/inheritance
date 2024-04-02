const carriageTypes = [Carriage, CarCarriage, Tank]

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function generateCarriageList() {
    return Array(getRandomInt(10, 20))
        .fill(0)
        .map(
            () => new carriageTypes[getRandomInt(0, carriageTypes.length-1)](
                getRandomInt(1, 100),
                getRandomInt(1, 50),
                getRandomInt(51, 100)
            )
        )
}

function printCarriagesInfo(carriages) {
    carriages.forEach(carriage => carriage.printInfo())
}

printCarriagesInfo(generateCarriageList())

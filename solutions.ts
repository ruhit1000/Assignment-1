const multiplyValue = (value: number, multiplier: number = 2) : number => {
    return value * multiplier
}

const processInput = (value: number|string|boolean): string | number => {
    if (typeof value === "string") return value.trim().toLowerCase()
    if (typeof value === "number") return value * 10
    if (value === true) return "Active"
    return "Inactive"
}

console.log(processInput(false))
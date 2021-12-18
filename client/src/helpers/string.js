function uppercaseFirstLetter(string) {
    if (!string) {
        return ""
    }
    let res = string.split("_").map(elem => elem[0].toUpperCase() + elem.slice(1)).join(" ")
    return res
}

export { uppercaseFirstLetter }
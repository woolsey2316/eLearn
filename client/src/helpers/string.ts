function uppercaseFirstLetter(string: string) {
  if (!string) {
    return "";
  }
  const properNoun = string
    .split("_")
    // uppercase first letter
    .map((elem) => elem[0].toUpperCase() + elem.slice(1))
    .join(" ");
  return properNoun;
}

export { uppercaseFirstLetter };

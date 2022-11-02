function uppercaseFirstLetter(string) {
  if (!string) {
    return "";
  }
  const properNoun = string
    .split("_")
    .map((elem) => elem[0].toUpperCase() + elem.slice(1))
    .join(" ");
  return properNoun;
}

export { uppercaseFirstLetter };

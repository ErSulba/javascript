
function capitalize(string) {

  const firstLetter = string.substring(0, 1)
  const rest = string.substring(1)

  const capitalizedString = firstLetter.toUpperCase() + rest
  console.log("🚀 ~ file: capitalize.js ~ line 6 ~ capitalizedString", capitalizedString)

}


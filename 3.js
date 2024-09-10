function checkDigitsInName(Input) {
  if (typeof Input !== "string") {
    return "Invalid Input";
  }
  for (let i = 0; i < Input.length; i++) {
    let char = Input[i];
    if (char >= "0" && char <= "9") {
      return true;
    }
  }
  return false;
}
console.log(checkDigitsInName("Raj123"));
console.log(checkDigitsInName("Suman"));
console.log(checkDigitsInName("Name2024"));
console.log(checkDigitsInName("!@#"));
console.log(checkDigitsInName(["Raj"]));

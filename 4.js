function calculateFinalScore(parameter) {
  if (typeof parameter !== "object" || parameter === null) {
    return "Invalid Input";
  }
  if (
    typeof parameter.name !== "string" ||
    typeof parameter.testScore !== "number" ||
    typeof parameter.schoolGrade !== "number" ||
    typeof parameter.isFFamily !== "boolean"
  ) {
    return "Invalid Input";
  }
  if (parameter.testScore > 50 || parameter.schoolGrade > 30) {
    return "Invalid Input";
  }
  let Score = parameter.testScore + parameter.schoolGrade;
  if (parameter.isFFamily) {
    Score += 20;
  }
  if (Score >= 80) return true;

  return false;
}
console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: true,
  })
); // Output: true
console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: false,
  })
); // Output: false
console.log(calculateFinalScore("hello")); // Output: Invalid Input
console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 15,
    schoolGrade: 25,
    isFFamily: true,
  })
); // Output: false

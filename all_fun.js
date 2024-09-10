function calculateTax(income, expenses) {
  const save = income - expenses;
  if (income < 0 || expenses < 0 || save < 0) {
    return "Invalid Input";
  }
  return save * 0.2;
}
function sendNotification(mail) {
  if (mail.indexOf("@") === -1) {
    return "Invalid Email";
  }
  let part = mail.split("@");
  const user = part[0];
  const domain = part[1];
  return `${user} sent you an email from ${domain}`;
}
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
function waitingTime(waiting, serial_Number) {
  if (!Array.isArray(waiting) || typeof serial_Number !== "number") {
    return "Invalid Input";
  }
  const people_Left = serial_Number - waiting.length - 1;
  if (people_Left <= 0) {
    return 0;
  }
  let totalTime = 0;
  for (let i = 0; i < waiting.length; i++) {
    totalTime += waiting[i];
  }
  let average_Time = Math.round(totalTime / waiting.length);
  return people_Left * average_Time;
}

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

console.log(waitingTime([3, 5, 7, 11, 6], 10)); // Output: 24
console.log(waitingTime([13, 2], 6)); // Output: 24
console.log(waitingTime([13, 2, 6, 7, 10], 6)); // Output: 0
console.log(waitingTime([6], 4)); // Output: 12
console.log(waitingTime(7, 10)); // Output: Invalid Input
console.log(waitingTime("[6,2]", 9)); // Output: Invalid Input
console.log(waitingTime([7, 8, 3, 4, 5], "9")); // Output: Invalid Input

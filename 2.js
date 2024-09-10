function sendNotification(mail) {
  if (mail.indexOf("@") === -1) {
    return "Invalid Email";
  }
  let part = mail.split("@");
  const user = part[0];
  const domain = part[1];
  return `${user} sent you an email from ${domain}`;
}

console.log(sendNotification("zihad@gmail.com"));
console.log(sendNotification("farhan34@yahoo.com"));
console.log(sendNotification("nadim.naem5@outlook.com"));
console.log(sendNotification("fahim234.hotmail.com"));
console.log(sendNotification("sadia8icloud.com"));

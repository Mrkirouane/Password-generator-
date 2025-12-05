function generate() {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*;()_'+>,.?-={}[]|:";

  let password = "";
  let allowedChars = "";

  const passwordLength = 15;
  const includeLowerCase = true;
  const includeUpperCase = true;
  const includeSymbols = true;
  const includeNumbers = true;

  allowedChars += includeLowerCase ? lowerCase : "";
  allowedChars += includeUpperCase ? upperCase : "";
  allowedChars += includeNumbers ? numbers : "";
  allowedChars += includeSymbols ? symbols : "";

  if (passwordLength <= 0 || allowedChars.length === 0) {
    const outputField = document.getElementById("ourInput");
    if (outputField) {
      outputField.value = "Invalid";
    }
    return;
  }

  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomNumber];
  }

  const outputField = document.getElementById("ourInput");
  if (outputField) {
    outputField.value = password;
  }
}

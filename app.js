function generatPass() {
  const passwordLength = parseInt(document.getElementById("password-length").value) || 8; // Default length to 8 if not specified
  const includeNumber = document.getElementById("IncludeNumber").checked;
  const includeLower = document.getElementById("IncludeLower").checked;
  const includeUpper = document.getElementById("IncludeUpper").checked;
  const includeSymbols = document.getElementById("symbols").checked;
  const quantity = parseInt(document.getElementById("numbergen").value) || 1; // Default to 1 password

  const num = "0123456789";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = lowercase.toUpperCase();
  const symbols = "!@#$%^&*";

  let characterPool = "";
  if (includeNumber) characterPool += num;
  if (includeLower) characterPool += lowercase;
  if (includeUpper) characterPool += uppercase;
  if (includeSymbols) characterPool += symbols;

  
  if (!characterPool) {
      alert("Please select at least one character type.");
      return;
  }

  let passwords = [];
  for (let i = 0; i < quantity; i++) {
      let password = "";
      for (let j = 0; j < passwordLength; j++) {
          const randomIndex = Math.floor(Math.random() * characterPool.length);
          password += characterPool[randomIndex];
      }
      passwords.push(password);
  }

 
  document.getElementById("passshower").value = passwords.join("\n");
}

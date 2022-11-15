import zxcvbn from "zxcvbn";
// password strength 0 - weakest, 4 strongest
function evaluatePasswordScore(password: string): zxcvbn.ZXCVBNScore {
  return zxcvbn(password).score;
}
// green is best, orange moderate, red is weak
function passwordStrengthColour(password: string) {
  const score = evaluatePasswordScore(password);
  if (score >= 3) return "theme-9";
  else if (score > 1 && score < 3) return "theme-11";
  else return "theme-6";
}
function passwordQuality(password: string) {
  const score = evaluatePasswordScore(password);
  // empty password does not get assessed
  switch (score) {
    case 4:
      return "Very Strong password";
    case 3:
      return "Strong password";
    case 2:
      return "Moderate password";
    case 1:
      return "Weak password";
    case 0:
      return "Very Weak password";
    default:
      return "";
  }
}

export { evaluatePasswordScore, passwordStrengthColour, passwordQuality };

// password strength 0 - weakest, 4 strongest
function evaluatePasswordScore() {
  return zxcvbn(user.password).score
}
// green is best, orange moderate, red is weak
function passwordStrengthColour() {
  var score = evaluatePasswordScore()
  if (score >= 3) return 'theme-9'
  else if (score > 1 && score < 3) return 'theme-11'
  else return 'theme-6'
}
function passwordQuality() {
  var score = evaluatePasswordScore()
  // empty password does not get assessed
  score = user.password === '' ? -1 : score
  switch (score) {
    case 4:
      return 'Very Strong password'
    case 3:
      return 'Strong password'
    case 2:
      return 'Moderate password'
    case 1:
      return 'Weak password'
    case 0:
      return 'Very Weak password'
    default:
      return ''
  }
}

export { evaluatePasswordScore, passwordStrengthColour, passwordQuality }

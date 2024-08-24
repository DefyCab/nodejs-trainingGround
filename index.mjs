export function getAge(birthYear, currentYear) {
  return currentYear - birthYear
}

export const getAgeArrow = (birthYear, currentYear) => {
  return currentYear - birthYear
}

export const getAgeGroup = (age) => {
  // if condition is met returns the value and then exist the function. Return exist function.

  if (age < 4) return "toddler"
  if (age < 13) return "kid"
  if (age < 20) return "teenager"
  if (age < 39) return "adult"
  return "old"
}

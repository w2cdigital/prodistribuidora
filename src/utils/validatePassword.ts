export const validatePasswordRules = (password: string) => {
  if (!password) {
    return {
      hasUppercase: false,
      hasLowercase: false,
      hasNumber: false,
      hasSpecialChar: false,
      hasMinLength: false,
    }
  }
  return {
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumber: /\d/.test(password),
    hasSpecialChar: /[^A-Za-z0-9]/.test(password),
    hasMinLength: password.length >= 8,
  }
}

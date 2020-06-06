class Validator {
  isNotEmpty = val => val.trim().length !== 0
  isGreaterThan = val => val.trim().length >= 8
  isEmail = val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim())
}

export default new Validator();
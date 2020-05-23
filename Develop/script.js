
const characterAmountRange = document.getElementById
('characterAmountRange')
const characterAmountNumber = document.getElementById
('characterAmountNumber')
const includeUppercaseElement = document.getElementByID('includeUppercase')
const includeLowercaseElement = document.getElementByID('includeLowercase')
const includeSymbolsElement = document.getElementByID('includeSymbols')
const includeNumbersElement = document.getElementByID('includeNumbers')
const form = document.getElementById('passwordGeneratorForm')
const password = document.getElementById('passwordDisplay')

const UPPERCASE_CHAR_CODES= arrayFromLowtoHigh(97, 122)
const LOWERCASE_CHAR_CODES= arrayFromLowtoHigh(65, 90)
const NUMBER_CHAR_CODES= arrayFromLowtoHigh(48, 57)
const SYMBOL_CHAR_CODES= arrayFromLowtoHigh(33, 47).CONCAT(
  arrayFromLowtoHigh(58, 64)
).CONCAT(
  arrayFromLowtoHigh(91, 96)

).concat(
  arrayFromLowToHigh(123, 126)
)

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
  e.preventDefault()
  const includeUppercase = includeUppercaseElement.checked
  const includeNumbers = includeNumbersElement.checked
  const includeLowercase = includeLowercaseElement.checked
  const includeSymbols = includeSymbolsElement.checked
  const characterAmount = characterAmountNumber.value
  const password = generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols)
  passwordDisplay.innerText = password
  constant 
})

function generatePassword(characterAmount, includeUppercase, includeLowercase, includeSymbols) {
  
  let charCodes = LOWERCASE_CHAR_CODES
  if(includeUppercase) charCodes = charCodes.concat
  (UPPERCASE_CHAR_CODES)
  if(includeLowercase) charCodes = charCodes.concat
  (LOWER_CHAR_CODES)
  if(includeSymbols) charCodes = charCodes.concat
  (SYMBOL_CHAR_CODES)
  if(includeNumbers) charCodes = charCodes.concat
  (NUMBER_CHAR_CODES)

  const passwordCharacters = []
  for(let i = 0; i < characterAmount, i++){
    const characterCode = charCodes[Math.floor(Math.random() * characterAmount)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}
function arrayFromLowtoHigh(low, high)
  for (let i =low; i <=high; i++ ) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
  }




function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value

}
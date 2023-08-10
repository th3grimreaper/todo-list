export function createEl(parent, element, classOfElement, text = '') {
  const elementPointer = element
  const parentPointer = parent
  elementPointer.classList.add(classOfElement)
  elementPointer.textContent = text
  parentPointer.appendChild(elementPointer)
}

export function checkElementValidity(element) {
  if (element) {
    return element
  }
  return null
}

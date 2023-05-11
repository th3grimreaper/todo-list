export function addTask(btn, modal) {
  btn.addEventListener('click', () => {
    modal.showModal()
  })
}

export function closeModal(btn, modal) {
  btn.addEventListener('click', () => {
    modal.close()
  })
}

export function formValidation() {
  const title = document.querySelector('#title')
  const desc = document.querySelector('#description')
  const date = document.querySelector('#duedate')
  const priority = document.querySelector('#priority')
  if (
    title.reportValidity() &&
    desc.reportValidity() &&
    date.reportValidity() &&
    priority.reportValidity()
  ) {
    return true
  }
  return false
}

const title = document.querySelector('#title')
const desc = document.querySelector('#description')
const date = document.querySelector('#duedate')
const priority = document.querySelector('#priority')
const notes = document.querySelector('#notes')
const cardContainer = document.querySelector('.taskcard-cont')

class Task {
  constructor(title, desc, date, priority, notes) {
    this.title = title
    this.desc = desc
    this.date = date
    this.notes = notes
    this.priority = priority
  }
}

export function addTask(btn, modal) {
  btn.addEventListener('click', () => {
    modal.showModal()
  })
}

export function createTaskCard() {
  const newTaskCard = document.createElement('div')
  newTaskCard.classList.add('taskcard')
  cardContainer.appendChild(newTaskCard)
}

export function closeModal(btn, modal) {
  btn.addEventListener('click', () => {
    modal.close()
  })
}

export function pushTask() {
  return new Task(
    title.value,
    desc.value,
    date.value,
    priority.value,
    notes.value
  )
}

export function formValidation() {
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

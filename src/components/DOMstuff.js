const title = document.querySelector('#title')
const priority = document.querySelector('#priority')

class Task {
  constructor(title, priority) {
    this.title = title
    this.priority = priority
  }
}
export function addTask(btn, modal) {
  btn.addEventListener('click', () => {
    modal.showModal()
  })
}

// export function createTaskCard(tasksArray) {
//   let i = 0
//   const newTaskCard = document.createElement('div')
//   newTaskCard.classList.add('taskcard')
//   newTaskCard.id = i
//   newTaskCard.textContent = `${tasksArray[i].title} ${tasksArray[i].desc} ${tasksArray[i].date} ${tasksArray[i].priority}`
//   cardContainer.appendChild(newTaskCard)
//   i += 1
// }

export function closeModal(btn, modal) {
  btn.addEventListener('click', () => {
    modal.close()
  })
}

export function pushTask() {
  return new Task(title.value, priority.value)
}

export function formValidation() {
  if (title.reportValidity() && priority.reportValidity()) {
    return true
  }
  return false
}

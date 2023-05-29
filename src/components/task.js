import { addTask, formValidation } from './DOMstuff'

class task {
  constructor(title, desc, date, priority, notes) {
    this.title = title
    this.desc = desc
    this.date = date
    this.notes = notes
    this.priority = priority
  }
}

const startTodo = (() => {
  const newTask = document.querySelector('.task-btn')
  const btnArr = document.querySelectorAll('.btn')
  const form = document.querySelector('form')
  const modal = document.querySelector('.card')

  addTask(newTask, modal)

  btnArr.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault()
      if (event.target.classList.contains('add')) {
        if (formValidation()) {
          modal.close()
          form.reset()
        } else {
          alert('invalid details')
        }
      }
      if (event.target.classList.contains('cancel')) {
        modal.close()
        form.reset()
      }
    })
  })
})()

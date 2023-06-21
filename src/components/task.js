import { addTask, createTaskCard, formValidation, pushTask } from './DOMstuff'

const startTodo = (() => {
  const myTasks = []
  const index = 0

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
          myTasks.push(pushTask())
          modal.close()
          form.reset()
          createTaskCard()
          console.log(myTasks[0])
          console.log(myTasks[1])
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

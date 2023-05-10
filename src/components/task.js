import { addTask, formValidation } from './DOMstuff'

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
          // console.log('fill out the form please')
        }
      }
      if (event.target.classList.contains('cancel')) {
        modal.close()
        form.reset()
      }
    })
  })
})()

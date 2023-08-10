import { addTask, createTaskCard, formValidation, pushTask } from './DOMstuff'
import addicon from '../assets/addicon.svg'

// const startTodo = (() => {
//   const myTasks = []
//
//   const newTask = document.querySelector('.task-btn')
//   const btnArr = document.querySelectorAll('.btn')
//   const form = document.querySelector('form')
//   const modal = document.querySelector('.card')
//
//   const img = document.createElement('img')
//   img.src = addicon
//   img.classList.add('plus-img')
//   if (img) {
//     newTask.appendChild(img)
//   }
//
//   addTask(newTask, modal)
//
//   btnArr.forEach((button) => {
//     button.addEventListener('click', (event) => {
//       event.preventDefault()
//       if (event.target.classList.contains('add')) {
//         if (formValidation()) {
//           myTasks.push(pushTask())
//           modal.close()
//           form.reset()
//           createTaskCard(myTasks)
//           // console.log(myTasks[0])
//           // console.log(myTasks[1])
//         } else {
//           console.log('invalid details')
//         }
//       }
//       if (event.target.classList.contains('cancel')) {
//         modal.close()
//         form.reset()
//       }
//     })
//   })
// })()

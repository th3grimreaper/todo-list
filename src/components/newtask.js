import { doc } from 'prettier'

function addTask() {
  const btn = document.querySelector('.task-btn')
  const modal = document.querySelector('.card')

  btn.addEventListener('click', () => {
    modal.showModal()
  })
}

export { addTask }

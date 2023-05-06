export function addTask() {
  const btn = document.querySelector('.task-btn')
  const modal = document.querySelector('.card')

  btn.addEventListener('click', () => {
    modal.showModal()
  })
}

export function closeModal() {
  const btn = document.querySelector('.cancel')
  const modal = document.querySelector('.card')

  btn.addEventListener('click', () => {
    modal.close()
  })
}

// export { addTask, closeModal }

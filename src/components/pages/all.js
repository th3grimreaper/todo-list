import { clearContent, mainContent } from './clear'
import { createEl, checkElementValidity } from './createEl'

function allTasks() {
  clearContent()

  createEl(
    mainContent,
    document.createElement('h2'),
    'task-list-header',
    'Dummy Project One'
  )

  createEl(mainContent, document.createElement('section'), 'task-list')

  createEl(
    checkElementValidity(document.querySelector('.task-list')),
    document.createElement('div'),
    'sub-task-list'
  )

  createEl(
    checkElementValidity(document.querySelector('.task-list')),
    document.createElement('button'),
    'add-task',
    'Add Task'
  )
}

export default allTasks

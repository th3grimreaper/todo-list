import './styles/main.scss'
import { addTask, closeModal } from './components/DOMstuff'

const startTodo = (() => {
  addTask()
  closeModal()
})()

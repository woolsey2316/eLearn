import { history } from './history'

function redirect(path) {
  history.push(path)
  window.location.reload()
}

export { redirect }
function getUserId() {
  if (localStorage.getItem('user')) {
    return JSON.parse(localStorage.getItem('user')).userId
  }
}

function getUser() {
  if (localStorage.getItem('user')) {
    return JSON.parse(localStorage.getItem('user')).user
  }
}
export { getUserId, getUser }

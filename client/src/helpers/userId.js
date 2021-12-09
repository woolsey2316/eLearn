function getUserId() {
  return localStorage.getItem('USER_ID')
}

function getUser() {
  if (localStorage.getItem('user')) {
    return JSON.parse(localStorage.getItem('user')).user
  }
}
export { getUserId, getUser }

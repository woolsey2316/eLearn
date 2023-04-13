const { ObjectId } = require('mongodb');

function userIsSubscribed(user, userList) {
  let subscribed = false
  userList?.forEach(user_ => {
    if (user == user_) {
      subscribed = true;
    }
  })
  return subscribed
}

module.exports = { userIsSubscribed }
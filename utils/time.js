const getExpireTime = (minute) => {
  const expireTime = new Date(Date.now());
  expireTime.setMinutes(expireTime.getMinutes() + minute);
  return expireTime;
};

module.exports = { getExpireTime };

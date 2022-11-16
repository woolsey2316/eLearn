const validationErrorResponse = (res, errors) => {
  if (!errors.isEmpty()) {
    const error /*ValidationError*/ = errors.array()[0];
    return res.status(400).json({ message: error.msg });
  } else {
    return false;
  }
};

module.exports = { validationErrorResponse };

const sendTokenResponse = (user, statusCode, res) => {
  // Create Token
  const token = user.getSignedJwtToken();

  // Create Cookie
  const options = {
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 1000),
    httoOnly: true,
  };

  // Set for production
  if (process.env.NODE_ENV === "production") {
    options.secure = true;
  }

  //   Delete Password from User Object
  user.password = undefined;

  res.status(statusCode).json({
    success: true,
    token: token,
    user: user,
  });
};

export default sendTokenResponse;

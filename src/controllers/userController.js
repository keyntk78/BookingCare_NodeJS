import userService from "../services/userService";

let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  if (!email || !password) {
    return res.status(500).json({
      errcode: 1,
      message: "Missing input parameter!",
    });
  }

  let userData = await userService.handleUserLogin(email, password);

  return res.status(200).json({
    errcode: userData.errCode,
    message: userData.errMessage,
    user: userData.user ? userData.user : {},
  });
};

let handleGetAllUser = async (req, res) => {
  let id = req.query.id;
  let users = await userService.getAllUser(id);
  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing required paramaeter",
      users: [],
    });
  }
  return res.status(200).json({
    errCode: 0,
    errMessage: "OK",
    users,
  });
};

module.exports = {
  handleLogin: handleLogin,
  handleGetAllUser: handleGetAllUser,
};

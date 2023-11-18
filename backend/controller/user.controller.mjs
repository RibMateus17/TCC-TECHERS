import * as userService from '../service/user.service.mjs'

async function register(req, res) {
  const { email, username, password } = req.body;
  const response = await userService.register(email, username, password);
  res.status(200).json({ message: 'Created: ' + response}) 
}

async function getAllUsers(_req, res) {
  res.status(200).json({ message: await userService.getAllUsers() })
}

async function login(req, res) {
  const { email, username, password } = req.body;
  try {
    const response = await userService.login(email, username, password);
    console.log(response);
    res.status(200).json({ message: response });
  } catch (error) {
    res.status(401).json({ message: error });
  }
}

export {
  getAllUsers,
  login,
  register,
}
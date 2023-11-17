import { getUser } from "../../database/User.js";

async function login(req, res) {
  console.log("ENTROU NO LOGIN, CARAI");

  const { email, username, password } = req.body;

  try {
      const user = await getUser(email, username, password);

      console.log(user);

      const isEmail = Boolean(email == user.email);
      const isUsername = Boolean(username == user.username);
      const isPassword = Boolean(password == user.password);

      if (isEmail && isUsername && isPassword) {
          return res.status(200).json({ message: user });
      }

  } catch (error) {
      return res.status(500).json({ message: 'Erro interno' });
  }
}

export {
  login,
};
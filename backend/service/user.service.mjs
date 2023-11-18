import connection from '../database/connection.mjs'

async function login(email, username, password) {
  const query = `
    SELECT *
    FROM users
    WHERE email = ? AND username = ? AND password = ?
  `;

  try {
    const db = await connection();
    const user = await db.get(query, [email, username, password]);
    await db.close();
    
    // Verifica se o usuário logando está correto
    if (user === undefined) {
      throw new Error("Acesso negado!");
    }

    return user;
  } catch (error) {
    console.error('Erro ao encontrar usuário: ', error);
    throw new Error(error.message);
  }
}

async function register(email, username, password) {
  try {
    const db = await connection();
    await db.exec(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT,
      username TEXT,
      password TEXT
    )`);

    const stmt = await db.prepare('INSERT INTO users (email, username, password) VALUES (?, ?, ?)');
    await stmt.run(email, username, password);
    await stmt.finalize();

    await db.close();

    console.log("Usuário foi registrado com sucesso!");
  } catch (error) {
    console.error('Erro ao registrar usuário: ', error);
  }
}

async function getAllUsers() {
  try {
    const db = await connection();
    const users = await db.all('SELECT * FROM users');
    await db.close();

    console.log(users);
  } catch (error) {
    console.error('Erro ao buscar usuários: ', error);
    throw new Error('Erro ao buscar usuários.');
  }
}

export {
  login,
  register,
  getAllUsers,
}
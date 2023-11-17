import { openDb } from './configDB.js';

/**
 * Função para registrar usuário no DB
 */
export async function registerUser(email, username, password) {
  try {
    const db = await openDb();
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

/**
 * Visualizar tabela de usuários
 */
export async function getAllUsers() {
  try {
    const db = await openDb();
    const users = await db.all('SELECT * FROM users');
    await db.close();

    console.log(users);
  } catch (error) {
    console.error('Erro ao buscar usuários: ', error);
    throw new Error('Erro ao buscar usuários.');
  }
}

export async function getUser(email, username, password) {
  console.log("--- DENTRO DA FUNÇÃO GET USER ---");
  console.log(email);
  console.log(username);
  console.log(password);

  const query = `
    SELECT *
    FROM users
    WHERE email = ? AND username = ? AND password = ?
  `;

  try {
    const db = await openDb();
    const user = await db.get(query, [email, username, password]);
    await db.close();
    console.log("DEU CERTO");
    return user;
  } catch (error) {
    console.log("NÃO DEU CERTO");
    console.error('Erro ao encontrar usuário: ', error);
    throw new Error('Erro ao buscar usuário.');
  }
}
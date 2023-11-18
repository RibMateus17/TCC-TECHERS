import connection from "../database/connection.mjs";

async function register(obj) {
  const { name, qtd, priceB, priceS, qtdS, imageName } = obj;

  console.log(qtdS);

  try {
    const db = await connection();
    await db.exec(`CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      qtd INTEGER,
      priceB FLOAT,
      priceS FLOAT,
      qtdS INTEGER,
      imageName TEXT
    )`);

    const stmt = await db.prepare(
      'INSERT INTO products (name, qtd, priceB, priceS, qtdS, imageName) VALUES (?, ?, ?, ?, ?, ?)',
    );
    await stmt.run(name, qtd, priceB, priceS, qtdS, imageName);
    await stmt.finalize();

    await db.close();

    console.log("Produto foi registrado com sucesso!")
  } catch (error) {
    console.error(error);
  }
}

async function getAll() {
  try {
    const db = await connection();
    const products = await db.all('SELECT * FROM products');
    await db.close();

    return products;
  } catch (error) {
    console.error('Erro: ' + error);
  }
}

async function deleteById(id) {
  try {
    const db = await connection();
    const stmt = await db.prepare('DELETE FROM products WHERE id = ?');
    await stmt.run(id);
    await stmt.finalize();

    await db.close();

    console.log("deletado com sucesso");
  } catch (error) {
    console.error(error.message);
  }
}

export {
  register,
  getAll,
  deleteById,
}
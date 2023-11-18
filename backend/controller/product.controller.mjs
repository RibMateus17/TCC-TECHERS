import * as productService from "../service/product.service.mjs"

async function register(req, res) {
  try {
    await productService.register(req.body);
    res.status(200).json({ message: "Conexão feita com product" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getAll(_req, res) {
  const products = await productService.getAll();
  res.status(200).json({ message: products});
}

async function deleteById(req, res) {
  const id = req.params.id;
  try {
    await productService.deleteById(id);
    res.status(200).json({ message: "Item deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export {
  register,
  getAll,
  deleteById,
}

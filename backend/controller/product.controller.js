export async function register(req, res) {
  const { name, qtd, priceB, priceS, image } = req.body;

  console.log(name);
  console.log(qtd);
  console.log(priceB);
  console.log(priceS);
  console.log(image);

  res.status(200).json({ message: image });
}
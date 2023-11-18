import multer from 'multer';

// Configuração do Multer para lidar com upload de arquivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './backend/files-storage/'); // Altere para o diretório desejado
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Pode ser necessário gerar nomes únicos para os arquivos
  },
});

const upload = multer({ storage: storage });

export default upload;
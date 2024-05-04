import express from 'express';
import multer from 'multer';
import { FiltrarDocController } from '../../controllers/rg/FiltrarDocController.js';

const router = express.Router();

// Configuração do multer para lidar com o upload de imagens
const upload = multer({ dest: 'uploads/' });

// Rota para lidar com o upload de imagem e chamar o controller
router.post('/rg', upload.single('imagem'), FiltrarDocController);

export default router;

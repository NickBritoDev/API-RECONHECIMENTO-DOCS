import express from 'express';
import multer from 'multer';
import { FiltrarDocController } from '../../controllers/cpf/FiltrarDocController.js';

const router = express.Router();


const upload = multer({ dest: 'uploads/' });


router.post('/cpf', upload.single('imagem'), FiltrarDocController);

export default router;

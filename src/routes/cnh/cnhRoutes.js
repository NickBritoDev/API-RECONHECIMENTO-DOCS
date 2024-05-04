import express from 'express';
import multer from 'multer';
import { FiltrarDocController } from '../../controllers/cnh/FiltrarDocController.js';

const router = express.Router();


const upload = multer({ dest: 'uploads/' });


router.post('/cnh', upload.single('imagem'), FiltrarDocController);

export default router;

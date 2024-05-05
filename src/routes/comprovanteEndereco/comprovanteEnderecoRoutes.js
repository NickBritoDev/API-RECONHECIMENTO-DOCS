import express from 'express';
import multer from 'multer';
import { FiltrarDocController } from '../../controllers/comprovanteEndereco/FiltrarDocController.js';

const router = express.Router();


const upload = multer({ dest: 'uploads/' });


router.post('/comprovanteEndereco', upload.single('imagem'), FiltrarDocController);

export default router;

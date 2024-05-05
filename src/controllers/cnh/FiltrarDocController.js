import multer from 'multer';
import { FiltrarPadroes } from '../../services/cnh/FiltrarDocService.js';
import { getPadroesDoc } from '../../models/cnh/cnh.js';


const upload = multer({ dest: 'uploads/' });

export const FiltrarDocController = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        status: false,
        palavras_chave: [],
        documento: 'Documento não pode ser reconhecido'
      });
    }

    const imagePath = req.file.path;
    const palavrasEncontradas = await FiltrarPadroes(getPadroesDoc, imagePath);

    const possuiCNH = palavrasEncontradas.some(palavra => palavra.toUpperCase() === 'HABILITAÇÃO');

    if (possuiCNH) {
      return res.status(200).json({
        status: true,
        palavras_chave: palavrasEncontradas,
        documento: 'Documento reconhecido'
      });
    } else {
      return res.status(400).json({
        status: false,
        palavras_chave: [],
        documento: 'Documento não pode ser reconhecido'
      });
    }
  } catch (error) {
    console.error('Erro no controller:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}


import { createWorker } from 'tesseract.js';

export const FiltrarPadroes = async (getPadroesDoc, imagePath) => {
  try {
    const padroes = getPadroesDoc();
    const worker = await createWorker('por');
    const ret = await worker.recognize(imagePath);
    console.log(ret.data.text);
    await worker.terminate();

    const palavrasEncontradas = padroes.palavras_comuns_comprovante_endereco.filter(palavra => ret.data.text.includes(palavra));
    return palavrasEncontradas;
  } catch (error) {
    console.error('Erro ao filtrar padrões:', error);
    return [];
  }
}

const express = required('express');
const router = express.Router();

const candidatoController = required('../controllers.candidatoController');
const usuarioController = required('../controllers/usuarioController');

router.post('/candidato', candidatoController.Criar);
router.get('/candidato', candidatoController.Listar);
router.post('/usuario', usuarioController.Criar);
router.get('/usuario', usuarioController.Listar);

module.exports = router;
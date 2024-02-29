const express = require ('express');
const usuarioRouter = express.Router();

const { listarUsuarios, buscarUsuario, criarUsuario, deletaUsuario, atualizarUsuario } = require('../controller/usuarioController');

usuarioRouter.get('/', listarUsuarios);
usuarioRouter.get('/:email', buscarUsuario);
usuarioRouter.post('/', criarUsuario);
usuarioRouter.delete('/:email', deletaUsuario);
usuarioRouter.put('/:email', atualizarUsuario);

module.exports = usuarioRouter;
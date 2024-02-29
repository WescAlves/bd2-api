const Usuario = require("../model/Usuario.js");

const criarUsuario = async (req, res) => {
  try{
    const usuario = await Usuario.create(req.body);
    res.status(201).send(usuario);
    }
    catch (exception){
        res.status(400).json({erro: exception.message})
    }
}
  
const listarUsuarios = async(req, res) => {
  const usuarios = await Usuario.findAll();
  res.json(usuarios);
}

const buscarUsuario = async (req, res) => {
  const usuario = await Usuario.findByPk(req.params.email);
  if(usuario === null){ 
    res.status(404).json("Usuário não encontrado!")
    return
  }
  res.json(usuario);
}

const atualizarUsuario = async(req, res) => {
    const usuario = await Usuario.findByPk(req.params.email);
    if(usuario !== null){
        usuario.nome = req.body.nome;
        usuario.nascimento = req.body.nascimento;
        await usuario.save();
        res.status(200).json(`Usuário atualizado: ${usuario.nome}`);
        return        
    }
    res.status(404).json("Usuário não encontrado!");
    
}

const deletaUsuario = async (req, res) => {
  const usuario = await Usuario.findByPk(req.params.email);
  if(usuario !== null){
    try{
        usuario.destroy();
        res.status(200).json("Usuário excluído com sucesso!")
    } 
    catch
    {
        res.json("Usuário encontrado, mas não excluído")
    }
    return
  }
  res.json("Usuário não encontrado!");
}

module.exports = { listarUsuarios, buscarUsuario, criarUsuario, deletaUsuario, atualizarUsuario };

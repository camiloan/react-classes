const { response } = require('express');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

const crearUsuario = async (req, res = response) => {
  const { email, password } = req.body;
  try {
    let usuario = await Usuario.findOne({ email });
    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: 'Un usuario existe con este correo.',
      });
    }
    usuario = new Usuario(req.body);
    // * Encriptar contraseñá
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);
    await usuario.save();
    //* Generar nuestro JWT
    const token = await generarJWT(usuario.id, usuario.name);
    res
      .status(201)
      .json({ ok: true, uid: usuario.id, name: usuario.name, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador.',
    });
  }
};

const loginUsuario = async (req, res) => {
  const { email, password } = req.body;
  try {
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: 'El usuario no existe con ese email.',
      });
    }

    //* Confirmar los passwords
    const validPassword = bcrypt.compareSync(password, usuario.password);
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: 'Password incorrecto.',
      });
    }
    //* Generar nuestro JWT
    const token = await generarJWT(usuario.id, usuario.name);
    return res
      .status(201)
      .json({ ok: true, uid: usuario.id, name: usuario.name, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador.',
    });
  }
};

const revalidarToken = async (req, res) => {
  const { uid, name } = req;
  // * Generar JWT
  const token = await generarJWT(uid, name);

  res.status(201).json({ ok: true, uid, name, token });
};

module.exports = { crearUsuario, loginUsuario, revalidarToken };

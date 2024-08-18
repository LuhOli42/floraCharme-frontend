const express = require("express");
const app = express();
const index = require("./index");
const cadastro = require("./cadastro");
const carrinho = require("./carrinho");
const contato = require("./contato");
const favoritos = require("./favoritos");
const login = require("./login");
const perfil = require("./perfil");
const produto = require("./produto");
const produtos = require("./produtos");
const sobreNos = require("./sobre-nos");

app.set("views", "./src/views");
app.use(
  index,
  cadastro,
  carrinho,
  contato,
  favoritos,
  login,
  perfil,
  produto,
  produtos,
  sobreNos
);

module.exports = app;

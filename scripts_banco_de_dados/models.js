const { Sequelize } = require('sequelize');
const {sequelize} = require('./conexao.bancodedados')


const Produto = sequelize.define('Produto', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING
    },
    quantidade: {
        type: Sequelize.INTEGER
    },
});


sequelize.sync() // ESSE CARA AO USAR .sync() VAI GERAR AS TABELAS QUE VCS DECLARAREM AQUI

module.exports = {Produto};
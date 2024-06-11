const Sequelize = require('sequelize');

const connection = require('../database/database');

/*
PARAMETROS DO MÉTODO DEFINE
1 - NOME DA TABELA - STRING
2 - OBJETO JSON: 
                NOME DO CAMPO DA TABELA
                TIPO DE DADO DO CAMPO DA TABELA
                REGRAS DO CAMPO DA TABELA (NULL, NOT NULL, DEFAULT...ETC)
*/
const modeLivro = connection.define(
    'tbl_livro',
    {
        cod_livro:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nome_livro:{
            type:Sequelize.STRING(100),
            allowNull:true
        },
        autor_livro:{
            type:Sequelize.STRING(100),
            allowNull:true
        },
        descricao_livro:{
            type:Sequelize.STRING(500),
            allowNull:true
        },
    }
);

//modeLivro.sync({force:true});

module.exports = modeLivro;
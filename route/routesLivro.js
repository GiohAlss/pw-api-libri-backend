const express = require('express');

/* IMPORTA O MODEL DE LIVRO */
const modelLivro = require('../model/modelLivro');
const e = require('express');

/* GERECIADOR DE ROTAS */
const router = express.Router();

/* ROTA DE TESTE DE CONEXÃO COM A API */
router.get('/', (req, res)=>{

    return res.status(200).json({status:'TESTE DE CONEXÃO COM A API!'});

});

/* ROTA DE INSERÇÃO DE LIVRO */
router.post('/inserirLivro', (req, res)=>{

    let { nome_livro, autor_livro, descricao_livro } = req.body;

    modelLivro.create(
        {
            nome_livro,
            autor_livro,
            descricao_livro
        }
    )
    .then(
        ()=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'LIVRO INSERIDO COM SUCESSO'
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'HOUVE UM ERRO AO INSERIR O LIVRO',
                errorObject:error
            }
        );
    });

    // return res.status(200).json({status:'TESTE DE INSERÇÃO DE LIVRO!'});

});

/* ROTA DE LISTAGEM GERAL DE LIVROS */
router.get('/listagemLivros', (req, res)=>{

    modelLivro.findAll()
    .then(
        (response)=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'LIVROS LISTADOS COM SUCESSO',
                    data:response
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'HOUVE UM ERRO AO LISTAR OS LIVROS',
                errorObject:error
            }
        );
    });

    // return res.status(200).json({status:'TESTE DE LISTAGEM DE LIVROS!'});

});

/* ROTA DE LISTAGEM DE LIVRO POR CÓDIGO DE LIVRO*/
router.get('/listagemLivro/:cod_livro', (req, res)=>{

    let { cod_livro } = req.params;

    modelLivro.findByPk(cod_livro)
    .then(
        (response)=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'LIVRO RECUPERADO COM SUCESSO',
                    data:response
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'HOUVE UM ERRO AO RECUPERAR O LIVRO',
                errorObject:error
            }
        );
    });

    // return res.status(200).json({status:'TESTE DE LISTAGEM DE LIVRO COM BUSCA POR CÓDIGO DE LIVRO!'});

});

/* ROTA DE EXCLUSÃO DE LIVRO */
router.delete('/excluirLivro/:cod_livro', (req, res)=>{

    let { cod_livro } = req.params;

    modelLivro.destroy(
        {where:{cod_livro}}
    ).then(
        ()=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'LIVRO EXCLUIDO COM SUCESSO'
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'HOUVE UM ERRO AO EXCLUIR O LIVRO',
                errorObject:error
            }
        );
    });

    // return res.status(200).json({status:'TESTE DE EXCLUSÃO DE LIVRO!'});

});

/* ROTA DE ALTERAÇÃO DE LIVRO */
router.put('/alterarLivro', (req, res)=>{

    let { cod_livro, nome_livro, autor_livro, descricao_livro } = req.body;

    modelLivro.update(
        {
            nome_livro,
            autor_livro,
            descricao_livro
        },
        {where:{cod_livro}}
    ).then(
        ()=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'LIVRO ALTERADO COM SUCESSO'
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'HOUVE UM ERRO AO ALTERAR O LIVRO',
                errorObject:error
            }
        );
    });

    // return res.status(200).json({status:'TESTE DE ALTERAÇÃO DE LIVRO!'});

});

module.exports = router;
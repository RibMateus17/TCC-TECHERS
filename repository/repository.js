const { Produto } = require('../scripts_banco_de_dados/models');

class Repository {
    listar = async (requisicao) => {
        const params = requisicao.query;
        const whereParams = {};

        if (params.nome) {
            whereParams.nome = params.nome;
        }

        return await Produto.findAll({ where: whereParams });
    }

    cadastrar = async (objetoComDadosDeCadastro) => {
        return await Produto.create(objetoComDadosDeCadastro);
    }

    atualizar = async (VersaoDoFrontend) => {
        const { nome, quantidade } = VersaoDoFrontend; 

        if (!nome || quantidade === undefined) {
            throw new Error('Nome e quantidade são obrigatórios');
        }

        const produto = await Produto.findOne({ where: { nome } });

        if (produto) {
            produto.quantidade += quantidade; 
            await produto.save();
            return produto;
        } else {
            throw new Error('Produto não encontrado');
        }
    }

    deletar = async (requisicao, resposta) => {
        try {
            const { nome } = requisicao.body;

            if (!nome) {
                throw new Error('Nome é obrigatório para exclusão');
            }

            const produto = await Produto.findOne({ where: { nome } });

            if (produto) {
                await produto.destroy(); 
                return resposta.status(200).json({ msg: 'Registro excluído com sucesso' });
            } else {
                return resposta.status(404).json({ msg: 'Produto não encontrado' });
            }
        } catch (error) {
            return resposta.status(500).json({ msg: 'Aconteceu um erro ao excluir o registro' });
        }
    }
}

module.exports = new Repository();

const ExemploRepository = require('../repository/exemplo.repository');

class ExemploController {
    listar = async (requisicao, resposta) => {
       return resposta.status(200).json(await ExemploRepository.listar(requisicao));
    }

    deletar = async (requisicao, resposta) => {
        try {
            const { nome } = requisicao.body;
    
            if (!nome) {
                throw new Error('Nome é obrigatório para exclusão');
            }
    
            const produto = await Produto.findOne({ where: { nome } });
    
            if (produto) {
                await produto.destroy(); // Exclui o registro
                return resposta.status(200).json({ msg: 'Registro excluído com sucesso' });
            } else {
                return resposta.status(404).json({ msg: 'Produto não encontrado' });
            }
        } catch (error) {
            return resposta.status(500).json({ msg: 'Aconteceu um erro ao excluir o registro' });
        }
    }
    
    cadastrar = async (requisicao, resposta) => {
        try {
            const { nome, quantidade } = requisicao.body;

            if (!nome || quantidade === undefined) {
                throw new Error('Nome e quantidade são obrigatórios');
            }

            return resposta.status(200).json(await ExemploRepository.cadastrar({ nome, quantidade }));
        } catch (error) {
            return resposta.status(500).json({ msg: 'Aconteceu um erro ao salvar um registro' });
        }
    }

    atualizar = async (requisicao, resposta) => {
        try {
            const { nome, quantidade } = requisicao.body;

            if (!nome || quantidade === undefined) {
                throw new Error('Nome e quantidade são obrigatórios');
            }

            return resposta.status(200).json(await ExemploRepository.atualizar({ nome, quantidade }));
        } catch (error) {
            return resposta.status(500).json({ msg: 'Aconteceu um erro ao atualizar um registro' });
        }
    }
}



module.exports = new ExemploController();

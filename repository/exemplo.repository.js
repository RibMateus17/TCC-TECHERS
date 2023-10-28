const { Produto } = require('../scripts_banco_de_dados/models');

class ExemploRepository {
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
      console.log('vindo do frontend ' + JSON.stringify(VersaoDoFrontend));
      const VersaoDoBancoDeDados = await Produto.findOne({ where: { nome: VersaoDoFrontend.nome } });
      console.log('vindo do sequelize ' + JSON.stringify(VersaoDoBancoDeDados));

      if (VersaoDoBancoDeDados) {
          VersaoDoBancoDeDados.quantidade -= VersaoDoFrontend.quantidade;
          await VersaoDoBancoDeDados.save();
          return VersaoDoBancoDeDados;
      } else {
          throw new Error('Produto não encontrado');
      }
    }
}

module.exports = new ExemploRepository();

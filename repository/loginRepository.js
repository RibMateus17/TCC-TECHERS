const { User } = require('../scripts_banco_de_dados/models');

class LoginRepository {
    login = async (requisicao) => {
        const params = requisicao.body;
        const whereParams = {}
        await User.findAll({
            where: {
              email: params.email,
              username: params.username,
              password: params.password,
            },
          });
    } 
}

module.exports = new LoginRepository();

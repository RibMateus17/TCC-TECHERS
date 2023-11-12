const { SERVER_URL } = require('../variaveis_shared/environment');
const Controller = require('../repository/repository');
const LoginController = require('../controller/loginController'); 

class RouteLoader {
    static load(server) {
        const ENTITY_NAME = 'produtos/'; 
        const ENTITY_NAME_AUTH = 'auth/'; 
        server.get(SERVER_URL + ENTITY_NAME + 'listar', Controller.listar); 
        server.post(SERVER_URL + ENTITY_NAME + 'cadastrar', Controller.cadastrar); 
        server.put(SERVER_URL + ENTITY_NAME + 'atualizar', Controller.atualizar); 
        server.delete(SERVER_URL + ENTITY_NAME + 'deletar', Controller.deletar); 
        server.post(SERVER_URL + ENTITY_NAME_AUTH + 'login/', LoginController.login); 
    }
}

module.exports = RouteLoader;

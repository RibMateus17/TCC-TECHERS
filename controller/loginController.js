const loginRepository = require('../repository/loginRepository');

class LoginController {
    login = async (requisicao, resposta) => {
        try {
            const login = await loginRepository.login(requisicao);

            if (login) {
                return resposta.status(200).json(login);
            } else {
                return resposta.status(401).json({ msg: 'Login inválido' });
            }
        } catch (error) {
            console.error(error);
            popupText.textContent = error.message;
            popup.style.display = 'block';
        }
    }
}

module.exports = new LoginController();

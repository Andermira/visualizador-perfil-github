const BASE_URL = "https://api.github.com";

/**
 * Módulo responsável pela comunicação com a API do GitHub
 */
export const githubApi = {
    /**
     * Busca os dados de um usuário do GitHub
     * @param {string} userName - Nome do usuário do GitHub
     * @returns {Promise<Object>} Dados do usuário
     * @throws {Error} Lança erro se o usuário não for encontrado ou houver problema na requisição
     */
    async getUser(userName) {
        try {
            const response = await fetch(`${BASE_URL}/users/${userName}`);

            if (!response.ok) {
                throw new Error("Usuário não encontrado");
            }

            const userData = await response.json();
            return userData;
        } catch (error) {
            throw error;
        }
    }
};

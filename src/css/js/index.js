import { githubApi } from './githubApi.js';
import { profileView } from './profileView.js';

/**
 * Classe principal da aplicação
 * Responsável por orquestrar a busca e exibição de perfis do GitHub
 */
class App {
    constructor() {
        this.inputSearch = document.getElementById("input-search");
        this.btnSearch = document.getElementById("btn-search");
        this.profileResults = document.querySelector(".profile-results");

        this.init();
    }

    /**
     * Inicializa os event listeners da aplicação
     */
    init() {
        this.btnSearch.addEventListener("click", () => this.handleSearch());
        this.inputSearch.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                this.handleSearch();
            }
        });
    }

    /**
     * Gerencia a busca do perfil do usuário
     */
    async handleSearch() {
        const userName = this.inputSearch.value.trim();

        if (!userName) {
            profileView.showError("Por favor, digite um nome de usuário do GitHub.");
            profileView.clear(this.profileResults);
            return;
        }

        try {
            // Exibir loading
            profileView.renderLoading(this.profileResults);

            // Buscar dados do usuário
            const userData = await githubApi.getUser(userName);
            console.log(userData);

            // Renderizar perfil
            profileView.renderProfile(this.profileResults, userData);
        } catch (error) {
            console.error("Erro ao buscar o perfil do GitHub:", error);

            const errorMessage = error.message === "Usuário não encontrado"
                ? "Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente."
                : "Ocorreu um erro ao buscar o perfil do GitHub. Por favor, tente novamente mais tarde.";

            profileView.showError(errorMessage);
            profileView.clear(this.profileResults);
        }
    }
}

// Inicializa a aplicação quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", () => {
    new App();
});



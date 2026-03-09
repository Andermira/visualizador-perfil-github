/**
 * Módulo responsável pela renderização e visualização do perfil do usuário
 */
export const profileView = {
    /**
     * Renderiza o componente de loading
     * @param {HTMLElement} container - Elemento onde será renderizado o loading
     */
    renderLoading(container) {
        container.innerHTML = `
            <div class="loading">
                <div class="loading-spinner"></div>
                <p class="loading-text">Carregando...</p>
            </div>
        `;
    },

    /**
     * Renderiza o perfil do usuário
     * @param {HTMLElement} container - Elemento onde será renderizado o perfil
     * @param {Object} userData - Dados do usuário do GitHub
     */
    renderProfile(container, userData) {
        container.innerHTML = `
            <div class="profile-card">
                <img src="${userData.avatar_url}" alt="Avatar de ${userData.name || userData.login}" class="profile-avatar">
                <div class="profile-info">
                    <h2>${userData.name || userData.login}</h2>
                    <p>${userData.bio || "Não possui bio cadastrada 😢"}</p>
                </div>
            </div>

            <div class="profile-counters">
                <div class="followers">
                    <h4>👥Seguidores:</h4> 
                    <span>${userData.followers}</span>
                </div>
                <div class="following">
                    <h4>👥Seguindo:</h4>
                    <span>${userData.following}</span>
                </div>
            </div>
        `;
    },

    /**
     * Limpa o container
     * @param {HTMLElement} container - Elemento a ser limpo
     */
    clear(container) {
        container.innerHTML = "";
    },

    /**
     * Exibe uma mensagem de erro
     * @param {string} message - Mensagem de erro a ser exibida
     */
    showError(message) {
        alert(message);
    }
};

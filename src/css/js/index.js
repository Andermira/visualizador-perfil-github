const inputSearch = document.getElementById("input-search");
const btnSearch = document.getElementById("btn-search");
const profileResults = document.querySelector(".profile-results");

const BASE_URL = "https://api.github.com";

btnSearch.addEventListener("click", async () => {
    const userName = inputSearch.value;
    if (userName) {
        // Mostrar loading
        profileResults.innerHTML = `
            <div class="loading">
                <div class="loading-spinner"></div>
                <p class="loading-text">Carregando...</p>
            </div>
        `;


        try {
            // Aqui você pode adicionar a lógica para buscar o perfil do GitHub usando a API
            const response = await fetch(`${BASE_URL}/users/${userName}`)

            if (!response.ok) {
                alert("Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.");
                profileResults.innerHTML = "";
                return;
            }

            const userData = await response.json();
            console.log(userData);

            profileResults.innerHTML = `
        <div class="profile-card">
            <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
            <div class="profile-info">
            <h2>${userData.name}</h2>
            <p>${userData.bio || "Não possui bio cadastrada 😢"}</p>
        </div>
        </div>
    `;

        } catch (error) {
            console.error("Erro ao buscar o perfil do GitHub:", error);
            alert("Ocorreu um erro ao buscar o perfil do GitHub. Por favor, tente novamente mais tarde.");
            profileResults.innerHTML = "";
        }

    } else {
        alert("Por favor, digite um nome de usuário do GitHub.");
        profileResults.innerHTML = "";
    }
});



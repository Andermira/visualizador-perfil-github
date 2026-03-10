# 🔍 Visualizador de Perfil do GitHub

Uma aplicação web interativa que permite visualizar perfis do GitHub de forma elegante e intuitiva, exibindo informações detalhadas sobre usuários e seus repositórios.

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como uma aplicação para consumir a API pública do GitHub e exibir dados de perfis de usuários. Com uma interface limpa e responsiva, o usuário pode buscar qualquer perfil do GitHub e visualizar informações relevantes de forma organizada.

## ✨ Funcionalidades

- 🔎 **Busca de Usuários**: Digite o nome de usuário do GitHub e obtenha os dados do perfil
- 👤 **Informações do Perfil**: Visualize avatar, nome e biografia do usuário
- 📊 **Estatísticas Sociais**: Veja o número de seguidores e pessoas seguidas
- 📦 **Repositórios**: Lista os 10 repositórios mais recentes do usuário
- ⭐ **Detalhes dos Repositórios**: Visualize stars, forks, watchers e linguagem de programação
- 📱 **Design Responsivo**: Interface adaptável para diferentes dispositivos
- ⌨️ **Atalhos de Teclado**: Pressione Enter para buscar
- 🎨 **Animações Suaves**: Experiência visual agradável

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da aplicação
- **CSS3**: Estilização e animações
- **JavaScript (ES6 Modules)**: Lógica da aplicação
- **GitHub API**: Consumo de dados dos perfis
- **Devicon**: Ícones para interface

## 📁 Estrutura do Projeto

```
visualizador-perfil-github/
│
├── index.html              # Página principal
├── README.md               # Documentação do projeto
│
└── src/
    └── css/
        ├── reset.css       # Reset de estilos
        ├── styles.css      # Estilos principais
        ├── animations.css  # Animações
        ├── responsive.css  # Responsividade
        │
        └── js/
            ├── index.js         # Arquivo principal JavaScript
            ├── githubApi.js     # Requisições à API do GitHub
            └── profileView.js   # Renderização do perfil
```

## 🚀 Como Usar

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Conexão com internet (para acessar a API do GitHub)

### Instalação e Execução

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/visualizador-perfil-github.git
   ```

2. **Navegue até a pasta do projeto**
   ```bash
   cd visualizador-perfil-github
   ```

3. **Abra o arquivo `index.html` no navegador**
   - Você pode simplesmente dar duplo clique no arquivo
   - Ou usar uma extensão como Live Server no VS Code
   - Ou executar um servidor local:
     ```bash
     # Com Python 3
     python -m http.server 8000
     
     # Com Node.js (http-server)
     npx http-server
     ```

4. **Digite um nome de usuário do GitHub e clique em "Buscar"**

## 💡 Como Funciona

### Arquitetura

O projeto utiliza uma arquitetura modular com separação de responsabilidades:

- **`index.js`**: Gerencia eventos de interface e orquestra as chamadas
- **`githubApi.js`**: Responsável pelas requisições HTTP à API do GitHub
- **`profileView.js`**: Cuida da renderização dinâmica dos dados na interface

### Fluxo da Aplicação

1. Usuário digita um nome de usuário do GitHub
2. Ao clicar em "Buscar" ou pressionar Enter, a aplicação:
   - Valida se o campo não está vazio
   - Exibe mensagem de "Carregando..."
   - Faz requisição para buscar dados do usuário
   - Faz requisição para buscar os repositórios
   - Renderiza as informações na tela
3. Em caso de erro (usuário não encontrado), exibe mensagem de alerta

### API do GitHub

A aplicação consome os seguintes endpoints da API pública do GitHub:

- `GET https://api.github.com/users/{username}` - Dados do usuário
- `GET https://api.github.com/users/{username}/repos?per_page=10&sort=created` - Repositórios

## 🎨 Recursos Visuais

- **Animações CSS**: Transições suaves e efeitos hover
- **Layout Responsivo**: Adapta-se a telas de diferentes tamanhos
- **Cards Interativos**: Efeitos visuais ao passar o mouse
- **Ícones Modernos**: Uso de emojis e devicon para melhor UX

## 🔄 Possíveis Melhorias Futuras

- [ ] Paginação para visualizar mais repositórios
- [ ] Filtros para repositórios (por linguagem, stars, etc.)
- [ ] Cache de requisições para melhor performance
- [ ] Modo escuro/claro
- [ ] Gráficos de atividade do usuário
- [ ] Comparação entre perfis
- [ ] Exportação de dados em PDF

## 📝 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e distribuir.

## 👨‍💻 Autor

Desenvolvido como projeto de estudo para prática de consumo de APIs e manipulação do DOM.

---

⭐ Se você gostou deste projeto, deixe uma estrela no repositório!
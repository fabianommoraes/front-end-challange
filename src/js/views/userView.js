import { elements } from "./base";

export const getInput = () => elements.userFormInput.value;

export const clearInput = () => {
  elements.userFormInput.value = "";
};

export const clearUserData = () => {
  elements.userData.innerHTML = "";
};

export const clearUserRepos = () => {
  elements.userRepos.style.visibility = "hidden";
  elements.userReposList.innerHTML = "";
};

export const renderUserData = (data) => {
  const markup = `
    <a href="${data.html_url}" target="_blank" rel="noopener noreferrer" class="user-data__avatar">
        <img src="${data.avatar_url}" alt="${data.name}">
        <span> VISITAR PERFIL </span>
    </a>

    <div class="user-data__col">
        <div class="user-data__info">
            <div> REPOSITÓRIOS: ${data.public_repos}</div>
            <div> SEGUIDORES: ${data.followers}</div>
            <div> SEGUINDO: ${data.following}</div>
        </div>
        <div class="user-data__row">
            <button class="user-data__repos-button"> VER REPOSITÓRIOS </button>
            <button class="user-data__favorites-button"> VER FAVORITOS </button>
        </div>
    </div>
    `;
  elements.userData.insertAdjacentHTML("afterbegin", markup);
};

export const renderUserRepos = (repos) => {
  const reposMarkup = repos.length > 0 ? repos.map(renderRepo).join("") : `<div> Sem repositórios :( </div>`;
  const markup = `
    <div class="user-repos">
        <h2>LISTA DE REPOSITÓRIOS</h2>
        <ul class="user-repos__list">
            ${reposMarkup}
        </ul>
    </div>
    `;
  elements.userContainer.insertAdjacentHTML("beforeend", markup);
};

const renderRepo = (repo) => `<li> <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">${repo.name}</a> </li>`;

export const renderUserFavorites = (favorites) => {
  const favoritesMarkup = favorites.length > 0 ? favorites.map(renderRepo).join("") : `<div> Sem repositórios :( </div>`;
  const markup = `
    <div class="user-favorites">
        <h2>REPOSITÓRIOS FAVORITOS</h2>
        <ul class="user-favorites__list">
            ${favoritesMarkup}
        </ul>
    </div>
  `;
  elements.userContainer.insertAdjacentHTML("beforeend", markup);
};

export const clearFavorites = () => {
  const fav = document.querySelector(".user-favorites");
  if (fav) fav.parentElement.removeChild(fav);
};

export const clearRepos = () => {
  const repos = document.querySelector(".user-repos");
  if (repos) repos.parentElement.removeChild(repos);
};

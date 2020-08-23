export const elements = {
  userForm: document.querySelector(".user-form"),
  userFormInput: document.querySelector(".user-form__input"),
  userContainer: document.querySelector(".user-container"),
  userData: document.querySelector(".user-data"),
  userRepos: document.querySelector(".user-repos"),
  userReposList: document.querySelector(".user-repos__list"),
  userFavorites: document.querySelector(".user-favorites"),
  userFavoritesList: document.querySelector(".user-favorites__list"),

  hamburger: document.querySelector(".hamburger"),
  backdrop: document.querySelector(".backdrop"),

  sideDrawer: document.querySelector(".sidedrawer"),
  sideDrawerCloseButton: document.querySelector(".sidedrawer__close-button"),
  sideDrawerLinks: document.querySelectorAll(".sidedrawer__link"),

  loader: document.querySelector(".loader"),
  errorMessage: document.querySelector(".error-message"),
};

export const showSideDrawer = () => {
  elements.backdrop.style.display = "block";
  elements.sideDrawer.style.width = "75%";
};

export const hideSideDrawer = () => {
  elements.backdrop.style.display = "none";
  elements.sideDrawer.style.width = "0";
};

export const scrollNavBar = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.background = "#333";
  } else {
    document.getElementById("navbar").style.background = "transparent";
  }
};

export const renderLoader = () => {
  elements.userContainer.style.display = "flex";
  const loader = `<div class="loader"></div>`;
  elements.userContainer.insertAdjacentHTML("beforeend", loader);
};

export const clearLoader = () => {
  const loader = document.querySelector(".loader");
  if (loader) loader.parentElement.removeChild(loader);
};

export const showErrorMessage = () => {
  elements.errorMessage.style.display = "block";
};

export const hideErrorMessage = () => {
  elements.errorMessage.style.display = "none";
};

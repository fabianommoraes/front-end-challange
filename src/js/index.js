import User from "./models/User";
import * as userView from "./views/userView";
import * as ui from "./views/base";
import "normalize.css";
import "../css/styles.scss";

/** Global state
 * user: {
 *  repos: {},
 *  favorites: {},
 * }
 */
const state = {};

/**
 *  USER CONTROLLER
 */
const fetchUserData = async () => {
  const query = userView.getInput();

  if (query) {
    state.user = new User(query);

    ui.renderLoader();
    ui.hideErrorMessage();

    userView.clearInput();
    userView.clearUserData();
    userView.clearRepos();
    userView.clearFavorites();

    try {
      await state.user.getUser();
      ui.clearLoader();
      userView.renderUserData(state.user.data);
    } catch (err) {
      ui.showErrorMessage();
    }
  }
};

const fetchUserRepos = async () => {
  ui.renderLoader();
  ui.hideErrorMessage();

  try {
    await state.user.getRepos();
    userView.clearFavorites();
    userView.clearRepos();
    userView.renderUserRepos(state.user.repos);
    ui.clearLoader();
  } catch (err) {
    ui.showErrorMessage();
  }
};

const fetchUserFavorites = async () => {
  ui.renderLoader();
  ui.hideErrorMessage();

  try {
    await state.user.getFavoriteRepos();
    userView.clearFavorites();
    userView.clearRepos();
    userView.renderUserFavorites(state.user.favorites);
    ui.clearLoader();
  } catch (err) {
    ui.showErrorMessage();
  }
};

ui.elements.userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchUserData();
});

ui.elements.userData.addEventListener("click", (e) => {
  const reposButton = e.target.closest(".user-data__repos-button");
  if (reposButton) {
    fetchUserRepos();
  }
  const favoritesButton = e.target.closest(".user-data__favorites-button");
  if (favoritesButton) {
    fetchUserFavorites();
  }
});
/**
 *
 */


 /**
 *  UI EVENTS
 */
ui.elements.hamburger.addEventListener("click", (e) => {
  ui.showSideDrawer();
});
ui.elements.backdrop.addEventListener("click", (e) => {
  ui.hideSideDrawer();
});
ui.elements.sideDrawerCloseButton.addEventListener("click", (e) => {
  ui.hideSideDrawer();
});
for (const link of ui.elements.sideDrawerLinks) {
  link.addEventListener("click", (e) => {
    ui.hideSideDrawer();
  });
}
window.onscroll = function () {
  ui.scrollNavBar();
};
 /**
 * 
 */
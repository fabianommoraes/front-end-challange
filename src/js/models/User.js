import axios from "axios";

class User {
  constructor(query) {
    this.query = query;
  }

  async getUser() {
    try {
      const res = await axios(`https://api.github.com/users/${this.query}`);
      this.data = res.data;
    } catch (error) {}
  }

  async getRepos() {
    try {
      const res = await axios(this.data.repos_url);
      this.repos = res.data;
    } catch (error) {}
  }

  async getFavoriteRepos() {
    if (!this.repos) {
      await this.getRepos();
    }
    this.favorites = [...this.repos].sort(sortByStar).splice(0, 5);
  }
}

export default User;

const sortByStar = (a, b) => (a.stargazers_count > b.stargazers_count ? -1 : a.stargazers_count < b.stargazers_count ? 1 : 0);
